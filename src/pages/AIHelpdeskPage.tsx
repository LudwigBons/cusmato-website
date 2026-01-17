import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import Section from "../components/Section";
import SubpageHeroMinimal from "../components/SubpageHeroMinimal";
import { fadeUp, viewport, transition } from "../lib/motion";

export default function AIHelpdeskPage() {
  const shouldReduceMotion = useReducedMotion();


  const useCases = [
    {
      icon: "orders",
      title: "Bestellingen & retouren",
      description: "Orderstatus, retour aanvragen, terugbetalingen",
    },
    {
      icon: "shipping",
      title: "Verzendstatus & track & trace",
      description: "Bezorgtijden, vertragingen, vervoerder info",
    },
    {
      icon: "products",
      title: "Productvragen",
      description: "Specificaties, leverbaarheid, compatibiliteit",
    },
    {
      icon: "invoices",
      title: "Facturen & betalingen",
      description: "AI facturatie, betaalstatus, BTW vragen",
    },
    {
      icon: "customer-data",
      title: "Klantdata & accountvragen",
      description: "Adreswijziging, accountupdates, gegevens",
    },
    {
      icon: "escalations",
      title: "Klachten & disputes",
      description: "Escalaties, complexe vragen, twijfelgevallen",
    },
  ];

  const faqItems = [
    {
      question: "Kan ik eerst laten goedkeuren?",
      answer: "Ja, je kunt per vraagtype kiezen tussen volledig automatisch, concepten die je goedkeurt, of alleen specifieke categorieën. Jij houdt altijd de controle.",
    },
    {
      question: "Werkt dit met Gmail/Outlook/Intercom?",
      answer: "Ja, Cusmato integreert naadloos met Gmail, Outlook, Intercom, Zendesk en vele andere platforms via OAuth of API-koppelingen.",
    },
    {
      question: "Hoe leert Cusmato onze tone of voice?",
      answer: "Cusmato analyseert je bestaande e-mails en antwoorden om je schrijfstijl te leren. Je kunt ook templates en voorbeelden uploaden voor snellere aanpassing.",
    },
    {
      question: "Wat gebeurt er bij lastige vragen?",
      answer: "Bij onzekerheid of complexe vragen escaleert Cusmato automatisch naar een medewerker. Je bepaalt zelf de escalatieregels per vraagtype.",
    },
    {
      question: "Hoe snel kan ik live?",
      answer: "Na de setup en koppeling van je tools ben je doorgaans binnen 1-2 werkdagen live. Je kunt dan direct beginnen met automatische antwoorden.",
    },
    {
      question: "Welke talen ondersteunen jullie?",
      answer: "Cusmato werkt primair met Nederlands en Engels, en kan worden uitgebreid naar andere talen op basis van je templates en voorbeelden.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Subtle animated gradient background (Optie A - Animated gradient glow) */}
      {/* Changed from fixed to absolute to prevent scroll jank */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-[120%] h-[120%] overflow-hidden pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 15% 25%, rgba(59, 130, 246, 0.04) 0%, transparent 60%)",
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, 40, 20, 0],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 right-0 w-[120%] h-[120%] overflow-hidden pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 50% 40% at 85% 75%, rgba(147, 197, 253, 0.03) 0%, transparent 60%)",
            }}
            animate={{
              x: [0, -40, 20, 0],
              y: [0, -30, 40, 0],
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[80%] overflow-hidden pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)",
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
      {/* 1. Hero Section - Clean Text Only */}
      <SubpageHeroMinimal
        eyebrow="AI HELPDESK"
        title={
          <>
            <span className="sm:hidden">AI Helpdesk automatiseren</span>
            <span className="hidden sm:inline">Automatiseer e-commerce klantenservice met Cusmato AI Helpdesk</span>
          </>
        }
        description="Cusmato begrijpt klantvragen, schrijft antwoorden in jouw tone of voice en handelt tickets automatisch af, met of zonder goedkeuring."
        primaryCTA={{
          text: "Probeer 14 dagen gratis",
          href: "/probeer-14-dagen-gratis",
        }}
        secondaryCTA={{
          text: "Bekijk demo",
          href: "https://www.cusmato.app/welkom",
        }}
      />

      {/* 2. Donkerblauwe Diepte Sectie */}
      <Section variant="dark" className="overflow-hidden min-h-[400px] lg:min-h-[600px]">
        {/* Subtle logo grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] overflow-hidden"
          style={{
            backgroundImage: "url('/Cusmato-partners-logos.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Subtle moving gradient */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        <div className="relative z-10 max-w-[1280px] mx-auto sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="px-3 sm:px-0">
            <Reveal>
              <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-semibold text-white mb-4 sm:mb-6 leading-[1.15]">
                <span className="sm:hidden">Autopilot support</span>
                <span className="hidden sm:inline">Van inbox-chaos naar autopilot support</span>
              </h2>
              </div>
            </Reveal>

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { title: "Minder tickets, snellere antwoorden", desc: "24/7 automatische afhandeling" },
                { title: "Altijd consistent", desc: "Jouw tone of voice in elke interactie" },
                { title: "Controle wanneer jij dat wil", desc: "Approval mode of volledig autonoom" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white/10 rounded-xl border border-white/20 p-6 sm:p-8 lg:p-10 text-center"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{stat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300">{stat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 3. Wat automatiseert de AI Helpdesk? */}
      <Section variant="default">
        <div className="px-3 sm:px-0">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-slate-900 mb-4 sm:mb-5 leading-[1.15]">
                <span className="sm:hidden">Wat automatiseert het?</span>
                <span className="hidden sm:inline">Wat automatiseert de AI Helpdesk?</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
                Herhaalbare e-commerce vragen worden automatisch afgehandeld, 24/7 en zonder handmatig werk.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="card card-elevated rounded-xl p-5 sm:p-6 lg:p-7 group"
              >
                {/* Blue glow outline on hover */}
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="flex items-start gap-4 relative z-10 px-2.5 sm:px-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    {useCase.icon === "orders" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {useCase.icon === "shipping" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {useCase.icon === "products" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {useCase.icon === "invoices" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {useCase.icon === "customer-data" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {useCase.icon === "escalations" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* 4. Zo werkt het - met code animaties */}
      <Section variant="soft">
        <div className="max-w-[1280px] mx-auto sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-slate-900 mb-4 sm:mb-5 leading-[1.15]">
                Zo werkt het
              </h2>
            </div>
          </Reveal>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 max-w-6xl mx-auto">
            {/* Step 1: Koppel inbox */}
            <Reveal delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Koppel je inbox in minuten
                    </h3>
                  </div>
                  <p className="text-sm sm:text-lg text-slate-600 leading-snug sm:leading-[1.7] mb-5">
                    Koppel je support inbox zoals Gmail, Outlook, Zendesk of Intercom en Cusmato leest direct je binnenkomende vragen. Geen gedoe met migraties, je kunt vandaag nog live.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Snelle setup
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Context uit orders
                    </span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md">
                    <ConnectionLines />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Step 2: Tone of voice */}
            <Reveal delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center lg:grid-flow-dense">
                <div className="lg:col-start-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Cusmato leert je tone of voice
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-[1.7] mb-5">
                    Cusmato analyseert je bestaande e-mails, templates en FAQ's om jouw schrijfstijl te kopiëren. Zo klinken antwoorden altijd alsof ze door jouw team zijn geschreven.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Consistent merkgeluid
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AI-concepten per ticket
                    </span>
                  </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1 flex justify-center lg:justify-start">
                  <div className="w-full max-w-md">
                    <TypewriterAnimation />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Step 3: Automatisch of goedkeuring */}
            <Reveal delay={0.3}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Automatisch of met goedkeuring
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-[1.7] mb-5">
                    Kies per type vraag of Cusmato zelfstandig mag antwoorden, of dat je eerst wilt controleren. Je ziet altijd waarom Cusmato iets voorstelt en wat er wordt verstuurd.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Auto of approval mode
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Regels per categorie
                    </span>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md">
                    <ApprovalToggle />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Step 4: Slimme workflows */}
            <Reveal delay={0.4}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center lg:grid-flow-dense">
                <div className="lg:col-start-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      Slimme workflows & regels
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-[1.7] mb-5">
                    Stel regels in voor retouren, bestellingen, facturen en escalaties. Cusmato herkent de context en zet het juiste proces in gang, inclusief labels, routing en opvolging.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Context-herkenning
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Automatische routing
                    </span>
                  </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1 flex justify-center lg:justify-start">
                  <div className="w-full max-w-md">
                    <WorkflowDemo />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 5. Tone of Voice / Templates */}
      <Section variant="default">
        <div className="max-w-[1280px] mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-24 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl sm:text-[36px] md:text-[40px] font-semibold text-slate-900 mb-4 leading-[1.15]">
                  Tone of Voice & Templates
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-slate-600 mb-8 leading-[1.7]">
                  Elk antwoord klinkt als jouw team. Gebruik templates voor veelvoorkomende scenario's en laat Cusmato consistent communiceren.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="space-y-3">
                  {[
                    "Antwoorden klinken als jouw team",
                    "Templates + varianten per scenario",
                    "Consistent, ook bij drukte",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200/60 w-full max-w-[480px] mx-auto">
                <img
                  src="/Standaard antwoord.png"
                  alt="Standaard antwoord template"
                  className="w-full h-auto max-w-full rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 6. Controle wanneer jij dat wil */}
      <Section variant="soft">
        <div className="max-w-[1280px] mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-24 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl sm:text-[36px] md:text-[40px] font-semibold text-slate-900 mb-4 leading-[1.15]">
                  <span className="sm:hidden">Jij houdt controle</span>
                  <span className="hidden sm:inline">Controle wanneer jij dat wil</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-slate-600 mb-10 leading-[1.7]">
                  Kies per vraagtype tussen volledig automatisch of eerst goedkeuren. Escaleer automatisch bij twijfel.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="space-y-3">
                  {[
                    "Autopilot: volledig automatisch",
                    "Review mode: eerst goedkeuren",
                    "Automatische escalatie bij complexe vragen",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div>
              <ControlPanel />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. In-house AI */}
      <Section variant="default">
        <div className="max-w-[1280px] mx-auto sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-[36px] md:text-[40px] font-semibold text-slate-900 mb-4 sm:mb-5 leading-[1.15]">
                In-house AI
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Cusmato draait op eigen AI-logica voor klantenservice: sneller, consistenter en volledig afgestemd op e-commerce workflows.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  title: "Eigen AI-engine",
                  description: "Geen generieke chatbot. Cusmato is gebouwd rondom support-cases: orders, retouren, verzending en facturen.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  title: "Context uit je tools",
                  description: "Cusmato gebruikt data uit je gekoppelde systemen om antwoorden te onderbouwen en acties te starten.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                },
                {
                  title: "Continu slimmer",
                  description: "Feedback van je team en uitkomsten van tickets verbeteren de kwaliteit automatisch.",
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200/60 p-5 sm:p-6 lg:p-7"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-[1.6]">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-center">
              <Link
                to="/in-house-ai"
                className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Lees hoe onze AI werkt →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 8. Image Section - Automated Customer Support */}
      <Section variant="default">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15]">
                Volledig geautomatiseerde klantensupport
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Cusmato handelt klantvragen automatisch af, 24/7. Van orderstatus tot retourprocessen verloopt alles naadloos zonder handmatig werk.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Automated Customer Support.webp"
                    alt="Automated customer support met Cusmato AI"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section variant="soft">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-[36px] md:text-[40px] font-semibold text-slate-900 mb-4 sm:mb-5 leading-[1.15]">
                Veelgestelde vragen
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </Section>

      <GlobalCTA />
      </div>
    </div>
  );
}

