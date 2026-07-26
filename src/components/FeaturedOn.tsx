import Reveal from "./Reveal";

const outlets = [
  "Times of India",
  "Hindustan Times",
  "NDTV Food",
  "Curly Tales",
  "Cosmopolitan",
  "GQ India",
  "Vogue India",
  "Indian Express",
  "Mid-Day",
  "Elle India",
  "Femina",
  "Grazia",
];

export default function FeaturedOn() {
  const loop = [...outlets, ...outlets];

  return (
    <section aria-label="As featured on" className="border-t border-line bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            As Featured On
          </p>
        </Reveal>
        <Reveal delay={50}>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)]">
            In good company,{" "}
            <span className="italic text-accent">always.</span>
          </h2>
        </Reveal>
      </div>

      {/* auto-scrolling ticker */}
      <div className="relative mt-12 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track flex shrink-0 items-center gap-4 pr-4">
            {loop.map((name, i) => (
              <span
                key={i}
                className="group flex items-center justify-center rounded-2xl border border-line bg-bg-card px-10 py-7 transition-colors duration-300 hover:border-accent/40 hover:bg-bg-elevated"
              >
                <span className="display whitespace-nowrap text-xl tracking-tight text-muted-dim transition-colors duration-300 group-hover:text-fg sm:text-2xl">
                  {name}
                  <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    .
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
