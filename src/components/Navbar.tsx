"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="text-fg" aria-label="Food Talk India — home">
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm font-semibold text-fg/90 transition-colors hover:text-fg"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/#advertise"
            className="inline-flex items-center rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-fg transition-all hover:border-accent hover:bg-accent hover:text-[color:var(--accent-ink)]"
            style={{ borderColor: "var(--line-strong)" }}
          >
            Advertise With Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-fg transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-fg transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-fg transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden border-line transition-[max-height] duration-400 ease-out ${
          open ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-2xl font-bold display tracking-tight"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/#advertise"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-bold text-[color:var(--accent-ink)]"
            >
              Advertise With Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
