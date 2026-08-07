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
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">{reels.eyebrow}</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            {reels.headline}
          </h2>
          <p className="mt-6 text-lg text-muted">{reels.intro}</p>
        </Reveal>

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

        <Reveal delay={460} className="mt-12 flex justify-center">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line-strong px-7 py-3 text-sm font-semibold text-fg transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg"
          >
            Follow @{handle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
