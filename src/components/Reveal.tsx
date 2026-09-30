"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "mask";
};

/**
 * Fades + lifts its children into view once they enter the viewport.
 * Content is fully visible without JS / with reduced-motion (see globals.css).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // A fully clip-pathed element reports zero intersection, so the observed
  // node must stay unclipped and the wipe lives on an inner wrapper.
  if (variant === "mask") {
    return (
      <Tag ref={ref} className={className}>
        <div
          data-variant="mask"
          className={`reveal ${shown ? "is-visible" : ""}`}
          style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
