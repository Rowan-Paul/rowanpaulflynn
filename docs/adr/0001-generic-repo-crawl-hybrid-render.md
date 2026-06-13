# Read atmosphere activity by crawling the repo, render via a hybrid card registry

The "From the atmosphere" section reads the owner's activity by crawling their AT
Protocol repo directly — resolve DID → PDS, then `describeRepo` to list
collections and `listRecords` across the ones that count as activity — rather than
calling per-app AppViews (e.g. the Bluesky API). Records render through a registry
that maps known lexicons to hand-tuned cards and falls back to a generic card for
everything else, so apps the owner joins later appear automatically.

## Considered options

- **Per-app AppViews** (Bluesky API, plus an API per other app): richer, hydrated,
  pre-sorted data and less rendering code — but Bluesky-centric, requires a new
  integration for every app, and gives nothing for apps without a public AppView
  (OpnShelf, Tangled, garden.goals, site.standard, future apps).
- **Generic repo crawl + hybrid render** (chosen): one code path covers every
  current and future collection; new apps need zero code to show up. Cost: we work
  from raw records, so anything ID-only needs explicit enrichment (see TMDB), and
  we don't get AppView niceties (thread context, hydrated embeds, reply counts).

## Consequences

- A renderer registry keyed by lexicon NSID is the extension point; adding a known
  card is local and optional. The generic card must stay robust — it renders
  unknown, unversioned third-party lexicons.
- Sorting can't rely on a server-assigned index time; the "activity time" is
  derived per record from a priority list of fields (`createdAt`, `watchedAt`,
  `completedAt`, …) with a fallback.
- Endorsements that reference another repo (Tangled stars/reactions point at a
  repo or issue via an `at://` URI) are enriched by resolving that subject
  cross-repo with the same `getRecord` primitive — consistent with "read repos
  directly, no AppView". This pulls in `did:web` resolution and degrades to the
  generic action label on any failure.
- Hard to reverse: this is the section's architecture, not a swappable detail.
