import Link from "next/link";
import LineReveal from "./LineReveal";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="scroll-mt-20 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <LineReveal
          as="h2"
          className="display text-[clamp(2rem,5vw,4rem)] text-center md:text-left"
          lines={["WORK WITH US"]}
        />

        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:flex-1">
            <Link
              href="/vendors"
              className="block border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              CONTACT US
            </Link>
          </div>
          <div className="h-px w-16 md:h-12 md:w-px bg-fg/30" />
          <div className="w-full md:flex-1">
            <Link
              href="/brand-partners"
              className="block border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              WORK WITH US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
