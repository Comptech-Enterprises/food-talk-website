"use client";

import Image from "next/image";
import { type MouseEvent } from "react";
import Reveal from "./Reveal";
import { founders } from "@/lib/content";

function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

type FoundersProps = {
  standalone?: boolean;
};

export default function Founders({ standalone = false }: FoundersProps) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <section id="founders" className="relative scroll-mt-24 overflow-hidden bg-bg-elevated">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--accent) 0px, var(--accent) 1px, transparent 1px, transparent 28px)",
        }}
      />

      <div
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 ${
          standalone
            ? "pb-24 pt-36 sm:pb-32 sm:pt-48"
            : "py-24 sm:py-32"
        }`}
      >
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            The Founders
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <Reveal delay={50}>
            <Heading className="display text-[clamp(2rem,5vw,3.8rem)] leading-[1.1]">
              Two minds,{" "}
              <span className="italic text-accent">one table.</span>
            </Heading>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-muted leading-relaxed lg:text-right">
              Behind every story we tell is a pair who turned their love for
              food, drinks and culture into a media house millions trust.
            </p>
          </Reveal>
        </div>

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
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bg transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5${
                    f.href ? " cursor-pointer" : ""
                  }`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(var(--accent-rgb, 232,178,58), 0.08), transparent 50%)",
                    }}
                  />

                  <div className="relative aspect-[36/35] w-full overflow-hidden rounded-none">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="rounded-none object-cover object-[center_20%] transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="relative z-20 flex flex-1 flex-col px-7 py-7 sm:px-9 sm:py-8">
                    <h3 className="display mb-1 text-2xl font-semibold sm:text-3xl transition-colors duration-300 group-hover:text-accent">
                      {f.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted">{f.role}</p>
                    <p className="text-sm leading-relaxed text-muted">
                      {f.bio}
                    </p>
                    <blockquote className="mt-6 border-l-2 border-accent/30 pl-4 transition-colors duration-300 group-hover:border-accent/60">
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
