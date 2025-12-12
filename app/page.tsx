export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Simplifying Operations Through Smart Automation
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
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Credibility */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="border rounded-md p-6">
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
          Platforms and tools I’ve worked with
        </h2>

        <p className="text-gray-700 mb-6">
          Experience integrating and building workflows across a wide range of
          industry-standard tools used by operations-heavy teams.
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-gray-700">
          <li>JobNimbus</li>
          <li>Housecall Pro</li>
          <li>Google Sheets</li>
          <li>GoHighLevel</li>
          <li>Enerflo</li>
          <li>Jobber</li>
          <li>HubSpot</li>
          <li>Salesforce</li>
          <li>Subcontractor Hub</li>
          <li>And many more</li>
        </ul>
      </section>

      {/* Who we help */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-semibold mb-4">Who we help</h2>

        <p className="text-gray-700 mb-6">
          We work with service-based and operations-heavy businesses that manage
          jobs, projects, customers, schedules, and multiple software tools.
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
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium"
        >
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
}
