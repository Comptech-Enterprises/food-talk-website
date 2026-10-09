import Image from "next/image";
import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column */}
          <div className="md:col-span-6 flex flex-col justify-center text-left">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-fg/70 mb-3 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#c8e600] inline-block" />
                ABOUT US
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-fg"
              lines={["A FOOD", "EXPERIENCES", "PLATFORM."]}
            />

            <Reveal delay={250} variant="up">
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-fg/80 font-normal font-serif">
                Bringing people together around food, drinks and culture. We curate
                experiences that celebrate the people, places and ideas behind them,
                and create spaces where great food, memorable drinks and meaningful
                connections come together.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Plating Image */}
          <div className="md:col-span-6">
            <Reveal delay={300}>
              <div className="group relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-none shadow-md bg-black/10">
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
