"use client";

import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const CITIES = ["Delhi-NCR", "Mumbai", "Bangalore"];

const REASONS = [
  {
    title: "First to know",
    text: "Hear about every dinner, festival and night as soon as it's announced.",
  },
  {
    title: "Early access",
    text: "Get a chance at your seat before bookings open to everyone.",
  },
  {
    title: "Good company",
    text: "A room of people who care about food, drink and the stories behind them.",
  },
];

export default function NewsletterCTA() {
  return (
    <section
      id="get-access"
      className="relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-28"
    >
      <Parallax className="absolute inset-0" speed={0.28} scale={1.35}>
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
          alt="Wine glasses clinking in warm light"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="@container text-white">
          <LineReveal
            as="h2"
            className="display text-[length:min(5.5rem,13cqw)] leading-[0.95] text-center lg:text-left"
            lines={["GET FIRST", "ACCESS."]}
          />
          <Reveal delay={300}>
            <p className="mt-6 max-w-md mx-auto lg:mx-0 text-center lg:text-left text-lg text-white/80">
              Join the Food Talk community and be part of every table we set.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} as="li" delay={450 + i * 150}>
                <div className="border-t border-white/30 pt-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                  <h3 className="font-display text-base font-black tracking-wider uppercase">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-white/70 leading-relaxed">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal variant="scale" delay={300} className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
          <div className="border border-white/20 rounded-2xl bg-white/10 backdrop-blur-xl p-8 sm:p-12">
            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-8">
              <div>
                <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-2">
                  Email<span className="text-white/60">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full bg-transparent border-b-2 border-white/40 text-white py-4 text-base sm:text-lg placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-2">
                  Phone<span className="text-white/60">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <span className="text-white/90 text-base sm:text-lg font-medium border-b-2 border-white/40 py-4 pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="flex-1 min-w-0 bg-transparent border-b-2 border-white/40 text-white py-4 text-base sm:text-lg placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
                  City<span className="text-white/60">*</span>
                </label>
                <div className="flex flex-wrap gap-6 sm:gap-8">
                  {CITIES.map((city) => (
                    <label key={city} className="flex items-center gap-3 text-white font-medium text-base sm:text-lg cursor-pointer group">
                      <input
                        type="checkbox"
                        name="city"
                        value={city}
                        className="sr-only peer"
                      />
                      <span className="w-6 h-6 border-2 border-white/60 rounded-md bg-black/20 peer-checked:bg-accent peer-checked:border-accent flex items-center justify-center transition-colors" />
                      <span className="group-hover:opacity-70 transition-opacity">{city}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-accent-ink py-5 text-base sm:text-lg font-black tracking-wider uppercase rounded-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer mt-2"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
