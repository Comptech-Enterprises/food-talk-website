import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

const STEPS = [
  "Sign up to our mailer",
  "Get access to events and experiences",
  "Book your spot",
  "Show up",
];

export default function HowItWorks() {
  return (
    <section className="border-t border-line py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <LineReveal
          as="h2"
          className="display text-[clamp(1.75rem,5vw,4.5rem)] text-left"
          lines={["HOW IT WORKS"]}
        />

        <ol className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step} as="li" delay={i * 100}>
              <div className="border-t-2 border-fg pt-2.5 sm:pt-4 md:pt-5 text-left">
                <span className="font-display text-[10px] sm:text-xs md:text-sm font-bold text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 sm:mt-2 md:mt-3 font-display text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xl font-black uppercase leading-[1.15] tracking-tight">
                  {step}
                </h3>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
