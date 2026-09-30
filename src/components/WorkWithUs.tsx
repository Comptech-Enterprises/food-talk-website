import Link from "next/link";
import Reveal from "./Reveal";
import Doodle from "./Doodle";
import LineReveal from "./LineReveal";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="relative overflow-hidden scroll-mt-20 py-16 md:py-24">
      <Doodle kind="cocktail" className="hidden md:block top-12 right-[8%] h-16 w-16 text-fg/40" speed={-0.12} rotate={10} />
      <Doodle kind="plate" className="hidden md:block left-[4%] bottom-6 h-14 w-14 text-red/60" speed={0.16} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <LineReveal
          as="h2"
          className="display text-[clamp(2rem,5vw,4rem)] text-center md:text-left"
          lines={["WORK WITH US"]}
        />

        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <Reveal variant="left" className="w-full md:w-auto md:flex-1">
            <Link
              href="/vendors"
              className="block border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              FOR VENDORS
            </Link>
          </Reveal>
          <Reveal variant="scale" delay={300}>
            <div className="h-px w-16 md:h-12 md:w-px bg-fg/30" />
          </Reveal>
          <Reveal variant="right" className="w-full md:w-auto md:flex-1">
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
