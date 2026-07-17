"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import dynamic from "next/dynamic";

// ssr: false → this component never runs on the server.
// Math.random() inside it is 100% safe — no hydration mismatch possible.
const ContributionGraph = dynamic(() => import("./ContributionGraph"), {
  ssr: false,
  loading: () => (
    <div className="h-[88px] w-full rounded bg-white/[0.02] animate-pulse" />
  ),
});

const repos = [
  {
    name: "Smart-Attendance-System",
    description:
      "Full-stack campus administration ecosystem with 4-tier RBAC (Admin, HOD, Teacher, Student), real-time subscriptions, and AI-assisted student support.",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/Bhishamt/Smart-Attendance-System",
    topics: ["react", "next.js", "supabase", "postgresql"],
    featured: true,
  },
  {
    name: "AI-Resume-Intelligence-System",
    description:
      "Python-based AI engine that translates natural language to executable system commands via LLM API integration.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    url: "https://github.com/Bhishamt/AI-Resume-Intelligence-System",
    topics: ["python", "ai", "gemini", "automation"],
    featured: true,
  },
  {
    name: "web-scraper-ai",
    description:
      "Resilient web scraping pipeline with exponential backoff, dynamic DOM handling, and CSV/JSON export.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    forks: 0,
    url: "https://github.com/Bhishamt/web-scraper-ai",
    topics: ["python", "beautifulsoup", "pandas", "scraping"],
    featured: false,
  },
];

export default function GitHub() {
  return (
    <section id="github" className="relative w-full py-32 border-t border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                Open Source
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              GitHub
            </motion.h2>
          </div>
          <motion.a
            href="https://github.com/Bhishamt"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="interactive inline-flex items-center gap-2 px-5 py-2.5 glass-panel border border-white/10 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View Full Profile
          </motion.a>
        </div>

        {/* Contribution Graph Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 glass-panel p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-mono text-zinc-400">
              Bhishamt — Contribution Activity
            </span>
            <span className="text-xs font-mono text-zinc-600">2024 – 2026</span>
          </div>
          {/* Client-only: no SSR, no hydration mismatch */}
          <ContributionGraph />
        </motion.div>

        {/* Repository Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="interactive group glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-zinc-500" />
                  <span className="text-sm font-mono text-zinc-300 group-hover:text-white transition-colors">
                    {repo.name}
                  </span>
                </div>
                {repo.featured && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400">
                    Pinned
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-600 font-mono">
                <span className="flex items-center gap-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
