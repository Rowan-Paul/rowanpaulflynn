/**
 * Orchestrates the "From the atmosphere" feed: crawl the repo, keep activity,
 * sort newest-first, take the top N, and normalize each raw record into a typed
 * ActivityItem the UI can render. Known lexicons (Bluesky posts, OpnShelf media)
 * become bespoke item kinds; everything else becomes a generic item.
 */
import {
  ACTOR_DID,
  describeRepo,
  getActivityTime,
  getRecord,
  isActivityCollection,
  listRecords,
  resolveHandle,
  resolvePds,
  rkeyOf,
  type RepoRecord,
} from "@/lib/atproto";
import { getMovie, getTvEpisodeName, getTvShow } from "@/lib/tmdb";

const OPNSHELF_URL = "https://opnshelf.xyz/@rowanpaulflynn.dev";

export type BskyImage = { url: string; alt: string };
export type BskyExternal = { uri: string; title: string; host: string };

export type ActivityItem =
  | {
      kind: "bsky-post";
      time: number;
      app: string;
      href: string;
      text: string;
      images: BskyImage[];
      external: BskyExternal | null;
    }
  | {
      kind: "opnshelf-media";
      time: number;
      app: string;
      href: string;
      action: string;
      title: string;
      subtitle: string | null;
      posterUrl: string | null;
    }
  | {
      kind: "generic";
      time: number;
      app: string;
      href: string | null;
      label: string;
      title: string | null;
      body: string | null;
    };

// ---------------------------------------------------------------------------
// Safe accessors for untyped record values
// ---------------------------------------------------------------------------

function str(v: Record<string, unknown>, key: string): string | null {
  const x = v[key];
  return typeof x === "string" ? x : null;
}

function num(v: Record<string, unknown>, key: string): number | null {
  const x = v[key];
  return typeof x === "number" ? x : null;
}

function obj(
  v: Record<string, unknown>,
  key: string,
): Record<string, unknown> | null {
  const x = v[key];
  return x !== null && typeof x === "object"
    ? (x as Record<string, unknown>)
    : null;
}

function safeHost(uri: string): string {
  try {
    return new URL(uri).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function clamp(text: string | null, max = 220): string | null {
  if (!text) return null;
  const trimmed = text.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max).trimEnd()}…` : trimmed;
}

// ---------------------------------------------------------------------------
// App + collection labelling
// ---------------------------------------------------------------------------

const APP_LABELS: Record<string, string> = {
  "app.bsky": "Bluesky",
  "xyz.opnshelf": "OpnShelf",
  "sh.tangled": "Tangled",
  "garden.goals": "Goals",
  "site.standard": "Standard Sites",
  "dev.npmx": "npmx",
};

function appLabel(nsid: string): string {
  const segs = nsid.split(".");
  const authority = segs.slice(0, 2).join(".");
  const known = APP_LABELS[authority];
  if (known) return known;
  const seg = segs[1];
  return seg ? seg.charAt(0).toUpperCase() + seg.slice(1) : nsid;
}

/** Human action line for records without a natural title. */
const ACTION_LABELS: Record<string, string> = {
  "app.bsky.feed.repost": "Reposted a post",
  "sh.tangled.feed.star": "Starred a repo",
  "sh.tangled.feed.reaction": "Reacted to a post",
  "garden.goals.completion": "Completed a goal",
  "garden.goals.goal": "Set a goal",
  "site.standard.document": "Published a document",
  "site.standard.publication": "Created a publication",
  "xyz.opnshelf.list": "Created a list",
  "sh.tangled.repo": "Published a repo",
};

function collectionLabel(nsid: string): string {
  const known = ACTION_LABELS[nsid];
  if (known) return known;
  const last = nsid.split(".").pop() ?? nsid;
  const spaced = last.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function bskyImageUrl(did: string, cid: string): string {
  return `https://cdn.bsky.app/img/feed_thumbnail/plain/${did}/${cid}@jpeg`;
}

function parseAtUri(
  uri: string,
): { did: string; collection: string; rkey: string } | null {
  const m = /^at:\/\/([^/]+)\/([^/]+)\/(.+)$/.exec(uri);
  if (!m) return null;
  const [, did, collection, rkey] = m;
  if (!did || !collection || !rkey) return null;
  return { did, collection, rkey };
}

type TangledEnrichment = {
  label?: string;
  title?: string | null;
  body?: string | null;
  href?: string | null;
};

/**
 * Tangled stars/reactions only carry an at:// URI to someone else's repo or
 * issue. Resolve that subject (cross-repo) into a name/title so the card reads
 * like "Starred @handle/repo" or "Reacted 👍 to an issue" instead of a bare
 * action. Degrades to null on any failure (caller keeps the generic label).
 */
