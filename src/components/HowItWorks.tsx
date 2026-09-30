"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    label: "SIGN UP TO\nOUR NEWSLETTER",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 draw" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect pathLength={1} x="4" y="8" width="32" height="24" rx="3" />
        <path pathLength={1} d="M4 12l16 10 16-10" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "GET EARLY ACCESS\nTO EVERY EXPERIENCE",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 draw" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength={1} d="M12 6c0 0-4 6-4 12s4 12 4 12" />
        <path pathLength={1} d="M28 6c0 0 4 6 4 12s-4 12-4 12" />
        <path pathLength={1} d="M16 10c0 0-2 4-2 8s2 8 2 8" />
        <path pathLength={1} d="M24 10c0 0 2 4 2 8s-2 8-2 8" />
        <line pathLength={1} x1="6" y1="20" x2="34" y2="20" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "BOOK YOUR SPOT.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 draw" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path pathLength={1} d="M12 34V18l-4 4" />
        <path pathLength={1} d="M28 34V18l4 4" />
        <path pathLength={1} d="M12 18c0-4 3-8 8-8s8 4 8 8" />
        <circle pathLength={1} cx="20" cy="6" r="2" />
      </svg>
    ),
  },
];

function StepCard({ step, centered, drawn }: { step: typeof STEPS[number]; centered?: boolean; drawn?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center ${centered ? "py-12" : ""} ${drawn ? "is-drawn" : ""}`}>
      <div className="flex items-center gap-4">
        <span className="font-display text-6xl md:text-7xl font-black text-accent italic">
          {step.number}
        </span>
        <span className="text-fg [&_svg]:h-14 [&_svg]:w-14 md:[&_svg]:h-16 md:[&_svg]:w-16">{step.icon}</span>
      </div>
      <p className="font-display text-lg md:text-xl font-bold tracking-wider uppercase whitespace-pre-line mt-5">
        {step.label}
      </p>
    </div>
  );
}

const FADE_MS = 600;

function fade(visible: boolean) {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity ${FADE_MS}ms ease ${visible ? FADE_MS : 0}ms`,
    pointerEvents: visible ? ("auto" as const) : ("none" as const),
  };
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(-1);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          setPhase(0);
          setTimeout(() => setPhase(1), 2000);
          setTimeout(() => setPhase(2), 4000);
          setTimeout(() => setPhase(3), 6000);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center justify-center md:justify-start gap-3.5 mb-10">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase">
              HOW IT WORKS
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="mt-12 grid">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="col-start-1 row-start-1 flex items-center justify-center"
              style={fade(phase === i)}
              aria-hidden={phase !== i}
            >
              <StepCard step={step} drawn={phase === i} />
            </div>
          ))}

          <div
            className="col-start-1 row-start-1 grid md:grid-cols-3 gap-8"
            style={fade(phase >= 3)}
          >
            {STEPS.map((step) => (
              <StepCard key={step.number} step={step} drawn={phase >= 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
