import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    label: "SIGN UP TO\nOUR NEWSLETTER",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="24" rx="3" />
        <path d="M4 12l16 10 16-10" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "GET EARLY ACCESS\nTO EVERY EXPERIENCE",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6c0 0-4 6-4 12s4 12 4 12" />
        <path d="M28 6c0 0 4 6 4 12s-4 12-4 12" />
        <path d="M16 10c0 0-2 4-2 8s2 8 2 8" />
        <path d="M24 10c0 0 2 4 2 8s-2 8-2 8" />
        <line x1="6" y1="20" x2="34" y2="20" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "BOOK YOUR SPOT.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 34V18l-4 4" />
        <path d="M28 34V18l4 4" />
        <path d="M12 18c0-4 3-8 8-8s8 4 8 8" />
        <circle cx="20" cy="6" r="2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="display text-[clamp(2rem,5vw,4rem)]">HOW IT WORKS</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-black text-accent italic">
                    {step.number}
                  </span>
                  <span className="text-fg">{step.icon}</span>
                </div>
                <p className="font-display text-sm font-bold tracking-wider uppercase whitespace-pre-line mt-3">
                  {step.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
