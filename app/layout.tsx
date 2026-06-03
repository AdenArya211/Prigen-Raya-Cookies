import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
} from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import AOSInit from "../components/AOSInit";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Prigen Raya Cookies",
  description: "Premium Cookies Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-[#df4f14] antialiased">
  <AOSInit />
  {children}
</body>
    </html>
  );
}