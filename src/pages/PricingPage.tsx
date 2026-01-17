import { Suspense, lazy } from "react";
import ImageFrame from "../components/ImageFrame";
import FinalCTA from "../components/FinalCTA";

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

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Intro Section - Split Layout */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                  Eenvoudige, transparante prijzen
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Kies het plan dat past bij jouw behoeften. Start altijd met 14 dagen gratis proberen.
                </p>
              </div>
              {/* Right: Image */}
              <div className="flex justify-center lg:justify-end">
                <Suspense fallback={null}>
                  <ImageFrame
                    src="/Focused Support Automation.webp"
                    alt="Cusmato pricing en schaalbaarheid"
                    aspectRatio="16/10"
                    variant="light"
                    showGlow={true}
                    loading="eager"
                    className="max-w-[520px]"
                  />
                </Suspense>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
          </section>

          {/* Separator */}
          <div className="border-t border-slate-200 my-16 sm:my-20" />

          {/* AI Modules Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                AI-modules (optioneel)
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Voeg extra AI-capaciteiten toe aan je plan wanneer je ze nodig hebt.
              </p>
            </div>
            {/* AI modules content kan hier later toegevoegd worden */}
          </section>
        </div>
      </main>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}