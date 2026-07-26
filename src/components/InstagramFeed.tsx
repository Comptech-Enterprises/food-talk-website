import Image from "next/image";
import { audience, instagram } from "@/lib/content";
import { getInstagramMedia, getInstagramProfile } from "@/lib/instagram";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const platformCards = [
  {
    key: "Instagram",
    color: "#E1306C",
    floatDelay: "0s",
    icon: (
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="ig-hero" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-hero)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.5" stroke="url(#ig-hero)" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-hero)" />
      </svg>
    ),
    glowColor: "rgba(225, 48, 108, 0.4)",
    ringColor: "rgba(225, 48, 108, 0.15)",
  },
  {
    key: "YouTube",
    color: "#FF0000",
    floatDelay: "0.6s",
    icon: (
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
        <rect x="2" y="4.5" width="20" height="15" rx="4" stroke="#FF0000" strokeWidth="1.5" />
        <polygon points="10 8.5 16 12 10 15.5" fill="#FF0000" />
      </svg>
    ),
    glowColor: "rgba(255, 0, 0, 0.35)",
    ringColor: "rgba(255, 0, 0, 0.12)",
  },
  {
    key: "Monthly reach",
    color: "var(--accent)",
    floatDelay: "1.2s",
    icon: (
      <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    glowColor: "rgba(232, 178, 58, 0.35)",
    ringColor: "rgba(232, 178, 58, 0.12)",
  },
];

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

        {/* Platform cards — large icons as hero */}
        <dl className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3">
          {platformCards.map((p, i) => {
            const channel = channels.find((c) => c.platform === p.key);
            if (!channel) return null;
            return (
              <Reveal key={p.key} delay={100 + i * 120} className="h-full">
                <div
                  className="platform-card group relative flex h-full flex-col items-center rounded-3xl border border-line bg-bg-card px-6 pb-8 pt-10 text-center transition-all duration-500 hover:border-line-strong hover:shadow-2xl hover:shadow-black/40 overflow-hidden sm:px-8 sm:pt-14 sm:pb-10"
                  style={{ "--float-delay": p.floatDelay } as React.CSSProperties}
                >
                  {/* background glow */}
                  <div
                    aria-hidden
                    className="platform-glow pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full blur-3xl sm:h-36 sm:w-36"
                    style={{ background: p.glowColor }}
                  />

                  {/* spinning dashed ring */}
                  <div
                    aria-hidden
                    className="platform-ring pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full border border-dashed sm:h-40 sm:w-40"
                    style={{ borderColor: p.ringColor }}
                  />

                  {/* large floating icon */}
                  <div className="platform-icon-wrap relative z-10 mb-6 h-16 w-16 sm:mb-8 sm:h-20 sm:w-20 transition-transform duration-500 group-hover:scale-110">
                    {p.icon}
                  </div>

                  {/* stat with count-up */}
                  <dt className="relative z-10 display text-3xl sm:text-4xl lg:text-[2.75rem]">
                    <CountUp value={channel.value} />
                  </dt>
                  <dd className="relative z-10 mt-3 text-xs leading-snug text-muted">
                    <span className="block text-sm font-semibold text-fg">
                      {channel.platform}
                    </span>
                    {channel.label}
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>

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
