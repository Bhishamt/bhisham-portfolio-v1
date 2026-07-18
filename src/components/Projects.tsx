"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Cpu, Database, Network, Bot, Code2, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Smart Campus Platform",
    category: "Full-Stack Web Application",
    status: "Production",
    statusColor: "emerald",
    tagline: "Modernizing campus administration through unified engineering.",
    problem: "Traditional campus administration relies on fragmented systems and manual processes for attendance, results, and communication, leading to inefficiencies and data silos.",
    solution: "A unified full-stack campus management platform with 4-tier Role-Based Access Control (Admin, HOD, Teacher, Student) connecting every stakeholder in real-time with server-enforced data boundaries.",
    challenge: "Designing a 4-level RBAC hierarchy (Admin → HOD → Teacher → Student) where each role has progressively scoped data access — enforced at both the API middleware layer and PostgreSQL Row-Level Security.",
    impact: "Eliminates 40% of administrative overhead. Provides a single source of truth for campus operations across all 4 roles.",
    tech: ["React", "Next.js", "Supabase", "PostgreSQL", "Supabase Auth", "REST APIs"],
    arch: [
      { icon: Code2, label: "React Frontend", color: "blue" },
      { icon: Database, label: "Supabase BaaS", color: "green" },
      { icon: Network, label: "4-Role RBAC", color: "purple" },
    ],
    github: "https://github.com/Bhisham-Thakur",
    demo: "https://x1-drab.vercel.app/",
    layout: "left",
  },
  {
    id: "02",
    title: "Intelligent Workflow Assistant",
    category: "AI & Automation Engine",
    status: "Active",
    statusColor: "blue",
    tagline: "Python-based AI that executes tasks, processes language, and automates your day.",
    problem: "Developers and professionals waste significant time on repetitive, programmable digital tasks.",
    solution: "A Python-based AI assistant that translates natural language commands into executable actions — file management, API calls, OS control.",
    challenge: "Intent parsing: accurately translating human language into Python functions. Solved by structuring strict LLM system prompts that output standardized JSON commands the runtime executes.",
    impact: "Demonstrates deep understanding of Python scripting, LLM integration, and applied AI.",
    tech: ["Python", "Gemini API", "OpenAI", "PyAutoGUI", "Selenium", "OS Modules"],
    arch: [
      { icon: Bot, label: "LLM Engine", color: "purple" },
      { icon: Cpu, label: "Python Runtime", color: "blue" },
      { icon: Network, label: "API Integrations", color: "green" },
    ],
    github: "https://github.com/Bhishamt/ai-assistant4",
    demo: null,
    layout: "right",
  },
  {
    id: "03",
    title: "Automated Data Pipeline",
    category: "Data Engineering",
    status: "Complete",
    statusColor: "amber",
    tagline: "Resilient web scraping that transforms dynamic pages into clean datasets.",
    problem: "Manually aggregating structured data from dynamic websites is error-prone, slow, and unscalable.",
    solution: "A resilient scraping pipeline that extracts, validates, cleans, and exports data automatically to CSV/JSON.",
    challenge: "Handling rate limits and dynamic DOM changes. Implemented exponential backoff and randomized user-agent rotation to maintain reliable extraction across sessions.",
    impact: "Reduces data collection time from hours to seconds. Outputs clean, analysis-ready datasets.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas", "CSV/JSON"],
    arch: [
      { icon: BarChart3, label: "Data Extract", color: "amber" },
      { icon: Cpu, label: "Transform", color: "blue" },
      { icon: Database, label: "Export", color: "green" },
    ],
    github: "https://github.com/Bhishamt/web-scraper-ai",
    demo: null,
    layout: "left",
  },
];

const statusColors: Record<string, string> = {
  emerald: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  blue: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  amber: "bg-amber-400/10 text-amber-400 border-amber-400/20",
};

const archColors: Record<string, string> = {
  blue: "text-blue-400",
  green: "text-emerald-400",
  purple: "text-purple-400",
  amber: "text-amber-400",
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 border-t border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Engineering Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Projects as Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 mt-4 max-w-2xl text-lg"
          >
            Every project starts with a real problem. Every architecture decision has a reason. Every tradeoff is documented.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center`}
            >
              {/* Visual Panel */}
              <div className={`col-span-1 lg:col-span-6 ${project.layout === "right" ? "lg:order-2" : ""}`}>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 group">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
                  
                  {/* Project number */}
                  <div className="absolute top-6 left-6 text-7xl font-bold text-white/5 font-mono select-none">
                    {project.id}
                  </div>

                  {/* Architecture Cards */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-4 w-full max-w-xs px-6">
                      {project.arch.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="flex items-center gap-4 glass-panel px-4 py-3 rounded-xl border border-white/10"
                        >
                          <item.icon className={`w-5 h-5 ${archColors[item.color]} flex-shrink-0`} />
                          <span className="text-sm font-mono text-zinc-300">{item.label}</span>
                          {i < project.arch.length - 1 && (
                            <div className="ml-auto flex flex-col gap-0.5">
                              <div className="w-4 h-[1px] bg-white/20" />
                              <div className="w-3 h-[1px] bg-white/10" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Panel */}
              <div className={`col-span-1 lg:col-span-6 space-y-6 ${project.layout === "right" ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono text-zinc-500">— {project.category}</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${statusColors[project.statusColor]}`}>
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-blue-400/80 font-medium">{project.tagline}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Problem</h4>
                    <p className="text-zinc-300 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Engineering Solution</h4>
                    <p className="text-zinc-300 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Key Challenge & Tradeoff</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{project.challenge}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a href={project.github} className="interactive group flex items-center gap-2 px-4 py-2.5 glass-panel border border-white/10 text-sm font-medium text-white rounded-lg hover:bg-white/10 transition-all">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="interactive group flex items-center gap-2 px-4 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-all">
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
