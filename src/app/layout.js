import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import StoreProvider from "@/lib/StoreProvider";
import { Instrument_Sans, Bevan, DM_Sans, Manrope } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bevan = Bevan({
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} ${bevan.className} ${dmSans.className} ${manrope.className}`}
      >
        <NextTopLoader color="#88E755" />
        <Navbar />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
