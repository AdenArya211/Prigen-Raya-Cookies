import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#d9d9d9]">
      <Navbar />

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>

      <Footer />
    </main>
  );
}