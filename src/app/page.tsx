import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import FeaturedOn from "@/components/FeaturedOn";
import FeaturedVideo from "@/components/FeaturedVideo";
import Pillars from "@/components/Pillars";
import Founders from "@/components/Founders";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        {/*<Timeline />*/}
        <FeaturedOn />
        <FeaturedVideo />
        <Pillars />
        <Founders />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
