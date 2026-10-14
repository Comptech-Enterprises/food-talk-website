import LineReveal from "./LineReveal";
import PartnerForm from "./PartnerForm";
import Reveal from "./Reveal";

type WorkWithUsProps = {
  id?: string;
  eyebrow?: string;
  titleLines?: (string | React.ReactNode)[];
  intro?: string;
};

export default function WorkWithUs({
  id = "work-with-us",
  eyebrow = "PARTNER WITH US",
  titleLines,
  intro = "Want your brand at our tables? Put your brand in front of people who care deeply about food, drink and culture. Leave your details and we will get in touch.",
}: WorkWithUsProps) {
  const lines = titleLines || [
    "WORK",
    <span key="highlight" className="text-gradient">
      WITH US.
    </span>,
  ];

  return (
    <section
      id={id}
      className="relative scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden bg-bg"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                {eyebrow}
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
              lines={lines}
            />

            <Reveal delay={250}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted font-normal font-sans max-w-xl">
                {intro}
              </p>
            </Reveal>
          </div>

          {/* Right Column: Embedded Form */}
          <div className="lg:col-span-6">
            <Reveal delay={300}>
              <div className="relative bg-surface/90 backdrop-blur-xl border border-line rounded-2xl p-6 sm:p-10 shadow-2xl text-left hover:border-accent/30 transition-colors">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-accent/10 blur-[80px]"
                />
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white mb-6">
                  GET IN TOUCH
                </h3>
                <PartnerForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
