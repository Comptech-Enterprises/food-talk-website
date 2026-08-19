"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  className?: string;
};

function parseTarget(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  const prefix = match[1];
  const num = parseFloat(match[2].replace(/,/g, ""));
  const suffix = match[3];
  return { num, prefix, suffix };
}

function formatNumber(n: number, target: number): string {
  if (target >= 1000) {
    const str = Math.round(n).toString();
    return str.replace(/\B(?=(\d{2})+(\d)(?!\d))/g, ",");
  }
  if (target % 1 !== 0) return n.toFixed(1);
  return Math.round(n).toString();
}

export default function CountUp({ value, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const { num, prefix, suffix } = parseTarget(value);
          if (num === 0) {
            setDisplay(value);
            return;
          }

          const duration = 1800;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * num;
            setDisplay(`${prefix}${formatNumber(current, num)}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
