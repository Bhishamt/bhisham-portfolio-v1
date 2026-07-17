"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Shield, Zap, Database, Users } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section id="featured" className="relative w-full py-32 border-t border-white/[0.05]">
      {/* Accent glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">

        {/* Section Label */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Featured Case Study</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Smart Campus Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 mt-4 max-w-2xl text-lg"
          >
            A unified full-stack ecosystem modernizing campus administration — built with Supabase, React, and PostgreSQL.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left: Visual Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 space-y-5"
          >
            {/* Main preview */}
            <div className="w-full aspect-[16/9] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/5" />
              <div className="absolute top-4 left-4 right-4 h-8 flex items-center gap-2 glass-panel px-4 rounded-lg border border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-zinc-500">campus-platform.vercel.app</span>
              </div>
              {/* Dashboard simulation */}
              <div className="absolute top-16 left-4 right-4 bottom-4 rounded-lg border border-white/[0.06] bg-zinc-950/50 p-4 overflow-hidden">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {["Students", "Teachers", "HOD", "Admin"].map((role, i) => (
                    <div key={role} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3 text-center">
                      <div className="text-xs font-mono text-zinc-500 mb-1">{role}</div>
                      <div className="text-lg font-bold text-white">{[240, 18, 4, 2][i]}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["RBAC: Admin → HOD → Teacher → Student", "AI assistant online", "Real-time sync enabled"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture mini cards */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: Shield, label: "4-Level RBAC", sub: "Admin·HOD·Teacher·Student", color: "text-blue-400" },
                { icon: Zap, label: "Real-time", sub: "Supabase Sub", color: "text-amber-400" },
                { icon: Database, label: "PostgreSQL", sub: "Row-Level Sec", color: "text-emerald-400" },
                { icon: Users, label: "4 Roles", sub: "Admin·HOD·Teacher·Student", color: "text-purple-400" },
              ].map(({ icon: Icon, label, sub, color }) => (
                <div key={label} className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col gap-2">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-sm font-medium text-zinc-300">{label}</span>
                  <span className="text-[10px] text-zinc-600 font-mono">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-l-2 border-blue-400/50 pl-4">The Problem</h3>
              <p className="text-zinc-400 leading-relaxed">
                Campus administration runs on fragmented systems: attendance in spreadsheets, results in emails, student support in WhatsApp groups. Administrators waste hours daily on manual processes that create data silos and prevent real-time visibility.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-l-2 border-purple-400/50 pl-4">Engineering Solution</h3>
              <p className="text-zinc-400 leading-relaxed">
                Designed a 4-tier RBAC hierarchy: Admin (full control), HOD (department-level), Teacher (class-level), and Student (read-own). Each boundary is enforced at both the Next.js middleware layer and PostgreSQL Row-Level Security — making it impossible to escalate permissions client-side.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-l-2 border-emerald-400/50 pl-4">Critical Tradeoff</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Initial design used polling for live updates — too heavy for 240+ concurrent users. Migrated to Supabase real-time subscriptions, reducing server load by ~80% while enabling instant data push.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              <a href="https://x1-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="interactive group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                View Demo
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="https://github.com/Bhishamt/Smart-Attendance-System" target="_blank" rel="noopener noreferrer" className="interactive inline-flex items-center gap-2 px-5 py-2.5 glass-panel border border-white/15 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
