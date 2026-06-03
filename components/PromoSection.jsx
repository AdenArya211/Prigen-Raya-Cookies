export default function PromoSection() {
  const promoProducts = [
    { image: "/images/putri-salju.jpg", name: "Putri Salju", price: "Rp 35.000/Top" },
    { image: "/images/nastar.jpg", name: "Nastar", price: "Rp 38.000/Top" },
    { image: "/images/kastengel.jpg", name: "Kastengel Keju", price: "Rp 35.000/Top" },
    { image: "/images/choco-chips.jpg", name: "Choco Chips", price: "Rp 30.000/Top" },
    { image: "/images/kue-kacang.jpg", name: "Kue Kacang", price: "Rp 35.000/Top" },
  ];

  return (
    <section className="px-16 py-8 text-white">
      <div className="bg-[#df4f14] rounded-[35px] px-10 py-8">
        <h1
          className="text-6xl mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Promo Hari Raya
        </h1>

        <p className="text-3xl leading-relaxed">
          Rayakan momen kebersamaan bersama keluarga dengan aneka cookies favoritmu
          Nikmati penawaran spesial untuk semua varian cookies pilihan hanya dengan
          harga Rp150.000 saja!
        </p>

        <p className="text-3xl mt-3">
          Sudah termasuk :
        </p>

        <div className="grid grid-cols-5 gap-10 mt-14">
          {promoProducts.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[190px] h-[190px] object-cover rounded-2xl border-8 border-white mx-auto"
              />

              <h3 className="mt-5 text-3xl font-bold">
                {product.name}
              </h3>

              <p className="font-bold">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <a href="/product">
            <button className="mt-8 bg-[#9c3d22] text-white px-12 py-4 rounded-full text-3xl font-bold hover:bg-[#7f2f19] duration-300">
            Pesan Sekarang
            </button>
            </a>
      </div>
    </section>
  );
}