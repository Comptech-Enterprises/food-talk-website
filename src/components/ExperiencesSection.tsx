import Image from "next/image";
import Link from "next/link";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    kind: "Chef-led dinners",
    lines: ["SERIOUS", "EATERS CLUB"],
    tagline: "Once in a while, a table appears for people who already understand.",
    description:
      "Chef-led dinners built on season, intent and conversation. A room of guests who care deeply about why something is cooked the way it is.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=70",
    cta: { label: "KNOW MORE", href: "/serious-eaters-club" },
    side: "left",
  },
  {
    kind: "Outdoor festival",
    lines: ["COOKOUT"],
    tagline: "Some foods are meant to be eaten quietly. This isn’t it.",
    description:
      "Our flagship outdoor festival built around fire, smoke and serious appetite. Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=70",
    cta: { label: "COMING SOON", href: "" },
    side: "right",
  },
  {
    kind: "Nightlife format",
    lines: ["LIQUID", "STUDIO"],
    tagline: "Not every night needs a dance floor. Some need a bar worth standing at.",
    description:
      "A recurring nightlife format built around drink and sound. Guest bartenders, curated sound, intimate spaces. A studio, not a stage.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=70",
    cta: { label: "COMING SOON", href: "" },
    side: "left",
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-20 border-t border-line pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="left">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase text-center md:text-left mb-10">
            OUR EXPERIENCES
          </h2>
        </Reveal>
      </div>

      <div className="space-y-3 md:space-y-4">
        {EXPERIENCES.map((exp) => {
          const right = exp.side === "right";
          return (
            <article
              key={exp.kind}
              className="group relative flex min-h-[72vh] md:min-h-[82vh] items-end overflow-hidden bg-bg-dark text-white"
            >
              <Parallax className="absolute inset-0" speed={0.18} scale={1.25}>
                <Image
                  src={exp.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </Parallax>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15 ${
                  right ? "md:bg-gradient-to-tl" : "md:bg-gradient-to-tr"
                }`}
              />

              <div
                className={`relative mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16 flex flex-col items-center text-center ${
                  right ? "md:items-end md:text-right" : "md:items-start md:text-left"
                }`}
              >
                <Reveal>
                  <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/70">
                    {exp.kind}
                  </p>
                </Reveal>
                <LineReveal
                  as="h3"
                  className="display mt-4 text-[clamp(2.25rem,8vw,7.5rem)] leading-[0.9]"
                  lines={exp.lines}
                />
                <Reveal delay={250}>
                  <p className="mt-6 max-w-xl text-lg md:text-xl italic text-white/90">
                    {exp.tagline}
                  </p>
                  <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-white/80">
                    {exp.description}
                  </p>
                  <div className="mt-8">
                    {exp.cta.href ? (
                      <Link
                        href={exp.cta.href}
                        className="inline-block border border-white px-7 py-3 text-xs font-bold tracking-wider hover:bg-white hover:text-fg transition-colors"
                      >
                        {exp.cta.label}
                      </Link>
                    ) : (
                      <span className="inline-block border border-white/40 px-7 py-3 text-xs font-bold tracking-wider text-white/70">
                        {exp.cta.label}
                      </span>
                    )}
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="right">
          <p className="mt-10 text-center md:text-right font-display text-sm font-bold tracking-wider uppercase">
            AND MANY MORE TO COME.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
