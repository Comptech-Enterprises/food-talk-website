"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { pillars } from "@/lib/content";
import Reveal from "./Reveal";

function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Pillars() {
  return (
    <section id="pillars" className="bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            Three ways we
            <br />
            serve it up.
          </h2>
          <p className="max-w-sm text-muted">
            Discover it, get the inside track, then sit back and enjoy the show.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className="h-full">
              <article
                id={p.id}
                onMouseMove={trackPointer}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-2xl hover:shadow-black/40"
              >
                {/* cursor-tracking amber glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(232,178,58,0.14), transparent 55%)",
                  }}
                />

                {/* image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-fg backdrop-blur">
                    {p.tag}
                  </span>
                </div>

                {/* content */}
                <div className="relative z-30 flex flex-1 flex-col p-7">
                  <div className="mb-4 flex items-baseline justify-between">
                    <h3 className="display text-3xl transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                    <span className="display text-lg text-muted-dim">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{p.copy}</p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg">
                    <span className="relative">
                      Explore
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
