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
  title: "Cookout | Food Talk India",
  description:
    "Our flagship outdoor festival built around fire, smoke and serious appetite. Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.",
};

const HIGHLIGHTS = [
  {
    title: "Open Flames",
    description: "Wood-fired pits, charcoal grills and live cooking stations bringing raw elemental heat.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Guest Pitmasters",
    description: "Culinary talent and celebrated grill masters from across the country converging over smoke.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Communal Tables",
    description: "Generous feasts made for sharing, pairing hearty cuts and smoky plates with craft drinks.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Curated Sounds",
    description: "High energy playlists, live acoustic sets and seamless outdoor festival atmosphere.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CookoutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-bg">
        {/* Hero */}
        <section className="relative min-h-[580px] sm:min-h-[640px] md:h-[85vh] md:min-h-[680px] overflow-hidden flex flex-col justify-end pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 border-b border-line">
          <Parallax className="absolute inset-0" speed={0.35} scale={1.3}>
            <Image
              src="/cookout-photo.jpg"
              alt="Cookout outdoor barbecue smoke"
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
                "COOK",
                <span key="highlight" className="text-gradient">
                  OUT.
                </span>,
              ]}
            />
            <Reveal delay={600}>
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-md font-sans">
                Some foods are meant to be eaten quietly.
                <br />
                This isn’t it.
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
                  lines={["FIRE, SMOKE &", <span key="appetite" className="text-gradient">SERIOUS APPETITE.</span>]}
                />
              </div>

              <div className="md:col-span-5">
                <Reveal delay={300}>
                  <p className="max-w-md text-base sm:text-lg leading-relaxed text-muted font-sans">
                    Our flagship outdoor festival built around fire, smoke and serious appetite.
                    Pitmasters and chefs from across the country, open flames, slow smoke, fast hands.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
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
              lines={["THE", <span key="highlight" className="text-gradient">COOKOUT EXPERIENCE.</span>]}
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

        {/* Form embedded directly on the page */}
        <WorkWithUs
          eyebrow="COOKOUT"
          titleLines={[
            "BE PART OF",
            <span key="highlight" className="text-gradient">
              COOKOUT.
            </span>,
          ]}
          intro="Want to collaborate, sponsor, or bring your kitchen to our next Cookout festival? Leave your details and we will get in touch."
        />

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
