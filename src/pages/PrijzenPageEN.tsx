import { Link } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import Reveal from "../components/Reveal";
import { ROUTES } from "../lib/constants";
import FinalCTAEN from "../components/FinalCTAEN";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";

// Helper function to convert Dutch routes to English routes
const toEnglishUrl = (path: string): string => {
  if (path.startsWith("/en/")) {
    return path; // Already English
  }
  switch (path) {
    case ROUTES.tryFree: return "/en/try-14-days-for-free";
    case ROUTES.contact: return "/en/try-14-days-for-free";
    default: return `/en${path}`;
  }
};

const PremiumImage = lazy(() => import("../components/PremiumImage"));

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
        View all bundles
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

export default function PrijzenPageEN() {

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
      question: "Are seats required?",
      answer: "No, Cusmato is fully modular. You only pay for what you use. Seats, integrations and AI modules are optional.",
    },
    {
      question: "Can I cancel?",
      answer: "Yes, all subscriptions can be cancelled monthly. No long-term contracts.",
    },
    {
      question: "What happens if I exceed my bundle?",
      answer: "We work with a soft cap. If you exceed your bundle, you'll automatically receive a notification and can choose a larger bundle without interruption.",
    },
    {
      question: "Which channels do you support?",
      answer: "We support email, chat (via integrations such as Zendesk, Intercom), WhatsApp (add-on), and other channels via our 100+ integrations.",
    },
    {
      question: "Is there onboarding?",
      answer: "Yes, all plans have access to onboarding. Enterprise customers receive dedicated onboarding and AI-tuning.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-[1100px] mx-auto sm:px-6 lg:px-8">
          {/* 1. Intro Section with Image */}
          <section className="mb-16 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <Reveal>
                  <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.15em] mb-4">
                    TRANSPARENT PRICING
                  </p>
                  <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-tight">
                    Pricing that grows with you
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Start free and only pay for what you use. No hidden costs, no long contracts.
                  </p>
                </Reveal>
              </div>
              {/* Right: Supporting Image */}
              <div className="order-1 lg:order-2">
                <Suspense fallback={null}>
                  <PremiumImage
                    src="/People Behind Cusmato AI Dashboard.webp"
                    alt="Efficient support management for online stores"
                    aspectRatio="16/10"
                    maxWidth="lg"
                    variant="light"
                    showGlow={false}
                  />
                </Suspense>
              </div>
            </div>
          </section>

          {/* 2. AI Modules Section - Simplified */}
          <section className="mb-20 sm:mb-28 lg:mb-32">
            <Reveal>
              <div className="mb-8 sm:mb-12 text-center">
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Choose only the modules you need. Prices are per month and scale with your volume.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* AI Conceptantwoorden */}
                <Reveal delay={0.1}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-5 sm:p-6 lg:p-7">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">AI Concept Answers</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Automatically generate answers
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      from €20 / month
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
                </Reveal>

                {/* AI Auto-Resolution */}
                <Reveal delay={0.15}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-5 sm:p-6 lg:p-7">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">AI Auto-Resolution</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Fully automatically handle tickets
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      from €45 / month
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
                </Reveal>

                {/* AI Chatbot */}
                <Reveal delay={0.2}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-5 sm:p-6 lg:p-7">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">AI Chatbot</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                      Live chat for customer questions
                    </p>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                      from €60 / month
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
                </Reveal>
            </div>
          </section>

          {/* 3. Basis & Extra's Section */}
          <section className="mb-20 sm:mb-28 lg:mb-32">
            <Reveal>
              {/* Mobile: Single compact card */}
              <div className="sm:hidden mb-8">
                <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-5">
                <div className="px-2.5">
                  <h3 className="text-base font-bold text-slate-900 mb-3">Base & extras</h3>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Free plan for €0 per month, up to 50 tickets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Seats cost €29 per employee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">•</span>
                      <span>Integrations from €19 per month</span>
                    </div>
                  </div>
                  <details className="group">
                    <summary className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer list-none inline-flex items-center gap-1">
                      View details
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
                            1 integration
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Up to 50 tickets per month
                          </li>
                          <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            All features available
                          </li>
                        </ul>
                      </div>
                      {/* Seats details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Employees</h4>
                        <p className="text-xs text-slate-600 mb-2">Full AI workspace per employee.</p>
                      </div>
                      {/* Integraties details */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Integrations</h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          <li>• Extra standard integration for €19 per month</li>
                          <li>• WhatsApp integration for €29 per month</li>
                          <li>• Bol.com and Amazon integration for €29 per month</li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>

              {/* Desktop: 3 separate cards */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                {/* Free Plan */}
                <Reveal delay={0.1}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-6 lg:p-8">
                    <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Cusmato Free</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">€0</div>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    For small businesses
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
                      1 integration
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Up to 50 tickets per month
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      All features available
                    </li>
                  </ul>
                  <Link
                    to={toEnglishUrl(ROUTES.tryFree)}
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Start free
                  </Link>
                    </div>
                  </div>
                </Reveal>

                {/* Seats */}
                <Reveal delay={0.15}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-6 lg:p-8">
                    <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Employees</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">€29</div>
                  <p className="text-sm text-slate-500 mb-4">per seat / month</p>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    Full AI workspace per employee.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Access to all modules
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Full dashboard access
                    </li>
                  </ul>
                  <Link
                    to={toEnglishUrl(ROUTES.tryFree)}
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Start onboarding
                  </Link>
                    </div>
                  </div>
                </Reveal>

                {/* Integraties */}
                <Reveal delay={0.2}>
                  <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-6 lg:p-8">
                    <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Integrations</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">From €19</div>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                    Add-ons for extra channels and platforms.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Extra standard integration for €19 per month
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      WhatsApp integration for €29 per month
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bol.com and Amazon integration for €29 per month
                    </li>
                  </ul>
                  <a
                    href="https://www.cusmato.app/welkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Start onboarding
                  </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </section>

          {/* 4. Enterprise Section */}
          <section className="mb-20 sm:mb-28 lg:mb-32">
            <Reveal>
              <div className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto">
                <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Enterprise</h3>
                <p className="text-sm text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  For large volumes or custom solutions.
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
                    AI-tuning & customization
                  </li>
                </ul>
                <Link
                  to="/en/try-14-days-for-free"
                  className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Try 14 days for free
                </Link>
                </div>
              </div>
            </Reveal>
          </section>

          {/* 5. FAQ Section */}
          <section className="mb-16 sm:mb-20">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8 sm:mb-12 text-center">
                  Frequently asked questions
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                    <Reveal key={index} delay={0.05 * index}>
                      <details className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-5 sm:p-6 group">
                        <summary className="text-base sm:text-lg font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                          <span>{faq.question}</span>
                          <svg
                            className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      {/* Standard CTA */}
      <FinalCTAEN />
      <BottomMobileCTAEN />
    </div>
  );
}
