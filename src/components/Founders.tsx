"use client";

import { type MouseEvent } from "react";
import Reveal from "./Reveal";

const founders = [
  {
    name: "Shuchir Suri",
    initials: "SS",
    role: "Co-Founder",
    bio: "Drives strategy and flawless execution — turning bold ideas into experiences that deliver. The one who makes sure every plan has a plate at the table.",
    quote: "Good food deserves a great story.",
    href: "https://shuchir.com/",
  },
  {
    name: "Anjali Batra",
    initials: "AB",
    role: "Co-Founder",
    bio: "Leads creative with a consumer-first approach, crafting stories that resonate and stick. The voice behind the brand people love to follow.",
    quote: "If it doesn't move you, it doesn't make the cut.",
  },
];

function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Founders() {
  return (
    <section className="relative overflow-hidden bg-bg-elevated">
      {/* subtle diagonal texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--accent) 0px, var(--accent) 1px, transparent 1px, transparent 28px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 relative">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            The Founders
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <Reveal delay={50}>
            <h2 className="display text-[clamp(2rem,5vw,3.8rem)] leading-[1.1]">
              Two minds,{" "}
              <span className="italic text-accent">one table.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-muted leading-relaxed lg:text-right">
              Behind every story we tell is a pair who turned their love for
              food, drinks and culture into a media house millions trust.
            </p>
          </Reveal>
        </div>

        {/* founder cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {founders.map((f, i) => {
            const Card = f.href ? "a" : "div";
            const cardProps = f.href
              ? {
                  href: f.href,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                  "aria-label": `${f.name} — visit website`,
                }
              : {};
            return (
            <Reveal key={f.name} delay={150 + i * 100} className="h-full">
              <Card
                {...cardProps}
                onMouseMove={trackPointer}
                className={`group relative flex h-full flex-col rounded-3xl border border-line bg-bg transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden${
                  f.href ? " cursor-pointer" : ""
                }`}
              >
                {/* cursor glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb, 232,178,58), 0.08), transparent 50%)",
                  }}
                />

                {/* large monogram */}
                <div className="relative flex items-center justify-center pt-12 pb-4 sm:pt-16 sm:pb-6">
                  <span
                    className="display select-none text-[7rem] sm:text-[9rem] font-bold leading-none text-accent/[0.06] transition-all duration-700 group-hover:text-accent/[0.12] group-hover:scale-105"
                  >
                    {f.initials}
                  </span>
                  {/* accent ring behind initials */}
                  <div
                    aria-hidden
                    className="absolute inset-0 m-auto h-28 w-28 sm:h-36 sm:w-36 rounded-full border border-accent/10 transition-all duration-700 group-hover:border-accent/25 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 m-auto h-40 w-40 sm:h-48 sm:w-48 rounded-full border border-accent/[0.04] transition-all duration-700 group-hover:border-accent/10 group-hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="relative z-20 flex flex-1 flex-col px-7 pb-8 sm:px-9 sm:pb-10">
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                      {f.role}
                    </span>
                  </div>

                  <h3 className="display mb-4 text-2xl font-semibold sm:text-3xl transition-colors duration-300 group-hover:text-accent">
                    {f.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted mb-6">
                    {f.bio}
                  </p>

                  {/* quote */}
                  <blockquote className="mt-auto border-l-2 border-accent/30 pl-4 transition-colors duration-300 group-hover:border-accent/60">
                    <p className="text-sm italic text-fg/80">
                      &ldquo;{f.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </Card>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
