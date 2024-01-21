import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pre Construction Developments for Sale in United Arab Emirates",
  description: "Find the latest Pre Construction  developments for sale in United Arab Emirates with the United Arab Emirates's most user-friendly pre construction portal. Search new homes to buy from leading estate marketplace in United Arab Emirates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
