import { Link } from "react-router-dom";

export default function IntegrationsFlowSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Koppel met al jouw tools
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cusmato integreert naadloos met je bestaande stack. Via API's en webhooks 
              koppelen we jouw e-commerce platform, e-mail systeem en support tools.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Shopify, WooCommerce, Magento",
                "Gmail, Outlook, Mailchimp",
                "Zendesk en andere support tools",
                "Custom API integraties mogelijk",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/integraties"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
            >
              Bekijk integraties
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:block relative">
            <div className="relative bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
              <img
                src="/cusmato-api-integrations-flow.webp"
                alt="API integrations flow"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}