"use client";

import { useState, type FormEvent } from "react";

const POSITIONS = [
  "Content Creator",
  "Video Editor",
  "Social Media Manager",
  "Food Writer / Reviewer",
  "Photographer / Videographer",
  "Business & Partnerships",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-line bg-bg-card px-4 py-3.5 text-fg outline-none transition-colors placeholder:text-muted-dim focus:border-accent";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted";

type Status = "idle" | "submitting" | "done" | "error";

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const position = data.get("position") as string;

    if (!name || !email || !position) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email and the role you want.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("That email doesn't look right.");
      return;
    }

    setStatus("submitting");

    // TODO: wire to Zoho CRM (create a Lead/Candidate record) via an API route.
    // For now, simulate a successful submit.
    await new Promise((r) => setTimeout(r, 700));

    setStatus("done");
    form.reset();
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-bg-card p-10 text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-[color:var(--accent-ink)]">
          ✓
        </div>
        <h2 className="display text-2xl">Application received!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thanks for applying. Our team will be in touch if there&apos;s a match.
          Now go grab something delicious. 🍽️
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-line-strong px-6 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="overflow-hidden rounded-3xl border border-line bg-bg-elevated"
    >
        {/* Fields */}
        <div className="p-6 sm:p-10">
          {/* Section: About you */}
          <p className="eyebrow mb-5">01 — About you</p>
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name *
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email *
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." className={inputClass} />
            </div>
            <div>
              <label htmlFor="portfolio" className={labelClass}>
                Portfolio / LinkedIn
              </label>
              <input id="portfolio" name="portfolio" type="url" placeholder="https://..." className={inputClass} />
            </div>
          </div>

          {/* Section: The role */}
          <p className="eyebrow mb-5 mt-10">02 — The role</p>
          <div className="grid gap-5">
            <div>
              <label htmlFor="position" className={labelClass}>
                Role you want *
              </label>
              <select id="position" name="position" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a role…
                </option>
                {POSITIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="experience" className={labelClass}>
                Years of experience
              </label>
              <input id="experience" name="experience" type="number" min="0" max="50" placeholder="e.g. 3" className={inputClass} />
            </div>
          </div>

          {/* Section: Your work */}
          <p className="eyebrow mb-5 mt-10">03 — Your work</p>
          <div className="grid gap-5">
            <div>
              <label htmlFor="resume" className={labelClass}>
                Resume (PDF / DOC)
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-xl border border-line bg-bg-card px-4 py-3 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[color:var(--accent-ink)] hover:file:opacity-90"
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Why Food Talk?
              </label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us a bit about yourself and why you'd be a great fit…" className={`${inputClass} resize-y`} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p
              aria-live="polite"
              className={`text-sm ${status === "error" ? "text-red-400" : "text-muted-dim"}`}
            >
              {status === "error" ? errorMsg : "* Required fields"}
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-xl bg-accent px-8 py-3.5 text-sm font-bold text-[color:var(--accent-ink)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Submit application"}
            </button>
          </div>
        </div>
    </form>
  );
}
