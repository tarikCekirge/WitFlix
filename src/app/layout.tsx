import type { Metadata } from "next";
import { bebasNeue, roboto } from "@/app/ui/fonts"
import "./globals.css";
import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";



export const metadata: Metadata = {
  title: "WitFlix Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={roboto.className}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
