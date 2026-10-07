import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

const STEPS = [
  "Sign up to our mailer",
  "Get access to our events and experiences",
  "Book your spot",
  "Show up",
];

export default function HowItWorks() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <LineReveal
          as="h2"
          className="display text-[clamp(2.25rem,6vw,5rem)] text-center md:text-left"
          lines={["HOW IT WORKS"]}
        />

        <ol className="mt-12 md:mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step} as="li" delay={i * 150}>
              <div className="border-t-2 border-fg pt-5 text-center md:text-left">
                <span className="font-display text-sm font-bold text-muted">{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl md:text-[1.7rem] font-black uppercase leading-[1.1]">
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
