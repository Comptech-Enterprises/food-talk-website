import { about } from "@/lib/content";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section
      id="what-we-do"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="eyebrow mb-8">{about.eyebrow}</p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="display max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)]">
          {about.headline.split("fooood")[0]}
          <span className="italic text-accent">fooood.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <Reveal delay={120}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {about.body}
          </p>
        </Reveal>
      </div>

      {/* Stats — big, bold, animated */}
      <dl className="mt-16 grid grid-cols-3 gap-3 sm:gap-10">
        {about.stats.map((s, i) => (
          <Reveal key={s.label} delay={200 + i * 120}>
            <div className="group relative h-full rounded-2xl border border-line bg-bg-card px-3 py-6 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 sm:px-8 sm:py-12">
              <dt className="display text-3xl text-accent sm:text-6xl lg:text-7xl">
                <CountUp value={s.value} />
              </dt>
              <dd className="mt-2 text-xs leading-snug text-muted sm:mt-3 sm:text-base">
                {s.label}
              </dd>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(232,178,58,0.06), transparent 70%)",
                }}
              />
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
