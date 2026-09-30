"use client";

import { useEffect, useRef } from "react";

const BRANDS = [
  "DIAGEO",
  "BACARDI",
  "CAMPARI",
  "ITC HOTELS",
  "TAJ",
  "BMW",
  "SINGAPORE TOURISM BOARD",
  "JAGERMEISTER",
  "DON JULIO",
  "RAY-BAN",
  "UNIQLO",
];

export default function BrandMarquee() {
  const items = [...BRANDS, ...BRANDS];
  const skewEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = skewEl.current;
    if (!el) return;

    let last = window.scrollY;
    let target = 0;
    let skew = 0;
    let raf = 0;

    const tick = () => {
      skew += (target - skew) * 0.14;
      target *= 0.92;
      el.style.transform = `skewX(${(-skew).toFixed(2)}deg)`;
      if (Math.abs(skew) < 0.03 && Math.abs(target) < 0.03) {
        el.style.transform = "";
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    const onScroll = () => {
      const v = window.scrollY - last;
      last = window.scrollY;
      target = Math.max(-12, Math.min(12, v * 0.4));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-accent py-3 overflow-hidden">
      <div ref={skewEl}>
        <div className="marquee-track flex items-center gap-6 whitespace-nowrap">
          {items.map((brand, i) => (
            <span key={`${brand}-${i}`} className="flex items-center gap-6">
              <span className="font-display text-xs font-bold tracking-wider text-accent-ink uppercase">
                {brand}
              </span>
              <span className="text-accent-ink/40" aria-hidden>
                &bull;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
