import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Join the Table",
  description:
    "Apply to join Food Talk India. Tell us about yourself and become part of the team behind India's go-to food, cocktails and culture media house.",
};

const perks = [
  {
    title: "Creative freedom",
    copy: "Pitch it, shoot it, ship it. Good ideas win here, no matter who they come from.",
  },
  {
    title: "Eat on the job",
    copy: "Tastings, new openings, festival runs — the field work is deliciously literal.",
  },
  {
    title: "A team that gets it",
    copy: "Work with people as obsessed with food, drinks and storytelling as you are.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Full-bleed hero */}
      <section className="relative flex min-h-[85svh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=80"
          alt="A busy restaurant kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Careers · We&apos;re hiring
          </p>
          <h1 className="display max-w-4xl text-[clamp(2.5rem,8vw,6rem)]">
            Come sit at <span className="italic text-accent">our table.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fg/80">
            We&apos;re always hungry for people who love food, drinks and telling
            a good story. Find your seat below.
          </p>
          <a
            href="#apply"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
          >
            Apply now <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* Perks strip */}
      <section className="border-t border-line bg-bg-elevated">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow mb-10">Life at Food Talk</p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col bg-bg-elevated p-8">
                  <span className="display text-4xl text-accent">0{i + 1}</span>
                  <h3 className="display mt-4 text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form — centered */}
      <main id="apply" className="scroll-mt-8 border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow mb-4">Application</p>
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)]">
              Tell us your story.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              A few quick details — the more you share, the better we can place
              you.
            </p>
          </Reveal>

          <ApplicationForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
