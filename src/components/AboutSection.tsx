import Image from "next/image";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">ABOUT US</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              A FOOD
              <br />
              EXPERIENCES
              <br />
              PLATFORM.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted">
              Bringing people together around food, drinks and culture. We curate
              experiences that celebrate the people, places and ideas behind them,
              and create spaces where great food, memorable drinks and meaningful
              connections come together.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Intimate dining experience with candles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
