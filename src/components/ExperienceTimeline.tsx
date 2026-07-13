"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    year: "Aug 2025",
    title: "Python Developer Intern",
    subtitle: "Arrow Edutech Pvt. Ltd.",
    description: "Developed and debugged Python automation scripts to streamline internal operations. Applied software engineering best practices to real-world business problems — focusing on code quality, error handling, and system reliability.",
    type: "work",
    tech: ["Python", "Automation", "Debugging", "REST APIs"],
    impact: "4-week intensive, industry-grade engineering practice",
  },
  {
    year: "2024 – 2026",
    title: "Intelligent Systems Development",
    subtitle: "Personal Engineering Projects",
    description: "Architected and shipped the Smart Campus Platform and Intelligent Workflow Assistant. Explored LLM APIs (Gemini, OpenAI), built autonomous pipelines, and mastered full-stack engineering with React, Supabase, and PostgreSQL.",
    type: "work",
    tech: ["Python", "React", "Supabase", "Gemini API", "PostgreSQL"],
    impact: "3 production-grade projects, 2 LLM integrations",
  },
  {
    year: "2023 – Present",
    title: "Diploma in Computer Engineering",
    subtitle: "Government Polytechnic Sundar Nagar",
    description: "Studying Computer Engineering fundamentals — data structures, algorithms, operating systems, computer networks, and software engineering principles. Early interests in ethical hacking and OS internals evolved into a passion for building scalable software.",
    type: "edu",
    tech: ["C", "Java", "Data Structures", "Networking", "OS"],
    impact: "Foundation for systems-level engineering thinking",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative w-full py-32 border-t border-white/[0.05]" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">Engineering Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience & Growth</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.04] -translate-x-1/2 hidden md:block">
            <div className="timeline-line w-full h-full bg-gradient-to-b from-blue-500 via-purple-500/80 to-purple-500/10 origin-top" />
          </div>

          <div className="space-y-16 md:space-y-20 relative z-10">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === "work" ? (index === 0 ? Briefcase : Award) : GraduationCap;
              return (
                <div
                  key={index}
                  className={`timeline-item flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-950 border border-white/20 z-20 glass-panel">
                    <Icon className={`w-4 h-4 ${item.type === "work" ? "text-blue-400" : "text-purple-400"}`} />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all group">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-400">
                          {item.year}
                        </span>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${item.type === "work" ? "bg-blue-400/10 text-blue-400 border border-blue-400/20" : "bg-purple-400/10 text-purple-400 border border-purple-400/20"}`}>
                          {item.type === "work" ? "Work" : "Education"}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-sm text-zinc-400 font-medium mb-4">{item.subtitle}</h4>
                      <p className="text-zinc-500 leading-relaxed text-sm mb-5">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs font-mono text-zinc-600 border-t border-white/[0.06] pt-3">
                        {item.impact}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
