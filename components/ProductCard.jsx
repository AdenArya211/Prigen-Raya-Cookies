"use client";

import { useState } from "react";

export default function ProductCard({ image, name, price }) {
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = () => {
    const product = {
      name,
      price,
      image,
      qty: 1,
    };

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.name === product.name
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].qty += 1;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "190px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "18px",
            border: "8px solid white",
            margin: "0 auto",
          }}
        />

        <h3
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "16px",
          }}
        >
          {name}
        </h3>

        <p style={{ fontWeight: "bold" }}>
          {price}
        </p>

        <button
          onClick={addToCart}
          style={{
            marginTop: "12px",
            backgroundColor: "#df4f14",
            color: "white",
            padding: "10px 24px",
            borderRadius: "999px",
            fontWeight: "bold",
          }}
        >
          Tambah
        </button>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            color: "black",
            padding: "30px 45px",
            borderRadius: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            zIndex: 9999,
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          ✅ {name} berhasil dimasukkan ke keranjang!
        </div>
      )}
    </>
  );
}