"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /** Positive = drifts slower than scroll (backgrounds). Negative = faster (foreground). */
  speed?: number;
  /** Static scale so the moving layer never exposes its edges. */
  scale?: number;
  /** Fade the layer out as the block scrolls off the top of the viewport. */
  fadeOut?: boolean;
  className?: string;
};

export default function Parallax({
  children,
  speed = 0.15,
  scale = 1,
  fadeOut = false,
  className = "",
}: ParallaxProps) {
  const root = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const box = layer.current;
    if (!el || !box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let listening = false;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const offset = r.top + r.height / 2 - vh / 2;
      box.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0) scale(${scale})`;
      if (fadeOut) {
        const o = (r.bottom - vh * 0.3) / (vh * 0.5);
        box.style.opacity = String(Math.min(1, Math.max(0, o)));
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const start = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      update();
    };
    const stop = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "25% 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      stop();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, scale, fadeOut]);

  return (
    <div ref={root} className={className}>
      <div
        ref={layer}
        className="relative h-full w-full will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
