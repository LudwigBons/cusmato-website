import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";

export default function KnowledgebasePage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Knowledgebase | Cusmato";
  }, []);

  const trustBullets = [
    "Per kanaal af te stemmen",
    "Altijd up-to-date antwoorden",
    "Voedt AI Helpdesk & workflows",
  ];

  const categoryCards = [
    {
      icon: "bestelling",
      title: "Bestelling & levering",
      description: "Orderstatus, levertijden, track & trace codes en verzendopties in één overzicht.",
    },
    {
      icon: "retour",
      title: "Annuleren & retourneren",
      description: "Retourvoorwaarden, stappen, termijnen en uitzonderingen per productcategorie.",
    },
    {
      icon: "betaling",
      title: "Betaling & facturering",
      description: "Factuuroverzicht, BTW-informatie, betaalstatus en betaalopties per kanaal.",
    },
    {
      icon: "product",
      title: "Productadvies",
      description: "Maatadvies, specificaties, compatibiliteit en gebruiksinstructies per product.",
    },
    {
      icon: "garantie",
      title: "Garantie & defecten",
      description: "Garantievoorwaarden, defectproces, bewijsvereisten en escalatiepaden.",
    },
    {
      icon: "account",
      title: "Account & privacy",
      description: "Accountbeheer, AVG-rechten, verificatieprocessen en privacy-instellingen.",
    },
  ];

  const whyCards = [
    {
      icon: "consistentie",
      title: "Consistentie",
      description: "Klanten krijgen dezelfde, accurate informatie via elk kanaal, zoals Shopify, bol.com of e-mail.",
    },
    {
      icon: "sneller",
      title: "Sneller",
      description: "Cusmato AI hoeft niet elk antwoord opnieuw uit te zoeken. Alles staat klaar in de knowledgebase.",
    },
    {
      icon: "controle",
      title: "Controle",
      description: "Jij bepaalt welke antwoorden beschikbaar zijn en of Cusmato automatisch mag versturen of eerst goedkeuring nodig heeft.",
    },
  ];

  const howItWorksSteps = [
    {
      number: "1",
      title: "Koppel je kanalen (Shopify/bol/e-mail)",
      description: "Verbind je webshop, marketplaces en e-mail met Cusmato. Alle kanalen krijgen toegang tot dezelfde knowledgebase.",
    },
    {
      number: "2",
      title: "Voeg categorieën & content toe (policies + antwoorden)",
      description: "Stel per categorie in welke informatie beschikbaar is: retourvoorwaarden, levertijden, productdetails, en meer. Voeg templates en antwoorden toe.",
    },
    {
      number: "3",
      title: "Stel tone-of-voice per kanaal in (optioneel)",
      description: "Pas indien gewenst de tone of voice per kanaal aan. Bijvoorbeeld: formeler voor bol.com, vriendelijker voor je webshop.",
    },
    {
      number: "4",
      title: "Cusmato gebruikt dit automatisch in tickets (met approval optioneel)",
      description: "Bij elke klantvraag gebruikt Cusmato automatisch de juiste informatie uit je knowledgebase. Je kunt per categorie instellen of antwoorden direct worden verstuurd of eerst worden goedgekeurd.",
    },
  ];

  const faqItems = [
    {
      id: "per-kanaal-verschillend",
      question: "Kan ik per kanaal verschillende antwoorden gebruiken?",
      answer: "Ja, je kunt per kanaal (Shopify, bol.com, e-mail) verschillende versies van antwoorden instellen, of één centrale kennisbank gebruiken. Bijvoorbeeld: voor bol.com kun je andere retourvoorwaarden tonen dan voor je eigen webshop. De knowledgebase ondersteunt kanaal-specifieke content en tone-of-voice.",
      category: "Functionaliteit",
    },
    {
      id: "verouderde-antwoorden",
      question: "Hoe voorkom ik dat antwoorden verouderen?",
      answer: "Je kunt in de knowledgebase direct content updaten. Cusmato pikt wijzigingen automatisch op binnen enkele minuten. Daarnaast kun je versies bijhouden, zodat je altijd terug kunt naar een eerdere versie als dat nodig is. We adviseren om regelmatig je belangrijkste categorieën te reviewen.",
      category: "Beheer",
    },
    {
      id: "approval-per-categorie",
      question: "Kan ik approval verplichten voor bepaalde categorieën?",
      answer: "Ja, je kunt per categorie in de knowledgebase instellen of Cusmato automatisch mag versturen of eerst goedkeuring nodig heeft. Bijvoorbeeld: algemene productvragen kunnen automatisch, maar garantiezaken of complexe terugbetalingen altijd eerst ter goedkeuring voorleggen.",
      category: "Controle",
    },
    {
      id: "update-snelheid",
      question: "Hoe snel pakt Cusmato updates op?",
      answer: "Updates in de knowledgebase worden binnen enkele minuten actief. Zodra je content toevoegt, wijzigt of verwijdert, gebruikt Cusmato de nieuwe informatie bij het volgende relevante ticket. Er is geen handmatige sync of refresh nodig, alles gebeurt automatisch.",
      category: "Technisch",
    },
  ];

  const floatingTags = [
    "Categorieën",
    "Policies",
    "Templates",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero with Enhanced Background Depth */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        {/* Background layers for depth */}
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
        
        {/* Grid layer */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.01] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Eyebrow */}
            <Reveal delay={0.05}>
              <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.15em] mb-6">
                SELF-SERVICE & KENNIS • BINNEN AI HELPDESK
              </p>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-[-0.01em]">
                <span className="sm:hidden">AI knowledgebase</span>
                <span className="hidden sm:inline">Eén AI knowledgebase voor al je platformen</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Cusmato koppelt je webshop, marketplace en e-mail aan één centrale knowledgebase. Beheer policies, productinfo en antwoorden per categorie en laat de AI Helpdesk consistent reageren in jouw tone of voice.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Probeer 14 dagen gratis
                </a>
                <a
                  href="https://www.cusmato.app/welkom"
                  className="inline-flex items-center justify-center text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Bekijk demo →
                </a>
              </div>
            </Reveal>

            {/* Trust Bullets */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                {trustBullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase - Primary */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-slate-50/60">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Reveal delay={0.1}>
              <div className="relative">
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10 pointer-events-none">
                  {floatingTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-white/98 rounded-lg px-3 py-1.5 shadow-lg border border-slate-200/40"
                    >
                      <span className="text-xs font-medium text-slate-700">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Screenshot Frame */}
                {/* Reduced shadow-2xl to shadow-xl for scroll performance */}
                <div className="relative rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden bg-white/95" style={{ boxShadow: "0 10px 40px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                  <div className="max-h-[520px] overflow-hidden">
                    <img
                      src="/knowledgebase.png"
                      alt="Knowledgebase - Beheer categorieën en kanaalregels in één overzicht"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-slate-600 mt-6">
                Beheer categorieën en kanaalregels in één overzicht.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wat zet je in de knowledgebase? */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">Wat zet je erin?</span>
              <span className="hidden md:inline">Wat zet je in de knowledgebase?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Organiseer je kennis per categorie en zorg dat Cusmato altijd de juiste informatie gebruikt.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categoryCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-white rounded-xl border border-slate-200/80 p-6 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      {card.icon === "bestelling" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      )}
                      {card.icon === "retour" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
                        </svg>
                      )}
                      {card.icon === "betaling" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      {card.icon === "product" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                      {card.icon === "garantie" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {card.icon === "account" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Waarom dit de basis is van je AI Helpdesk */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Waarom dit de basis is van je AI Helpdesk
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Je knowledgebase is de single source of truth. AI Helpdesk baseert alle antwoorden op deze bron, zodat je altijd consistent en accuraat communiceert.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {whyCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "consistentie" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "sneller" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {card.icon === "controle" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlighted Note */}
          <Reveal delay={0.3}>
            <div className="bg-blue-50/60 border border-blue-200/60 rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Controle:</span> Je kunt per categorie bepalen of Cusmato automatisch verstuurt of eerst laat goedkeuren.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Zo werkt het - Timeline */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Zo werkt het
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Koppel je kanalen en voeg kennis toe. Cusmato gebruikt het automatisch.
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline connector line */}
            {/* REMOVED drop-shadow filter for scroll performance */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />

            <div className="space-y-12 md:space-y-16">
              {howItWorksSteps.map((step, index) => (
                <Reveal key={index} delay={0.15 + index * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                    {/* Number badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white" style={{ boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(255, 255, 255, 1)" }}>
                        {step.number}
                      </div>
                    </div>
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl border border-slate-200/80 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Secondary Visual - AI Studio */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                  Alles komt samen in Cusmato Studio
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Je knowledgebase, workflows en AI Helpdesk werken samen in één overzicht. Beheer alles vanuit één centrale plek.
                </p>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="rounded-xl border border-slate-200/60 shadow-lg overflow-hidden bg-white/95" style={{ boxShadow: "0 10px 40px -12px rgba(0, 0, 0, 0.12)" }}>
                  <div className="max-h-[320px] overflow-hidden">
                    <img
                      src="/AI Studio.png"
                      alt="Cusmato Studio - Waar alles samenkomt"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24 cv-auto">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center">
              Veelgestelde vragen
            </h2>
          </Reveal>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Image Section */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Smarter support operations
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Koppel je knowledgebase aan Cusmato en laat de AI automatisch de juiste informatie gebruiken voor perfecte klantantwoorden.
              </p>
            </div>
            <div className="order-1 lg:order-last">
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Smarter Support Operations.webp"
                    alt="Smarter support operations met knowledgebase"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto sm:px-6 lg:px-8 text-center">
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              Klaar om je knowledgebase te koppelen aan je AI Helpdesk?
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Start met één centrale kennisbank en laat Cusmato automatisch de juiste antwoorden gebruiken.
            </p>
            <a
              href="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
            >
              Probeer 14 dagen gratis
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
