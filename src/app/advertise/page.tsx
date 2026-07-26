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
  { value: "12+", label: "Cities" },
  { value: "8%+", label: "Avg. engagement" },
];

const formats = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="6" />
        <circle cx="16" cy="16" r="6" />
        <circle cx="23" cy="9" r="1.5" fill="var(--accent)" stroke="none" />
      </svg>
    ),
    title: "Sponsored Reels & Posts",
    copy: "Native content that feels organic — shot, styled and edited by our team so it resonates with a food-obsessed audience.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="26" height="20" rx="4" />
        <polygon points="13 11 21 16 13 21" fill="var(--accent)" stroke="none" />
      </svg>
    ),
    title: "Video Integrations",
    copy: "Seamless brand features woven into our long-form reviews and signature shows — millions of views, zero hard-sell.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3 6 7 1-5 5 1.2 7L16 19.5 9.8 23 11 16 6 11l7-1z" />
      </svg>
    ),
    title: "Brand Takeovers",
    copy: "Full-day or week-long account takeovers that put your brand at the centre of our feed, stories and community conversations.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 10v6l4 4" />
      </svg>
    ),
    title: "Event Collaborations",
    copy: "Live tastings, pop-ups and experiential events co-hosted with your brand — bringing the audience off-screen and to the table.",
  },
];

export default function AdvertisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-line">
          {/* decorative grain */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(rgba(232,178,58,0.08) 1px, transparent 1px)",
              backgroundSize: "4px 4px",
            }} />
          </div>
          {/* decorative accent arc */}
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-accent/10" />
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-accent/5" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
            <Reveal>
              <p className="eyebrow mb-6">Partner With Us</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display max-w-4xl text-[clamp(2.2rem,6vw,5rem)]">
                Put your brand where{" "}
                <span className="italic text-accent">India eats.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                Food Talk India reaches millions of food lovers every month. Whether it's a reel, a review, or a live event — we make brands part of the conversation people already want to have.
              </p>
            </Reveal>

            {/* stats ribbon */}
            <Reveal delay={240}>
              <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-bg-card px-6 py-7 text-center sm:px-8 sm:py-9">
                    <dt className="display text-3xl text-accent sm:text-4xl">
                      <CountUp value={s.value} />
                    </dt>
                    <dd className="mt-2 text-xs text-muted sm:text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Partnership formats ── */}
        <section className="border-b border-line bg-bg">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <Reveal>
              <p className="eyebrow mb-5">What We Offer</p>
              <h2 className="display max-w-3xl text-[clamp(1.8rem,4.5vw,3.5rem)]">
                Formats that actually <span className="italic text-accent">work.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {formats.map((f, i) => (
                <Reveal key={f.title} delay={100 + i * 100}>
                  <div className="group relative h-full rounded-2xl border border-line bg-bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 sm:p-10">
                    <div className="mb-5 inline-flex rounded-xl border border-line bg-bg-elevated p-3 transition-colors group-hover:border-accent/20">
                      {f.icon}
                    </div>
                    <h3 className="display mb-3 text-xl sm:text-2xl">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">{f.copy}</p>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "radial-gradient(circle at 30% 20%, rgba(232,178,58,0.05), transparent 60%)" }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact form ── */}
        <section className="bg-bg">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <Reveal>
                  <p className="eyebrow mb-5">Get In Touch</p>
                  <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">
                    Let's cook up something{" "}
                    <span className="italic text-accent">great.</span>
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    Fill in the form and our partnerships team will get back to you within 24 hours. Or drop us a line directly:
                  </p>
                  <a
                    href="mailto:info@theanthem.in"
                    className="mt-4 inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
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
                <div className="rounded-2xl border border-line bg-bg-card p-8 sm:p-10">
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
