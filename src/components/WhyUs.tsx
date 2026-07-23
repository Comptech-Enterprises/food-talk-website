import { whyUs } from "@/lib/content";
import Reveal from "./Reveal";

function ReasonIcon({ id }: { id: string }) {
  const c = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
  };
  switch (id) {
    case "honest": // shield + check
      return (
        <svg {...c}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "ground": // location pin
      return (
        <svg {...c}>
          <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "stories": // film / play
      return (
        <svg {...c}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v16" />
        </svg>
      );
    case "local": // compass
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <polygon points="16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: intro */}
          <Reveal>
            <p className="eyebrow mb-5">{whyUs.eyebrow}</p>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              {whyUs.headline}
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted">{whyUs.intro}</p>
          </Reveal>

          {/* Right: reasons */}
          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.reasons.map((r, i) => (
              <Reveal key={r.id} delay={i * 100}>
                <article className="group h-full rounded-2xl border border-line bg-bg-card p-6 transition-colors hover:border-line-strong">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line-strong text-fg transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[color:var(--accent-ink)]">
                    <ReasonIcon id={r.id} />
                  </span>
                  <h3 className="display mt-5 text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {r.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Trust stats */}
        <Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            {whyUs.stats.map((s) => (
              <div key={s.label}>
                <dt className="display text-4xl sm:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-xs leading-snug text-muted-dim">
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
