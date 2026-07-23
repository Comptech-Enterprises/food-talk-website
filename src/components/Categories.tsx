"use client";

import Image from "next/image";
import { useRef } from "react";
import { categories } from "@/lib/content";
import Reveal from "./Reveal";

export default function Categories() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="categories" className="scroll-mt-24 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Categories</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              Series worth
              <br />
              hitting play on.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <p className="hidden max-w-xs text-muted sm:block">
              The shows that keep the feed hungry — swipe through the reels.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollBy(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollBy(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={rowRef}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="group relative aspect-[9/16] w-[75vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-bg-card xs:w-[62vw] sm:w-[300px]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 300px, 75vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />

              {/* legibility scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/40" />

              {/* tag chip */}
              <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-fg backdrop-blur">
                {c.tag}
              </span>

              {/* view count */}
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1 text-xs font-semibold text-fg backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                  <polygon points="6 4 20 12 6 20" />
                </svg>
                {c.views}
              </span>

              {/* play button — pulses in on hover */}
              <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-bg/40 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-[color:var(--accent-ink)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <polygon points="8 5 19 12 8 19" />
                </svg>
              </span>

              {/* meta */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="display text-2xl leading-tight">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.tagline}</p>
                <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted-dim">
                  {c.episodes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
