import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import HowItWorks from "@/components/HowItWorks";
import NewsletterCTA from "@/components/NewsletterCTA";
import WorkWithUs from "@/components/WorkWithUs";
import PartnerLogos from "@/components/PartnerLogos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ExperiencesSection />
        <NewsletterCTA />
        <HowItWorks />
        <WorkWithUs />
        <PartnerLogos />
      </main>
      <Footer />
    </>
  );
}
