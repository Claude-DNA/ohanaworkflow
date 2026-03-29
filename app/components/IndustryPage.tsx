"use client";
import { useState } from "react";

interface Workflow {
  title: string;
  desc: string;
  before: string;
  after: string;
}

interface IndustryPageProps {
  industry: string;
  headline: string;
  subheadline: string;
  heroDescription: string;
  painPoints: { title: string; desc: string }[];
  workflows: Workflow[];
  stats: { value: string; label: string }[];
  ctaText?: string;
}

export default function IndustryPage({
  industry,
  headline,
  subheadline,
  heroDescription,
  painPoints,
  workflows,
  stats,
  ctaText = "Get Your Free Workflow Audit",
}: IndustryPageProps) {
  const [formState, setFormState] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", website: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, industry }),
      });
      if (res.ok) setFormState("success");
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen bg-neural-50 text-neural-800">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neural-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-neural-900">
            Ohana<span className="gradient-text">Workflow</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/#industries" className="hidden sm:block text-sm text-neural-400 hover:text-neural-700 transition">All Industries</a>
            <a href="/#pricing" className="hidden sm:block text-sm text-neural-400 hover:text-neural-700 transition">Pricing</a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-lg shadow-accent-blue/20"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-gradient relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="neural-particles" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8">
            <span className="text-sm font-medium text-neural-600">AI Automation for {industry}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] mb-6 text-neural-900 tracking-tight">
            {headline}<br />
            <span className="gradient-text">{subheadline}</span>
          </h1>
          <p className="text-xl text-neural-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {heroDescription}
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition glow-pulse"
          >
            {ctaText}
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-neural-500 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-32 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
              Common {industry.toLowerCase()} workflow bottlenecks
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center text-accent-blue mb-4 font-bold text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neural-900">{point.title}</h3>
                <p className="text-neural-500 text-sm leading-relaxed font-light">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOWS */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
              Workflows we build for {industry.toLowerCase()}
            </h2>
          </div>
          <div className="space-y-6">
            {workflows.map((wf, i) => (
              <div key={i} className="glass-card-solid rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-neural-900">{wf.title}</h3>
                <p className="text-neural-500 font-light mb-5">{wf.desc}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">Before</div>
                    <p className="text-neural-600 text-sm">{wf.before}</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 border border-accent-blue/10 rounded-xl p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider gradient-text mb-1">After</div>
                    <p className="text-neural-600 text-sm">{wf.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 section-alt">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Get Started</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
            Ready to automate your {industry.toLowerCase()} workflows?
          </h2>
          <p className="text-neural-500 mb-12 font-light">
            15-minute call. We map your biggest bottlenecks and show you exactly what automation would save.
          </p>
          <div className="glass-card-solid rounded-2xl p-8 text-left">
            {formState === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-neural-900">Got it!</h3>
                <p className="text-neural-500 font-light">We&apos;ll reach out within 2 business hours to schedule your audit.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neural-600 mb-1.5 font-medium">Your name</label>
                    <input type="text" placeholder="Jane Smith" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-neural-50 border border-neural-200 rounded-xl px-4 py-3 text-neural-800 placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent focus:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-sm text-neural-600 mb-1.5 font-medium">Company name</label>
                    <input type="text" placeholder="Acme Corp"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-neural-50 border border-neural-200 rounded-xl px-4 py-3 text-neural-800 placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent focus:bg-white transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-neural-600 mb-1.5 font-medium">Email</label>
                  <input type="email" placeholder="you@company.com" required
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neural-50 border border-neural-200 rounded-xl px-4 py-3 text-neural-800 placeholder-neural-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent focus:bg-white transition" />
                </div>
                <button type="submit" disabled={formState === "loading"}
                  className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-lg transition mt-2 glow-pulse">
                  {formState === "loading" ? "Sending..." : "Book My Free Audit"}
                </button>
                {formState === "error" && <p className="text-red-500 text-sm text-center">Something went wrong — email us directly at andrei@ohanaworkflow.com</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-neural-200/50 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="text-xl font-bold tracking-tight text-neural-900">
            Ohana<span className="gradient-text">Workflow</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-neural-400 hover:text-neural-600 text-sm transition">Home</a>
            <a href="/#industries" className="text-neural-400 hover:text-neural-600 text-sm transition">Industries</a>
            <a href="/#pricing" className="text-neural-400 hover:text-neural-600 text-sm transition">Pricing</a>
            <a href="#contact" className="text-neural-400 hover:text-neural-600 text-sm transition">Contact</a>
          </div>
          <div className="text-right">
            <p className="text-neural-400 text-sm">andrei@ohanaworkflow.com</p>
            <p className="text-neural-300 text-xs mt-1">&copy; 2026 OhanaWorkflow &middot; Vancouver, BC</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
