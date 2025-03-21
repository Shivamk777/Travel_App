import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TravelApp",
  description: "Travel App for Travelling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="relative overflow-hidden">
          {children}
          </main>
        
        <Footer></Footer>
      </body>
    </html>
  );
}
