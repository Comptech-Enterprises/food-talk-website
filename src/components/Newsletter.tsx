"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "done" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    // No backend wired up yet — accept a valid email optimistically.
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("done");
    form.reset();
  }

  return (
    <section
      id="newsletter"
      className="relative scroll-mt-24 overflow-hidden bg-bg"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="eyebrow mb-6">Newsletter</p>
          <h2 className="display text-[clamp(2.25rem,5vw,4rem)] italic">
            Sign up &amp; get the good stuff first.
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Curated dining and drinking recommendations, insider lists, and the
            first word on Food Talk Events — straight to your inbox. No spam,
            just flavour.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-line bg-bg-card p-7 sm:p-9"
          >
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              onChange={() => status !== "idle" && setStatus("idle")}
              className="w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-fg outline-none transition-colors placeholder:text-muted-dim focus:border-accent"
            />

            <label
              htmlFor="city"
              className="mb-2 mt-5 block text-xs font-semibold uppercase tracking-[0.15em] text-muted"
            >
              Your city <span className="text-muted-dim">(optional)</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Mumbai, Delhi, Bangalore…"
              className="w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-fg outline-none transition-colors placeholder:text-muted-dim focus:border-accent"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5"
            >
              Sign me up
            </button>

            <p
              aria-live="polite"
              className={`mt-4 min-h-5 text-sm ${
                status === "done"
                  ? "text-accent"
                  : status === "error"
                    ? "text-red-400"
                    : "text-muted-dim"
              }`}
            >
              {status === "done"
                ? "You're in! Check your inbox soon. 🍽️"
                : status === "error"
                  ? "Please enter a valid email address."
                  : "We'll never share your email."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
