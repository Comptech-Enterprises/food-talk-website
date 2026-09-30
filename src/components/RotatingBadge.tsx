"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

export default function RotatingBadge({ className = "" }: { className?: string }) {
  const pathId = useId().replace(/:/g, "");
  const scrollRotor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = scrollRotor.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.transform = `rotate(${(window.scrollY * 0.18).toFixed(1)}deg)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className={`aspect-square ${className}`}>
    <div className="relative h-full w-full rounded-full bg-accent text-accent-ink shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)]">
      <div ref={scrollRotor} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 animate-[spin_28s_linear_infinite] motion-reduce:animate-none">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <path
                id={pathId}
                d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
              />
            </defs>
            <text
              fill="currentColor"
              fontSize="17"
              fontWeight="900"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              <textPath
                href={`#${pathId}`}
                textLength="472"
                lengthAdjust="spacing"
              >
                FOOD • PEOPLE • EXPERIENCES •{" "}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <Image
        src="/logo.webp"
        alt=""
        width={120}
        height={120}
        className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 brightness-0"
      />
    </div>
    </div>
  );
}
