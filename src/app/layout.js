import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import StoreProvider from "@/lib/StoreProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const instrumentSans = Instrument_Sans({
  subsets: ["latin"], // Add subsets if needed
  weight: ["400", "700"], // Use specific weights if supported
  style: ["normal", "italic"], // Optional: specify styles
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className}`}>
      <ToastContainer hideProgressBar={true} theme="colored"/>
        <StoreProvider> {children}</StoreProvider>
      </body>
    </html>
  );
}
