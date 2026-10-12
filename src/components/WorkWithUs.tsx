import Link from "next/link";
import Reveal from "./Reveal";

export default function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="relative scroll-mt-20 py-12 md:py-16 border-b border-line overflow-hidden bg-bg"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16 flex justify-center">
        <Reveal>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-accent text-black px-9 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl hover:bg-accent-soft hover:shadow-[0_0_25px_var(--accent-glow)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer font-display"
          >
            <span>Partner with Us</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
