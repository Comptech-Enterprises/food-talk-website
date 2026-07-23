import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Pillars from "@/components/Pillars";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        {/*<Timeline />*/}
        <Pillars />
        <Categories />
        <WhyUs />
        <InstagramFeed />
        <Newsletter />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
