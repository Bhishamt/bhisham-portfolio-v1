import type { Metadata } from "next";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#050505] text-white selection:bg-blue-500/30">
        <LenisProvider>
          <Cursor />
          <Navigation />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