// Workflow Demo Component for Step 4
function WorkflowDemo() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm max-w-md mx-auto">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-900">Workflow regels</h4>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Actief</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Retour aanvraag", action: "→ Automatisch label" },
            { label: "Order status", action: "→ Context ophalen" },
            { label: "Escalatie", action: "→ Medewerker notificeren" },
          ].map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView && !shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200/60"
            >
              <span className="text-sm text-slate-700">{rule.label}</span>
              <span className="text-xs text-blue-600 font-medium">{rule.action}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Connection Lines Animation Component
function ConnectionLines() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tools = [
    { name: "Gmail", x: 20, y: 10 },
    { name: "Outlook", x: 60, y: 10 },
    { name: "Intercom", x: 20, y: 50 },
    { name: "Zendesk", x: 60, y: 50 },
  ];

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-md mx-auto m-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {tools.map((tool, index) => (
          <motion.line
            key={index}
            x1={tool.x}
            y1={tool.y}
            x2="50"
            y2="50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView && !shouldReduceMotion
                ? { pathLength: 1, opacity: 0.6 }
                : { pathLength: 1, opacity: 0.6 }
            }
            transition={{ delay: index * 0.2, duration: 1 }}
          />
        ))}
        
        {/* Tool icons */}
        {tools.map((tool, index) => (
          <motion.g
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView && !shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
          >
            <circle cx={tool.x} cy={tool.y} r="4" fill="rgb(59, 130, 246)" />
            <text
              x={tool.x}
              y={tool.y + 8}
              fontSize="3"
              fill="rgb(71, 85, 105)"
              textAnchor="middle"
            >
              {tool.name}
            </text>
          </motion.g>
        ))}
        
        {/* Center: Cusmato */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="rgb(37, 99, 235)"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView && !shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <text
          x="50"
          y="52"
          fontSize="4"
          fill="white"
          textAnchor="middle"
          fontWeight="bold"
        >
          C
        </text>
      </svg>
    </div>
  );
}

