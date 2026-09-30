import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] overflow-hidden flex flex-col justify-end pt-24 sm:pt-28 pb-10 sm:pb-12 md:pb-14">
      <Parallax className="absolute inset-0" speed={0.35} scale={1.3}>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
          alt="Candlelit dinner table with friends sharing food and drinks"
          fill
          priority
          sizes="100vw"
          className="object-cover kenburns"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <Parallax className="relative mx-auto max-w-7xl w-full px-6" speed={-0.18} fadeOut>
        <LineReveal
          as="h1"
          immediate
          delay={200}
          className="font-display text-[clamp(3.5rem,10vw,8.5rem)] font-black uppercase leading-[0.88] tracking-tighter text-white drop-shadow-2xl"
          lines={[
            "FOOD",
            <span key="talk" className="italic text-[var(--red)]">
              TALK
            </span>,
            "INDIA",
          ]}
        />
        <Reveal delay={900}>
          <p className="mt-4 sm:mt-5 text-white/90 text-base sm:text-lg md:text-xl max-w-lg font-light leading-snug drop-shadow-md">
            A curated food experiences
            <br />
            platform by Food Talk India.
          </p>
        </Reveal>
      </Parallax>
    </section>
  );
}
