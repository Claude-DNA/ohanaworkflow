const FAQS: { q: string; a: string }[] = [
  {
    q: "How is OhanaWorkflow different from a typical software dev shop?",
    a: "We don't just write code — we map your workflows end-to-end, identify the highest-leverage points to automate, and build using proven tools (n8n, Make, Zapier, OpenAI, your existing CRM) so you're never locked into a proprietary system. The deliverable is a working operations layer, not a project repo.",
  },
  {
    q: "Can I customize what you build to my specific business?",
    a: "Every system we deploy is custom to your business. We start with a free 15-minute audit, map your actual processes, and build automations around how your team already works — not a generic template. You can request changes anytime; we ship updates continuously.",
  },
  {
    q: "How technical does my team need to be to use it?",
    a: "Zero technical skill required for end users. The automations run in the background of tools your team already uses — email, CRM, spreadsheets, Slack. We handle the technical setup, monitoring, and updates. If something needs human input, your team gets a notification with one-click actions.",
  },
  {
    q: "Will this work with our existing tools?",
    a: "Almost certainly yes. We integrate with 200+ platforms out of the box — HubSpot, Salesforce, Pipedrive, Gmail, Outlook, Slack, Stripe, QuickBooks, Shopify, Calendly, Notion, Airtable, plus most major EHR, PMS, and accounting systems. If you have a tool that doesn't appear on our list, we can almost always custom-build the integration.",
  },
  {
    q: "How long does it take to get the first automation live?",
    a: "Starter projects deploy in 5 business days. Growth tier averages 2–3 weeks for the full suite. We start with the single highest-impact workflow first so you see ROI before the full system ships.",
  },
  {
    q: "What happens after deployment? Do I own it?",
    a: "You own everything. The automations run on your accounts — your n8n instance (or ours), your OpenAI key, your CRM. We provide 30 days of free post-launch support on Starter, ongoing optimization on Growth and Scale. You can cancel monthly support anytime; the system keeps running.",
  },
  {
    q: "How do you handle our data and security?",
    a: "We never store your business data beyond what's required for the automation to function. All credentials are stored in encrypted vaults; nothing sits in plain text. Workflows that touch customer data are built with PIPEDA / GDPR / HIPAA considerations depending on your industry. We can sign NDAs and BAAs before any audit.",
  },
  {
    q: "Can you scale this as my business grows?",
    a: "Yes — that's the whole point. Most clients start with one or two workflows and add more over time. Workflows scale from handling 10 leads/month to 10,000 without rebuilding. Our Scale tier includes a dedicated account manager who proactively suggests new automation opportunities as your operations evolve.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 px-6 section-alt">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider gradient-text">Have Questions?</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 tracking-tight text-neural-900">
            Everything you wanted to ask
          </h2>
          <p className="text-neural-500 font-light">
            If you don&apos;t see your question here, email{" "}
            <a href="mailto:andrei@ohanaworkflow.com" className="text-accent-blue hover:underline">
              andrei@ohanaworkflow.com
            </a>
            {" "}— we reply within 2 business hours.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-item__body font-light">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