async function enrichTangled(
  nsid: string,
  v: Record<string, unknown>,
): Promise<TangledEnrichment | null> {
  if (nsid === "sh.tangled.feed.star") {
    const subject = v.subject;
    if (typeof subject === "string") {
      const ref = parseAtUri(subject);
      if (!ref) return null;
      try {
        const [repo, handle] = await Promise.all([
          resolvePds(ref.did).then((pds) =>
            getRecord(pds, ref.did, ref.collection, ref.rkey),
          ),
          resolveHandle(ref.did),
        ]);
        const name = repo ? str(repo, "name") : null;
        if (!name)
          return handle ? { label: `Starred @${handle}'s repo` } : null;
        return {
          label: "Starred a repo",
          title: handle ? `@${handle}/${name}` : name,
          body: repo ? clamp(str(repo, "description")) : null,
          href: handle
            ? `https://tangled.sh/@${handle}/${name}`
            : repo
              ? str(repo, "website")
              : null,
        };
      } catch {
        return null;
      }
    }
    // Older subject shape: just a bare { did } reference, no repo name available.
    const subj = obj(v, "subject");
    const sdid = subj ? str(subj, "did") : null;
    if (sdid) {
      const handle = await resolveHandle(sdid);
      if (handle) return { label: `Starred @${handle}'s repo` };
    }
    return null;
  }

  if (nsid === "sh.tangled.feed.reaction") {
    const emoji = str(v, "reaction");
    const subject = str(v, "subject");
    const noun = subject?.includes(".issue")
      ? "an issue"
      : subject?.includes(".pull")
        ? "a pull request"
        : "a post";
    let title: string | null = null;
    if (subject) {
      const ref = parseAtUri(subject);
      if (ref) {
        try {
          const pds = await resolvePds(ref.did);
          const rec = await getRecord(pds, ref.did, ref.collection, ref.rkey);
          title = rec ? (str(rec, "title") ?? str(rec, "text")) : null;
        } catch {
          /* leave title null */
        }
      }
    }
    return {
      label: emoji ? `Reacted ${emoji} to ${noun}` : `Reacted to ${noun}`,
      title: clamp(title, 120),
    };
  }

  return null;
}

// ---------------------------------------------------------------------------
// Normalization context (intra-repo lookups built from the full record set)
// ---------------------------------------------------------------------------

type NormalizeContext = {
  did: string;
  goalsById: Map<string, string>;
  listsByRkey: Map<string, string>;
  publicationsByUri: Map<string, { url: string; name: string }>;
};

async function toActivityItem(
  nsid: string,
  record: RepoRecord,
  time: number,
  ctx: NormalizeContext,
): Promise<ActivityItem | null> {
  const v = record.value;

  if (nsid === "app.bsky.feed.post") return bskyPost(record, time, ctx);
  if (nsid === "xyz.opnshelf.episode") return opnshelfEpisode(v, time);
  if (nsid === "xyz.opnshelf.list.item") return opnshelfListItem(v, time, ctx);

  // Generic fallback (also handles known-but-not-bespoke types).
  let title = str(v, "name") ?? str(v, "title");
  let body = str(v, "description") ?? str(v, "text");
  let label = collectionLabel(nsid);
  let href: string | null = null;

  if (nsid === "garden.goals.completion") {
    const goalId = str(v, "goalId");
    const name = goalId ? ctx.goalsById.get(goalId) : undefined;
    if (name) title = name;
  }

  if (nsid === "site.standard.document") {
    if (!body) {
      const content = obj(v, "content");
      const text = content ? obj(content, "text") : null;
      body = text ? str(text, "markdown") : null;
    }
    const siteUri = str(v, "site");
    const path = str(v, "path");
    const pub = siteUri ? ctx.publicationsByUri.get(siteUri) : undefined;
    if (pub && path) href = `${pub.url.replace(/\/$/, "")}/${path}`;
  }

  if (nsid === "site.standard.publication") href = str(v, "url");
  if (nsid === "sh.tangled.repo") href = str(v, "website");

  if (nsid === "sh.tangled.feed.star" || nsid === "sh.tangled.feed.reaction") {
    const enriched = await enrichTangled(nsid, v);
    if (enriched) {
      if (enriched.label) label = enriched.label;
      if (enriched.title !== undefined) title = enriched.title;
      if (enriched.body !== undefined) body = enriched.body;
      if (enriched.href !== undefined) href = enriched.href;
    }
  }

  return {
    kind: "generic",
    time,
    app: appLabel(nsid),
    href,
    label,
    title,
    body: clamp(body),
  };
}

function bskyPost(
  record: RepoRecord,
  time: number,
  ctx: NormalizeContext,
): ActivityItem | null {
  const v = record.value;
  const text = str(v, "text") ?? "";

  let images: BskyImage[] = [];
  let external: BskyExternal | null = null;

  const embed = obj(v, "embed");
  const media =
    embed && str(embed, "$type") === "app.bsky.embed.recordWithMedia"
      ? obj(embed, "media")
      : embed;
  const mediaType = media ? str(media, "$type") : null;

  if (media && mediaType === "app.bsky.embed.images") {
    const raw = media.images;
    if (Array.isArray(raw)) {
      images = raw
        .flatMap((entry): BskyImage[] => {
          if (!entry || typeof entry !== "object") return [];
          const io = entry as Record<string, unknown>;
          const image = obj(io, "image");
          const ref = image ? obj(image, "ref") : null;
          const link = ref ? str(ref, "$link") : null;
          if (!link) return [];
          return [
            { url: bskyImageUrl(ctx.did, link), alt: str(io, "alt") ?? "" },
          ];
        })
        .slice(0, 4);
    }
  } else if (media && mediaType === "app.bsky.embed.external") {
    const ext = obj(media, "external");
    const uri = ext ? str(ext, "uri") : null;
    if (ext && uri) {
      external = { uri, title: str(ext, "title") ?? uri, host: safeHost(uri) };
    }
  }

  if (!text && images.length === 0 && !external) return null;

  return {
    kind: "bsky-post",
    time,
    app: "Bluesky",
    href: `https://bsky.app/profile/${ctx.did}/post/${rkeyOf(record.uri)}`,
    text,
    images,
    external,
  };
}

