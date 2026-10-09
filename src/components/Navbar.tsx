"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT US", href: "/#about" },
  { label: "OUR EXPERIENCES", href: "/#experiences" },
  { label: "WORK WITH US", href: "/#work-with-us" },
];

export default function Navbar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = tone === "light" || open || scrolled;
  const ink = onDark ? "text-white" : "text-fg";
  const bar = onDark ? "bg-white" : "bg-fg";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-dark/85 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Food Talk India"
            width={120}
            height={40}
            className={`h-12 md:h-14 w-auto brightness-0 ${onDark ? "invert" : ""}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className={`font-display text-xs md:text-sm font-semibold tracking-wider ${ink} hover:text-accent transition-colors`}
          >
            ABOUT US
          </Link>
          <Link
            href="/#experiences"
            className={`font-display text-xs md:text-sm font-semibold tracking-wider ${ink} hover:text-accent transition-colors`}
          >
            OUR EXPERIENCES
          </Link>
          <Link
            href="/#work-with-us"
            className="bg-accent text-white px-5 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase hover:bg-accent-deep hover:shadow-[0_2px_15px_rgba(139,127,232,0.4)] active:scale-95 transition-all"
          >
            WORK WITH US
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <span
            className={`h-0.5 w-6 ${bar} transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 ${bar} transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 ${bar} transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-bg-dark/95 z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-white tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
