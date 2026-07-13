"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative w-full py-32 border-t border-white/[0.05]">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Visual Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-xs font-mono text-zinc-500">bhisham.ts</span>
              </div>
              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-purple-400">const <span className="text-blue-300">engineer</span> <span className="text-white">= {"{"}</span></div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-emerald-400">name</span>: <span className="text-amber-300">&quot;Bhisham Thakur&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-emerald-400">role</span>: <span className="text-amber-300">&quot;Software Engineer&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-emerald-400">focus</span>: [
                  <div className="pl-4">
                    <span className="text-amber-300">&quot;AI Engineering&quot;</span>,<br/>
                    <span className="text-amber-300">&quot;Full Stack Dev&quot;</span>,<br/>
                    <span className="text-amber-300">&quot;Automation&quot;</span>,
                  </div>
                  ],
                </div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-emerald-400">available</span>: <span className="text-blue-400">true</span>,
                </div>
                <div className="pl-4 text-zinc-400">
                  <span className="text-emerald-400">mission</span>: <span className="text-amber-300">&quot;Eliminate friction through engineering&quot;</span>,
                </div>
                <div className="text-white">{"}"};</div>
                <div className="mt-4 text-zinc-600">{"// Currently building the future"}</div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-blue-400">▶</span>
                  <span className="text-zinc-400 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="col-span-1 lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">About Me</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
              Engineering starts with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">curiosity</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-zinc-400 leading-relaxed">
              My engineering journey didn&apos;t start with code — it started with curiosity. From ethical hacking and exploring operating systems to understanding how the web actually works, I&apos;ve always needed to know what happens behind the screen.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-zinc-400 leading-relaxed">
              That curiosity evolved into a discipline. I don&apos;t write code to complete tasks — I build systems to solve problems. Whether that&apos;s automating a 5-hour manual process into a 5-second script, or architecting a robust backend for a campus platform handling hundreds of users, my focus is always on scalable, resilient engineering.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { stat: "3+", label: "Production Projects" },
                { stat: "4 wks", label: "Industry Training" },
                { stat: "2026", label: "Graduating Year" },
              ].map((item) => (
                <div key={item.label} className="glass-panel p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
                  <div className="text-xs text-zinc-500 font-mono">{item.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="interactive group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                See my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
