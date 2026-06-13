import Image from "next/image";

import { ACTOR_DID } from "@/lib/atproto";
import { fetchAtmosphereActivity, type ActivityItem } from "@/lib/atmosphere";

export default async function AtmosphereSection() {
  let items: ActivityItem[];
  try {
    items = await fetchAtmosphereActivity(18);
  } catch {
    return null; // fail soft: never show a broken section
  }
  if (items.length === 0) return null;

  const browseUrl = `https://pdsls.dev/at://${ACTOR_DID}`;

  return (
    <section className="mb-20">
      <h2 className="mb-1 text-2xl font-semibold">From the atmosphere</h2>
      <p className="mb-6 text-sm text-[#71717a]">
        Live activity across the AT Protocol
      </p>
      <ul className="flex snap-x gap-4 overflow-x-auto px-1 py-4">
        {items.map((item, i) => (
          <li key={`${item.time}-${i}`} className="w-80 shrink-0 snap-start">
            <ActivityCard item={item} />
          </li>
        ))}
      </ul>
      <a
        href={browseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-[#a1a1aa] transition-colors hover:text-[#00d4ff]"
      >
        Browse my full repo →
      </a>
    </section>
  );
}

function ActivityCard({ item }: Readonly<{ item: ActivityItem }>) {
  switch (item.kind) {
    case "bsky-post":
      return <BskyPostCard item={item} />;
    case "opnshelf-media":
      return <OpnShelfMediaCard item={item} />;
    case "generic":
      return <GenericCard item={item} />;
  }
}

function CardHeader({ app, time }: Readonly<{ app: string; time: number }>) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <span className="glass-pill rounded-full px-3 py-1 text-xs text-[#a1a1aa]">
        {app}
      </span>
      <time className="text-xs text-[#71717a]">{relativeTime(time)}</time>
    </div>
  );
}

function BskyPostCard({
  item,
}: Readonly<{ item: Extract<ActivityItem, { kind: "bsky-post" }> }>) {
  return (
    <article className="glass-card flex h-full flex-col rounded-lg p-5">
      <CardHeader app={item.app} time={item.time} />
      {item.text && (
        <p className="line-clamp-6 text-sm leading-relaxed whitespace-pre-wrap text-[#d4d4d8]">
          {item.text}
        </p>
      )}
      {item.external && (
        <a
          href={item.external.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-3 transition-colors hover:border-[#00d4ff]"
        >
          <p className="line-clamp-1 text-sm font-medium text-[#f5f5f7]">
            {item.external.title}
          </p>
          {item.external.host && (
            <p className="mt-1 text-xs text-[#71717a]">{item.external.host}</p>
          )}
        </a>
      )}
      {item.images.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.images.map((img, i) => (
            <Image
              key={i}
              src={img.url}
              alt={img.alt}
              width={96}
              height={96}
              className="h-24 w-24 rounded-md object-cover"
            />
          ))}
        </div>
      )}
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block pt-3 text-xs text-[#71717a] transition-colors hover:text-[#00d4ff]"
      >
        View on Bluesky ↗
      </a>
    </article>
  );
}

function OpnShelfMediaCard({
  item,
}: Readonly<{ item: Extract<ActivityItem, { kind: "opnshelf-media" }> }>) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group relative block h-full min-h-80 overflow-hidden rounded-lg"
    >
      {item.posterUrl ? (
        <Image
          src={item.posterUrl}
          alt={item.title}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0d0d15] to-[#1b1b2e] text-6xl opacity-50">
          🎬
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
        <span className="glass-pill rounded-full px-3 py-1 text-xs text-[#f5f5f7]">
          {item.app}
        </span>
        <time className="text-xs text-[#d4d4d8]">
          {relativeTime(item.time)}
        </time>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-xs tracking-wide text-[#a1a1aa] uppercase">
          {item.action}
        </p>
        <p className="mt-1 text-lg leading-tight font-semibold text-white transition-colors group-hover:text-[#00d4ff]">
          {item.title}
        </p>
        {item.subtitle && (
          <p className="mt-1 text-sm text-[#d4d4d8]">{item.subtitle}</p>
        )}
      </div>
    </a>
  );
}

function GenericCard({
  item,
}: Readonly<{ item: Extract<ActivityItem, { kind: "generic" }> }>) {
  const Wrapper = item.href ? "a" : "div";
  const linkProps = item.href
    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper
      {...linkProps}
      className={`block h-full rounded-lg p-5 ${item.href ? "project-card group" : "glass-card"}`}
    >
      <CardHeader app={item.app} time={item.time} />
      <p className="text-sm text-[#a1a1aa]">{item.label}</p>
      {item.title && (
        <p
          className={`mt-1 font-medium text-[#f5f5f7] ${item.href ? "transition-colors group-hover:text-[#00d4ff]" : ""}`}
        >
          {item.title}
        </p>
      )}
      {item.body && (
        <p className="mt-1 line-clamp-2 text-sm text-[#71717a]">{item.body}</p>
      )}
    </Wrapper>
  );
}

function relativeTime(ms: number): string {
  const diff = Date.now() - ms;
  const sec = Math.round(diff / 1000);
  if (sec < 60) return "just now";
  const min = Math.round(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.round(hr / 24);
  if (day < 30) return `${day}d ago`;
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
