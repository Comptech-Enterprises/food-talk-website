"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function NewsletterCTA() {
  return (
    <section
      id="newsletter"
      className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center overflow-hidden py-16 md:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
          alt="Wine glasses clinking in warm light"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 w-full">
        <div className="max-w-2xl text-left">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
              GET ACCESS TO<br />OUR EXPERIENCES.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center max-w-md gap-0"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="bg-white text-fg px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-medium placeholder:text-muted/70 focus:outline-none rounded-none flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-[#c8e600] text-black px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all cursor-pointer shrink-0 rounded-none mt-2 sm:mt-0"
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
