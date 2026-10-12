"use client";

import Link from "next/link";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="relative scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden bg-bg"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 text-left">
        <LineReveal
          as="h2"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white mb-8"
          lines={[
            <span>
              WORK <span className="text-gradient">WITH US</span>
            </span>,
          ]}
        />

        <Reveal delay={150}>
          <Link
            href="/brand-partners"
            className="group inline-flex items-center gap-3 bg-accent text-black px-8 sm:px-10 py-4 text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider rounded-xl hover:bg-accent-soft hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-display"
          >
            <span>Partner with Us</span>
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
    </section>
  );
}
