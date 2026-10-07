import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="left">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase text-center md:text-left">
            ABOUT US
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="@container md:col-span-7">
            <LineReveal
              as="h2"
              className="display text-[length:min(7rem,12cqw)] leading-[0.95] text-center md:text-left"
              lines={["A FOOD", "EXPERIENCES", "PLATFORM."]}
            />
          </div>

          <div className="md:col-span-5">
            <Reveal delay={400}>
              <p className="max-w-md mx-auto md:mx-0 text-center md:text-left text-lg leading-relaxed text-muted">
                Bringing people together around food, drinks and culture. We curate
                experiences that celebrate the people, places and ideas behind them,
                and create spaces where great food, memorable drinks and meaningful
                connections come together.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
