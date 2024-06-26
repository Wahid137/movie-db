import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../../movie-db/styles/output.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        <Navbar />
        <main>
          <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html >
  );
}
