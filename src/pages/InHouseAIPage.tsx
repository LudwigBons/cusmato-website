import { Link } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import FinalCTA from "../components/FinalCTA";

const PremiumImage = lazy(() => import("../components/PremiumImage"));
const LogoWallFrame = lazy(() => import("../components/LogoWallFrame"));

export default function InHouseAIPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "In-house AI | Cusmato";
  }, []);

  const timeline = [
    {
      period: "Jan 2024",
      title: "Start ontwikkeling support-ML",
      description: "Ontwikkeling van eigen machine learning voor e-commerce klantenservice.",
    },
    {
      period: "2024",
      title: "Trainen op e-commerce flows",
      description: "Focus op orders, retouren, facturen en verzending workflows.",
    },
    {
      period: "2025",
      title: "Feedback-loop verbeteringen",
      description: "Human approval en kwaliteitsverbetering geïntegreerd.",
    },
    {
      period: "Nu",
      title: "Sneller, consistenter en schaalbaar",
      description: "Doorlopende verbetering van AI-logica voor webshops.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark background with gradient + glow blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/8 rounded-full blur-[140px] pointer-events-none" />
      
      <main className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Sectie 1 - Hero (tekst-first met image card rechts) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <Reveal>
                  <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                    In-house AI
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
                    Cusmato draait op eigen AI-logica voor klantenservice: sneller, consistenter en volledig afgestemd op e-commerce workflows.
                  </p>
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    <Link
                      to="/probeer-14-dagen-gratis"
                      className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                    >
                      Probeer 14 dagen gratis
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-6 rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      Neem contact op
                    </Link>
                  </div>
                </Reveal>
              </div>
              {/* Right: Premium Image Card */}
              <div className="order-1 lg:order-2">
                <Suspense fallback={null}>
                  <PremiumImage
                    src="/Focused Support Automation.webp"
                    alt="Focused support automation met Cusmato in-house AI"
                    aspectRatio="16/10"
                    maxWidth="xl"
                    variant="dark"
                    showGlow={true}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 2 - "Wat maakt onze AI anders?" (equal height cards) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Wat maakt onze AI anders?
                </h2>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              <Reveal delay={0.1}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all p-8 lg:p-9 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Eigen AI-engine</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-grow">
                    Geen generieke chatbot. Cusmato is gebouwd rondom support-cases: orders, retouren, verzending en facturen.
                  </p>
                </motion.div>
              </Reveal>

              <Reveal delay={0.15}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all p-8 lg:p-9 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Context uit je tools</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-grow">
                    Cusmato gebruikt data uit je gekoppelde systemen om antwoorden te onderbouwen en acties te starten.
                  </p>
                </motion.div>
              </Reveal>

              <Reveal delay={0.2}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all p-8 lg:p-9 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Continu slimmer</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-grow">
                    Feedback van je team en uitkomsten van tickets verbeteren de kwaliteit automatisch.
                  </p>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sectie 3 - "Gebouwd sinds januari 2024" (grote sectie met timeline cards) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Timeline Content */}
              <div className="order-2 lg:order-1">
                <Reveal>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
                    Gebouwd sinds januari 2024
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
                    We bouwen doorlopend aan eigen machine learning voor e-commerce support: classificatie, intent, context en kwaliteitsverbetering.
                  </p>
                </Reveal>
                <div className="grid sm:grid-cols-2 gap-5 items-stretch">
                  {timeline.map((item, index) => (
                    <Reveal key={index} delay={0.1 + index * 0.05}>
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm p-6 h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                          </div>
                          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                            {item.period}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              {/* Right: Image Card */}
              <div className="order-1 lg:order-2">
                <Suspense fallback={null}>
                  <PremiumImage
                    src="/Built for Support Teams.webp"
                    alt="Built for support teams met Cusmato AI"
                    aspectRatio="16/10"
                    maxWidth="lg"
                    variant="dark"
                    showGlow={false}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 4 - Integraties/logo strip (dark background card) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Image Card - Use LogoWallFrame */}
              <div className="order-2 lg:order-1">
                <Reveal>
                  <Suspense fallback={null}>
                    <LogoWallFrame
                      image="/cusmato-api-integrations-flow.webp"
                      alt="Cusmato API integrations flow"
                      variant="dark"
                    />
                  </Suspense>
                </Reveal>
              </div>
              {/* Right: Text + Bullets */}
              <div className="order-1 lg:order-2">
                <Reveal>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                    Werkt met jouw tools
                  </h2>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-slate-300 leading-relaxed">
                          Context uit orders, retouren en klantdata
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-slate-300 leading-relaxed">
                          Automatisch antwoorden en acties starten
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-base text-slate-300 leading-relaxed">
                          1 inbox, volledige controle
                        </p>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 5 - "Waarom in-house AI belangrijk is" (upgraded) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <Reveal>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm p-10 sm:p-12 lg:p-14">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
                    Waarom in-house AI belangrijk is
                  </h2>
                  <ul className="space-y-5 text-left">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                          Betere consistentie in antwoorden
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                          Sneller verwerken van veelvoorkomende vragen
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="pt-1">
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                          Handmatige controle mogelijk waar nodig
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Sectie 6 - Security/controle (equal height cards) */}
        <section className="mb-20 sm:mb-28 lg:mb-32">
          <div className="max-w-[1200px] mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Text + Cards */}
              <div className="order-2 lg:order-1">
                <Reveal>
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                    Automatiseer waar mogelijk, controle waar nodig
                  </h2>
                </Reveal>
                <div className="space-y-5 mt-8">
                  <Reveal delay={0.1}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Human approval mogelijk</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Kies per vraagtype of antwoorden automatisch worden verstuurd of eerst worden goedgekeurd.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Regels en workflows</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Bepaal zelf welke vragen automatisch worden afgehandeld en welke naar je team gaan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Audit en consistentie</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            Overzicht van alle antwoorden en acties voor controle en verbetering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
              {/* Right: Image Card */}
              <div className="order-1 lg:order-2">
                <Suspense fallback={null}>
                  <PremiumImage
                    src="/Human-Approved Automation.webp"
                    alt="Human-approved automation met Cusmato"
                    aspectRatio="16/10"
                    maxWidth="lg"
                    variant="dark"
                    showGlow={true}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 7 - FinalCTA component (consistent met andere pagina's) */}
        <div className="bg-white relative">
          <FinalCTA />
        </div>
      </main>
    </div>
  );
}
