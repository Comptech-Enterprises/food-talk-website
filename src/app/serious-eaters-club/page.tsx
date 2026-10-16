import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import WorkWithUs from "@/components/WorkWithUs";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import LineReveal from "@/components/LineReveal";
import { r2 } from "@/lib/media";

export const metadata: Metadata = {
  title: "Serious Eaters Club",
  description:
    "A curated dining series by Food Talk India. Chef-led dinners that celebrate bold flavours, exceptional food and unforgettable evenings.",
};

const PAST_DINNERS = [
  {
    title: "The Tsukemen Table",
    description:
      "An Izakaya style takeover where steaming bowls of tsukemen ramen, set the tone for everything that came after.",
    images: [r2("/dinners/zuru-zuru-1.webp"), r2("/dinners/zuru-zuru-2.webp")],
  },
  {
    title: "Toddy Shop Supper",
    description:
      "Kerala’s Toddy Shops are famous for their pours, but this time it was the fiery, soulful food that did the talking.",
    images: [r2("/dinners/mahabelly-1.webp"), r2("/dinners/mahabelly-2.webp")],
  },
  {
    title: "Nose-to-Tail BBQ",
    description:
      "For Dinner Three, we slow-smoked an entire hog, nose to tail, for 24 hours straight. Nothing left behind, except bones and stories.",
    images: [r2("/dinners/h-man-1.webp"), r2("/dinners/h-man-2.webp")],
  },
  {
    title: "Khaandar Saal",
    description:
      "No bride. No baraat. Just the unforgettable spread of a Kashmiri Pandit wedding feast.",
    images: [r2("/dinners/matamaal-1.webp"), r2("/dinners/matamaal-2.webp")],
  },
];

export default function SeriousEatersClub() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg">
        {/* Hero */}
        <section className="relative min-h-[580px] sm:min-h-[640px] md:h-[85vh] md:min-h-[680px] overflow-hidden flex flex-col justify-end pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-line">
          <Parallax className="absolute inset-0" speed={0.35} scale={1.3}>
            <Image
              src="/serious-eaters-photo.webp"
              alt="Serious Eaters Club chef-led dinner setting"
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
                "SERIOUS",
                <span key="eaters" className="text-gradient">
                  EATERS
                </span>,
                "CLUB",
              ]}
            />
            <Reveal delay={600}>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-md font-sans">
                A curated dining series
                <br />
                by Food Talk India.
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
                  lines={["A DINING SERIES", "THAT CELEBRATES", <span key="highlight" className="text-gradient">BOLD FLAVOURS.</span>]}
                />
              </div>

              <div className="md:col-span-5">
                <Reveal delay={300}>
                  <p className="max-w-md text-base sm:text-lg leading-relaxed text-muted font-sans">
                    Each dinner is led by a strong culinary point of view, whether a
                    chef&apos;s philosophy, a lesser-known cuisine, or a rare technique.
                    We bring together exceptional food, memorable drinks and great
                    people for unforgettable evenings.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Past Experiences */}
        <section className="py-16 md:py-24 border-b border-line bg-bg">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-14 lg:px-16">
            <Reveal variant="left">
              <p className="font-display text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-accent inline-block" />
                PAST EXPERIENCES
              </p>
            </Reveal>

            <LineReveal
              as="h2"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-white mb-10 md:mb-14"
              lines={["PAST", <span key="experiences" className="text-gradient">EXPERIENCES.</span>]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {PAST_DINNERS.map((dinner, i) => (
                <Reveal key={dinner.title} delay={i * 150} className="h-full">
                  <div className="group flex h-full flex-col text-left rounded-2xl border border-line bg-surface p-5 hover:border-accent/40 hover:bg-surface-2 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/40 mb-4">
                      <Image
                        src={dinner.images[0]}
                        alt={dinner.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <Image
                        src={dinner.images[1]}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="dinner-alt object-cover opacity-0 transition-transform duration-700 ease-out group-hover:scale-108"
                        style={{ animationDelay: `${i * 1.5}s` }}
                      />
                    </div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-accent transition-colors leading-tight uppercase">
                      {dinner.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted font-sans">
                      {dinner.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="right" delay={400}>
              <p className="mt-12 text-right font-display text-xs sm:text-sm font-bold tracking-wider uppercase text-muted">
                AND MANY MORE TO COME.
              </p>
            </Reveal>
          </div>
        </section>

        <NewsletterCTA />

        <WorkWithUs
          eyebrow="SERIOUS EATERS CLUB"
        />
      </main>
      <Footer />
    </>
  );
}
