import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "SIGN UP TO\nOUR NEWSLETTER",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-fg" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "GET EARLY ACCESS\nTO EVERY EXPERIENCE",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-fg" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "BOOK YOUR SPOT.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-fg" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M7 10h10" />
        <path d="M12 15v7" />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <LineReveal
          as="h2"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-left text-fg mb-12 md:mb-16"
          lines={["HOW IT WORKS"]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 150} className="h-full">
              <div
                className={`group flex items-center gap-4 sm:gap-6 md:px-8 lg:px-12 py-4 transition-transform duration-300 hover:-translate-y-1 ${
                  i !== 0 ? "md:border-l md:border-line" : "md:pl-0"
                }`}
              >
                {/* Stylized Italic Number */}
                <span className="font-serif italic font-black text-5xl sm:text-6xl text-accent shrink-0 leading-none transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                </span>

                {/* Icon & Title */}
                <div className="flex flex-col items-start gap-2">
                  <div className="text-fg mb-1 transition-transform duration-300 group-hover:rotate-6">
                    {step.icon}
                  </div>
                  <h3 className="font-display text-xs sm:text-sm md:text-sm font-black uppercase tracking-tight leading-tight text-fg whitespace-pre-line text-left">
                    {step.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
