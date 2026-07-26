import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import AdvertiseForm from "@/components/AdvertiseForm";

export const metadata: Metadata = {
  title: "Advertise With Us",
  description:
    "Partner with Food Talk India — reach 2M+ engaged food lovers across Instagram, YouTube and beyond.",
};

const stats = [
  { value: "2M+", label: "Followers" },
  { value: "5M+", label: "Monthly reach" },
  { value: "8%+", label: "Avg. engagement" },
];

const formats = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="6" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="23" cy="9" r="1.5" fill="var(--accent)" stroke="none" />
      </svg>
    ),
    title: "Sponsored Reels & Posts",
    copy: "Native content that feels organic — shot, styled and edited by our team so it resonates with a food-obsessed audience.",
    tall: true,
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="4" />
        <polygon points="13 11 21 16 13 21" fill="var(--accent)" stroke="none" />
      </svg>
    ),
    title: "Video Integrations",
    copy: "Seamless brand features woven into our long-form reviews and signature shows — millions of views, zero hard-sell.",
    tall: false,
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3 6 7 1-5 5 1.2 7L16 19.5 9.8 23 11 16 6 11l7-1z" />
      </svg>
    ),
    title: "Brand Takeovers",
    copy: "Full-day or week-long account takeovers that put your brand at the centre of our feed, stories and community conversations.",
    tall: false,
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 4" />
      </svg>
    ),
    title: "Event Collaborations",
    copy: "Live tastings, pop-ups and experiential events co-hosted with your brand — bringing the audience off-screen and to the table.",
    tall: true,
  },
];

const brands = [
  "Swiggy",
  "Zomato",
  "ITC Hotels",
  "Diageo",
  "Coca-Cola",
  "Nestlé",
  "PepsiCo",
  "Uber Eats",
];

export default function AdvertisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── Editorial Hero ── */}
        <section className="relative overflow-hidden border-b border-line">
          {/* diagonal amber accent stripe */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[10%] top-0 h-full w-[45%] opacity-[0.04]"
            style={{
              background: "linear-gradient(135deg, transparent 20%, var(--accent) 50%, transparent 80%)",
              transform: "skewX(-8deg)",
            }}
          />
          {/* fine dot grain */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(rgba(232,178,58,0.1) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }} />
          </div>
          {/* decorative thin lines */}
          <div aria-hidden className="pointer-events-none absolute right-[15%] top-[20%] h-[200px] w-px bg-accent/10" />
          <div aria-hidden className="pointer-events-none absolute right-[25%] top-[35%] h-[140px] w-px bg-accent/5" />

          <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-48">
            <Reveal>
              <p className="eyebrow mb-8 text-accent/70">Partner With Us</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display max-w-5xl text-[clamp(2.5rem,7vw,6rem)] leading-[0.9]">
                Put your brand<br className="hidden sm:block" />
                where{" "}
                <span className="italic text-accent">India eats.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Food Talk India reaches millions of food lovers every month.
                We make brands part of the conversation people already want to have.
              </p>
            </Reveal>

            {/* stat pills */}
            <Reveal delay={240}>
              <div className="mt-12 flex flex-wrap gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="inline-flex items-baseline gap-2.5 rounded-full border border-line bg-bg-card/60 px-5 py-3 backdrop-blur-sm sm:px-6 sm:py-3.5"
                  >
                    <span className="display text-xl text-accent sm:text-2xl">
                      <CountUp value={s.value} />
                    </span>
                    <span className="text-xs text-muted sm:text-sm">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Brand marquee strip ── */}
        <section className="border-b border-line bg-bg-elevated/50 py-6">
          <div className="marquee overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12">
              {[...brands, ...brands].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted-dim/60"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partnership formats — staggered masonry ── */}
        <section className="border-b border-line bg-bg">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow mb-5 text-accent/70">What We Offer</p>
                  <h2 className="display max-w-md text-[clamp(1.8rem,4.5vw,3.5rem)]">
                    Formats that<br />
                    actually{" "}
                    <span className="italic text-accent">work.</span>
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                    Every campaign is bespoke — we pick the format that fits your brand story, not the other way around.
                  </p>
                </Reveal>
              </div>

              {/* masonry grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {formats.map((f, i) => (
                  <Reveal key={f.title} delay={100 + i * 120}>
                    <div
                      className={`adv-format-card group relative overflow-hidden rounded-2xl border border-line bg-bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 ${
                        f.tall ? "p-8 sm:p-10" : "p-7 sm:p-8"
                      }`}
                    >
                      {/* top accent line */}
                      <div className="absolute left-8 right-8 top-0 h-px bg-accent/0 transition-all duration-500 group-hover:bg-accent/30" />
                      <div className="mb-5 inline-flex rounded-xl border border-line bg-bg-elevated p-3 transition-colors group-hover:border-accent/20">
                        {f.icon}
                      </div>
                      <h3 className="display mb-3 text-lg sm:text-xl">{f.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{f.copy}</p>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(232,178,58,0.06), transparent 65%)" }}
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pull quote divider ── */}
        <section className="border-b border-line bg-bg-elevated/30">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <p className="display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug text-fg/90">
                  "We don't do ads.{" "}
                  <span className="text-accent">We tell stories</span> — your
                  brand just happens to be the hero."
                </p>
                <footer className="mt-8 text-sm text-muted">
                  — The Food Talk India Team
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ── Contact form — editorial tear-out style ── */}
        <section className="bg-bg">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-start">
              <div>
                <Reveal>
                  <p className="eyebrow mb-5 text-accent/70">Get In Touch</p>
                  <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">
                    Let's cook up<br />
                    something{" "}
                    <span className="italic text-accent">great.</span>
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                    Fill in the form and our partnerships team will get back
                    to you within 24 hours. Or drop us a line directly:
                  </p>
                  <a
                    href="mailto:info@theanthem.in"
                    className="mt-5 inline-flex items-center gap-2.5 text-accent transition-opacity hover:opacity-80"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="16" height="12" rx="3" />
                      <path d="M2 7l8 5 8-5" />
                    </svg>
                    info@theanthem.in
                  </a>
                </Reveal>
              </div>

              <Reveal delay={200}>
                <div className="adv-form-tearout relative rounded-2xl border border-line bg-bg-card p-8 sm:p-10">
                  {/* decorative corner accent */}
                  <div aria-hidden className="pointer-events-none absolute -left-px -top-px h-16 w-px bg-accent/40" />
                  <div aria-hidden className="pointer-events-none absolute -left-px -top-px h-px w-16 bg-accent/40" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-16 w-px bg-accent/40" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-px w-16 bg-accent/40" />
                  <AdvertiseForm />
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
