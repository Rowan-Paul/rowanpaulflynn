/**
 * Minimal AT Protocol repo reader. Resolves the owner's DID to their PDS and
 * lists records straight from the repo — no per-app AppViews. See
 * docs/adr/0001-generic-repo-crawl-hybrid-render.md.
 */

/** The site owner's AT Protocol identity. Public and stable. */
export const ACTOR_DID = "did:plc:p3qed3bkmcjrmf5msnuwjdtp";

const PLC_DIRECTORY = "https://plc.directory";

/** Revalidate window for atproto reads (30 min), matching the section's ISR. */
const REVALIDATE = 1800;

export type RepoRecord = {
  uri: string;
  cid: string;
  value: Record<string, unknown>;
};

type DidDocument = {
  service?: { id: string; type: string; serviceEndpoint: string }[];
  alsoKnownAs?: string[];
};

/** Resolve a DID document. Supports did:plc (via plc.directory) and did:web. */
async function resolveDidDoc(did: string): Promise<DidDocument> {
  let url: string;
  if (did.startsWith("did:plc:")) {
    url = `${PLC_DIRECTORY}/${did}`;
  } else if (did.startsWith("did:web:")) {
    const rest = did.slice("did:web:".length).split(":");
    const host = decodeURIComponent(rest[0] ?? "");
    const path =
      rest.length > 1
        ? `${rest.slice(1).map(decodeURIComponent).join("/")}/did.json`
        : ".well-known/did.json";
    url = `https://${host}/${path}`;
  } else {
    throw new Error(`Unsupported DID method: ${did}`);
  }
  const res = await fetch(url, { next: { revalidate: REVALIDATE } });
  if (!res.ok) throw new Error(`DID resolve failed: ${res.status}`);
  return (await res.json()) as DidDocument;
}

/** Resolve a DID to its Personal Data Server endpoint. */
export async function resolvePds(did: string): Promise<string> {
  const doc = await resolveDidDoc(did);
  const pds = doc.service?.find(
    (s) => s.type === "AtprotoPersonalDataServer",
  )?.serviceEndpoint;
  if (!pds) throw new Error("No PDS endpoint in DID document");
  return pds;
}

/** Resolve a DID to its primary handle (alsoKnownAs), without the at:// prefix. */
export async function resolveHandle(did: string): Promise<string | null> {
  try {
    const doc = await resolveDidDoc(did);
    const aka = doc.alsoKnownAs?.find((a) => a.startsWith("at://"));
    return aka ? aka.replace(/^at:\/\//, "") : null;
  } catch {
    return null;
  }
}

/** List every collection (lexicon NSID) present in a repo. */
export async function describeRepo(
  pds: string,
  did: string,
): Promise<string[]> {
  const url = `${pds}/xrpc/com.atproto.repo.describeRepo?repo=${encodeURIComponent(did)}`;
  const res = await fetch(url, { next: { revalidate: REVALIDATE } });
  if (!res.ok) throw new Error(`describeRepo failed: ${res.status}`);
  const data = (await res.json()) as { collections?: string[] };
  return data.collections ?? [];
}

/** List recent records in a collection (newest first, by record key). */
export async function listRecords(
  pds: string,
  did: string,
  collection: string,
  limit = 15,
): Promise<RepoRecord[]> {
  const url =
    `${pds}/xrpc/com.atproto.repo.listRecords` +
    `?repo=${encodeURIComponent(did)}` +
    `&collection=${encodeURIComponent(collection)}` +
    `&limit=${limit}`;
  const res = await fetch(url, { next: { revalidate: REVALIDATE } });
  if (!res.ok)
    throw new Error(`listRecords ${collection} failed: ${res.status}`);
  const data = (await res.json()) as { records?: RepoRecord[] };
  return data.records ?? [];
}

/** Fetch a single record's value from any repo, or null if it can't be loaded. */
export async function getRecord(
  pds: string,
  repo: string,
  collection: string,
  rkey: string,
): Promise<Record<string, unknown> | null> {
  const url =
    `${pds}/xrpc/com.atproto.repo.getRecord` +
    `?repo=${encodeURIComponent(repo)}` +
    `&collection=${encodeURIComponent(collection)}` +
    `&rkey=${encodeURIComponent(rkey)}`;
  const res = await fetch(url, { next: { revalidate: REVALIDATE } });
  if (!res.ok) return null;
  const data = (await res.json()) as { value?: Record<string, unknown> };
  return data.value ?? null;
}

/** Extract the record key (last path segment) from an at:// URI. */
export function rkeyOf(uri: string): string {
  const parts = uri.split("/");
  return parts[parts.length - 1] ?? "";
}

/**
 * Collections we always treat as activity (content + endorsements). Anything
 * not listed here is admitted only if it passes the heuristic below, so new
 * atproto apps surface automatically on a generic card.
 */
export const ACTIVITY_INCLUDE = new Set<string>([
  "app.bsky.feed.post",
  "app.bsky.feed.repost",
  "xyz.opnshelf.episode",
  "xyz.opnshelf.list",
  "xyz.opnshelf.list.item",
  "garden.goals.goal",
  "garden.goals.completion",
  "sh.tangled.repo",
  "sh.tangled.feed.star",
  "sh.tangled.feed.reaction",
  "site.standard.document",
  "site.standard.publication",
]);

/** NSID last-segments that are config/graph noise rather than activity. */
const EXCLUDE_LAST = new Set([
  "profile",
  "follow",
  "block",
  "like",
  "publickey",
  "key",
]);

/**
 * Is this collection timeline-worthy activity? Known content/endorsement
 * collections always pass; unknown ones pass unless they look like
 * config/social-graph records (profiles, follows, blocks, likes, keys).
 */
export function isActivityCollection(nsid: string): boolean {
  if (ACTIVITY_INCLUDE.has(nsid)) return true;
  const segs = nsid.split(".");
  if (segs.includes("graph") || segs.includes("profile")) return false;
  const last = (segs[segs.length - 1] ?? "").toLowerCase();
  if (EXCLUDE_LAST.has(last)) return false;
  return true;
}

/**
 * The "activity time" of a record. Field names vary across lexicons, so we try
 * a priority list and fall back to null (caller drops timeless records).
 */
const TIME_FIELDS = [
  "watchedAt",
  "completedAt",
  "createdAt",
  "publishedAt",
  "indexedAt",
  "updatedAt",
] as const;

export function getActivityTime(value: Record<string, unknown>): number | null {
  for (const field of TIME_FIELDS) {
    const raw = value[field];
    if (typeof raw === "string") {
      const t = Date.parse(raw);
      if (!Number.isNaN(t)) return t;
    }
  }
  return null;
}
