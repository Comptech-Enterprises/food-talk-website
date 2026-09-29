import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    title: "SERIOUS EATERS CLUB",
    tagline: "Once in a while, a table appears for people who already understand.",
    description:
      "Chef-led dinners built on season, intent and conversation. A room of guests who care deeply about why something is cooked the way it is.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    cta: { label: "KNOW MORE", href: "/serious-eaters-club" },
  },
  {
    title: "COOKOUT",
    tagline: "Some foods are meant to be eaten quietly. This isn’t it.",
    description:
      "Our flagship outdoor festival built around fire, smoke and serious appetite. Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    cta: { label: "COMING SOON", href: "#" },
  },
  {
    title: "LIQUID STUDIO",
    tagline: "Not every night needs a dance floor. Some need a bar worth standing at.",
    description:
      "A recurring nightlife format built around drink and sound. Guest bartenders, curated sound, intimate spaces. A studio, not a stage.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
    cta: { label: "COMING SOON", href: "#" },
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-20 border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow mb-10">OUR EXPERIENCES</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 100}>
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-black mt-5 uppercase">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm italic text-muted">{exp.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
                <div className="mt-5">
                  {exp.cta.href !== "#" ? (
                    <Link
                      href={exp.cta.href}
                      className="inline-block border border-fg px-5 py-2 text-xs font-bold tracking-wider hover:bg-fg hover:text-bg transition-colors"
                    >
                      {exp.cta.label}
                    </Link>
                  ) : (
                    <span className="inline-block border border-fg px-5 py-2 text-xs font-bold tracking-wider">
                      {exp.cta.label}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-right font-display text-sm font-bold tracking-wider uppercase">
            AND MANY MORE TO COME.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
