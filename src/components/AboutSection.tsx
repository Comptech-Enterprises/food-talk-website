import Image from "next/image";
import LineReveal from "./LineReveal";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="left">
          <div className="flex items-center justify-center md:justify-start gap-3.5 mb-8">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase">
              ABOUT US
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="@container">
            <LineReveal
              as="h2"
              className="display text-[length:min(5rem,12cqw)] leading-[0.95] text-center md:text-left"
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
        </div>
      </div>
    </section>
  );
}
