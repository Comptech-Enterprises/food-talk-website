"use client";

import { useEffect, useRef, type ReactNode } from "react";

const STEP_MS = 3500;

/**
 * Holds the reel tiles: a swipeable snap strip on phones that advances on its
 * own, and a plain grid from `sm` up. Auto-advance stops for good as soon as
 * the visitor swipes it themselves.
 */
export default function ReelStrip({ children }: { children: ReactNode }) {
  const stripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const phone = window.matchMedia("(max-width: 639px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!phone.matches || calm.matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };

    const advance = () => {
      const card = strip.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 16; // tile + gap-4
      const atEnd = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 8;
      strip.scrollTo({
        left: atEnd ? 0 : strip.scrollLeft + step,
        behavior: "smooth",
      });
    };

    // only run while the strip is actually on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          timer = setInterval(advance, STEP_MS);
        } else if (!entry.isIntersecting) {
          stop();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(strip);

    const handOver = () => {
      stop();
      observer.disconnect();
    };
    strip.addEventListener("pointerdown", handOver, { once: true });
    strip.addEventListener("wheel", handOver, { once: true, passive: true });

    return () => {
      stop();
      observer.disconnect();
      strip.removeEventListener("pointerdown", handOver);
      strip.removeEventListener("wheel", handOver);
    };
  }, []);

  return (
    <div
      ref={stripRef}
      className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
    >
      {children}
    </div>
  );
}
