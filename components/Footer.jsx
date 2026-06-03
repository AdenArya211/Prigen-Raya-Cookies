import {
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#8f2f10",
        color: "white",
        marginTop: "60px",
        padding: "50px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Company */}
        <div style={{ maxWidth: "350px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "18px",
            }}
          >
            Prigen Raya Cookies
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Menghadirkan cookies premium dengan cita rasa
            khas dan kualitas terbaik untuk menemani setiap
            momen spesial Anda.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "18px",
            }}
          >
            Contact
          </h2>

          <div style={footerItem}>
            <FaEnvelope />
            <span>prigenrayacookies@gmail.com</span>
          </div>

          <div style={footerItem}>
            <FaPhoneAlt />
            <span>0812-3456-7890</span>
          </div>

          <div style={footerItem}>
            <FaMapMarkerAlt />
            <span>Prigen, Pasuruan</span>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "18px",
            }}
          >
            Social Media
          </h2>

          <div style={footerItem}>
            <FaInstagram />
            <span>@PrigenRayaCookies_offc</span>
          </div>

          <div style={footerItem}>
            <FaTiktok />
            <span>@PrigenRayaCookies_offc1</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        © 2026 Prigen Raya Cookies. All Rights Reserved.
      </div>
    </footer>
  );
}

const footerItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "14px",
  fontSize: "18px",
};