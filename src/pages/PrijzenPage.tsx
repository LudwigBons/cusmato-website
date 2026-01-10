import { Link } from "react-router-dom";
import { useState } from "react";
import Reveal from "../components/Reveal";

interface PricingTier {
  volume: string;
  price: string;
  unitPrice: string;
}

interface ModuleAccordionProps {
  tiers: PricingTier[];
  unitLabel: string;
}

function ModuleAccordion({ tiers, unitLabel }: ModuleAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mt-3 sm:mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
      >
        Bekijk alle bundels
        <svg
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 pt-2 sm:pt-3 border-t border-slate-200">
          {tiers.map((tier, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs sm:text-sm py-1 sm:py-1.5">
              <span className="text-slate-600">{tier.volume} {unitLabel}</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-slate-900 font-medium">{tier.price}</span>
                <span className="text-slate-500 text-xs">{tier.unitPrice}/{unitLabel === "tickets" ? "ticket" : "chat"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PrijzenPage() {

  const conceptTiers: PricingTier[] = [
    { volume: "50", price: "€20", unitPrice: "€0,40" },
    { volume: "150", price: "€57", unitPrice: "€0,38" },
    { volume: "300", price: "€111", unitPrice: "€0,37" },
    { volume: "600", price: "€216", unitPrice: "€0,36" },
    { volume: "1.000", price: "€360", unitPrice: "€0,36" },
    { volume: "2.000", price: "€700", unitPrice: "€0,35" },
    { volume: "3.000", price: "€1.020", unitPrice: "€0,34" },
  ];

  const autoResolutionTiers: PricingTier[] = [
    { volume: "50", price: "€45", unitPrice: "€0,90" },
    { volume: "150", price: "€132", unitPrice: "€0,88" },
    { volume: "300", price: "€261", unitPrice: "€0,87" },
    { volume: "600", price: "€510", unitPrice: "€0,85" },
    { volume: "1.000", price: "€840", unitPrice: "€0,84" },
    { volume: "2.000", price: "€1.640", unitPrice: "€0,82" },
    { volume: "3.000", price: "€2.460", unitPrice: "€0,82" },
  ];

  const chatbotTiers: PricingTier[] = [
    { volume: "200", price: "€60", unitPrice: "€0,30" },
    { volume: "500", price: "€145", unitPrice: "€0,29" },
    { volume: "1.000", price: "€280", unitPrice: "€0,28" },
    { volume: "2.000", price: "€540", unitPrice: "€0,27" },
    { volume: "3.000", price: "€795", unitPrice: "€0,27" },
  ];

  const faqs = [
    {
      question: "Zijn seats verplicht?",
      answer: "Nee, Cusmato is volledig modulair. Je betaalt alleen voor wat je gebruikt — seats, integraties en AI-modules zijn optioneel.",
    },
    {
      question: "Kan ik opzeggen?",
      answer: "Ja, alle abonnementen zijn opzegbaar per maand. Geen langlopende contracten.",
    },
    {
      question: "Wat gebeurt er als ik over mijn bundel ga?",
      answer: "We werken met een soft cap. Als je over je bundel gaat, krijg je automatisch een melding en kun je een grotere bundel kiezen zonder onderbreking.",
    },
    {
      question: "Welke kanalen ondersteunen jullie?",
      answer: "We ondersteunen e-mail, chat (via integraties zoals Zendesk, Intercom), WhatsApp (add-on), en andere kanalen via onze 100+ integraties.",
    },
    {
      question: "Is er onboarding?",
      answer: "Ja, alle plannen hebben toegang tot onboarding. Enterprise klanten krijgen dedicated onboarding en AI-tuning.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Hero */}
          <Reveal>
            <div className="text-center mb-8 sm:mb-16">
              <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 sm:mb-6 leading-[1.05]">
                <span className="sm:hidden">Prijzen</span>
                <span className="hidden sm:inline">Prijzen die met je meegroeien</span>
              </h1>
              <p className="text-base sm:text-base lg:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                <span className="block sm:inline">Start gratis.</span> Betaal alleen voor wat je gebruikt.
              </p>
              {/* Mobile: only 1 CTA, Desktop: 2 CTAs */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mb-0 sm:mb-4">
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Probeer 14 dagen gratis
                </Link>
                <Link
                  to="/contact"
                  className="hidden sm:inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:shadow-sm"
                >
                  Neem contact op
                </Link>
              </div>
              <p className="hidden sm:block text-xs sm:text-sm text-slate-500">
                Geen verplichte pakketten • Opzegbaar per maand
              </p>
            </div>
          </Reveal>

          {/* Modules Section */}
          <Reveal>
            <div className="mb-10 sm:mb-20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-3 sm:mb-6 text-center">
                AI-modules
              </h2>
              <p className="hidden sm:block text-sm sm:text-base text-slate-600 text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
                Kies alleen de modules die je nodig hebt. Prijzen zijn per maand en schalen met je volume.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
                {/* AI Conceptantwoorden */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                  <div className="px-2.5 sm:px-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">AI Conceptantwoorden</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Automatisch antwoorden genereren
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      vanaf €20 / maand
                    </div>
                    {/* Mobile: compact tier list, Desktop: same */}
                    <div className="hidden sm:block space-y-2 mb-6 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>50 tickets</span>
                        <span className="font-medium text-slate-900">€20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>150 tickets</span>
                        <span className="font-medium text-slate-900">€57</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1.000 tickets</span>
                        <span className="font-medium text-slate-900">€360</span>
                      </div>
                    </div>
                    {/* Mobile: simplified tier list */}
                    <div className="sm:hidden space-y-1.5 mb-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>50 tickets</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>150 tickets</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>1.000 tickets</span>
                      </div>
                    </div>
                    <ModuleAccordion tiers={conceptTiers} unitLabel="tickets" />
                  </div>
                </div>

                {/* AI Auto-Resolution */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                  <div className="px-2.5 sm:px-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">AI Auto-Resolution</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Volledig automatisch tickets afhandelen
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      vanaf €45 / maand
                    </div>
                    <div className="hidden sm:block space-y-2 mb-6 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>50 tickets</span>
                        <span className="font-medium text-slate-900">€45</span>
                      </div>
                      <div className="flex justify-between">
                        <span>150 tickets</span>
                        <span className="font-medium text-slate-900">€132</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1.000 tickets</span>
                        <span className="font-medium text-slate-900">€840</span>
                      </div>
                    </div>
                    <div className="sm:hidden space-y-1.5 mb-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>50 tickets</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>150 tickets</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>1.000 tickets</span>
                      </div>
                    </div>
                    <ModuleAccordion tiers={autoResolutionTiers} unitLabel="tickets" />
                  </div>
                </div>

                {/* AI Chatbot */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6">
                  <div className="px-2.5 sm:px-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2">AI Chatbot</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Live chat voor klantvragen
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      vanaf €60 / maand
                    </div>
                    <div className="hidden sm:block space-y-2 mb-6 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>200 chats</span>
                        <span className="font-medium text-slate-900">€60</span>
                      </div>
                      <div className="flex justify-between">
                        <span>500 chats</span>
                        <span className="font-medium text-slate-900">€145</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2.000 chats</span>
                        <span className="font-medium text-slate-900">€540</span>
                      </div>
                    </div>
                    <div className="sm:hidden space-y-1.5 mb-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>200 chats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>500 chats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>2.000 chats</span>
                      </div>
                    </div>
                    <ModuleAccordion tiers={chatbotTiers} unitLabel="chats" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Start Plans Cards */}
          <Reveal>
            {/* Mobile: Single compact card */}
            <div className="sm:hidden mb-8">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="px-2.5">
                  <h3 className="text-base font-bold text-slate-900 mb-3">Basis & extra's</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Free — €0 (tot 50 tickets)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Seats — €29 per medewerker</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Integraties — vanaf €19 / maand</span>
                    </div>
                  </div>
                  <details className="group">
                    <summary className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer list-none inline-flex items-center gap-1">
                      Bekijk details
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                      {/* Free details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Cusmato Free</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            1 seat
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            1 integratie
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Tot 50 tickets per maand
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Alle functies beschikbaar
                          </li>
                        </ul>
                      </div>
                      {/* Seats details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Medewerkers</h4>
                        <p className="text-xs text-slate-600 mb-2">Volledige AI-werkplek per medewerker.</p>
                      </div>
                      {/* Integraties details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Integraties</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>• Extra standaard integratie — €19 / maand</li>
                          <li>• WhatsApp integratie — €29 / maand</li>
                          <li>• Bol.com / Amazon integratie — €29 / maand</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            {/* Desktop: 3 separate cards */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
              {/* Free Plan */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-8 relative">
                <div className="px-2.5 sm:px-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Cusmato Free</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">€0</div>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    Voor kleine bedrijven
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1 seat
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1 integratie
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Tot 50 tickets per maand
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Alle functies beschikbaar
                    </li>
                  </ul>
                  <Link
                    to="/probeer-14-dagen-gratis"
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Start gratis
                  </Link>
                </div>
              </div>

              {/* Seats */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-8 relative">
                <div className="px-2.5 sm:px-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Medewerkers</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">€29</div>
                  <p className="text-sm text-slate-500 mb-4">per seat / maand</p>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    Volledige AI-werkplek per medewerker.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Toegang tot alle modules
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Volledige dashboard toegang
                    </li>
                  </ul>
                  <Link
                    to="/probeer-14-dagen-gratis"
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Start onboarding
                  </Link>
                </div>
              </div>

              {/* Integraties */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 lg:p-8 relative">
                <div className="px-2.5 sm:px-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Integraties</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Vanaf €19</div>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    Add-ons voor extra kanalen en platforms.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Extra standaard integratie — €19 / maand
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      WhatsApp integratie — €29 / maand
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bol.com / Amazon integratie — €29 / maand
                    </li>
                  </ul>
                  <Link
                    to="/integraties"
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Bekijk integraties
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal>
            <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 lg:p-8 mb-10 sm:mb-20 max-w-2xl mx-auto">
              <div className="px-2.5 sm:px-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Enterprise</h3>
                <p className="text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  Voor grote volumes of maatwerk.
                </p>
                <ul className="hidden sm:block space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SLA & premium support
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated onboarding
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom pricing & volumes
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-tuning & maatwerk
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Footer CTA - Hidden on mobile to reduce CTAs */}
          <Reveal>
            <div className="hidden sm:block text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Klaar om te starten?
              </h3>
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Probeer 14 dagen gratis
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
