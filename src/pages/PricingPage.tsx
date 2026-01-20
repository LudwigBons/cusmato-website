import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import ImageFrame from "../components/ImageFrame";
import FinalCTA from "../components/FinalCTA";
import BottomMobileCTA from "../components/BottomMobileCTA";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";

// AI Modules
const aiModules = [
  {
    name: "AI Conceptantwoorden",
    subtitle: "Automatisch antwoorden genereren",
    label: "vanaf €20 / maand",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bundles: [
      { volume: "50 tickets", price: "€20" },
      { volume: "150 tickets", price: "€57" },
      { volume: "1.000 tickets", price: "€350" },
    ],
  },
  {
    name: "AI Auto-Resolution",
    subtitle: "Volledig automatisch tickets afhandelen",
    label: "vanaf €40 / maand",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bundles: [
      { volume: "50 tickets", price: "€40" },
      { volume: "150 tickets", price: "€117" },
      { volume: "1.000 tickets", price: "€750" },
    ],
  },
  {
    name: "AI Chatbot",
    subtitle: "Live chat voor klantvragen",
    label: "vanaf €60 / maand",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bundles: [
      { volume: "200 chats", price: "€60" },
      { volume: "500 chats", price: "€145" },
      { volume: "2.000 chats", price: "€540" },
    ],
  },
];

// Seats & Integraties
const seatsAndIntegrations = [
  {
    name: "Cusmato Free",
    price: "€0",
    priceLabel: null,
    features: [
      "1 Admin seat",
      "1 integratie",
      "Alle functies beschikbaar",
      "Tot 50 tickets per maand",
    ],
    cta: {
      text: "Start gratis",
      href: "/probeer-14-dagen-gratis",
    },
    popular: false,
  },
  {
    name: "Medewerkers (Seats)",
    price: "€29",
    priceLabel: "per seat / maand",
    features: [
      "Volledige AI-werkplek per medewerker",
      "Toegang tot alle modules",
      "Volledige dashboard toegang",
    ],
    cta: {
      text: "Start onboarding",
      href: "https://www.cusmato.app/welkom",
      external: true,
    },
    popular: false,
  },
  {
    name: "Integraties",
    price: null,
    priceLabel: "Vanaf €19",
    features: [
      "Extra standaard integratie → €15 / maand",
      "WhatsApp → €19 / maand",
      "Bol.com / Amazon → €29 / maand",
    ],
    cta: {
      text: "Start onboarding",
      href: "https://www.cusmato.app/welkom",
      external: true,
    },
    popular: false,
  },
];

// Enterprise
const enterpriseFeatures = [
  "Custom AI-volumes",
  "Contract pricing",
  "SLA & premium support",
  "Dedicated onboarding",
  "AI-tuning & maatwerk",
];

