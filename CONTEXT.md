# rowanpaulflynn.com

The personal site of Rowan-Paul Flynn. Beyond static intro/projects content, it
surfaces the owner's live presence on the AT Protocol — see the **Atmosphere**
language below.

## Language

### Atmosphere

**Atmosphere**:
The AT Protocol ecosystem as a whole — the open network of apps and personal
repositories that the owner participates in (Bluesky, OpnShelf, Tangled, and
others). The site's live activity section is titled "From the atmosphere".
_Avoid_: "the ATProto network", "the firehose" (that's a specific transport, not the ecosystem).

**Activity**:
A timeline-worthy record the owner authored or endorsed, drawn from their repo
and shown newest-first in the atmosphere section. Excludes configuration and
social-graph records (profiles, follows, blocks, likes, public keys, CV fields).
_Avoid_: "events", "posts" (a post is one kind of activity, not all of it).

**Repo**:
The owner's AT Protocol repository — the full set of records they own, hosted on
their **PDS** and addressed by their **DID**. The repo _is_ the source of truth
for activity; the site reads from it directly.

**Collection**:
A record type within the repo, identified by a lexicon NSID (e.g.
`xyz.opnshelf.episode`, `app.bsky.feed.post`). Each piece of activity belongs to
exactly one collection.
_Avoid_: "table", "feed".

**Endorsement**:
An activity record that expresses approval of someone else's content rather than
content the owner authored — a Bluesky repost, a Tangled star or reaction.
Counted as activity; distinct from **authored content**.

**Known card** / **Generic card**:
Two ways a piece of activity is rendered. A **known card** is a hand-tuned layout
for a recognized collection (Bluesky posts, OpnShelf media). A **generic card** is
the fallback for every other collection — including new apps the owner joins —
showing the human-readable fields, an app badge, and a timestamp.

**Enrichment**:
Turning an ID-only activity record into something human-readable. _Intra-repo_
enrichment joins records within the owner's own repo (a goal completion → the
goal's name). _External_ enrichment calls a third party (an OpnShelf media ID →
title and poster via TMDB).

## Example dialogue

> **Visitor:** What's in the "from the atmosphere" section?
>
> **Owner:** My recent **activity** — anything timeline-worthy I authored or
> endorsed across the **atmosphere**, newest first.
>
> **Visitor:** Where does it come from?
>
> **Owner:** Straight from my **repo** on my **PDS**. Every record lives in a
> **collection**; I keep the content ones and drop profiles, follows and likes.
>
> **Visitor:** So a Bluesky repost counts?
>
> **Owner:** Yes — that's an **endorsement**, still activity. It gets a **known
> card**. If I start using some new app tomorrow, its records show up too, just
> on a **generic card** until I tune one.
>
> **Visitor:** And the "Watched Andor S2E6" line with the poster?
>
> **Owner:** That's **enrichment** — the raw record only has a TMDB id, so the
> site looks the title and poster up at request time.
