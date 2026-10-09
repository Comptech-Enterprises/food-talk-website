import Image from "next/image";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 md:py-28 border-b border-line overflow-hidden bg-bg">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex flex-col justify-center text-left">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                ABOUT US
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
              lines={[
                "A FOOD",
                <span key="highlight" className="text-gradient">EXPERIENCES</span>,
                "PLATFORM.",
              ]}
            />

            <Reveal delay={250} variant="up">
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted font-normal font-sans">
                Bringing people together around <span className="text-white font-medium">food, drinks and culture</span>. We curate
                experiences that celebrate the <span className="text-accent font-medium">people, places and ideas</span> behind them,
                and create spaces where great food, memorable drinks and meaningful
                connections come together.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Plating Image */}
          <div className="md:col-span-6">
            <Reveal delay={300}>
              <div className="group relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line shadow-2xl bg-surface">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Chef plating food with microgreens"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
