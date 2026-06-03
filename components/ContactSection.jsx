import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";

export default function ContactSection() {
  const contacts = [
    { icon: <FaEnvelope />, title: "Email", detail: "prigenrayacookies@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Alamat", detail: "Jl. Raya Prigen No. 10, Kec. Prigen, Kab. Pasuruan" },
    { icon: <FaClock />, title: "Jam Operasional", detail: "08.00 - 20.00 WIB" },
    { icon: <FaInstagram />, title: "Instagram", detail: "PrigenRayaCookies_offc" },
    { icon: <FaPhoneAlt />, title: "Nomor Telepon", detail: "0812-3456-7890" },
    { icon: <FaTiktok />, title: "Tiktok", detail: "PrigenRayaCookies_offc1" },
  ];

  return (
    <section style={{
      backgroundColor: "#d9d9d9",
      minHeight: "100vh",
      padding: "50px",
      color: "black",
    }}>
      <div data-aos="flip--left" style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Butuh Bantuan?
        </h1>
        <p style={{ fontSize: "22px", fontWeight: "600", color: "#555" }}>
          Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div data-aos="flip--left" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
      }}>
        {contacts.map((item, index) => (
          <div data-aos="flip--left" key={index} style={{
            backgroundColor: "white",
            borderRadius: "28px",
            padding: "35px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}>
            <div data-aos="flip--left" style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              backgroundColor: "#df4f14",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
            }}>
              {item.icon}
            </div>

            <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
              {item.title}
            </h2>

            <p style={{ fontSize: "18px", color: "#555", marginTop: "8px" }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}