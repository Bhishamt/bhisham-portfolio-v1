"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    color: "blue",
    skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    color: "emerald",
    skills: ["Python", "Flask", "Node.js", "REST APIs", "FastAPI"],
  },
  {
    name: "Databases",
    color: "amber",
    skills: ["PostgreSQL", "Supabase", "SQL"],
  },
  {
    name: "AI & Automation",
    color: "purple",
    skills: ["Gemini API", "OpenAI", "LangChain", "Pandas", "BeautifulSoup", "Web Scraping", "PyAutoGUI"],
  },
  {
    name: "Languages",
    color: "rose",
    skills: ["Python", "JavaScript", "Java", "C"],
  },
  {
    name: "Cloud & Tools",
    color: "cyan",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Selenium"],
  },
];

const colorMap: Record<string, { pill: string; label: string; dot: string }> = {
  blue:   { pill: "bg-blue-400/10 border-blue-400/20 text-blue-300 hover:border-blue-400/50",   label: "text-blue-400",   dot: "bg-blue-400" },
  emerald:{ pill: "bg-emerald-400/10 border-emerald-400/20 text-emerald-300 hover:border-emerald-400/50", label: "text-emerald-400", dot: "bg-emerald-400" },
  amber:  { pill: "bg-amber-400/10 border-amber-400/20 text-amber-300 hover:border-amber-400/50",   label: "text-amber-400",  dot: "bg-amber-400"  },
  purple: { pill: "bg-purple-400/10 border-purple-400/20 text-purple-300 hover:border-purple-400/50", label: "text-purple-400", dot: "bg-purple-400" },
  rose:   { pill: "bg-rose-400/10 border-rose-400/20 text-rose-300 hover:border-rose-400/50",     label: "text-rose-400",   dot: "bg-rose-400"   },
  cyan:   { pill: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300 hover:border-cyan-400/50",     label: "text-cyan-400",   dot: "bg-cyan-400"   },
};

export default function TechStack() {
  return (
    <section id="skills" className="relative w-full py-32 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">

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
            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">Technical Proficiency</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            The Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 mt-4 max-w-xl text-lg"
          >
            Skills grouped by discipline — each linked to projects where it's been applied.
          </motion.p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <h3 className={`text-sm font-mono font-semibold uppercase tracking-widest ${c.label}`}>
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${c.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
