import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import FeaturedOn from "@/components/FeaturedOn";
import FeaturedVideo from "@/components/FeaturedVideo";
import InstagramPosts from "@/components/InstagramPosts";
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
        <InstagramPosts />
        <Founders />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
