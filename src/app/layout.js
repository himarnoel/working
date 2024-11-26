import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import StoreProvider from "@/lib/StoreProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className}`}>
        <Navbar/>
          <ToastContainer hideProgressBar={true} theme="colored"/>
          <StoreProvider> {children}</StoreProvider>
        <Footer/>
      </body>
    </html>
  );
}
