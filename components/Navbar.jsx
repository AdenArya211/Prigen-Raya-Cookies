"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import Image from "next/image";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      router.push(
        `/product?search=${search}`
      );
    }
  };

  return (
    <nav className="bg-[#df4f14] px-10 py-5 flex items-center justify-between">

      {/* Logo */}
      <div className="bg-white p-3 rounded-[30px] shadow-lg">
        <Image
          src="/images/logo.png"
          width={120}
          height={120}
          alt="Logo"
          className="rounded-full"
        />
      </div>

      {/* Search + Menu */}
      <div className="flex flex-col items-center gap-5">

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="relative"
        >
          <input
            type="text"
            placeholder="I'm shopping for..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-[700px]
              bg-[#e7c7b9]
              rounded-full
              px-6
              py-4
              outline-none
              text-xl
              text-black
              placeholder:text-gray-600
            "
          />

          <button type="submit">
            <FaSearch className="absolute right-6 top-5 text-3xl text-gray-700 hover:text-black duration-300" />
          </button>
        </form>

        {/* Menu */}
        <ul className="flex gap-14 font-bold text-2xl">
          <a href="/">Home</a>

          <a href="/product">
            Product
          </a>

          <a href="/promo">
            Promo
          </a>

          <a href="/about">
            About Us
          </a>

          <a href="/contact">
            Contact Us
          </a>
        </ul>
      </div>

      {/* Cart */}
      <a href="/cart">
        <FaShoppingCart className="text-5xl text-white cursor-pointer hover:text-black duration-300" />
      </a>
    </nav>
  );
}