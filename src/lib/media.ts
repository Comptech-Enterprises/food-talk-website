/**
 * Cloudflare R2 Media CDN URL helper
 */
export const R2_DOMAIN =
  process.env.NEXT_PUBLIC_R2_DOMAIN ||
  "https://pub-a6f732adb8214bed92f3d20e103282c4.r2.dev";

export function r2(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${R2_DOMAIN}${clean}`;
}
