import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import Doodle from "./Doodle";
import RotatingBadge from "./RotatingBadge";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-20 py-16 md:py-24">
      <Doodle kind="flame" className="hidden md:block top-16 md:left-[48%] h-16 w-16 text-red/70" speed={-0.1} rotate={12} />
      <Doodle kind="glass" className="left-[3%] bottom-8 h-11 w-11 md:left-[47%] md:bottom-5 md:h-16 md:w-16 text-fg/35" speed={0.14} rotate={-10} />
      <Doodle kind="fork" className="hidden md:block right-[3%] bottom-24 h-14 w-14 text-fg/35" speed={0.22} rotate={8} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal variant="left">
          <div className="flex items-center justify-center md:justify-start gap-3.5 mb-8">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase">
              ABOUT US
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <LineReveal
              as="h2"
              className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-center md:text-left"
              lines={["A FOOD", "EXPERIENCES", "PLATFORM."]}
            />
            <Reveal delay={400}>
              <p className="mt-8 max-w-lg mx-auto md:mx-0 text-center md:text-left text-base leading-relaxed text-muted">
                Bringing people together around food, drinks and culture. We curate
                experiences that celebrate the people, places and ideas behind them,
                and create spaces where great food, memorable drinks and meaningful
                connections come together.
              </p>
            </Reveal>
          </div>

          <div className="relative">
          <Reveal variant="mask" delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Parallax className="absolute inset-0" speed={0.14} scale={1.3}>
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Intimate dining experience with candles"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </Reveal>
          <RotatingBadge className="absolute -top-8 -right-1 z-10 w-28 md:-top-12 md:-right-4 md:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
