/**
 * TMDB v3 client used to enrich OpnShelf activity. Mirrors OpnShelf's own auth
 * (api_key query param, https://api.themoviedb.org/3, image.tmdb.org images).
 * Every function degrades to null when the key is absent or TMDB errors, so the
 * caller can fall back to a plain label.
 */
import { env } from "@/env";

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGE = "https://image.tmdb.org/t/p";

/** TMDB metadata is stable; cache a day. */
const REVALIDATE = 86_400;

export type TmdbMedia = { title: string; posterUrl: string | null };

export function tmdbPoster(
  path: string | null | undefined,
  size = "w185",
): string | null {
  return path ? `${TMDB_IMAGE}/${size}${path}` : null;
}

async function tmdbGet<T>(path: string): Promise<T | null> {
  const key = env.TMDB_API_KEY;
  if (!key) return null;
  try {
    const sep = path.includes("?") ? "&" : "?";
    const res = await fetch(`${TMDB_BASE}${path}${sep}api_key=${key}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getTvShow(id: string): Promise<TmdbMedia | null> {
  const data = await tmdbGet<{ name?: string; poster_path?: string | null }>(
    `/tv/${id}`,
  );
  if (!data?.name) return null;
  return { title: data.name, posterUrl: tmdbPoster(data.poster_path) };
}

export async function getMovie(id: string): Promise<TmdbMedia | null> {
  const data = await tmdbGet<{ title?: string; poster_path?: string | null }>(
    `/movie/${id}`,
  );
  if (!data?.title) return null;
  return { title: data.title, posterUrl: tmdbPoster(data.poster_path) };
}

export async function getTvEpisodeName(
  showId: string,
  season: number,
  episode: number,
): Promise<string | null> {
  const data = await tmdbGet<{ name?: string }>(
    `/tv/${showId}/season/${season}/episode/${episode}`,
  );
  return data?.name ?? null;
}
