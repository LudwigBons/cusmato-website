import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import TeamchatConversationDemo from "../components/TeamchatConversationDemo";

export default function TeamchatPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Teamchat | Cusmato";
  }, []);

  const featureCards = useMemo(() => [
    {
      icon: "kanalen",
      title: "Kanalen per team/brand",
      description: "Maak gescheiden kanalen voor verschillende merken, stores of teams. Houd alles georganiseerd zonder contextverlies.",
    },
    {
      icon: "mentions",
      title: "@mentions & toewijzingen",
      description: "Tag collega's met @mention en wijs tickets direct toe. Iedereen krijgt een notificatie en kan direct reageren.",
    },
    {
      icon: "besluiten",
      title: "Besluiten vastleggen bij het ticket",
      description: "Leg besluiten en acties vast direct naast het ticket. Geen zoekwerk achteraf — alles staat op één plek.",
    },
    {
      icon: "notities",
      title: "Snelle interne notities",
      description: "Deel snel een notitie met je team zonder dat de klant het ziet. Ideaal voor achtergrondinformatie of interne afstemming.",
    },
    {
      icon: "context",
      title: "Context: klantdata + laatste bestelling zichtbaar",
      description: "Zie direct klantgegevens, bestelgeschiedenis en recente activiteit naast de chat. Alles wat je nodig hebt, direct beschikbaar.",
    },
    {
      icon: "escalatie",
      title: "Minder escalaties / sneller afhandelen",
      description: "Werk samen rondom het ticket zonder extra tools. Snellere reactietijden en minder heen-en-weer communicatie.",
    },
  ], []);

  const howItWorksSteps = useMemo(() => [
    {
      number: "1",
      title: "Maak kanalen voor je support flows",
      description: "Stel kanalen in per merk, store of team. Elke kanaal heeft zijn eigen chat waar teamleden kunnen communiceren rondom tickets.",
    },
    {
      number: "2",
      title: "Bespreek cases naast het ticket (geen contextverlies)",
      description: "Start een gesprek direct bij een ticket. Alle context staat naast de chat: klantdata, historie en eerdere berichten.",
    },
    {
      number: "3",
      title: "Besluit → actie: label, response, of escalatie",
      description: "Leg besluiten vast en voer direct acties uit. Label tickets, stuur antwoorden of escal naar een collega — alles vanuit één overzicht.",
    },
  ], []);

  const faqItems = useMemo(() => [
    {
      id: "onderdeel-ai-helpdesk",
      question: "Is Teamchat onderdeel van AI Helpdesk?",
      answer: "Ja, Teamchat is volledig geïntegreerd in Cusmato AI Helpdesk. Je werkt samen rondom tickets en klanten zonder extra tools. Alle context (klantdata, ticketgeschiedenis) staat direct naast de chat beschikbaar.",
      category: "Functionaliteit",
    },
    {
      id: "kanalen-per-merk",
      question: "Kunnen we kanalen per merk/store maken?",
      answer: "Ja, je kunt onbeperkt kanalen aanmaken voor verschillende merken, stores of teams. Elk kanaal heeft zijn eigen chat en je kunt teamleden specifiek per kanaal toegang geven. Dit houdt alles georganiseerd en voorkomt contextverlies.",
      category: "Configuratie",
    },
    {
      id: "audit-trail",
      question: "Is er een audit trail / wie zei wat?",
      answer: "Ja, alle berichten in Teamchat worden gelogd. Je ziet wie wat heeft gezegd en wanneer. Dit is handig voor training, compliance en het terugvinden van besluiten. Alle gesprekken blijven gekoppeld aan het ticket.",
      category: "Beheer",
    },
    {
      id: "taggen-toewijzen",
      question: "Kunnen we collega's taggen en tickets toewijzen?",
      answer: "Ja, je kunt collega's taggen met @mention. Ze krijgen een notificatie en kunnen direct reageren. Je kunt ook tickets direct toewijzen aan teamleden vanuit de chat. Alles gebeurt naast het ticket, zonder dat je naar een ander systeem hoeft te gaan.",
      category: "Samenwerking",
    },
    {
      id: "approval-mode",
      question: "Werkt dit met goedkeuring/approval mode?",
      answer: "Ja, Teamchat werkt naadloos samen met goedkeuringsflows. Bespreek een ticket in de chat, leg besluiten vast en vraag goedkeuring aan voor acties. Alles blijft gekoppeld aan het ticket en er is volledige transparantie over wie wat heeft besloten.",
      category: "Workflows",
    },
  ], []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Clean Subpage Style */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        {/* Background layers for depth */}
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
                AI HELPDESK • SAMENWERKING
              </p>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-[-0.01em]">
                <span className="sm:hidden">Teamchat</span>
                <span className="hidden sm:inline">Teamchat voor supportteams. Alles rondom het ticket.</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Werk samen in kanalen, tag collega's en leg besluiten vast — zonder tickets te verliezen in Slack/WhatsApp.
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

            {/* Scroll Cue */}
            <Reveal delay={0.25}>
              <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                <span>Scroll om Teamchat in actie te zien</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Conversation Demo */}
      <Section variant="soft" className="py-14 md:py-20 cv-auto relative overflow-hidden">
        {/* Background Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-slate-50/30 to-white pointer-events-none" />
        
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blobs - Static (no animation for performance) */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.02] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto sm:px-6 lg:px-8">
          <Reveal delay={0.1}>
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 leading-[1.15]">
                <span className="md:hidden">Teamchat in de praktijk</span>
                <span className="hidden md:inline">Zo werkt Teamchat in de praktijk</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
                Bespreek een case, tag collega's en zet direct een actie klaar — zonder context te verliezen.
              </p>
            </div>
          </Reveal>

          {/* Conversation Demo Component */}
          <Reveal delay={0.15}>
            <TeamchatConversationDemo />
          </Reveal>
        </div>
      </Section>

      {/* Feature Grid */}
      <Section variant="soft" className="py-16 md:py-20 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">Samen rondom tickets</span>
              <span className="hidden md:inline">Werk efficiënt samen rondom tickets</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Teamchat helpt je team sneller besluiten nemen en tickets afhandelen zonder extra tools.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featureCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "kanalen" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )}
                    {card.icon === "mentions" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {card.icon === "besluiten" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "notities" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    )}
                    {card.icon === "context" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "escalatie" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
      <Section variant="default" className="py-16 md:py-20 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              Hoe het werkt
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Start met kanalen en werk direct samen rondom tickets.
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

      {/* Visual Section - Key Screenshot */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
            {/* Device Frame Card */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white shadow-xl overflow-hidden" style={{ boxShadow: "0 20px 60px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}>
              <div className="aspect-video max-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
                <img
                  src="/Teamchat%20Cusmato%20dashboard.png"
                  alt="Teamchat dashboard - Samenwerken rondom tickets"
                  className="w-full h-full object-contain rounded-xl"
                  style={{ opacity: 1 }}
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section variant="default" className="py-16 md:py-20 cv-auto">
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
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
              Klaar om samen te werken rondom tickets?
            </h2>
            <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Start met Teamchat en werk efficiënt samen zonder extra tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
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
        </div>
      </section>
    </div>
  );
}
