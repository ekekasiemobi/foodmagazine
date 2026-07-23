import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "../component/nav";
import Footer from "../component/footer";
import "../globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />

      </body>
    </html>
  );
}
