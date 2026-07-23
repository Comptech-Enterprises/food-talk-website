"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { milestones } from "@/lib/content";
import Reveal from "./Reveal";

const AUTOPLAY_MS = 5000;

export default function Timeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const last = milestones.length - 1;
  const current = milestones[active];

  // Auto-advance through the story, pausing on hover/focus.
  useEffect(() => {
    if (paused) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % milestones.length),
      AUTOPLAY_MS
    );
    return () => window.clearInterval(id);
  }, [paused, active]);

  const onKeyNav = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => {
          const next =
            e.key === "ArrowRight"
              ? (i + 1) % milestones.length
              : (i - 1 + milestones.length) % milestones.length;
          tabRefs.current[next]?.focus();
          return next;
        });
      }
    },
    []
  );

  const progress = last === 0 ? 0 : (active / last) * 100;

  return (
    <section
      id="journey"
      className="scroll-mt-24 border-t border-line bg-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Our Journey</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              From one plate
              <br />
              to a whole table.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            Nearly a decade of eating, drinking and talking our way across India.
            Tap a year to relive it.
          </p>
        </Reveal>

        {/* Active milestone panel */}
        <div
          role="tabpanel"
          id={`ms-panel-${active}`}
          aria-labelledby={`ms-tab-${active}`}
          className="grid gap-8 md:grid-cols-2 md:items-center"
        >
          <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-2xl border border-line md:order-1">
            {milestones.map((m, i) => (
              <Image
                key={m.year}
                src={m.image}
                alt={`${m.year} — ${m.title}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            <span className="display absolute bottom-4 left-5 text-5xl text-fg drop-shadow-lg sm:text-6xl">
              {current.year}
            </span>
          </div>

          <div className="order-1 md:order-2">
            <div key={active} className="animate-[fadein_0.5s_ease]">
              <span className="inline-flex items-baseline gap-2 rounded-full border border-line bg-bg-card px-4 py-1.5">
                <span className="display text-lg text-accent">
                  {current.metric.value}
                </span>
                <span className="text-xs text-muted">{current.metric.label}</span>
              </span>
              <h3 className="display mt-5 text-3xl sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                {current.copy}
              </p>
            </div>

            <p className="mt-6 text-sm text-muted-dim">
              {active + 1} / {milestones.length}
            </p>
          </div>
        </div>

        {/* Interactive rail */}
        <div
          role="tablist"
          aria-label="Food Talk milestones"
          onKeyDown={onKeyNav}
          className="relative mt-14 pt-8"
        >
          {/* base line + animated fill */}
          <div className="absolute left-0 right-0 top-9 h-px bg-line" />
          <div
            className="absolute left-0 top-9 h-px bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />

          <ol className="relative grid grid-cols-3 gap-y-8 sm:grid-cols-6">
            {milestones.map((m, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <li key={m.year} className="flex flex-col items-center">
                  <button
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`ms-tab-${i}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`ms-panel-${i}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <span
                      className={`grid h-4 w-4 place-items-center rounded-full border-2 transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg ${
                        isActive
                          ? "scale-125 border-accent bg-accent"
                          : isPast
                            ? "border-accent bg-bg"
                            : "border-line-strong bg-bg group-hover:border-fg"
                      }`}
                    />
                    <span
                      className={`display mt-4 text-lg transition-colors ${
                        isActive
                          ? "text-fg"
                          : "text-muted-dim group-hover:text-muted"
                      }`}
                    >
                      {m.year}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
