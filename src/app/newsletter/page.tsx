import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Sign up to the Food Talk India newsletter for curated dinners, tastings and experiential dining — before they sell out.",
};

const points = [
  "Sign up to our newsletter and get to know about Food Talk Events.",
  "Curated dinners & tastings, experiential dining and more, all before they sell out.",
  "1,00,000 subscribers and growing.",
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=60)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/85 to-bg"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-24 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-48">
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                Newsletter
              </p>
            </Reveal>
            <Reveal delay={50}>
              <h1 className="display mb-12 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
                First to the{" "}
                <span className="italic text-accent">table.</span>
              </h1>
            </Reveal>

            <div className="grid gap-8 overflow-hidden rounded-3xl border border-line bg-bg-card/80 p-6 backdrop-blur-sm sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal delay={100}>
                <ul className="space-y-8">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="text-lg leading-relaxed text-fg sm:text-xl"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={180}>
                <div className="rounded-2xl border border-line bg-bg-elevated p-6 sm:p-8">
                  <NewsletterForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
