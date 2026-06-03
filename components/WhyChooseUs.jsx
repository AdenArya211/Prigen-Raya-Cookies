import { FaCookieBite, FaGift, FaHeart } from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <FaCookieBite />,
      title: "Rasa Premium",
      desc: "Dibuat dengan bahan pilihan dan resep berkualitas untuk menghasilkan cookies yang lezat.",
    },
    {
      icon: <FaGift />,
      title: "Cocok Untuk Hadiah",
      desc: "Produk kami cocok dijadikan hampers, suguhan tamu, maupun hadiah spesial.",
    },
    {
      icon: <FaHeart />,
      title: "Dibuat Dengan Cinta",
      desc: "Setiap cookies dibuat dengan proses higienis dan penuh perhatian terhadap kualitas.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#d9d9d9", padding: "70px 60px", color: "black" }}>
      <h2 style={{ textAlign: "center", fontSize: "42px", fontWeight: "bold", marginBottom: "45px" }}>
        Kenapa Memilih Kami?
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", maxWidth: "1100px", margin: "0 auto" }}>
        {items.map((item, index) => (
          <div key={index} style={{ backgroundColor: "white", padding: "35px", borderRadius: "28px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}>
            <div style={{ fontSize: "50px", color: "#df4f14", marginBottom: "18px", display: "flex", justifyContent: "center" }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: "26px", fontWeight: "bold" }}>{item.title}</h3>
            <p style={{ fontSize: "18px", marginTop: "12px", color: "#555" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}