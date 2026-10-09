import Link from "next/link";

const FOOTER_LINKS = [
  { label: "ABOUT US", href: "/#about" },
  { label: "OUR EXPERIENCES", href: "/#experiences" },
  { label: "WORK WITH US", href: "/#work-with-us" },
];

export default function Footer() {
  return (
    <footer className="bg-bg text-fg border-t border-line">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-display text-sm font-black tracking-tight uppercase text-fg">
            FOOD TALK INDIA
          </p>
          <p className="text-[10px] sm:text-xs text-muted font-medium tracking-wider uppercase">
            FOOD. PEOPLE. EXPERIENCES.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-fg/80 hover:text-fg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4 text-fg">
          {/* Instagram */}
          <a
            href="https://instagram.com/foodtalkindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-fg/80 hover:text-fg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com/@foodtalkindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-fg/80 hover:text-fg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/foodtalkindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg/80 hover:text-fg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
