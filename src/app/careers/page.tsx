import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers — Join the Table",
  description:
    "Apply to join Food Talk India. Tell us about yourself and become part of the team behind India's go-to food, cocktails and culture media house.",
};

export default function CareersPage() {
  return (
    <>
      {/* lightweight page header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="text-fg" aria-label="Food Talk India — home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-muted transition-colors hover:text-fg"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left: intro text */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">Careers</p>
            <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)]">
              Come sit at
              <br />
              <span className="italic text-accent">our table.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              We&apos;re always hungry for people who love food, drinks and
              telling a good story. Drop your details below — every
              application lands straight with our team.
            </p>
          </div>

          {/* Right: form */}
          <ApplicationForm />
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-10 text-xs text-muted-dim sm:px-8">
          © {new Date().getFullYear()} Digital Food Talk Pvt. Ltd. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
