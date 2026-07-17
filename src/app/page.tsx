"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import FeaturedProject from "@/components/FeaturedProject";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import GitHubSection from "@/components/GitHubSection";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative w-full overflow-hidden selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 h-screen min-h-[800px] flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full">

          {/* Left Column: Identity & Story */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-mono text-zinc-300">Available for 2026 Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Bhisham Thakur
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                Engineering Smart Solutions. Automating the Future.
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-zinc-400 max-w-2xl leading-relaxed text-balance"
            >
              I build full-stack web applications and AI-driven automation pipelines that eliminate friction and scale impact. Specializing in Python, React, and applied Artificial Intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="interactive group relative px-6 py-3.5 bg-white text-black font-semibold rounded-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="/assets/Bhisham_Thakur_Resume.pdf"
                download
                className="interactive group px-6 py-3.5 bg-white/5 border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                Resume
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                {[
                  { icon: Github, href: "https://github.com/Bhishamt", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/bhisham-thakur-17a240322/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:bhishamthakur012@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="interactive p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="flex flex-wrap gap-6 pt-2 border-t border-white/[0.06]"
            >
              {[
                { stat: "3+", label: "Production Projects" },
                { stat: "4 wks", label: "Industry Training" },
                { stat: "Python", label: "ISO Certified" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-white font-bold text-lg">{item.stat}</span>
                  <span className="text-zinc-500 text-sm font-mono ml-2">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image + Orbit */}
          <div className="col-span-1 lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[400px] h-[400px] flex items-center justify-center"
            >
              {/* Outer Orbit */}
              <div className="absolute inset-0 border border-white/[0.05] rounded-full animate-[spin_60s_linear_infinite]" />
              {/* Inner Orbit */}
              <div className="absolute inset-8 border border-white/[0.08] rounded-full animate-[spin_40s_linear_infinite_reverse]" />

              {/* Profile Image */}
              <div className="relative w-52 h-52 rounded-full border-2 border-white/10 overflow-hidden z-20 glass-panel shadow-2xl shadow-blue-500/10">
                <Image
                  src="/assets/editedi_mg.png"
                  alt="Bhisham Thakur"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={(e) => { const t = e.currentTarget; t.style.display = "none"; }}
                />
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-4 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 z-30 border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-mono font-medium">Python</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 -right-8 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 z-30 border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-xs font-mono font-medium">AI Engineer</span>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -left-8 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 z-30 border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-medium">Full Stack</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono text-zinc-600">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>

      {/* ═══════════════ PAGE SECTIONS ═══════════════ */}
      <FeaturedProject />
      <About />
      <ExperienceTimeline />
      <Projects />
      <TechStack />
      <GitHubSection />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
