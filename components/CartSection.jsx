"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartSection() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);
  }, []);

  const updateCart = (updated) => {
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    }

    updateCart(updated);
  };

  const toggleSelect = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const deleteSelectedItems = () => {
    const updated = cartItems.filter(
      (_, index) => !selectedItems.includes(index)
    );

    updateCart(updated);
    setSelectedItems([]);
  };

  return (
    <section style={{ padding: "24px", color: "black" }}>
      <div style={headerStyle}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          My Cart
        </h1>

        <div style={{ display: "flex", gap: "16px" }}>
          {selectedItems.length > 0 && (
            <button onClick={deleteSelectedItems} style={deleteButton}>
              <FaTrash />
              Hapus
            </button>
          )}

          <button style={checkoutButton}>
            Checkout
          </button>
        </div>
      </div>

      <div style={cartListStyle}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} style={cartCardStyle}>
              <div style={leftContentStyle}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(index)}
                  onChange={() => toggleSelect(index)}
                  style={{ width: "28px", height: "28px" }}
                />

                <img
                  src={item.image}
                  alt={item.name}
                  style={imageStyle}
                />

                <div>
                  <h2 style={{ fontSize: "30px" }}>{item.name}</h2>
                  <p style={{ fontSize: "30px", marginTop: "18px" }}>
                    {item.price}
                  </p>
                </div>
              </div>

              <div style={qtyWrapper}>
                <button onClick={() => decreaseQty(index)} style={qtyButton}>
                  -
                </button>

                <span style={qtyNumber}>{item.qty}</span>

                <button onClick={() => increaseQty(index)} style={qtyButton}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Keranjang masih kosong.
          </p>
        )}
      </div>
    </section>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
};

const checkoutButton = {
  backgroundColor: "#df4f14",
  padding: "12px 48px",
  borderRadius: "999px",
  fontSize: "30px",
  fontWeight: "bold",
};

const deleteButton = {
  backgroundColor: "#b91c1c",
  color: "white",
  padding: "12px 28px",
  borderRadius: "999px",
  fontSize: "24px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const cartListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
};

const cartCardStyle = {
  backgroundColor: "#bdbdbd",
  borderRadius: "25px",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const leftContentStyle = {
  display: "flex",
  alignItems: "center",
  gap: "28px",
};

const imageStyle = {
  width: "140px",
  height: "140px",
  objectFit: "cover",
  borderRadius: "18px",
};

const qtyWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const qtyButton = {
  backgroundColor: "white",
  padding: "4px 16px",
  borderRadius: "8px",
  fontSize: "24px",
  fontWeight: "bold",
};

const qtyNumber = {
  backgroundColor: "white",
  padding: "4px 14px",
  borderRadius: "8px",
  fontSize: "24px",
};