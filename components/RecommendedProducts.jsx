import ProductCard from "./ProductCard";

export default function RecommendedProducts() {
  const products = [
    {
      image: "/images/putri-salju.jpg",
      name: "Putri Salju",
      price: "Rp 35.000/Top",
    },
    {
      image: "/images/nastar.jpg",
      name: "Nastar",
      price: "Rp 38.000/Top",
    },
    {
      image: "/images/kastengel.jpg",
      name: "Kastengel Keju",
      price: "Rp 35.000/Top",
    },
  ];

  return (
    <section className="bg-[#df4f14] py-8">
      <h2 className="text-center text-4xl font-bold text-black mb-12 text-white">
        Rekomendasi Produk
      </h2>

      <div className="flex justify-center gap-28">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}