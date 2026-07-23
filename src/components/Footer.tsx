import Logo from "./Logo";
import { contact, nav, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="socials" className="scroll-mt-24 border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#top" className="text-fg" aria-label="Food Talk India — home">
              <Logo />
            </a>
            <p className="mt-6 max-w-sm text-2xl font-semibold leading-tight text-fg">
              We eat. We drink. We talk.
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              India&apos;s go-to for food, cocktails and culture with flavour.
            </p>

            <a
              href="/profile.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:bg-accent hover:text-[color:var(--accent-ink)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download Company Profile
            </a>

            <div className="mt-8 space-y-2 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-fg transition-colors hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-fg transition-colors hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-muted" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                </svg>
                {contact.phone}
              </a>
            </div>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-semibold text-fg transition-colors hover:text-accent"
                  >
                    <span
                      aria-hidden
                      className="text-accent opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      →
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#advertise"
                  className="group inline-flex items-center gap-2 font-semibold text-fg transition-colors hover:text-accent"
                >
                  <span
                    aria-hidden
                    className="text-accent opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    →
                  </span>
                  Advertise With Us
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social channels">
            <p className="eyebrow mb-5">Find us</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-line pb-3 text-fg transition-colors hover:text-accent"
                  >
                    <span className="font-semibold">{s.label}</span>
                    <span className="flex items-center gap-2 text-sm text-muted group-hover:text-accent">
                      {s.handle}
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Partner wordmarks (from the original footer) */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-10 text-muted-dim">
          <span className="text-xs uppercase tracking-[0.2em]">
            Part of the family
          </span>
          <span className="display text-lg tracking-[0.25em] text-muted">
            ANTHEM
          </span>
          <span className="display text-lg tracking-[0.15em] text-muted">
            EXPLORERS CLUB
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-xs text-muted-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Food Talk Pvt. Ltd. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="transition-colors hover:text-fg">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-fg">
              Terms
            </a>
            <a href="#advertise" className="transition-colors hover:text-fg">
              Advertise
            </a>
            <a href="/careers" className="transition-colors hover:text-fg">
              Careers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
