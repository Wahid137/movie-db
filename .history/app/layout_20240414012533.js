import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { useState } from "react";
import "../styles/output.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie | DB",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <html lang="en">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Navbar />
        {children}
        <div id="modal-root-content" />
        <Footer />

      </body>
    </html >
  );
}
