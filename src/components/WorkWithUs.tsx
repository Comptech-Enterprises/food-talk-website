"use client";

import LineReveal from "./LineReveal";
import Reveal from "./Reveal";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="scroll-mt-20 py-16 md:py-24 border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
        <LineReveal
          as="h2"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-left text-fg mb-10 md:mb-14"
          lines={["WORK WITH US"]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {/* Column 1: Venues and Vendors */}
          <div className="md:pr-8 lg:pr-12">
            <Reveal delay={100}>
              <h3 className="font-display text-sm sm:text-base font-black tracking-tight uppercase text-left text-fg mb-4">
                VENUES AND VENDORS PARTNERSHIPS
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="text"
                  placeholder="Business / Venue Name"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="text"
                  placeholder="What do you offer?"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer mt-2"
                >
                  SUBMIT
                </button>
              </form>
            </Reveal>
          </div>

          {/* Column 2: Brand Partnerships */}
          <div className="md:border-l md:border-line md:pl-8 lg:pl-12">
            <Reveal delay={250}>
              <h3 className="font-display text-sm sm:text-base font-black tracking-tight uppercase text-left text-fg mb-4">
                BRAND PARTNERSHIPS
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="text"
                  placeholder="Brand / Company Name"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="text"
                  placeholder="What are you looking to do?"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full bg-white/60 border border-line px-4 py-2.5 text-xs sm:text-sm placeholder:text-muted/70 focus:outline-none focus:bg-white focus:border-fg transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer mt-2"
                >
                  SUBMIT
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
