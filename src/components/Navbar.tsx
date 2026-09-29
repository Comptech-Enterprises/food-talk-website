"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "ABOUT US", href: "/#about" },
  { label: "OUR EXPERIENCES", href: "/#experiences" },
  { label: "WORK WITH US", href: "/#work-with-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Food Talk India"
            width={120}
            height={40}
            className="h-12 md:h-14 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-base md:text-lg font-bold tracking-wider text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
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
