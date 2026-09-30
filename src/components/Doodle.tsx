"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Parallax from "./Parallax";

const ICONS: Record<string, ReactNode> = {
  fork: (
    <>
      <path pathLength={1} d="M7 3v6a3 3 0 0 0 6 0V3" />
      <path pathLength={1} d="M10 3v18" />
      <path pathLength={1} d="M17 3c-2 2-3 5-3 8h3v10" />
    </>
  ),
  glass: (
    <>
      <path pathLength={1} d="M8 3h8l-.5 6a3.5 3.5 0 0 1-7 0L8 3z" />
      <path pathLength={1} d="M12 12.5V20" />
      <path pathLength={1} d="M8.5 20h7" />
    </>
  ),
  flame: (
    <>
      <path
        pathLength={1}
        d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"
      />
    </>
  ),
  cocktail: (
    <>
      <path pathLength={1} d="M4 4h16l-8 9-8-9z" />
      <path pathLength={1} d="M12 13v7" />
      <path pathLength={1} d="M8 20h8" />
      <path pathLength={1} d="M15 4l3-2" />
    </>
  ),
  plate: (
    <>
      <circle pathLength={1} cx="12" cy="12" r="9" />
      <circle pathLength={1} cx="12" cy="12" r="5.5" />
    </>
  ),
};

type DoodleProps = {
  kind: keyof typeof ICONS;
  className?: string;
  speed?: number;
  rotate?: number;
};

export default function Doodle({ kind, className = "", speed = 0.1, rotate = 0 }: DoodleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Parallax className={`pointer-events-none absolute ${className}`} speed={speed}>
      <div
        ref={ref}
        aria-hidden
        className={`h-full w-full ${drawn ? "is-drawn" : ""}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <svg
          viewBox="0 0 24 24"
          className="draw h-full w-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[kind]}
        </svg>
      </div>
    </Parallax>
  );
}
