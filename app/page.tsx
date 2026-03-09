import Collections from "@/components/Collections";
import FeaturedWatches from "@/components/FeaturedWatches";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import WatchShowcase from "@/components/WatchShowcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedWatches />
      <Collections />
      <WatchShowcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
