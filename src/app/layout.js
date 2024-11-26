import Navbar from "@/components/Navbar";
import "./globals.css";
import { Instrument_Sans, Bevan } from "next/font/google";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bevan = Bevan({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} ${bevan.className}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
