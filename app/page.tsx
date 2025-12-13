const ctaButtonClasses =
  "inline-block bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95";

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
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Pauga Automations</div>

          <a
            href="https://calendly.com/lukepauga/30min"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            Book Consultation
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing Hours to Manual Work.
            <br />
            <span className="text-gray-600">
              Let Your Systems Talk to Each Other.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We help operations-heavy businesses reduce manual work, eliminate
            inefficiencies, and gain clarity across their systems without
            disrupting how they already operate.
          </p>

          <a
            href="https://calendly.com/lukepauga/30min"
            target="_blank"
            rel="noreferrer"
            className={ctaButtonClasses}
          >
            Book a Free Consultation
          </a>
        </section>

        {/* Credibility */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border rounded-md p-6 transition-all hover:shadow-md hover:border-gray-300">
            <h2 className="text-xl font-semibold mb-2">
              Built by a data engineer
            </h2>
            <p className="text-gray-700">
              I work hands-on with real, often messy operational systems — CRMs,
              spreadsheets, scheduling tools, and internal workflows — and turn
              them into clean automations and clear, reliable dashboards.
            </p>
          </div>
        </section>

        {/* Platforms & tools */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-xl font-semibold mb-4">
            Platforms and tools I&apos;ve worked with
          </h2>

          <p className="text-gray-700 mb-6">
            Experience integrating and building workflows across a wide range of
            industry-standard tools used by operations-heavy teams.
          </p>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm italic">
              and many more
            </span>
          </div>
        </section>

        {/* Social Proof */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="text-xl font-semibold mb-6">Recent wins</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-md p-6 transition-all hover:shadow-md hover:border-gray-300">
              <p className="text-gray-700 mb-2">
                “Cut lead entry time from 15 minutes to under 30 seconds by
                syncing our CRM with our scheduling tool.”
              </p>
              <p className="text-sm text-gray-500">
                — Roofing company, 12 field techs
              </p>
            </div>

            <div className="border rounded-md p-6 transition-all hover:shadow-md hover:border-gray-300">
              <p className="text-gray-700 mb-2">
                “Finally have a dashboard that shows job status in real-time
                instead of hunting through three different systems.”
              </p>
              <p className="text-sm text-gray-500">
                — Cleaning service, multi-location
              </p>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">Who we help</h2>

          <p className="text-gray-700 mb-6">
            We work with businesses where{" "}
            <strong>operations teams are drowning in manual work</strong> —
            juggling jobs, customers, schedules, and tools that don&apos;t talk
            to each other.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Service businesses and field teams</li>
            <li>Construction and trades</li>
            <li>Logistics and operations teams</li>
            <li>Professional services</li>
          </ul>
        </section>

        {/* How we help */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">How we help</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Workflow automations that remove repetitive tasks</li>
            <li>System integrations that keep tools in sync</li>
            <li>Simple dashboards that bring key data into one place</li>
          </ul>
        </section>

        {/* Consultation details */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">
            What a free consultation looks like
          </h2>

          <p className="text-gray-700 mb-6">
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
        </section>

        {/* Objection Handler */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
          <h2 className="text-2xl font-semibold mb-6">
            Why not just hire a VA or use Zapier?
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>VAs are great for execution</strong> — but they still do
              things manually. We build systems that eliminate the manual work
              entirely.
            </p>
            <p>
              <strong>Zapier works for simple connections</strong> — but when
              you need custom logic, data transformation, or tight integrations
              with niche tools, you need someone who understands APIs,
              databases, and operational workflows.
            </p>
            <p>That&apos;s where we come in.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to simplify your operations?
          </h2>

          <p className="text-gray-700 mb-6">
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
        </section>

        {/* Footer */}
        <footer className="border-t bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
            <p>© 2025 Pauga Automations. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