// Typewriter Animation Component
function TypewriterAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayText, setDisplayText] = useState("");
  const fullText = "Bedankt voor je vraag. We hebben je order gevonden en deze wordt vandaag verzonden.";

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setDisplayText(fullText);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, shouldReduceMotion, fullText]);

  return (
    <div ref={ref} className="bg-white rounded-xl border border-slate-200/60 p-5 sm:p-6 lg:p-8 shadow-sm max-w-md mx-auto m-0">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-100 rounded w-1/3"></div>
          <div className="h-4 bg-slate-100 rounded w-1/4"></div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
          <p className="text-sm text-slate-700 leading-relaxed">
            {displayText}
            {!shouldReduceMotion && isInView && displayText.length < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-4 bg-blue-600 ml-1 align-middle"
              />
            )}
          </p>
        </div>
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={isInView && displayText.length === fullText.length ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            Tone of voice match
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            98% confidence
          </span>
        </motion.div>
      </div>
    </div>
  );
}

// Approval Toggle Component
function ApprovalToggle() {
  const shouldReduceMotion = useReducedMotion();
  const [isAuto, setIsAuto] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIsAuto((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, shouldReduceMotion]);

  return (
    <div ref={ref} className="bg-white rounded-xl border border-slate-200/60 p-5 sm:p-6 lg:p-8 shadow-sm max-w-md mx-auto m-0">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Modus</span>
          <button
            onClick={() => setIsAuto(!isAuto)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isAuto ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <motion.div
              className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm"
              animate={{ x: isAuto ? 24 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </div>
        
        <div className="space-y-3">
          <motion.div
            className="p-4 rounded-lg border-2 transition-colors"
            animate={{
              borderColor: isAuto ? "rgb(59, 130, 246)" : "rgb(226, 232, 240)",
              backgroundColor: isAuto ? "rgb(239, 246, 255)" : "rgb(248, 250, 252)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-900">
                {isAuto ? "Autopilot" : "Review mode"}
              </span>
              {isAuto ? (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                  Actief
                </span>
              ) : (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                  In afwachting
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600">
              {isAuto
                ? "Antwoorden worden automatisch verstuurd"
                : "Antwoorden wachten op goedkeuring"}
            </p>
          </motion.div>

          {!isAuto && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-blue-50 rounded-lg border border-blue-200"
            >
              <p className="text-xs text-blue-900">
                <strong>2 concepten</strong> wachten op goedkeuring
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

// Control Panel Component
function ControlPanel() {
  const shouldReduceMotion = useReducedMotion();
  const [activeMode, setActiveMode] = useState<"autopilot" | "review">("autopilot");

  return (
    <div className="bg-white rounded-xl border border-slate-200/60 p-5 sm:p-6 lg:p-8 shadow-sm max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-4">Modus per categorie</h4>
          <div className="space-y-3">
            {[
              { category: "Orders", mode: "autopilot" as const },
              { category: "Retouren", mode: "review" as const },
              { category: "Productvragen", mode: "autopilot" as const },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-700">{item.category}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveMode(item.mode)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      item.mode === "autopilot" ? "bg-blue-600" : "bg-slate-300"
                    }`}
                  >
                    <motion.div
                      className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                      animate={{ x: item.mode === "autopilot" ? 20 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                  <span className="text-xs text-slate-500 w-16 text-right">
                    {item.mode === "autopilot" ? "Autopilot" : "Review"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Escalatie bij twijfel actief</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-white rounded-xl border border-slate-200/60 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
      >
        <span className="text-base font-semibold text-slate-900 pr-4">
          {question}
        </span>
        <motion.svg
          className="w-5 h-5 text-slate-500 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}
