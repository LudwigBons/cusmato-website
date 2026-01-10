import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";

export default function WorkflowsRegelsPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Workflows & regels | Cusmato";
  }, []);

  const trustBullets = [
    "Approval per categorie",
    "Audit log & transparantie",
    "Veilige defaults",
  ];

  const conceptCards = [
    {
      icon: "regels",
      title: "Regels (policies)",
      description: "Definieer wanneer Cusmato wel of niet automatisch mag handelen. Per categorie bepaal je of antwoorden direct worden verstuurd of eerst goedgekeurd moeten worden.",
    },
    {
      icon: "workflows",
      title: "Workflows",
      description: "Stel stappen in die Cusmato volgt na herkenning van een vraag: welke template gebruiken, welke labels toevoegen, en naar welk team routen bij uitzonderingen.",
    },
    {
      icon: "uitzonderingen",
      title: "Uitzonderingen",
      description: "Bepaal wanneer Cusmato automatisch moet escaleren naar jouw team. Bij twijfel, complexe gevallen of specifieke triggers wordt alles netjes doorgestuurd met context.",
    },
  ];

  const exampleRules = [
    {
      icon: "retour",
      title: "Retourstatus",
      description: "Als retourtermijn voorbij is → standaard antwoord + escalatie tag. Cusmato informeert de klant en tagt het ticket voor handmatige review.",
    },
    {
      icon: "verzending",
      title: "Verzending",
      description: "Als tracking ontbreekt → vraag om info + label 'tracking nodig'. Cusmato vraagt de klant naar meer informatie en tagt het ticket voor follow-up.",
    },
    {
      icon: "factuur",
      title: "Factuur",
      description: "Als klant factuur opnieuw wil → concept klaarzetten + optioneel auto-send. Cusmato bereidt een antwoord voor met factuur als bijlage, jij keurt goed of laat automatisch versturen.",
    },
    {
      icon: "levertijd",
      title: "Levertijd",
      description: "Bij vertraging > X dagen → proactieve update template. Cusmato stuurt automatisch een bericht naar de klant voordat er vragen komen.",
    },
    {
      icon: "vip",
      title: "VIP klanten",
      description: "Bij VIP tag → altijd approval. Voor belangrijke klanten wordt elk antwoord eerst ter goedkeuring voorgelegd, ongeacht de categorie.",
    },
    {
      icon: "taal",
      title: "Taal",
      description: "Als ticket Engels is → Engels tone-of-voice template. Cusmato herkent de taal en gebruikt automatisch het juiste template en tone of voice.",
    },
  ];

  const setupSteps = [
    {
      number: "1",
      title: "Kies categorie",
      description: "Selecteer een categorie (retour, bestelling, factuur, algemeen) waar je regels voor wilt instellen. Je kunt meerdere categorieën configureren met verschillende workflows.",
    },
    {
      number: "2",
      title: "Definieer regels + uitzonderingen",
      description: "Stel in wanneer Cusmato automatisch mag handelen, welke templates gebruikt moeten worden, en wanneer er geëscaleerd moet worden. Je kunt per regel instellen of goedkeuring verplicht is.",
    },
    {
      number: "3",
      title: "Test & ga live (met approval als start)",
      description: "Begin veilig met approval mode, zodat je alle antwoorden eerst controleert. Zodra je vertrouwen hebt, kun je specifieke onderdelen stap voor stap op autopilot zetten.",
    },
  ];

  const faqItems = [
    {
      id: "goedkeuring-per-categorie",
      question: "Kan ik goedkeuring verplichten per categorie?",
      answer: "Ja, je kunt per categorie en zelfs per regeltype instellen of Cusmato automatisch mag handelen of eerst jouw goedkeuring nodig heeft. Bijvoorbeeld: standaard vragen kunnen automatisch, maar financiële vragen of VIP klanten altijd eerst goedkeuring. Je hebt volledige controle over wat automatisch gaat en wat wordt gereviewd.",
      category: "Controle",
    },
    {
      id: "log-versturen",
      question: "Is er een log van wat Cusmato verstuurt?",
      answer: "Ja, alles wordt gelogd in je AI Helpdesk dashboard. Je ziet altijd wat Cusmato heeft verstuurd, wanneer, waarom (welke regel/trigger), en of het automatisch is gegaan of met goedkeuring. Dit audit trail helpt je om workflows te verfijnen en geeft volledige transparantie over alle communicatie met klanten.",
      category: "Transparantie",
    },
    {
      id: "uitzonderingen",
      question: "Hoe gaat Cusmato om met uitzonderingen?",
      answer: "Cusmato herkent uitzonderingen op basis van jouw regels en escalatie triggers. Bij twijfel, complexe vragen of specifieke voorwaarden (bijv. bedrag boven X, VIP klant, buiten termijn) wordt het ticket automatisch doorgestuurd naar jouw team met alle relevante context. Zo blijft controle waar nodig en automatisering waar mogelijk.",
      category: "Functionaliteit",
    },
    {
      id: "tone-of-voice-templates",
      question: "Kan ik meerdere tone-of-voice templates gebruiken?",
      answer: "Ja, je kunt per categorie, kanaal of zelfs per regeltype verschillende tone-of-voice templates instellen. Bijvoorbeeld: formeler voor factuurvragen, vriendelijker voor productvragen, of verschillende talen. Cusmato past automatisch het juiste template toe op basis van de context en je regels.",
      category: "Personalizatie",
    },
  ];

  const floatingTags = [
    { text: "Approval mode", position: "top-left" },
    { text: "Uitzonderingen", position: "top-right" },
    { text: "Audit log", position: "bottom-right" },
  ];

  const trustStripItems = [
    { icon: "shield", label: "Goedkeuring verplicht" },
    { icon: "log", label: "Volledige logging" },
    { icon: "lock", label: "Veilige defaults" },
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

        {/* Radial glows */}
        {/* Removed animated blur-3xl for performance - static gradients */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/12 rounded-full pointer-events-none opacity-50" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full pointer-events-none opacity-50" />
        {shouldReduceMotion && (
          <>
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/12 rounded-full pointer-events-none opacity-50" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full pointer-events-none opacity-50" />
          </>
        )}

        {/* Noise overlay (subtle) */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
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
                AUTOMATISERING • BINNEN AI HELPDESK
              </p>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-[-0.01em]">
                <span className="sm:hidden">Workflows & regels</span>
                <span className="hidden sm:inline">Workflows & regels die je AI Helpdesk strak houden</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Stel duidelijke regels in per categorie (retour, bestelling, factuur, escalatie). Cusmato volgt jouw policies, gebruikt de juiste tone of voice en voert alleen uit wat jij toestaat — automatisch of met goedkeuring.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Probeer 14 dagen gratis
                </Link>
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

      {/* Showcase Band - Redesigned */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto px-3 sm:px-0">
            {/* Content + Visual Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Title & Context */}
              <div className="lg:order-1">
                <Reveal delay={0.1}>
                  <h2 className="text-3xl md:text-3xl font-semibold text-white mb-4 leading-[1.15]">
                    <span className="md:hidden">Workflows in één oogopslag</span>
                    <span className="hidden md:inline">Zo ziet een workflow eruit</span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-[28rem] md:max-w-none mx-auto md:mx-0">
                    Regels, stappen en uitzonderingen in één overzicht. Alles wat je nodig hebt om Cusmato te sturen, op één plek.
                  </p>
                </Reveal>
              </div>

              {/* Right: Screenshot with Frame & Floating Tags */}
              <div className="lg:order-2 relative">
                <Reveal delay={0.15}>
                  <div className="relative mx-auto max-w-[520px]">
                    {/* Device frame / Container */}
                    {/* Reduced shadow-2xl to shadow-xl for scroll performance */}
                    <div className="relative rounded-xl border border-slate-700/60 shadow-xl overflow-hidden bg-slate-800/50 px-3 sm:px-0" style={{ boxShadow: "0 10px 40px -8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                      <div className="max-h-[420px] overflow-hidden">
                        <img
                          src="/Cusmato workflows.png"
                          alt="Cusmato workflows - Regels, stappen en uitzonderingen in één flow"
                          className="w-full h-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    {/* Floating Tags */}
                    {floatingTags.map((tag, index) => (
                      <div
                        key={index}
                        className={`absolute ${tag.position === "top-left" ? "top-4 left-4" : tag.position === "top-right" ? "top-4 right-4" : "bottom-4 right-4"} pointer-events-none`}
                      >
                        <div className="bg-white/98 rounded-lg px-3 py-1.5 shadow-lg border border-slate-200/40">
                          <span className="text-xs font-medium text-slate-700">{tag.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat zijn workflows & regels? - Enhanced Cards */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-3 sm:px-0">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              Wat zijn workflows & regels?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Guardrails die ervoor zorgen dat Cusmato consistent en gecontroleerd werkt binnen je AI Helpdesk.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {conceptCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="group bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="px-2.5 sm:px-0">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "regels" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {card.icon === "workflows" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    )}
                    {card.icon === "uitzonderingen" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Voorbeelden die teams vaak instellen - Enhanced Background */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Voorbeelden die teams vaak instellen
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Concrete regels die je kunt configureren, altijd met volledige controle.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {exampleRules.map((rule, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-white rounded-xl border border-slate-200/80 p-7 shadow-sm hover:shadow-lg transition-all duration-300 relative"
                  style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}
                >
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.2), 0 8px 24px rgba(59, 130, 246, 0.08)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      {rule.icon === "retour" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
                        </svg>
                      )}
                      {rule.icon === "verzending" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {rule.icon === "factuur" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {rule.icon === "levertijd" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {rule.icon === "vip" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {rule.icon === "taal" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Controle & veiligheid - Premium Trust Section */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50/50 rounded-2xl border border-slate-200/80 p-8 md:p-12 shadow-xl" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 20px 60px -12px rgba(15, 23, 42, 0.12)" }}>
              {/* Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-6 pb-8 mb-8 border-b border-slate-200/60">
                {trustStripItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    {item.icon === "shield" && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.icon === "log" && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {item.icon === "lock" && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 text-center">
                Controle & veiligheid
              </h2>
              <p className="text-base text-slate-600 mb-10 text-center max-w-2xl mx-auto">
                Je hebt volledige controle over wat Cusmato doet. Transparantie en veilige defaults staan voorop.
              </p>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Approval modes</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kies tussen Auto (automatisch versturen) of Approval (goedkeuring verplicht). Je kunt per categorie of regeltype instellen welke mode actief is.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Audit log</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Alles wordt gelogd: wat is verstuurd, wanneer, waarom (welke regel), en of het automatisch ging of met goedkeuring. Volledige transparantie.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Grenzen</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Je bepaalt welke acties zijn toegestaan. Cusmato kan suggesties doen en concepten klaarzetten. High-risk acties gebeuren alleen met expliciete configuratie en toestemming.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200/60">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-slate-600">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Veilige defaults</p>
                    <p>
                      Standaard staat alles op approval mode. Je kiest zelf wanneer je specifieke onderdelen op autopilot zet, altijd op basis van vertrouwen en ervaring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Zo stel je het in - Enhanced Timeline */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Zo stel je het in
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Begin veilig met approval, zet pas later onderdelen op autopilot.
            </p>
          </Reveal>

          <div className="relative">
            {/* Enhanced Timeline connector line */}
            {/* REMOVED drop-shadow filter for scroll performance - using solid gradient */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200" />

            <div className="space-y-12 md:space-y-16">
              {setupSteps.map((step, index) => (
                <Reveal key={index} delay={0.15 + index * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                    {/* Enhanced Number badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white" style={{ boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(255, 255, 255, 1)" }}>
                        {step.number}
                      </div>
                    </div>
                    {/* Enhanced Content Card */}
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

      {/* FAQ */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24 cv-auto">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center leading-[1.15]">
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

        <div className="relative z-10 max-w-3xl mx-auto sm:px-6 lg:px-8 text-center">
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              Klaar om je AI Helpdesk te sturen met regels?
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Stel workflows in die passen bij jouw team en begin veilig met volledige controle.
            </p>
            <Link
              to="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
            >
              Probeer 14 dagen gratis
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
