"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, socials } from "@/lib/content";

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-bg/85 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Hamburger + Menu label (all breakpoints) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex items-center gap-3 text-fg"
        >
          <span className="flex h-6 w-7 flex-col items-center justify-center gap-1.5">
            <span
              className={`h-0.5 w-7 bg-fg transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-fg transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-fg transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
          <span className="text-lg font-semibold">
            {open ? "Close" : "Menu"}
          </span>
        </button>

        {/* Centered logo */}
        <a
          href="/"
          aria-label="Food Talk India — home"
          className="absolute left-1/2 -translate-x-1/2 text-fg"
        >
          <Logo />
        </a>

        {/* Spacer keeps the logo optically centered */}
        <span aria-hidden className="w-7 sm:w-24" />
      </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Left slide-in drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 flex w-[88%] max-w-sm flex-col overflow-y-auto border-r border-line bg-bg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />

        <p className="eyebrow relative px-7 pt-28">Menu</p>

        <ul className="relative flex flex-1 flex-col px-7 pt-4">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                }}
                className={`group flex items-center gap-4 border-b border-line py-5 transition-all duration-500 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
              >
                <span className="h-8 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />
                <span className="display text-3xl font-bold tracking-tight transition-colors group-hover:text-accent">
                  {item.label}
                </span>
                <span className="ml-auto text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative px-7 pb-10 pt-6">
          <a
            href="/advertise"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5"
          >
            Advertise With Us
          </a>

          <div className="mt-6 flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
