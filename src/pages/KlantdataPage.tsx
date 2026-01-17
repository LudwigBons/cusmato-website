import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import GlobalCTA from "../components/GlobalCTA";

export default function KlantdataPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Klantdata | Cusmato";
  }, []);

  const trustBullets = useMemo(() => [
    "Directe context per ticket",
    "Logging & transparantie",
    "AVG-bewust ingericht",
  ], []);

  const featureCards = useMemo(() => [
    {
      icon: "herken",
      title: "Klant herkennen & matchen",
      description: "Cusmato matcht automatisch klanten op e-mailadres, ordernummer of naam uit verschillende bronnen (Shopify, bol.com, e-mail) en koppelt dit aan het ticket.",
    },
    {
      icon: "context",
      title: "Context verrijken in het ticket",
      description: "Elk ticket krijgt direct klantcontext zoals via welk kanaal ze komen, bestelgeschiedenis, recente activiteit en status. Alles staat zichtbaar naast de conversatie.",
    },
    {
      icon: "prioriteit",
      title: "Prioriteren (VIP/recente problemen)",
      description: "Cusmato herkent VIP-klanten of recente problemen en kan tickets automatisch labelen of doorsturen naar het juiste team voor snellere afhandeling.",
    },
    {
      icon: "followup",
      title: "Snellere follow-ups",
      description: "Bij missende informatie (bijv. ordernummer) vraagt Cusmato automatisch naar de juiste gegevens, zodat je tickets sneller compleet hebt.",
    },
    {
      icon: "consistent",
      title: "Consistente antwoorden met policies",
      description: "Cusmato gebruikt klantdata in combinatie met je knowledgebase om consistente antwoorden te geven die passen bij de klant en het kanaal.",
    },
    {
      icon: "escalatie",
      title: "Escaleren bij uitzonderingen",
      description: "Bij onduidelijke identiteit of uitzonderingen wordt het ticket automatisch geëscaleerd naar human review, met alle beschikbare context.",
    },
  ], []);

  const privacyCards = useMemo(() => [
    {
      icon: "data-min",
      title: "Data-minimalisatie",
      description: "Cusmato gebruikt alleen de klantgegevens die jij koppelt en die nodig zijn voor het afhandelen van tickets. Geen onnodige data-opslag of -verzameling.",
    },
    {
      icon: "toegang",
      title: "Toegangscontrole",
      description: "Jij bepaalt wie toegang heeft tot klantdata binnen je team. Rolgebaseerde toegang en permissies zorgen ervoor dat alleen bevoegde personen data kunnen inzien.",
    },
    {
      icon: "audit",
      title: "Audit log",
      description: "Alle acties met klantdata worden gelogd: welke gegevens zijn gebruikt, door wie en waarom. Volledige transparantie en traceerbaarheid voor compliance.",
    },
  ], []);

  const howItWorksSteps = useMemo(() => [
    {
      number: "1",
      title: "Koppel je bronnen (shop/marketplace/email)",
      description: "Verbind je webshop (Shopify, WooCommerce), marketplaces (bol.com) en e-mailkanalen met Cusmato. Alle klantgegevens worden automatisch gesynchroniseerd.",
    },
    {
      number: "2",
      title: "Cusmato centraliseert klantprofielen (contact + historie)",
      description: "Cusmato verzamelt klantgegevens uit alle gekoppelde bronnen en maakt per klant één centraal profiel met contactgegevens, bestelgeschiedenis en activiteit.",
    },
    {
      number: "3",
      title: "Ticket komt binnen → klantcontext automatisch toegevoegd",
      description: "Wanneer een ticket binnenkomt, matcht Cusmato automatisch de klant en voegt alle relevante context toe: kanaal, recente bestellingen, status en historie.",
    },
    {
      number: "4",
      title: "Antwoord/actie: automatisch of met goedkeuring + audit log",
      description: "Cusmato gebruikt de klantcontext om sneller en beter te antwoorden. Je kunt instellen of dit automatisch gebeurt of eerst goedkeuring nodig heeft. Alle acties worden gelogd.",
    },
  ], []);

  const faqItems = useMemo(() => [
    {
      id: "bronnen-koppelen",
      question: "Welke bronnen kan ik koppelen voor klantdata?",
      answer: "Je kunt klantdata koppelen vanuit webshops (Shopify, WooCommerce, Magento), marketplaces (bol.com), e-mailplatforms (Gmail, Outlook) en CRM-systemen. Cusmato synchroniseert automatisch contactgegevens, bestellingen en activiteit vanuit deze bronnen. Al deze data komt samen in één centraal klantprofiel per persoon.",
      category: "Integraties",
    },
    {
      id: "automatisch-gebruik",
      question: "Gebruikt Cusmato klantdata automatisch in antwoorden?",
      answer: "Ja, Cusmato gebruikt automatisch klantcontext (zoals bestelgeschiedenis of recente tickets) om sneller en accurater te antwoorden. Je kunt echter per categorie instellen of Cusmato automatisch mag versturen of eerst goedkeuring nodig heeft. Bij gevoelige informatie of uitzonderingen kun je altijd handmatige goedkeuring verplichten.",
      category: "Functionaliteit",
    },
    {
      id: "goedkeuring-verplichten",
      question: "Kan ik goedkeuring verplichten voordat er iets verstuurd wordt?",
      answer: "Ja, je kunt per categorie (bijv. retouren, facturen, garantiezaken) instellen dat Cusmato altijd eerst goedkeuring vraagt voordat er een antwoord wordt verstuurd. Ook kun je specifieke triggers instellen (bijv. bij VIP-klanten of bij bepaalde orderbedragen) waarbij altijd handmatige goedkeuring nodig is. Alle acties worden gelogd voor transparantie.",
      category: "Controle",
    },
    {
      id: "avg-privacy",
      question: "Hoe ondersteunt Cusmato AVG/privacy?",
      answer: "Cusmato is AVG-bewust ingericht: we gebruiken alleen de data die jij koppelt, bieden toegangscontrole voor je team, loggen alle acties in een audit trail en ondersteunen data-retentiebeleid. Je hebt volledige controle over welke klantgegevens worden gebruikt en door wie. Cusmato verwerkt geen data zonder jouw expliciete koppeling en toestemming.",
      category: "Privacy",
    },
  ], []);

  const floatingTags = useMemo(() => [
    "Contact & kanaal",
    "Bestellingen & uitgaven",
    "Recente activiteit",
  ], []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero with Enhanced Background Depth */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        {/* Background layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
        
        {/* Grid layer - subtle */}
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

        {/* Radial glow - very light */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
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
                <span className="sm:hidden">Klantdata & context</span>
                <span className="hidden sm:inline">Klantdata als context voor snellere support</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Cusmato centraliseert klantgegevens uit je kanalen en koppelt ze aan tickets in de AI Helpdesk. Zo krijg je direct context zoals contact, kanaal, bestellingen en recente activiteit. Cusmato kan hierdoor sneller en consistenter antwoorden, automatisch of met goedkeuring.
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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-8">
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

            {/* Mini Stat Row */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Match klant → ticket</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Kanaal & historie</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/60 rounded-full border border-blue-200/40">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Approval & audit log</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Showcase Band - Primary Screenshot with 2-col grid */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-slate-50/60 border-y border-blue-100/40">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft inner border effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Title + Bullets */}
            <Reveal delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-[1.15]">
                  <span className="md:hidden">Alles naast het ticket</span>
                  <span className="hidden md:inline">Alles wat je nodig hebt, direct naast het ticket</span>
                </h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-slate-700">Contactgegevens en kanaal direct zichtbaar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-slate-700">Bestelgeschiedenis en recente activiteit in één overzicht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-slate-700">Geen schakelen tussen systemen, alles op één plek</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Right: Screenshot in Device Frame */}
            <div className="relative">
              {/* Floating Chips */}
              <div className="absolute -top-4 left-4 flex flex-wrap gap-2 z-20 pointer-events-none">
                <div className="bg-white/98 rounded-lg px-3 py-1.5 shadow-lg border border-slate-200/60">
                  <span className="text-xs font-medium text-slate-700">Contact</span>
                </div>
                <div className="bg-white/98 rounded-lg px-3 py-1.5 shadow-lg border border-slate-200/60">
                  <span className="text-xs font-medium text-slate-700">Recente activiteit</span>
                </div>
              </div>

              {/* Device Frame - Always visible, no Reveal wrapper */}
              <div className="relative rounded-3xl border-2 border-slate-200/80 bg-white shadow-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}>
                <div className="aspect-[16/10] max-h-[520px] md:max-h-[520px] flex items-center justify-center bg-slate-50/30 p-4">
                  <img
                    src="/Klantendata.png"
                    alt="Klantdata overzicht - Alles wat je nodig hebt, direct naast het ticket"
                    className="w-full h-full object-contain rounded-2xl"
                    style={{ opacity: 1 }}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={750}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Zoom - Secondary Screenshot */}
      <Section variant="default" className="py-24 cv-auto relative overflow-hidden">
        {/* Subtle divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-20" />

        {/* Clean Animated Background - 2 Glow Layers */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="cusmato-glow glow-a" />
          <div className="cusmato-glow glow-b" />
        </div>

        {/* Content Container - Clean & Centered */}
        <div className="relative z-10 max-w-6xl mx-auto sm:px-6 lg:px-8">
          {/* Title & Subtitle - Centered */}
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-[1.15]">
                <span className="md:hidden">Klantcontext</span>
                <span className="hidden md:inline">Zoom in op klantcontext</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
                Elke klant krijgt een compleet profiel met alle relevante informatie direct naast het ticket.
              </p>
            </div>
          </Reveal>

          {/* Premium Card - Clean Design */}
          <div className="relative mt-12 mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white shadow-lg overflow-hidden">
            {/* Sheen Overlay */}
            <div className="cusmato-sheen" />

            {/* Card Content */}
            <div className="relative px-6 md:px-8 pt-10 md:pt-16 pb-16 md:pb-28">
              {/* Screenshot Wrapper - Centered with Frame */}
              <div className="w-full max-w-full lg:max-w-[980px] mx-auto">
                <div className="rounded-2xl border border-slate-200 shadow-sm bg-white overflow-hidden p-4">
                  <img
                    src="/Klantendata%20system%20Cusmato.png"
                    alt="Klantdata detail - Close-up van klantprofiel met Olivia Lambert"
                    className="w-full h-auto object-contain"
                    style={{ opacity: 1 }}
                    loading="lazy"
                    decoding="async"
                    width={980}
                    height={735}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Caption below - Centered */}
          <Reveal delay={0.15}>
            <p className="text-center text-sm text-slate-500 mt-8 max-w-2xl mx-auto">
              Zie direct wie de klant is, via welk kanaal ze komen en wat de laatste bestelling was. Alle relevante context staat direct beschikbaar in het ticket.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Wat automatiseert Cusmato met klantdata? */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Wat automatiseert Cusmato met klantdata?
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Klantcontext helpt Cusmato sneller en accurater te antwoorden, zonder dat je zelf door verschillende systemen hoeft te zoeken.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featureCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "herken" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {card.icon === "context" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "prioriteit" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                    {card.icon === "followup" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {card.icon === "consistent" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "escalatie" && (
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
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Hoe werkt het - Timeline */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Hoe werkt het
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Koppel je bronnen en laat Cusmato automatisch klantcontext toevoegen aan elke ticket.
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline connector line */}
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

      {/* Privacy & controle - Trust Section */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Privacy & controle
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Cusmato gebruikt alleen gekoppelde data, geeft je volledige controle en logt alles voor transparantie.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {privacyCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "data-min" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {card.icon === "toegang" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {card.icon === "audit" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Cusmato gebruikt alleen gekoppelde data:</span> Je bepaalt welke bronnen worden gekoppeld en welke klantgegevens beschikbaar zijn. Geen data-verzameling zonder jouw expliciete koppeling.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Je kunt approval verplichten:</span> Bij gevoelige klantdata of specifieke categorieën kun je instellen dat Cusmato altijd eerst goedkeuring vraagt voordat er actie wordt ondernomen.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Transparant wat er gebeurt:</span> Alle acties met klantdata worden gelogd in een audit trail. Je ziet precies welke gegevens zijn gebruikt, door wie en waarom. Volledige traceerbaarheid voor compliance.
                  </p>
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
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Real-time support insights
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Gebruik klantdata om betere en snellere antwoorden te geven. Cusmato haalt automatisch context op uit je systemen voor complete klantinzichten.
              </p>
            </div>
            <div>
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Real-Time Support Insights.webp"
                    alt="Real-time support insights met klantdata"
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
              Klaar om support te versnellen met klantcontext?
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Koppel je klantdata en laat Cusmato automatisch context toevoegen aan elke ticket voor snellere en betere antwoorden.
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
