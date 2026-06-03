import Navbar from "../../components/Navbar";
import CartSection from "../../components/CartSection";
import Footer from "../../components/Footer";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#d9d9d9]">
      <Navbar />
      <CartSection />
      <Footer />
    </main>
  );
}