import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./icons.css";
import "react-quill/dist/quill.snow.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Off Plan Properties for Sale in United Arab Emirates",
  description:
    "Find the latest Off Plan Properties for sale in United Arab Emirates with the United Arab Emirates's most user-friendly off plan portal. Search new homes to buy from leading estate marketplace in United Arab Emirates.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};
async function getCities() {
  const res = await fetch("https://api.homebaba.ae/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let cities = await getCities();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar cities={cities}> </Navbar> {children} <Footer> </Footer>{" "}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>{" "}
      </body>{" "}
    </html>
  );
}
