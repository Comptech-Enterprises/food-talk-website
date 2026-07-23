/**
 * Instagram Graph API (server-only).
 *
 * Requires an Instagram *Business/Creator* account linked to a Facebook Page,
 * plus these environment variables (see .env.local.example):
 *   INSTAGRAM_ACCESS_TOKEN  — long-lived Graph API token
 *   INSTAGRAM_USER_ID       — the IG business account id
 *
 * When the vars are missing (e.g. local dev before setup), every function
 * returns null and the UI falls back to placeholder content.
 */

const BASE = "https://graph.facebook.com/v21.0";
const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IG_ID = process.env.INSTAGRAM_USER_ID;

export type IgProfile = {
  username: string;
  followers: number;
  posts: number;
};

export type IgMedia = {
  id: string;
  caption: string;
  permalink: string;
  image: string;
  isVideo: boolean;
};

type RawMedia = {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

export async function getInstagramProfile(): Promise<IgProfile | null> {
  if (!TOKEN || !IG_ID) return null;
  try {
    const res = await fetch(
      `${BASE}/${IG_ID}?fields=username,followers_count,media_count&access_token=${TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const d = await res.json();
    return {
      username: d.username,
      followers: d.followers_count,
      posts: d.media_count,
    };
  } catch {
    return null;
  }
}

export async function getInstagramMedia(limit = 8): Promise<IgMedia[] | null> {
  if (!TOKEN || !IG_ID) return null;
  try {
    const res = await fetch(
      `${BASE}/${IG_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${limit}&access_token=${TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const d = await res.json();
    return (d.data ?? []).map(
      (m: RawMedia): IgMedia => ({
        id: m.id,
        caption: m.caption ?? "",
        permalink: m.permalink,
        image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        isVideo: m.media_type === "VIDEO",
      })
    );
  } catch {
    return null;
  }
}
