"use client";

import Link from "next/link";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="relative scroll-mt-20 py-20 md:py-28 border-b border-line overflow-hidden bg-bg"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          {/* Left: Title & Subtext */}
          <div className="max-w-2xl text-left">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                PARTNERSHIPS
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-left text-white"
              lines={[
                <span>
                  WORK <span className="text-gradient">WITH US</span>
                </span>,
              ]}
            />

            <Reveal delay={200}>
              <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed font-sans">
                Put your brand in front of people who care deeply about food, drink and culture.
                From curated chef-led dinners to large-scale culinary festivals, we shape partnerships that belong in the room.
              </p>
            </Reveal>
          </div>

          {/* Right: Work with Brands CTA Button */}
          <div className="shrink-0 pt-2 md:pt-0 text-left">
            <Reveal delay={300}>
              <Link
                href="/brand-partners"
                className="group inline-flex items-center gap-3 bg-accent text-black px-8 sm:px-10 py-4 sm:py-4.5 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl hover:bg-accent-soft hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-display"
              >
                <span>Work with Brands</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
