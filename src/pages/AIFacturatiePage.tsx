import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";

export default function AIFacturatiePage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "AI facturatie | Cusmato";
  }, []);

  const flowSteps = [
    { title: "Factuurvraag in inbox", description: "Het ticket komt binnen in je AI Helpdesk" },
    { title: "Factuur match en status", description: "Cusmato koppelt automatisch de factuurdata" },
    { title: "Antwoord en actie verstuurd", description: "Het antwoord en de factuur worden naar de klant gestuurd via PDF of link" },
  ];

  const features = [
    {
      icon: "opzoeken",
      title: "Factuur opzoeken & matchen",
      description: "Cusmato zoekt automatisch de juiste factuur op basis van email, ordernummer of klantgegevens. Elke factuurvraag wordt gekoppeld aan het bijbehorende ticket in je AI Helpdesk.",
    },
    {
      icon: "versturen",
      title: "Factuur opnieuw versturen",
      description: "Wanneer een klant aangeeft zijn factuur kwijt te zijn, zoekt Cusmato de factuur op en stuurt deze automatisch opnieuw als PDF bijlage of via een beveiligde link. Alles gebeurt binnen AI Helpdesk met volledige logging.",
    },
    {
      icon: "betaalstatus",
      title: "Betaalstatus uitleggen",
      description: "Cusmato checkt automatisch of een factuur open, betaald, gefaald of teruggestort is. Klanten krijgen direct duidelijkheid over de status, zonder dat jij handmatig hoeft te checken.",
    },
    {
      icon: "btw",
      title: "BTW en factuurgegevens vragen beantwoorden",
      description: "Vragen over BTW-tarieven, factuurnummers, betaalgegevens of factuurdetails worden automatisch beantwoord. Cusmato haalt de juiste informatie uit je factuursysteem en geeft contextrijke antwoorden.",
    },
    {
      icon: "herinnering",
      title: "Herinneringen & follow-ups",
      description: "Op basis van jouw regels stuurt Cusmato automatisch herinneringen voor openstaande facturen. Je bepaalt wanneer en hoe vaak, en Cusmato handelt het af via AI Helpdesk met volledige controle.",
    },
    {
      icon: "escalatie",
      title: "Escaleren bij uitzonderingen",
      description: "Bij fraude, chargebacks, boekhoudvragen of andere uitzonderingen stuurt Cusmato automatisch door naar jouw finance-team. Alle factuurcontext en historie worden meegegeven, zodat jij direct weet wat er speelt.",
    },
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Ticket komt binnen met een factuurvraag, BTW vraag of betaalstatus vraag",
      description: "Een klant vraagt via e-mail of chat naar een factuur, BTW-informatie of betaalstatus. Het ticket verschijnt automatisch in je AI Helpdesk inbox, gekoppeld aan de klant.",
    },
    {
      number: "2",
      title: "Cusmato koppelt automatisch de klant, order en factuur en controleert de status",
      description: "Cusmato zoekt automatisch de bijbehorende factuur op via je factuursysteem of webshop integratie. Het controleert betaalstatus, factuurdatum, bedrag en alle relevante gegevens. Alle context wordt aan het ticket gekoppeld.",
    },
    {
      number: "3",
      title: "Cusmato maakt een antwoord en voegt de bijlage of link toe",
      description: "Cusmato genereert een gepersonaliseerd antwoord in jouw tone of voice en voegt automatisch de factuur toe als PDF bijlage of beveiligde link. Bij BTW-vragen geeft het direct de juiste informatie.",
    },
    {
      number: "4",
      title: "Het antwoord wordt automatisch verstuurd of ter goedkeuring voorgelegd en gelogd in je dashboard",
      description: "Afhankelijk van jouw instellingen wordt het antwoord automatisch verstuurd of eerst ter goedkeuring voorgelegd. Alles wordt gelogd in je AI Helpdesk dashboard, zodat je altijd ziet wat er is verstuurd en waarom.",
    },
  ];

  const controlPoints = [
    "Je kunt per categorie instellen of goedkeuring verplicht is",
    "Templates en tone of voice blijven consistent in alle communicatie",
    "Je ziet in het audit trail precies wat er is verstuurd en waarom",
    "Complexe vragen worden automatisch doorgestuurd naar je finance team",
  ];

  const faqItems = [
    {
      id: "factuurdata-lezen",
      question: "Welke factuurdata moet Cusmato kunnen lezen?",
      answer: "Cusmato heeft toegang nodig tot factuurnummers, factuurdata, bedragen, betaalstatus, BTW-gegevens en klantgegevens. Dit kan via integraties met je factuursysteem (zoals Exact, Moneybird, of native webshop facturatie) of via API-koppelingen. Alle data blijft veilig en versleuteld, en je bepaalt zelf welke informatie Cusmato mag gebruiken.",
      category: "Technisch",
    },
    {
      id: "factuur-bijlage",
      question: "Kan Cusmato facturen als bijlage meesturen?",
      answer: "Ja, Cusmato kan facturen automatisch als PDF bijlage meesturen of een beveiligde downloadlink genereren. Je kunt instellen of dit automatisch mag of eerst goedkeuring nodig heeft. Bij het opnieuw versturen van facturen wordt altijd de originele factuur gebruikt, zodat er geen verwarring ontstaat.",
      category: "Functionaliteit",
    },
    {
      id: "refunds-creditnota",
      question: "Werkt dit met refunds en creditnota's?",
      answer: "Ja, Cusmato herkent vragen over refunds en creditnota's en kan deze automatisch opzoeken en uitleggen. Bij refunds wordt de status gecontroleerd en de klant geïnformeerd over wanneer de terugbetaling wordt verwerkt. Creditnota's worden net als facturen automatisch gekoppeld aan tickets en kunnen opnieuw worden verstuurd indien nodig.",
      category: "Functionaliteit",
    },
    {
      id: "goedkeuring-financieel",
      question: "Kan ik goedkeuring verplichten voor financiële mails?",
      answer: "Ja, je kunt per categorie instellen of Cusmato direct mag handelen of eerst jouw goedkeuring nodig heeft. Voor financiële mails zoals facturen versturen, betaalstatus wijzigen of refunds kun je instellen dat deze altijd eerst worden goedgekeurd. Dit regel je per actietype in je AI Helpdesk instellingen, zodat je volledige controle hebt over wat automatisch gaat en wat eerst wordt gereviewd.",
      category: "Controle",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero with Flow Pipeline */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-blue-50/30 via-white to-white overflow-hidden">
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
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
                <span className="sm:hidden">AI facturatie</span>
                <span className="hidden sm:inline">AI facturatie, direct vanuit je AI Helpdesk</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Cusmato herkent factuurvragen, zoekt de juiste factuur en gegevens op, maakt een antwoord in jouw tone of voice en voert acties uit zoals versturen, herinneringen sturen of statusinformatie geven. Dit gebeurt automatisch of met goedkeuring.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

            {/* Flow Pipeline */}
            <Reveal delay={0.25}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 md:gap-8"
                  >
                    <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm px-6 py-4 min-w-[140px] md:min-w-[180px]">
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-600 leading-snug">
                        {step.description}
                      </div>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <motion.div
                        className="hidden md:flex items-center text-slate-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      >
                        <svg className="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase - 2-up with dark background */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-3xl font-semibold text-white mb-12 text-center leading-[1.15]">
              In één overzicht
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Ai facturatie.png"
                    alt="Facturen overzicht en status in het AI Helpdesk dashboard"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  Je ziet alle facturen in overzicht met hun status
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Klantdata.png"
                    alt="Klantdata als context per ticket in de AI Helpdesk"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  Alle klantdata wordt gebruikt als context bij elk ticket
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Grid - AI Helpdesk context */}
      <Section variant="soft">
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">Wat automatiseert het?</span>
              <span className="hidden md:inline">Wat automatiseert Cusmato hier?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Alles gebeurt binnen je AI Helpdesk, van het moment dat een factuurvraag binnenkomt tot het versturen van het antwoord en het uitvoeren van acties.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="card card-elevated rounded-xl p-7 group relative"
                >
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      {feature.icon === "opzoeken" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      {feature.icon === "versturen" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {feature.icon === "betaalstatus" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {feature.icon === "btw" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {feature.icon === "herinnering" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {feature.icon === "escalatie" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works in AI Helpdesk - 4 Steps Timeline */}
      <Section variant="default">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">Zo werkt het</span>
              <span className="hidden md:inline">Zo werkt het in de AI Helpdesk</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Van het moment dat een factuurvraag binnenkomt tot het versturen van het antwoord gebeurt alles in één naadloze flow.
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />

            <div className="space-y-12 md:space-y-16">
              {workflowSteps.map((step, index) => (
                <Reveal key={index} delay={0.15 + index * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                    {/* Number badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-white">
                        {step.number}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
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

      {/* Regels & Controle */}
      <Section variant="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-3xl font-semibold text-slate-900 mb-6 text-center leading-[1.15]">
              Regels & controle
            </h2>
            <p className="text-base text-slate-600 mb-8 text-center max-w-xl mx-auto">
              Volledige controle over wat automatisch gaat en wat eerst wordt gereviewd.
            </p>
          </Reveal>

          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {controlPoints.map((point, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-slate-700 leading-relaxed">
                      {point}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="default" className="cv-auto">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center">
              Veelgestelde vragen
            </h2>
          </Reveal>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA - Light blue gradient */}
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
                AI-driven support teams
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Cusmato helpt je support team met AI-ondersteuning. Automatiseer factuurvragen en laat je team zich focussen op complexere klantvragen.
              </p>
            </div>
            <div className="order-1 lg:order-last">
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/AI-Driven Support Teams.webp"
                    alt="AI-driven support teams met Cusmato facturatie"
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
              Klaar om factuurvragen te automatiseren?
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Start met je AI Helpdesk en automatiseer alle factuur- en betaalvragen binnen één workflow.
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
