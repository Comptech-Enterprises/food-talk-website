import Reveal from "./Reveal";

function FormField({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border-b border-fg/30 bg-transparent py-3 text-sm placeholder:text-muted focus:outline-none focus:border-fg"
    />
  );
}

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="display text-[clamp(2rem,5vw,4rem)]">WORK WITH US</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h3 className="font-display text-sm font-bold tracking-wider uppercase mb-6">
                VENUES AND VENDORS PARTNERSHIPS
              </h3>
              <form className="space-y-1">
                <FormField placeholder="Name" />
                <FormField placeholder="Business / Venue Name" />
                <FormField placeholder="What do you offer?" />
                <FormField placeholder="Email" />
                <FormField placeholder="Phone" />
                <button
                  type="submit"
                  className="mt-6 w-full border border-fg bg-fg text-bg py-3 text-sm font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <h3 className="font-display text-sm font-bold tracking-wider uppercase mb-6">
                BRAND PARTNERSHIPS
              </h3>
              <form className="space-y-1">
                <FormField placeholder="Name" />
                <FormField placeholder="Brand / Company Name" />
                <FormField placeholder="What are you looking to do?" />
                <FormField placeholder="Email" />
                <FormField placeholder="Phone" />
                <button
                  type="submit"
                  className="mt-6 w-full border border-fg bg-fg text-bg py-3 text-sm font-bold tracking-wider hover:bg-transparent hover:text-fg transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
