"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, BadgeCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Python Programming Certification",
    provider: "Arrow Edutech Pvt. Ltd.",
    meta: "ISO 9001:2015 Certified",
    date: "Aug 2025",
    duration: "1 Month Intensive",
    skills: ["Python", "Data Structures", "Automation Scripting", "OOP", "File I/O"],
    description: "Completed a one-month intensive training program covering core Python programming, data structures, automation scripting, and real-world application development under industry professionals.",
    color: "blue",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500/20 to-purple-500/10",
};

const achievements = [
  { label: "Production Projects Built", value: "3+", icon: "🚀" },
  { label: "Industry Training Hours", value: "160+", icon: "⚡" },
  { label: "Python Certification", value: "ISO Certified", icon: "🏆" },
  { label: "LLM APIs Integrated", value: "2+", icon: "🤖" },
];

export default function Certificates() {
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="relative w-full py-32 border-t border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Certifications & Proof</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Recognition
          </motion.h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{a.value}</div>
              <div className="text-xs text-zinc-500 font-mono">{a.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="interactive group text-left glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/25 transition-all hover:scale-[1.02]"
            >
              {/* Visual card header */}
              <div className={`w-full h-32 rounded-xl mb-5 bg-gradient-to-br ${colorMap[cert.color]} border border-white/10 flex items-center justify-center`}>
                <BadgeCheck className="w-10 h-10 text-blue-400/60" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500">{cert.meta}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-zinc-500">{cert.provider} · {cert.date}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                    {s}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-500">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel border border-white/15 rounded-2xl max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className={`w-full h-40 rounded-xl mb-6 bg-gradient-to-br ${colorMap[selected.color]} border border-white/10 flex items-center justify-center`}>
                <BadgeCheck className="w-14 h-14 text-blue-400/70" />
              </div>

              <div className="space-y-1 mb-4">
                <span className="text-xs font-mono text-zinc-500">{selected.meta}</span>
                <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                <p className="text-sm text-zinc-400">{selected.provider} · {selected.date} · {selected.duration}</p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{selected.description}</p>

              <div className="flex flex-wrap gap-2">
                {selected.skills.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-300">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
