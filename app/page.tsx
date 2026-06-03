import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import RecommendedProducts from "../components/RecommendedProducts";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#df4f14]">
      <Navbar />
      <HeroSlider />
      <RecommendedProducts />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}