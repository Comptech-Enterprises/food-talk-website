"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { categories, type Category } from "@/lib/content";
import Reveal from "./Reveal";

// Demo reel — same clip for every card for now.
const DEMO_VIDEO_ID = "PyXxuuQi2BY";

export default function Categories() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<Category | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

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
              The shows that keep the feed hungry — tap a reel to play.
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
            <button
              type="button"
              key={c.id}
              id={c.id}
              onClick={() => setActive(c)}
              aria-label={`Play ${c.name}`}
              className="group relative aspect-[9/16] w-[75vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-bg-card text-left transition-colors hover:border-line-strong focus:outline-none focus-visible:border-accent xs:w-[62vw] sm:w-[300px]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 640px) 300px, 75vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/40" />

              <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-fg backdrop-blur">
                {c.tag}
              </span>

              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-bg/70 px-3 py-1 text-xs font-semibold text-fg backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                  <polygon points="6 4 20 12 6 20" />
                </svg>
                {c.views}
              </span>

              {/* play button */}
              <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-bg/40 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-[color:var(--accent-ink)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <polygon points="8 5 19 12 8 19" />
                </svg>
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="display text-2xl leading-tight">{c.name}</h3>
                <p className="mt-1 text-sm text-muted">{c.tagline}</p>
                <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted-dim">
                  {c.episodes}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Reel popup */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} reel`}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-[fadein_0.2s_ease]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[400px]"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="display text-xl leading-none">{active.name}</p>
                <p className="mt-1 text-xs text-muted">{active.tagline}</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActive(null)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0`}
                title={active.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadein { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </section>
  );
}
