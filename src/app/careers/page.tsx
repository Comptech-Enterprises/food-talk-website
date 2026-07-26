import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Join the Table",
  description:
    "Apply to join Food Talk India. Tell us about yourself and become part of the team behind India's go-to food, cocktails and culture media house.",
};

const perks = [
  {
    icon: "01",
    title: "Creative freedom",
    description:
      "Pitch it, shoot it, ship it. Good ideas win here, no matter who they come from — every voice at the table counts.",
  },
  {
    icon: "02",
    title: "Eat on the job",
    description:
      "Tastings, new openings, festival runs — the field work is deliciously literal. Your feed becomes your office.",
  },
  {
    icon: "03",
    title: "A team that gets it",
    description:
      "Work with people as obsessed with food, drinks and storytelling as you are. No explaining why the right shot matters.",
  },
  {
    icon: "04",
    title: "Build a brand people love",
    description:
      "Millions follow what we make. You won't push content into a void — you'll see real people engage with your work every single day.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
          {/* header — two-column: text left, email CTA right */}
          <div className="mb-20 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <p className="eyebrow mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  Careers
                </p>
              </Reveal>
              <Reveal delay={50}>
                <h1 className="display text-4xl font-bold sm:text-5xl lg:text-6xl">
                  Come sit at <span className="italic text-accent">our table.</span>
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                  We&apos;re always hungry for people who love food, drinks and
                  telling a good story. No open roles listed — if you&apos;re
                  good, we&apos;ll find a seat.
                </p>
              </Reveal>
            </div>

            {/* email CTA card */}
            <Reveal delay={150}>
              <div className="flex flex-col items-center rounded-2xl border border-line bg-bg-elevated px-8 py-10 text-center backdrop-blur-sm">
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  Send us your portfolio, a note about yourself, and the role
                  you see yourself in.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=hr@theanthem.in&su=Application%20—%20Food%20Talk%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-full border border-accent/40 px-8 py-4 text-lg font-semibold text-accent transition-all hover:border-accent hover:shadow-[0_0_40px_rgba(var(--accent-rgb,255,107,0),0.15)]"
                >
                  <span className="relative z-10">hr@theanthem.in</span>
                  <span className="relative z-10 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                  <span className="absolute inset-0 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <p className="mt-4 text-xs text-muted-dim">
                  We read every email. If there&apos;s a fit, you&apos;ll hear
                  back within a week.
                </p>
              </div>
            </Reveal>
          </div>

          {/* perks grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {perks.map((perk, i) => (
              <Reveal key={perk.icon} delay={50 * i} className="h-full">
                <div className="group relative flex h-full gap-5 rounded-2xl border border-line bg-bg-elevated p-6 transition-all hover:-translate-y-1 hover:border-accent/30 sm:p-8">
                  <span className="shrink-0 display text-3xl font-bold text-accent/20 transition-colors group-hover:text-accent/50">
                    {perk.icon}
                  </span>
                  <div>
                    <h3 className="mb-2 display text-lg font-semibold">
                      {perk.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
