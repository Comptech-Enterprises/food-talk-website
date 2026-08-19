import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="film-grain relative flex min-h-[100svh] items-start overflow-hidden sm:items-center"
    >
      {/* Full-bleed food photography */}
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Friends sharing a table full of food and drinks"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/45 to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-56 sm:px-8 sm:pt-28">
        <p className="eyebrow mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          Food · Cocktails · Culture
        </p>

        <h1 className="display text-[clamp(3rem,11vw,9.5rem)] text-fg">
          {hero.lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="inline-block"
                style={{
                  animation: `rise 0.9s cubic-bezier(0.16,1,0.3,1) ${
                    0.1 + i * 0.12
                  }s both`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-xl text-lg text-fg/80 sm:text-2xl">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
          >
            What we do
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#what-we-do"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="relative h-10 w-6 rounded-full border border-line-strong">
          <span className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-fg animate-bounce" />
        </span>
      </a>

      <style>{`
        @keyframes rise {
          from { transform: translateY(110%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