async function opnshelfEpisode(
  v: Record<string, unknown>,
  time: number,
): Promise<ActivityItem> {
  const showId = str(v, "showId");
  const season = num(v, "seasonNumber");
  const episode = num(v, "episodeNumber");
  const sxe =
    season !== null && episode !== null ? `S${season}E${episode}` : "";

  let title = "an episode";
  let subtitle: string | null = sxe || null;
  let posterUrl: string | null = null;

  if (showId) {
    const show = await getTvShow(showId);
    if (show) {
      title = show.title;
      posterUrl = show.posterUrl;
      if (season !== null && episode !== null) {
        const epName = await getTvEpisodeName(showId, season, episode);
        subtitle = epName ? `${sxe} · ${epName}` : sxe;
      }
    }
  }

  return {
    kind: "opnshelf-media",
    time,
    app: "OpnShelf",
    href: OPNSHELF_URL,
    action: "Watched",
    title,
    subtitle,
    posterUrl,
  };
}

async function opnshelfListItem(
  v: Record<string, unknown>,
  time: number,
  ctx: NormalizeContext,
): Promise<ActivityItem> {
  const mediaId = str(v, "mediaId");
  const mediaType = str(v, "mediaType");
  const listRkey = str(v, "listRkey");
  const listName = listRkey ? ctx.listsByRkey.get(listRkey) : undefined;

  let title =
    mediaType === "movie"
      ? "a movie"
      : mediaType === "tv"
        ? "a show"
        : "an item";
  let posterUrl: string | null = null;

  if (mediaId && mediaType === "movie") {
    const movie = await getMovie(mediaId);
    if (movie) {
      title = movie.title;
      posterUrl = movie.posterUrl;
    }
  } else if (mediaId && mediaType === "tv") {
    const show = await getTvShow(mediaId);
    if (show) {
      title = show.title;
      posterUrl = show.posterUrl;
    }
  }

  return {
    kind: "opnshelf-media",
    time,
    app: "OpnShelf",
    href: OPNSHELF_URL,
    action: "Added",
    title,
    subtitle: listName ? `to ${listName}` : null,
    posterUrl,
  };
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

export async function fetchAtmosphereActivity(
  limit = 18,
): Promise<ActivityItem[]> {
  const did = ACTOR_DID;
  const pds = await resolvePds(did);
  const collections = (await describeRepo(pds, did)).filter(
    isActivityCollection,
  );

  const perCollection = await Promise.all(
    collections.map(async (collection) => {
      try {
        return {
          collection,
          records: await listRecords(pds, did, collection, 15),
        };
      } catch {
        return { collection, records: [] as RepoRecord[] };
      }
    }),
  );

  // Build intra-repo lookups from the full result set (so a referenced goal /
  // list / publication resolves even if it isn't itself in the top N).
  const goalsById = new Map<string, string>();
  const listsByRkey = new Map<string, string>();
  const publicationsByUri = new Map<string, { url: string; name: string }>();

  for (const { collection, records } of perCollection) {
    if (collection === "garden.goals.goal") {
      for (const r of records) {
        const id = str(r.value, "goalId");
        const name = str(r.value, "name");
        if (id && name) goalsById.set(id, name);
      }
    } else if (collection === "xyz.opnshelf.list") {
      for (const r of records) {
        const name = str(r.value, "name");
        if (name) listsByRkey.set(rkeyOf(r.uri), name);
      }
    } else if (collection === "site.standard.publication") {
      for (const r of records) {
        const url = str(r.value, "url");
        if (url)
          publicationsByUri.set(r.uri, {
            url,
            name: str(r.value, "name") ?? "",
          });
      }
    }
  }

  const timed = perCollection
    .flatMap(({ collection, records }) =>
      records.map((record) => ({ nsid: collection, record })),
    )
    .flatMap(({ nsid, record }) => {
      const time = getActivityTime(record.value);
      return time !== null ? [{ nsid, record, time }] : [];
    })
    .sort((a, b) => b.time - a.time)
    .slice(0, limit);

  const ctx: NormalizeContext = {
    did,
    goalsById,
    listsByRkey,
    publicationsByUri,
  };
  const items = await Promise.all(
    timed.map(({ nsid, record, time }) =>
      toActivityItem(nsid, record, time, ctx),
    ),
  );

  return items.filter((item): item is ActivityItem => item !== null);
}
