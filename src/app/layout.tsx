import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Bhisham Thakur | Software Engineer",
  description: "Personal portfolio of Bhisham Thakur, an AI-focused Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30`}
      >
        <LenisProvider>
          <Cursor />
          <Navigation />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
