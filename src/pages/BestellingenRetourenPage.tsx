import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";

export default function BestellingenRetourenPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Bestellingen & retouren | Cusmato";
  }, []);

  const flowSteps = useMemo(() => [
    { title: "Inbox", description: "Vraag komt binnen in AI Helpdesk" },
    { title: "Order context", description: "Cusmato koppelt orderdata" },
    { title: "Verzending/retour status", description: "Actie + antwoord naar klant" },
  ], []);

  const features = useMemo(() => [
    {
      icon: "orderstatus",
      title: "Orderstatus per ticket",
      description: "Cusmato koppelt automatisch orderdata aan elk ticket in je AI Helpdesk. Klanten krijgen direct antwoord op 'waar is mijn bestelling?' met alle relevante informatie.",
    },
    {
      icon: "tracking",
      title: "Track & trace automatisch",
      description: "Verzendupdates en track & trace codes worden automatisch gekoppeld aan tickets. Klanten ontvangen real-time updates zonder handmatig werk.",
    },
    {
      icon: "retour",
      title: "Retouren met regels",
      description: "Policy-based retouraanvragen worden automatisch verwerkt binnen AI Helpdesk. Cusmato checkt regels, maakt labels aan en geeft statusupdates, alles vanuit dezelfde inbox.",
    },
    {
      icon: "proactief",
      title: "Proactieve updates",
      description: "Bij verzendvertragingen stuurt Cusmato automatisch een bericht naar de klant via AI Helpdesk, voordat er vragen komen. Klanten blijven op de hoogte zonder dat jij er iets voor hoeft te doen.",
    },
    {
      icon: "kanaal",
      title: "Kanaal-onafhankelijk",
      description: "Of een vraag binnenkomt via Shopify, bol.com of andere marketplaces, alles komt samen in je AI Helpdesk inbox. Cusmato behandelt alle orders consistent, ongeacht het kanaal.",
    },
    {
      icon: "escalatie",
      title: "Escalaties naar team",
      description: "Bij uitzonderingen of complexe vragen stuurt Cusmato automatisch door naar jouw team, mét alle ordercontext en historie. Jij ziet direct wat er speelt.",
    },
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: "1",
      title: "Vraag komt binnen in AI Helpdesk",
      description: "Een klant vraagt via e-mail of chat: 'Waar blijft mijn bestelling?' Het ticket verschijnt automatisch in je AI Helpdesk inbox, gekoppeld aan de klant.",
    },
    {
      number: "2",
      title: "Cusmato koppelt order + klant + policies",
      description: "Cusmato zoekt automatisch de bijbehorende orderdata op, checkt verzendstatus, track & trace codes en jouw retourbeleid. Alle context wordt aan het ticket gekoppeld.",
    },
    {
      number: "3",
      title: "Cusmato voert actie uit (retour/label/status)",
      description: "Afhankelijk van de vraag en jouw instellingen voert Cusmato automatisch acties uit: retourlabel aanmaken, orderstatus updaten, of verzendinfo delen. Alles gebeurt binnen AI Helpdesk.",
    },
    {
      number: "4",
      title: "Antwoord wordt verstuurd (auto of met goedkeuring)",
      description: "Cusmato stuurt een gepersonaliseerd antwoord naar de klant met alle relevante informatie. Jij kunt ervoor kiezen om eerst goed te keuren, of direct automatisch te versturen.",
    },
  ], []);

  const faqItems = useMemo(() => [
    {
      id: "orderdata-koppelen",
      question: "Koppelt Cusmato orderdata automatisch aan tickets?",
      answer: "Ja, wanneer een klantvraag binnenkomt in je AI Helpdesk, zoekt Cusmato automatisch bijbehorende orderdata op via je webshop integraties (Shopify, WooCommerce, bol.com, etc.). Ordernummer, klantgegevens, producten, betaalstatus en verzendstatus worden direct aan het ticket gekoppeld, zodat Cusmato contextrijk kan antwoorden.",
      category: "Functionaliteit",
    },
    {
      id: "vervoerders",
      question: "Welke vervoerders worden ondersteund?",
      answer: "Cusmato werkt met alle grote vervoerders via API-integraties: PostNL, DHL, DPD, UPS en anderen. Track & trace informatie wordt automatisch opgehaald en gekoppeld aan tickets in je AI Helpdesk. Als je vervoerder nog niet direct wordt ondersteund, kunnen we via je webshop data of track & trace APIs alsnog de informatie ophalen.",
      category: "Integraties",
    },
    {
      id: "goedkeuring-retouren",
      question: "Kan ik retouren alleen met goedkeuring laten verwerken?",
      answer: "Ja, je kunt per retourtype instellen of Cusmato direct mag handelen of eerst jouw goedkeuring nodig heeft. Bijvoorbeeld: standaardretouren binnen 14 dagen kunnen automatisch, maar retouren na die termijn of voor dure producten gaan eerst naar jou voor review. Dit regel je per categorie in je AI Helpdesk instellingen.",
      category: "Controle",
    },
    {
      id: "geen-order-match",
      question: "Wat gebeurt er als er geen order match is?",
      answer: "Als Cusmato geen bijbehorende order kan vinden (bijv. omdat het ordernummer niet klopt of de order in een ander systeem staat), informeert het de klant vriendelijk en geeft het suggesties om te controleren. Bij twijfel wordt het ticket automatisch geëscaleerd naar jouw team met een duidelijk overzicht van wat er is geprobeerd.",
      category: "Functionaliteit",
    },
  ], []);

  const dataSources = useMemo(() => [
    { type: "Kanalen", items: ["Shopify", "WooCommerce", "bol.com"] },
    { type: "Cusmato AI", items: ["Automatisch aangemaakte tickets/updates"] },
  ], []);

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
                <span className="sm:hidden">Bestellingen & retouren</span>
                <span className="hidden sm:inline">Bestellingen & retouren, automatisch vanuit je AI Helpdesk</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Bestellingen & retouren worden automatisch afgehandeld vanuit je AI Helpdesk. Tickets + orders + verzendstatus in één flow.
              </p>
              <p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto">
                Cusmato koppelt orderdata aan elk ticket en handelt acties af zoals retour, tracking en statusupdates, automatisch of met goedkeuring.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
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
                    <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm px-6 py-4 min-w-[140px] md:min-w-[160px]">
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
                    src="/Bestellingen dashboard.png"
                    alt="Bestellingen Dashboard - Tickets gekoppeld aan orderdata"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  Tickets gekoppeld aan orderdata
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Verzendingen.png"
                    alt="Verzendingen - Direct overzicht van verzendstatus en tracking"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  Zie direct: verzonden, tracking en status
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
              <span className="hidden md:inline">Wat automatiseert Cusmato in deze flow?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Alles gebeurt binnen je AI Helpdesk, van het moment dat een ticket binnenkomt tot de actie en het antwoord.
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
                      {feature.icon === "orderstatus" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {feature.icon === "tracking" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {feature.icon === "retour" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
                        </svg>
                      )}
                      {feature.icon === "proactief" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      )}
                      {feature.icon === "kanaal" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
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
              Van het moment dat een vraag binnenkomt tot het versturen van het antwoord gebeurt alles in één flow.
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

      {/* Data Sources */}
      <Section variant="soft" className="cv-auto">
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-3xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">Waar komt data vandaan?</span>
              <span className="hidden md:inline">Waar komt de data vandaan?</span>
            </h2>
            <p className="text-base text-slate-600 mb-10 text-center max-w-xl mx-auto">
              Alles komt samen in één inbox.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {dataSources.map((source, index) => (
              <Reveal key={index} delay={0.15 + index * 0.1}>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                    {source.type}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {source.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700"
                      >
                        {item === "Shopify" && <img src="/logo-shopify.png" alt="Shopify" className="h-4 mr-2 object-contain" loading="lazy" decoding="async" />}
                        {item === "WooCommerce" && <img src="/Woo-logo-long.png" alt="WooCommerce" className="h-4 mr-2 object-contain" loading="lazy" decoding="async" />}
                        {item === "bol.com" && <img src="/Bol-logo-short.png" alt="bol.com" className="h-4 mr-2 object-contain" loading="lazy" decoding="async" />}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Image Section */}
      <Section variant="soft">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Built for Support Teams.webp"
                    alt="Built for support teams - Bestellingen en retouren automatisering"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Gebouwd voor support teams
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Cusmato is gemaakt voor e-commerce support teams. Automatiseer bestellingen en retouren terwijl je team zich focust op complexere vragen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="default" className="cv-auto">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center leading-[1.15]">
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

        <div className="relative z-10 max-w-3xl mx-auto sm:px-6 lg:px-8 text-center">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-3xl font-semibold text-slate-900 mb-6 leading-[1.15]">
              <span className="md:hidden">Klaar om te automatiseren?</span>
              <span className="hidden md:inline">Klaar om bestellingen en retouren te automatiseren?</span>
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Start met je AI Helpdesk en automatiseer alle order- en retourvragen binnen één workflow.
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
