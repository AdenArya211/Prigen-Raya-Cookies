"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const variants = [
    { image: "/images/putri-salju.jpg", name: "Putri Salju", price: "Rp 35.000/Top" },
    { image: "/images/nastar.jpg", name: "Nastar", price: "Rp 38.000/Top" },
    { image: "/images/kastengel.jpg", name: "Kastengel Keju", price: "Rp 35.000/Top" },
    { image: "/images/choco-chips.jpg", name: "Choco Chips", price: "Rp 30.000/Top" },
    { image: "/images/kue-kacang.jpg", name: "Kue Kacang", price: "Rp 35.000/Top" },
    { image: "/images/paket-lebaran.jpg", name: "Paket Lebaran", price: "Rp 90.000" },
    { image: "/images/paket-mahasiswa.jpg", name: "Paket Mahasiswa", price: "Rp 60.000" },
  ];

  const filteredProducts = variants.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="px-10 py-8 text-black">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold">Prigen Raya Cookies</h1>
        <p className="text-2xl mt-2">
          Produk dibuat dengan bahan sederhana namun tetap memperhatikan kualitas rasa dan kebersihan.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-5">
        {search ? `Hasil pencarian: ${search}` : "Daftar Produk"}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-5 gap-10">
          {filteredProducts.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <p className="text-2xl font-semibold">
          Produk tidak ditemukan.
        </p>
      )}
    </section>
  );
}