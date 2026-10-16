"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";
import { r2 } from "@/lib/media";

const EXPERIENCES = [
  {
    title: "SERIOUS EATERS CLUB",
    tagline: "Once in a while, a table appears for people who already understand.",
    description:
      "Chef-led dinners built on season, intent and conversation. A room of guests who care deeply about why something is cooked the way it is.",
    image: r2("/serious-eaters-hero.webp"),
    cta: { label: "KNOW MORE", href: "/serious-eaters-club" },
  },
  {
    title: "COOKOUT",
    tagline: "Some foods are meant to be eaten quietly. This isn’t it.",
    description:
      "Our flagship outdoor festival built around fire, smoke and serious appetite. Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.",
    image: r2("/cookout-photo.webp"),
    cta: { label: "COMING SOON", href: "" },
  },
  {
    title: "LIQUID STUDIO",
    tagline: "Not every night needs a dance floor. Some need a bar worth standing at.",
    description:
      "A recurring nightlife format built around drink and sound. Guest bartenders, curated sound, intimate spaces. A studio, not a stage.",
    image: r2("/liquid-studio-photo.webp"),
    cta: { label: "COMING SOON", href: "" },
  },
];

function ExperienceCard({ exp, i }: { exp: (typeof EXPERIENCES)[number]; i: number }) {
  return (
    <Reveal delay={i * 150} className="h-full">
      <article className="group flex flex-col h-full text-left transition-all duration-300 rounded-2xl border border-line bg-surface p-5 sm:p-6 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl mb-5 bg-black/40">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            sizes="(min-width: 768px) 33vw, 80vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white group-hover:text-accent transition-colors">
          {exp.title}<span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">.</span>
        </h3>
        <p className="mt-2 font-serif italic text-sm sm:text-base text-accent-soft/90">
          {exp.tagline}
        </p>
        <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed font-sans flex-1">
          {exp.description}
        </p>
        <div className="mt-6">
          {exp.cta.href ? (
            <Link
              href={exp.cta.href}
              className="inline-block border border-line bg-surface-3 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white hover:border-accent hover:text-accent hover:shadow-[0_0_15px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              {exp.cta.label}
            </Link>
          ) : (
            <span className="inline-block border border-line/60 bg-surface px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-muted-2">
              {exp.cta.label}
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function ExperiencesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  return (
    <section id="experiences" className="scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <LineReveal
          as="h2"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-left text-fg mb-10 md:mb-14"
          lines={[
            <span key="our-experiences">
              OUR <span className="text-gradient">EXPERIENCES</span>
            </span>,
          ]}
        />

        {/* Mobile: manual swipe carousel */}
        <div
          className="md:hidden relative overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) setActiveIndex((prev) => Math.min(prev + 1, EXPERIENCES.length - 1));
            else if (diff < -50) setActiveIndex((prev) => Math.max(prev - 1, 0));
            touchStartX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {EXPERIENCES.map((exp, i) => (
              <div key={exp.title} className="shrink-0 w-full px-1">
                <ExperienceCard exp={exp} i={i} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {EXPERIENCES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to experience ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} i={i} />
          ))}
        </div>

        {/* Bottom Note */}
        <Reveal delay={450}>
          <p className="mt-12 text-right font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-muted">
            AND MANY MORE TO COME.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
