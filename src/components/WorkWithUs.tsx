import Link from "next/link";
import Reveal from "./Reveal";
import LineReveal from "./LineReveal";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <LineReveal
          as="h2"
          className="display text-[clamp(2rem,5vw,4rem)]"
          lines={["WORK WITH US"]}
        />

        <div className="mt-12 flex items-center gap-6">
          <Reveal variant="left" className="flex-1">
            <Link
              href="/vendors"
              className="block border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              FOR VENDORS
            </Link>
          </Reveal>
          <Reveal variant="scale" delay={300}>
            <div className="h-12 w-px bg-fg/30" />
          </Reveal>
          <Reveal variant="right" className="flex-1">
            <Link
              href="/brand-partners"
              className="block border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              FOR BRAND PARTNERS
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
