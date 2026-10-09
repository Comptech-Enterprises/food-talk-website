import Image from "next/image";
import Link from "next/link";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

const EXPERIENCES = [
  {
    title: "SERIOUS EATERS CLUB",
    tagline: "Once in a while, a table appears for people who already understand.",
    description:
      "Chef-led dinners built on season, intent and conversation. A room of guests who care deeply about why something is cooked the way it is.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    cta: { label: "KNOW MORE", href: "/serious-eaters-club" },
  },
  {
    title: "COOKOUT",
    tagline: "Some foods are meant to be eaten quietly. This isn’t it.",
    description:
      "Our flagship outdoor festival built around fire, smoke and serious appetite. Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    cta: { label: "COMING SOON", href: "" },
  },
  {
    title: "LIQUID STUDIO",
    tagline: "Not every night needs a dance floor. Some need a bar worth standing at.",
    description:
      "A recurring nightlife format built around drink and sound. Guest bartenders, curated sound, intimate spaces. A studio, not a stage.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    cta: { label: "COMING SOON", href: "" },
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <LineReveal
          as="h2"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-left text-fg mb-10 md:mb-14"
          lines={["OUR EXPERIENCES"]}
        />

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 150}>
              <article className="group flex flex-col h-full text-left transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-5 bg-black/10">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight uppercase text-fg group-hover:text-black transition-colors">
                  {exp.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 font-serif italic text-sm sm:text-base text-fg/90">
                  {exp.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-fg/70 leading-relaxed font-serif flex-1">
                  {exp.description}
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                  {exp.cta.href ? (
                    <Link
                      href={exp.cta.href}
                      className="inline-block border border-fg px-6 py-2 text-xs font-bold tracking-wider uppercase text-fg hover:bg-fg hover:text-bg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
                    >
                      {exp.cta.label}
                    </Link>
                  ) : (
                    <span className="inline-block border border-fg/30 px-6 py-2 text-xs font-bold tracking-wider uppercase text-fg/60">
                      {exp.cta.label}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom Note */}
        <Reveal delay={450}>
          <p className="mt-12 text-right font-display text-xs sm:text-sm font-black tracking-wider uppercase text-fg">
            AND MANY MORE TO COME.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
