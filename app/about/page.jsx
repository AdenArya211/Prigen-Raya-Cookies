import Navbar from "../../components/Navbar";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#df4f14]">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}