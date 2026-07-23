import Image from "next/image";
import { audience, instagram } from "@/lib/content";
import { getInstagramMedia, getInstagramProfile } from "@/lib/instagram";
import Reveal from "./Reveal";

export default async function InstagramFeed() {
  const [profile, media] = await Promise.all([
    getInstagramProfile(),
    getInstagramMedia(8),
  ]);

  const isLive = Boolean(profile && media && media.length);

  const followers = profile?.followers ?? instagram.fallbackFollowers;
  const followersLabel = followers.toLocaleString("en-IN");

  const posts =
    media && media.length
      ? media
      : instagram.fallbackPosts.map((image, i) => ({
          id: `fallback-${i}`,
          caption: "",
          permalink: instagram.url,
          image,
          isVideo: false,
        }));

  // Merge the live follower count into the Instagram channel stat.
  const channels = audience.channels.map((c) =>
    c.platform === "Instagram"
      ? { ...c, value: `${followersLabel}+` }
      : c
  );

  return (
    <section id="audience" className="scroll-mt-24 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{audience.eyebrow}</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            {audience.headline}
          </h2>
          <p className="mt-6 text-lg text-muted">{audience.intro}</p>
        </Reveal>

        {/* Reach breakdown */}
        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {channels.map((c) => (
              <div
                key={c.platform}
                className="rounded-2xl border border-line bg-bg-card p-6"
              >
                <dt className="display text-3xl sm:text-4xl">{c.value}</dt>
                <dd className="mt-2 text-xs leading-snug text-muted">
                  <span className="block font-semibold text-fg">
                    {c.platform}
                  </span>
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Instagram feed */}
        <div className="mt-16">
          <Reveal className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="display text-2xl">@{instagram.handle}</p>
              <p className="text-sm text-muted">
                {followersLabel} followers ·{" "}
                {isLive ? "Live from Instagram" : "Latest from the feed"}
              </p>
            </div>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Follow us
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {posts.map((p) => (
              <a
                key={p.id}
                href={p.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-bg-card"
              >
                <Image
                  src={p.image}
                  alt={p.caption ? p.caption.slice(0, 80) : "Instagram post"}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition-all duration-300 group-hover:bg-bg/50 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-fg" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                {p.isVideo && (
                  <span className="absolute right-2 top-2 text-fg">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <polygon points="7 5 19 12 7 19" />
                    </svg>
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
