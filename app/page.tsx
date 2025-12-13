const ctaButtonClasses =
  "inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95";

const cardClasses =
  "bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm";

export default function Home() {
  const tools = [
    "JobNimbus",
    "Housecall Pro",
    "AccuLynx",
    "Google Sheets",
    "GoHighLevel",
    "Enerflo",
    "Jobber",
    "HubSpot",
    "Salesforce",
    "Subcontractor Hub",
    "n8n",
    "Zapier",
    "Make",
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">Pauga Automations</div>

          <a
            href="https://calendly.com/lukepauga/30min"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-black hover:underline"
          >
            Book Consultation
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Stop Losing Hours to Manual Work.
            <br />
            <span className="text-gray-600">Let Your Systems Talk to Each Other.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
            We help operations-heavy businesses reduce manual work, eliminate
            inefficiencies, and gain clarity across their systems without disrupting
            how they already operate.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/lukepauga/30min"
              target="_blank"
              rel="noreferrer"
              className={ctaButtonClasses}
            >
              Book a Free Consultation
            </a>

            <a
              href="#deliverables"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium border border-gray-300 bg-white text-gray-900 transition-all duration-200 hover:shadow-md hover:border-gray-400"
            >
              See what you’ll get
            </a>
          </div>
        </section>

        {/* Credibility */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={cardClasses}>
            <h2 className="text-xl font-semibold mb-2">Built by a data engineer</h2>
            <p className="text-gray-700 leading-relaxed">
              I work hands-on with real, often messy operational systems — CRMs,
              spreadsheets, scheduling tools, and internal workflows — and turn them
              into clean automations and clear, reliable dashboards.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={cardClasses}>
            <h2 className="text-xl font-semibold mb-2">
              Platforms and tools I&apos;ve worked with
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience integrating and building workflows across a wide range of
              industry-standard tools used by operations-heavy teams.
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-sm border border-gray-300 bg-white text-gray-800"
                >
                  {tool}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full text-sm border border-gray-200 bg-gray-50 text-gray-500 italic">
                and many more
              </span>
            </div>
          </div>
        </section>

        {/* Deliverables (replaces social proof) */}
        <section
  id="deliverables"
  className="max-w-5xl mx-auto px-6 pb-8 scroll-mt-24"
>
          <div className={cardClasses}>
            <h2 className="text-2xl font-semibold mb-3">What you&apos;ll walk away with</h2>

            <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl">
              Even if we don’t end up working together, the goal of the consultation
              is for you to leave with clarity around what’s broken, what’s worth
              fixing first, and what a better system could look like.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold mb-1">Clear workflow map</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A simple breakdown of how your work flows today — including where
                  time, data, or money is being lost.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold mb-1">High-ROI automation ideas</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  One to three automations that would have the biggest immediate
                  impact on efficiency.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold mb-1">Recommended system setup</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Guidance on how your tools should connect — CRMs, spreadsheets,
                  scheduling, and reporting.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold mb-1">Clear next steps</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dashboard building, one-time setup, integrations — you’ll know the
                  most practical next step for your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={cardClasses}>
            <h2 className="text-2xl font-semibold mb-4">Who we help</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We work with businesses where{" "}
              <strong>operations teams are drowning in manual work</strong> — juggling
              jobs, customers, schedules, and tools that don’t talk to each other.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service businesses and field teams</li>
              <li>Construction and trades</li>
              <li>Logistics and operations teams</li>
              <li>Professional services</li>
            </ul>
          </div>
        </section>

        {/* How we help */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={cardClasses}>
            <h2 className="text-2xl font-semibold mb-4">How we help</h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Workflow automations that remove repetitive tasks</li>
              <li>System integrations that keep tools in sync</li>
              <li>Simple dashboards that bring key data into one place</li>
            </ul>
          </div>
        </section>

        {/* Consultation details */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={cardClasses}>
            <h2 className="text-2xl font-semibold mb-4">
              What a free consultation looks like
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed max-w-3xl">
              A focused, no-pressure conversation designed to understand how your
              business operates today and where better systems or automation could
              make the biggest impact.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>30-minute working session reviewing your tools and workflows</li>
              <li>Identify inefficiencies, bottlenecks, and manual processes</li>
              <li>
                Discuss practical solutions such as custom dashboards, one-time
                automation or system setup, and ongoing improvements as your
                operations scale
              </li>
              <li>Clear, tailored next steps specific to your business</li>
            </ul>
          </div>
        </section>

        {/* Objection handler */}
        <section className="max-w-5xl mx-auto px-6 pb-8">
          <div className={`${cardClasses} bg-gray-50`}>
            <h2 className="text-2xl font-semibold mb-4">
              Why not just hire a VA or use Zapier?
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>VAs are great for execution</strong> — but they still do
                things manually. We build systems that eliminate the manual work
                entirely.
              </p>
              <p>
                <strong>Zapier works for simple connections</strong> — but when you
                need custom logic, data transformation, or tighter integrations with
                niche tools, you need someone who understands APIs, databases, and
                operational workflows.
              </p>
              <p>That&apos;s where we come in.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className={cardClasses}>
            <h2 className="text-2xl font-semibold mb-3">
              Ready to simplify your operations?
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Schedule a free, no-pressure consultation to explore what automation
              could do for your business.
            </p>

            <a
              href="https://calendly.com/lukepauga/30min"
              target="_blank"
              rel="noreferrer"
              className={ctaButtonClasses}
            >
              Book a Free Consultation
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Pauga Automations. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
