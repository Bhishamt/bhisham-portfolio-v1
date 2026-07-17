import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhisham.vercel.app"),
  title: "Bhisham Thakur | Software Engineer",
  description:
    "Personal portfolio of Bhisham Thakur, an AI-focused Software Engineer building full-stack applications and AI-driven automation pipelines.",
  keywords: [
    "Bhisham Thakur",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Python",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Bhisham Thakur | Software Engineer",
    description:
      "Building full-stack applications and AI-driven automation pipelines. Engineering smart solutions, automating the future.",
    url: "https://bhisham.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "Bhisham Thakur",
    images: [
      {
        url: "/assets/editedi_mg.png",
        width: 800,
        height: 800,
        alt: "Bhisham Thakur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhisham Thakur | Software Engineer",
    description:
      "Building full-stack applications and AI-driven automation pipelines.",
    images: ["/assets/editedi_mg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bhisham.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30`}
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
