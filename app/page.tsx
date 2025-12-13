const ctaButtonClasses =
  "inline-block bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-200 ease-out hover:bg-gray-900 hover:scale-105 hover:shadow-lg active:scale-95";

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

      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing Hours to Manual Work.
            <br />
            <span className="text-gray-600">
              Let Your Systems Talk to Each Other.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl">
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
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-white border rounded-lg p-6 transition-all hover:shadow-md hover:border-gray-300">
            <h2 className="text-xl font-semibold mb-2">
              Built by a data engineer
            </h2>
            <p className="text-gray-700 max-w-3xl">
              I work hands-on with real, often messy operational systems — CRMs,
              spreadsheets, scheduling tools, and internal workflows — and turn
              them into clean automations and clear, reliable dashboards.
            </p>
          </div>
        </section>

        {/* Platforms & tools */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <h2 className="text-xl font-semibold mb-4">
            Platforms and tools I&apos;ve worked with
          </h2>

          <p className="text-gray-700 mb-6 max-w-3xl">
            Experience integrating and building workflows across a wide range of
            industry-standard tools used by operations-heavy teams.
          </p>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-white border text-gray-700 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
            <span className="px-3 py-1 bg-white border text-gray-500 rounded-full text-sm italic">
              and many more
            </span>
          </div>
        </section>

       {/* What you’ll walk away with */}
<section className="max-w-5xl mx-auto px-6 pb-20">
  <div className="bg-white border rounded-lg p-8">
    <h2 className="text-xl font-semibold mb-6">
      What you’ll walk away with
    </h2>

    <p className="text-gray-700 mb-8 max-w-3xl">
      Even if we don’t end up working together, the goal of the consultation
      is for you to leave with clarity around what’s broken, what’s worth
      fixing first, and what a better system could look like.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded-md p-6">
        <h3 className="font-medium mb-2">Clear workflow map</h3>
        <p className="text-gray-700 text-sm">
          A simple breakdown of how your work flows today — including where
          time, data, or money is being lost.
        </p>
      </div>

      <div className="border rounded-md p-6">
        <h3 className="font-medium mb-2">High-ROI automation ideas</h3>
        <p className="text-gray-700 text-sm">
          One to three automations that would have the biggest immediate
          impact on efficiency.
        </p>
      </div>

      <div className="border rounded-md p-6">
        <h3 className="font-medium mb-2">Recommended system setup</h3>
        <p className="text-gray-700 text-sm">
          Guidance on how your tools should connect — CRMs, spreadsheets,
          scheduling, and reporting.
        </p>
      </div>

      <div className="border rounded-md p-6">
        <h3 className="font-medium mb-2">Clear next steps</h3>
        <p className="text-gray-700 text-sm">
          Whether you build it yourself, hire someone, or work with me —
          you’ll know exactly what to do next.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Who we help */}
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Who we help</h2>

          <p className="text-gray-700 mb-6 max-w-3xl">
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
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">How we help</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Workflow automations that remove repetitive tasks</li>
            <li>System integrations that keep tools in sync</li>
            <li>Simple dashboards that bring key data into one place</li>
          </ul>
        </section>

        {/* Consultation details */}
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">
            What a free consultation looks like
          </h2>

          <p className="text-gray-700 mb-6 max-w-3xl">
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

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to simplify your operations?
          </h2>

          <p className="text-gray-700 mb-8 max-w-3xl">
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
        <footer className="border-t bg-white">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
            <p>© 2025 Pauga Automations. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
