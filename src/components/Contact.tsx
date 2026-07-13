"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle, Download } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (form.message.trim().length < 20) errs.message = "Please write at least 20 characters";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((errs) => ({ ...errs, [e.target.name]: "" }));
  };

  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: "bhishamthakur012@gmail.com",
      href: "mailto:bhishamthakur012@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Bhisham-Thakur",
      href: "https://github.com/Bhisham-Thakur",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bhisham-thakur",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-32 border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">Get In Touch</span>
            <div className="h-[1px] w-12 bg-white/20" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">exceptional</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto text-lg"
          >
            Available for full-time roles, internships, and engineering collaborations. Currently open to opportunities in India and remotely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">

          {/* Left: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-mono text-zinc-300">Available for opportunities</span>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive group flex items-center gap-4 p-4 glass-panel border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/[0.06] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500">{label}</div>
                    <div className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="/assets/Bhisham_Thakur_Resume.pdf"
              download
              className="interactive flex items-center gap-2 px-5 py-3 glass-panel border border-white/10 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all w-fit"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel border border-emerald-400/20 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[300px]"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-zinc-400 text-sm">I'll get back to you within 24 hours. Looking forward to connecting.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel border border-white/10 rounded-2xl p-8 space-y-5">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Bhisham Thakur" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.06] ${
                        errors[field.name] ? "border-red-500/50" : "border-white/10"
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project, or just say hello..."
                    rows={5}
                    className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.06] resize-none ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="interactive w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
