"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">Ohana<span className="text-indigo-400">Workflow</span></span>
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-950 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-indigo-800">
            AI Automation for Vancouver Clinics
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your clinic is losing patients<br />
            <span className="text-indigo-400">after hours.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            35% of appointment attempts happen outside business hours.
            We build AI front desk systems that book, follow up, and qualify leads —
            while your team focuses on care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              Get Your Free 3-Leak Audit
            </a>
            <a
              href="#how"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition"
            >
              See How It Works
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">No obligation. 15-minute call. We show you exactly where you're losing patients.</p>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Sound familiar?</h2>
          <p className="text-slate-400 text-center mb-12">These are the 3 most common workflow leaks we find in Vancouver clinics.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📞",
                title: "Calls go to voicemail after 5pm",
                desc: "Patients try to book after work. Nobody answers. They call the next clinic on Google Maps. You never knew they called.",
                stat: "35% of booking attempts happen outside business hours"
              },
              {
                icon: "📋",
                title: "Intake forms sit unread",
                desc: "New patient fills out your online form on Friday night. Nobody follows up until Monday. They've already booked elsewhere.",
                stat: "Leads that aren't followed up within 1 hour convert at 7× lower rate"
              },
              {
                icon: "⭐",
                title: "Bad reviews about 'no one answers'",
                desc: "You have 1-star reviews saying patients can't reach you. Every new patient reads them before deciding.",
                stat: "1 negative review costs an average of 22 potential patients"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <p className="text-indigo-400 text-sm font-medium border-t border-slate-800 pt-4">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-slate-400 text-center mb-12">We install an AI front desk alongside your existing team — not instead of them.</p>
          <div className="space-y-6">
            {[
              { step: "01", title: "Free 15-min audit", desc: "We scan your website and booking flow, identify your specific leaks, and show you exactly what you're losing. No obligation." },
              { step: "02", title: "We build your AI front desk", desc: "In 2 weeks, we deploy a system tailored to your clinic: AI chatbot, intake automation, appointment reminders, lead follow-up. Your staff doesn't change how they work." },
              { step: "03", title: "Patients stop falling through the cracks", desc: "After-hours inquiries get answered. New patient forms trigger immediate follow-up. No-shows drop. Your team handles the work — the AI handles the gaps." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="text-4xl font-bold text-indigo-800 shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pricing" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, clear packages</h2>
          <p className="text-slate-400 text-center mb-12">No surprise costs. No long-term lock-in. Cancel anytime.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$1,999",
                period: "one-time setup",
                desc: "For clinics that want to stop losing leads from their website.",
                features: ["AI chatbot on your website", "FAQ automation", "Lead capture & routing", "Setup in 5 business days"],
                cta: "Get Started",
                highlight: false
              },
              {
                name: "Growth",
                price: "$3,500",
                period: "setup + $399/mo",
                desc: "For clinics ready to automate their full intake and follow-up workflow.",
                features: ["Everything in Starter", "Appointment reminder sequences", "New patient intake automation", "Lead qualification & follow-up", "Missed-call automation", "Monthly optimization"],
                cta: "Book a Call",
                highlight: true
              },
              {
                name: "Full Stack",
                price: "$5,500",
                period: "setup + $599/mo",
                desc: "For clinics that want to fully automate front desk operations.",
                features: ["Everything in Growth", "CRM integration", "Google Reviews automation", "Reporting dashboard", "Staff training included", "Priority support"],
                cta: "Book a Call",
                highlight: false
              }
            ].map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${pkg.highlight ? "bg-indigo-950 border-indigo-600" : "bg-slate-900 border-slate-800"}`}>
                {pkg.highlight && (
                  <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">Most Popular</div>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                <div className="text-slate-400 text-sm mb-4">{pkg.period}</div>
                <p className="text-slate-400 text-sm mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-indigo-400 shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${pkg.highlight ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "border border-slate-700 hover:border-slate-500 text-slate-300"}`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Built for healthcare. Designed for trust.</h2>
          <p className="text-slate-400 mb-12">Patient data compliance isn't an afterthought — it's the foundation.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔒", title: "No PHI in automations", desc: "Our workflows never handle protected health information. Booking, reminders, and lead capture stay fully compliant." },
              { icon: "🇨🇦", title: "PIPEDA compliant", desc: "Built for Canadian privacy law. Data stays in Canada. No third-party data selling. Ever." },
              { icon: "👥", title: "Designed around your staff", desc: "We build around how your team already works. No retraining. No disruption. Just fewer interruptions." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get your free 3-leak audit</h2>
          <p className="text-slate-400 mb-10">
            15-minute call. We find the 3 biggest workflow gaps in your clinic and show you exactly what fixing them would mean in recovered revenue. No pitch, no pressure.
          </p>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Your name</label>
                  <input type="text" placeholder="Dr. Sarah Chen" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Clinic name</label>
                  <input type="text" placeholder="Vancouver Dental" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input type="email" placeholder="you@yourclinic.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Clinic website (optional)</label>
                <input type="url" placeholder="https://yourclinic.com" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold text-lg transition mt-2"
              >
                Book My Free Audit →
              </button>
              <p className="text-slate-500 text-xs text-center">We'll reply within 2 business hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold">Ohana<span className="text-indigo-400">Workflow</span></span>
          <p className="text-slate-500 text-sm">Vancouver, BC · andrei@ohanaworkflow.com</p>
          <p className="text-slate-600 text-xs">© 2026 Ohana Workflow. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
