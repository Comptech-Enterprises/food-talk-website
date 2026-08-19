import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Caveman",
  description: "Eat. Drink. Talk. No fluff.",
};

export default function CavemanPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
          <div
            className="pointer-events-none absolute top-24 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                Caveman
              </p>
            </Reveal>
            <Reveal delay={50}>
              <h1 className="display text-4xl font-bold sm:text-5xl lg:text-6xl">
                We eat. We drink.{" "}
                <span className="italic text-accent">We talk.</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                No fluff. Food. Cocktails. Culture.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
