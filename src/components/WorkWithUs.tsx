import Reveal from "./Reveal";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center gap-3.5 mb-10">
            <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-accent shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-muted uppercase">
              WORK WITH US
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex items-center gap-6">
            <a
              href="/"
              className="flex-1 border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              FOR VENDORS
            </a>
            <div className="self-stretch my-2 w-0.5 bg-fg/40 min-h-[5rem]" />
            <a
              href="/"
              className="flex-1 border border-fg bg-fg text-bg py-8 text-center text-lg md:text-xl font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
            >
              FOR BRAND PARTNERS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
