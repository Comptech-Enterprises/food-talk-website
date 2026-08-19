import { instagram } from "@/lib/content";
import Reveal from "./Reveal";
import ReelCard from "./ReelCard";
import ReelStrip from "./ReelStrip";

const { reels, url, handle } = instagram;

export default function InstagramPosts() {
  return (
    <section
      aria-label="Instagram reels"
      className="border-t border-line bg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-5">{reels.eyebrow}</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              {reels.headline}
            </h2>
            <p className="mt-6 text-lg text-muted">{reels.intro}</p>
          </Reveal>

          <Reveal delay={80} className="shrink-0 sm:mt-2">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-pink-500/40 px-5 py-2.5 text-sm font-semibold text-pink-500 transition-all hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_24px_rgba(225,48,108,0.2)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
              Follow
            </a>
          </Reveal>
        </div>

        <ReelStrip>
          {reels.items.map((reel, i) => (
            <Reveal
              key={reel.src}
              delay={100 + i * 120}
              className="w-[70%] shrink-0 snap-center sm:h-full sm:w-auto sm:last:col-span-2 sm:last:w-[calc(50%-0.75rem)] sm:last:justify-self-center lg:last:col-span-1 lg:last:w-auto lg:last:justify-self-stretch"
            >
              <ReelCard {...reel} />
            </Reveal>
          ))}
        </ReelStrip>

      </div>
    </section>
  );
}
