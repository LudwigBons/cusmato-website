export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Vanaf €99",
      description: "Perfect voor kleine teams die willen beginnen met automatisering.",
      features: [
        "Tot 500 tickets/maand",
        "E-mail automatisering",
        "Basis integraties",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "Vanaf €299",
      description: "Voor groeiende bedrijven die meer automatisering nodig hebben.",
      features: [
        "Tot 2000 tickets/maand",
        "Alle automatisering functies",
        "Alle integraties",
        "Prioriteit support",
        "Custom tone of voice",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Voor grote organisaties met specifieke wensen en eisen.",
      features: [
        "Onbeperkt tickets",
        "Dedicated account manager",
        "Custom integraties",
        "24/7 support",
        "SLA garantie",
        "On-premise optie",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5">
              Eenvoudige, transparante prijzen
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-snug sm:leading-relaxed">
              Kies het plan dat past bij jouw behoeften. Start altijd met 14 dagen gratis proberen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border ${
                  plan.popular ? "border-blue-500 shadow-md" : "border-slate-200"
                } p-5 sm:p-6 lg:p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Populair
                    </span>
                  </div>
                )}
                <div className="px-2.5 sm:px-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{plan.price}</div>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">{plan.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/probeer-14-dagen-gratis"
                    className={`block w-full text-center h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-full ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-slate-300 text-slate-900 bg-white hover:bg-slate-50"
                    } transition-colors`}
                  >
                    14 dagen gratis
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}