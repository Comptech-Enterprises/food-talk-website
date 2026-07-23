import { about } from "@/lib/content";
import Reveal from "./Reveal";

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

        <Reveal delay={200}>
          <dl className="grid grid-cols-3 gap-6 border-t border-line pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="display text-3xl sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-dim">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
