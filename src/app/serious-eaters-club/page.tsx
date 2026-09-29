import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serious Eaters Club",
  description:
    "A curated dining series by Food Talk India. Chef-led dinners that celebrate bold flavours, exceptional food and unforgettable evenings.",
};

const PAST_DINNERS = [
  {
    title: "Zuru Zuru –\nTsukemen Dinner",
    description:
      "An Izakaya style takeover where steaming bowls of tsukemen ramen, set the tone for everything that came after.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mahabelly –\nToddy Shop Night",
    description:
      "Kerala’s Toddy Shops are famous for their pours, but this time it was the fiery, soulful food that did the talking.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "H-Man –\nA Whole Damn Hog",
    description:
      "For Dinner Three, we slow-smoked an entire hog, nose to tail, for 24 hours straight. Nothing left behind, except bones and stories.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Matamaal –\nKhaandar Saal",
    description:
      "No bride. No baraat. Just the unforgettable spread of a Kashmiri Pandit wedding feast.",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SeriousEatersClub() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
            alt="Candlelit dinner table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

          <div className="relative mx-auto max-w-7xl w-full px-6 pb-12">
            <h1 className="display text-[clamp(3rem,10vw,7rem)] text-white leading-[0.9]">
              SERIOUS
              <br />
              <span className="text-red italic">EATERS</span>
              <br />
              CLUB
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-md">
              A curated dining series
              <br />
              by Food Talk India.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="eyebrow text-red mb-4">ABOUT</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05]">
                  A dining series
                  <br />
                  that celebrates
                  <br />
                  bold flavours.
                </h2>
                <p className="mt-8 max-w-lg text-base leading-relaxed text-muted">
                  Each dinner is led by a strong culinary point of view, whether a
                  chef&apos;s philosophy, a lesser-known cuisine, or a rare technique.
                  We bring together exceptional food, memorable drinks and great
                  people for unforgettable evenings.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                    alt="Chef preparing herbs"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Past Experiences */}
        <section className="border-t border-line py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <p className="eyebrow text-red mb-10">OUR EXPERIENCES</p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PAST_DINNERS.map((dinner, i) => (
                <Reveal key={dinner.title} delay={i * 80}>
                  <div className="flex flex-col">
                    <div className="relative aspect-square overflow-hidden rounded-sm">
                      <Image
                        src={dinner.image}
                        alt={dinner.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-display text-sm font-black mt-4 whitespace-pre-line leading-tight">
                      {dinner.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {dinner.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-10 text-right font-display text-2xl md:text-3xl font-black text-red italic uppercase tracking-tight">
                AND MANY MORE.
              </p>
            </Reveal>
          </div>
        </section>

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
