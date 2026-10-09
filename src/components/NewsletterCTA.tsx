"use client";

import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function NewsletterCTA() {
  return (
    <section
      id="newsletter"
      className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Image with Parallax */}
      <Parallax className="absolute inset-0" speed={0.18} scale={1.2}>
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
          alt="Wine glasses clinking in warm light"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </Parallax>
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 w-full">
        <div className="max-w-2xl text-left">
          <LineReveal
            as="h2"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
            lines={[
              "GET ACCESS TO",
              <span key="highlight" className="text-gradient">OUR EXPERIENCES.</span>,
            ]}
          />

          <Reveal delay={200}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center max-w-md gap-0"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="bg-surface/90 border border-line text-white px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium placeholder:text-muted-2 focus:outline-none focus:border-accent focus:bg-surface-2 rounded-none flex-1 min-w-0 font-sans transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-black px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:bg-accent-soft hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-95 transition-all cursor-pointer shrink-0 rounded-none mt-2 sm:mt-0 font-display"
              >
                SIGN UP
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
