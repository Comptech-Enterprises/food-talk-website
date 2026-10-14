import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import WorkWithUs from "@/components/WorkWithUs";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import LineReveal from "@/components/LineReveal";

export const metadata: Metadata = {
  title: "Liquid Studio | Food Talk India",
  description:
    "A recurring nightlife format built around drink and sound. Guest bartenders, curated sound, intimate spaces. A studio, not a stage.",
};

const HIGHLIGHTS = [
  {
    title: "Guest Bartenders",
    description: "Celebrated mixologists and bartenders from premier bars crafting bespoke cocktail menus.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Curated Sound",
    description: "Analog vinyl selections, deep grooves, and intentional soundscapes built for conversation.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Intimate Spaces",
    description: "Strictly limited capacity rooms where energy, cocktails and atmosphere stay focused.",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rare Pours",
    description: "Micro-batch spirits, bespoke bitters, and unexpected flavour combinations you won't find on usual menus.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LiquidStudioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg">
        {/* Hero */}
        <section className="relative min-h-[580px] sm:min-h-[640px] md:h-[85vh] md:min-h-[680px] overflow-hidden flex flex-col justify-end pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-line">
          <Parallax className="absolute inset-0" speed={0.35} scale={1.3}>
            <Image
              src="/liquid-studio-photo.jpg"
              alt="Liquid Studio cocktail bar setting"
              fill
              priority
              sizes="100vw"
              className="object-cover kenburns"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35 pointer-events-none" />

          <Parallax className="relative mx-auto max-w-[1600px] w-full px-6 sm:px-10 md:px-14 lg:px-16" speed={-0.18} fadeOut>
            <LineReveal
              as="h1"
              immediate
              delay={200}
              className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase tracking-tight text-white leading-[0.95]"
              lines={[
                "LIQUID",
                <span key="highlight" className="text-gradient">
                  STUDIO.
                </span>,
              ]}
            />
            <Reveal delay={600}>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-md font-sans">
                Not every night needs a dance floor.
                <br />
                Some need a bar worth standing at.
              </p>
            </Reveal>
          </Parallax>
        </section>

        {/* About */}
        <section className="py-20 md:py-28 border-b border-line bg-bg">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                ABOUT
              </p>
            </Reveal>

            <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-10 md:gap-16 items-end">
              <div className="md:col-span-7">
                <LineReveal
                  as="h2"
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
                  lines={["DRINK, SOUND &", <span key="intimate" className="text-gradient">INTIMATE SPACES.</span>]}
                />
              </div>

              <div className="md:col-span-5">
                <Reveal delay={300}>
                  <p className="max-w-md text-base sm:text-lg leading-relaxed text-muted font-sans">
                    A recurring nightlife format built around drink and sound.
                    Guest bartenders, curated sound, intimate spaces. A studio, not a stage.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 md:py-24 border-b border-line bg-bg">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                EXPERIENCE
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-white mb-10 md:mb-14"
              lines={["THE", <span key="highlight" className="text-gradient">STUDIO EXPERIENCE.</span>]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal key={item.title} delay={i * 150}>
                  <div className="group flex flex-col text-left rounded-2xl border border-line bg-surface p-5 hover:border-accent/40 hover:bg-surface-2 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/40 mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-accent transition-colors leading-tight uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <NewsletterCTA />

        {/* Form embedded directly on the page */}
        <WorkWithUs
          eyebrow="LIQUID STUDIO"
          intro="Interested in bringing Liquid Studio to your venue, featuring your spirits brand, or joining our guest list? Leave your details and we will get in touch."
        />
      </main>
      <Footer />
    </>
  );
}
