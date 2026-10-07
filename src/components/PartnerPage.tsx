import Footer from "./Footer";
import LineReveal from "./LineReveal";
import Navbar from "./Navbar";
import PartnerForm from "./PartnerForm";
import Reveal from "./Reveal";

type PartnerPageProps = {
  eyebrow: string;
  title: string[];
  intro: string;
  points: { title: string; text: string }[];
};

export default function PartnerPage({ eyebrow, title, intro, points }: PartnerPageProps) {
  return (
    <>
      <Navbar tone="dark" />
      <main className="flex-1">
        <section className="bg-bg text-fg pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="flex items-center justify-center lg:justify-start gap-3 text-sm font-bold tracking-[0.15em] uppercase text-muted">
                {eyebrow}
              </p>
              <LineReveal
                as="h1"
                immediate
                delay={150}
                className="display mt-6 text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-center lg:text-left"
                lines={title}
              />
              <Reveal delay={600}>
                <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left text-lg text-muted">{intro}</p>
              </Reveal>

              <ul className="mt-12 space-y-8">
                {points.map((point, i) => (
                  <Reveal key={point.title} as="li" variant="left" delay={700 + i * 150}>
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-2 lg:gap-5">
                      <span className="font-display text-3xl font-black italic text-fg leading-none pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-black tracking-wide uppercase">
                          {point.title}
                        </h2>
                        <p className="mt-1 max-w-md mx-auto lg:mx-0 text-muted leading-relaxed">{point.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal variant="right" delay={300}>
              <div className="bg-bg text-fg border border-fg/15 rounded-sm p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                <h2 className="display text-[clamp(1.75rem,3vw,2.5rem)] mb-8 text-center lg:text-left">GET IN TOUCH</h2>
                <PartnerForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
