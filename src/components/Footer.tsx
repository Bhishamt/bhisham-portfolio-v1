"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Bhisham-Thakur", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bhishamthakur012@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full border-t border-white/[0.05] py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + Nav */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="text-white font-bold font-mono text-lg">
              BT<span className="text-blue-400">.</span>
            </span>
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Socials + Back to top */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="interactive p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-lg transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-mono">
            © {new Date().getFullYear()} Bhisham Thakur. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 font-mono">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
