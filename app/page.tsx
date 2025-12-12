export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Simplifying Operations Through Smart Automation
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We help operations-heavy businesses reduce manual work, eliminate
          inefficiencies, and gain clarity across their systems — without
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

      <section className="max-w-5xl mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-semibold mb-4">Who we help</h2>
        <p className="text-gray-700 mb-6">
          We work with service-based and operations-heavy businesses that manage
          jobs, projects, customers, schedules, and multiple software tools.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Service businesses & field teams</li>
          <li>Construction & trades</li>
          <li>Logistics and operations teams</li>
          <li>Professional services</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t">
        <h2 className="text-2xl font-semibold mb-4">How we help</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Workflow automations that remove repetitive tasks</li>
          <li>System integrations that keep tools in sync</li>
          <li>Simple dashboards that bring key data into one place</li>
        </ul>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t">
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
