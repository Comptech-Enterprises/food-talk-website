"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type LineRevealProps = {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** Play on mount instead of on scroll-into-view. */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
};

export default function LineReveal({
  lines,
  as: Tag = "div",
  className = "",
  immediate = false,
  delay = 0,
  stagger = 120,
}: LineRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    if (immediate) {
      const t = setTimeout(() => setShown(true), 60);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden py-[0.1em] -my-[0.1em]">
          <span
            className="block"
            style={{
              transform: shown ? "translateY(0)" : "translateY(115%)",
              transition: `transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * stagger}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