// FAQ Items (placeholder - houd bestaande als die er zijn)
const faqItems = [
  {
    id: "pricing-model",
    question: "Hoe werkt het nieuwe prijsmodel?",
    answer: "Je start gratis met Cusmato Free (1 admin seat, 1 integratie, tot 50 tickets per maand). Daarna betaal je alleen voor wat je gebruikt: extra seats (€29/maand per seat), AI-modules naar keuze, en extra integraties. Geen verborgen kosten, geen lange contracten.",
    category: "Pricing",
  },
  {
    id: "free-plan",
    question: "Wat krijg ik in Cusmato Free?",
    answer: "Cusmato Free geeft je 1 admin seat, 1 integratie en toegang tot alle functies, tot 50 tickets per maand. Perfect om te ontdekken wat Cusmato voor je kan doen zonder direct te betalen.",
    category: "Pricing",
  },
  {
    id: "ai-modules",
    question: "Kan ik meerdere AI-modules combineren?",
    answer: "Ja, je kunt meerdere AI-modules tegelijk gebruiken. Bijvoorbeeld: AI Conceptantwoorden voor e-mailtickets en AI Chatbot voor live chat. Je betaalt per module volgens je gekozen bundel.",
    category: "Pricing",
  },
  {
    id: "enterprise",
    question: "Voor wie is Enterprise geschikt?",
    answer: "Enterprise is bedoeld voor bedrijven met meer dan 3.000 tickets per maand of complexe workflows die custom AI-volumes, contract pricing, SLA's, dedicated onboarding of AI-tuning en maatwerk nodig hebben.",
    category: "Enterprise",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Hero Section - Split Layout */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <Reveal>
                  <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                    Prijzen die met je meegroeien
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Start gratis en betaal alleen voor wat je gebruikt. Geen verborgen kosten, geen lange contracten.
                  </p>
                </Reveal>
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

          {/* AI Modules Section - 3 cards boven */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                  AI-modules
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Voeg extra AI-capaciteiten toe aan je plan wanneer je ze nodig hebt.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {aiModules.map((module, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <div className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 lg:p-8 relative h-full flex flex-col">
                    <div className="px-2.5 sm:px-0">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                        {module.icon}
                      </div>
                      
                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{module.name}</h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-4">{module.subtitle}</p>
                      
                      {/* Price Label */}
                      <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-6">{module.label}</div>
                      
                      {/* Bundles */}
                      <div className="space-y-3 mb-6 sm:mb-8 flex-grow">
                        {module.bundles.map((bundle, bundleIndex) => (
                          <div key={bundleIndex} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-sm sm:text-base text-slate-700 font-medium">{bundle.volume}</span>
                            <span className="text-sm sm:text-base text-slate-900 font-semibold">{bundle.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <a
                        href="/contact"
                        className="block w-full text-center h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
                      >
                        Bekijk alle bundels
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Separator */}
          <div className="border-t border-slate-200 my-16 sm:my-20" />

          {/* Seats & Integraties Section - 3 cards onder */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                  Seats & Integraties
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {seatsAndIntegrations.map((item, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <div className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 lg:p-8 relative h-full flex flex-col">
                    {item.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Populair
                        </span>
                      </div>
                    )}
                    <div className="px-2.5 sm:px-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{item.name}</h3>
                      {item.price && (
                        <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{item.price}</div>
                      )}
                      {item.priceLabel && (
                        <div className="text-sm sm:text-base text-slate-600 mb-4">{item.priceLabel}</div>
                      )}
                      {!item.price && item.priceLabel && (
                        <div className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">{item.priceLabel}</div>
                      )}
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {item.cta.external ? (
                        <a
                          href={item.cta.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`block w-full text-center h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-full ${
                            item.name === "Cusmato Free"
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "border border-slate-300 text-slate-900 bg-white hover:bg-slate-50"
                          } transition-colors`}
                        >
                          {item.cta.text}
                        </a>
                      ) : (
                        <Link
                          to={item.cta.href}
                          className={`block w-full text-center h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-full ${
                            item.name === "Cusmato Free"
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "border border-slate-300 text-slate-900 bg-white hover:bg-slate-50"
                          } transition-colors`}
                        >
                          {item.cta.text}
                        </Link>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Separator */}
          <div className="border-t border-slate-200 my-16 sm:my-20" />

          {/* Enterprise Section */}
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <Reveal delay={0.1}>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 lg:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                    Enterprise
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                    Voor bedrijven met meer dan 3.000 tickets per maand of complexe workflows
                  </p>
                  <ul className="space-y-3 mb-8 text-left max-w-2xl mx-auto">
                    {enterpriseFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Neem contact op
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>

          {/* FAQ Section */}
          <section>
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                  Veelgestelde vragen
                </h2>
              </div>
            </Reveal>
            <FAQAccordion items={faqItems} />
          </section>
        </div>
      </main>

      {/* Final CTA */}
      <FinalCTA />
      <BottomMobileCTA />
    </div>
  );
}
