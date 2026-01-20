import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, Suspense, lazy } from "react";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import BottomMobileCTA from "../components/BottomMobileCTA";
import FinalCTA from "../components/FinalCTA";
import DarkPageLayout from "../components/layout/DarkPageLayout";
import DarkSection from "../components/layout/DarkSection";
import SectionContainer from "../components/layout/SectionContainer";
import DarkCard from "../components/ui/DarkCard";
import PremiumImage from "../components/PremiumImage";
import WorkflowFlow from "../components/WorkflowFlow";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfig } from "../lib/subpagesHeroConfig";

export default function WorkflowsRegelsPage() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Workflows & regels | Cusmato";
  }, []);

  // Horizontale flow voor "Wat is een workflow?"
  const workflowSteps = [
    {
      label: "Ticket",
      description: "Vraag komt binnen",
    },
    {
      label: "Classificatie",
      description: "Cusmato herkent type en context",
    },
    {
      label: "Regel",
      description: "Bepaalt automatisch of handmatig",
    },
    {
      label: "Actie",
      description: "Antwoord of escalatie naar team",
    },
    {
      label: "Controle",
      description: "Audit log voor transparantie",
    },
  ];

  // 3 value blocks - Waarom dit beter is
  const valueBlocks = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Minder handmatig werk",
      description: "Automatiseer veelvoorkomende vragen zonder dat je team elke keer hoeft te reageren.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Consistente antwoorden",
      description: "Elke klant krijgt dezelfde kwaliteit en informatie, ongeacht wie er antwoordt.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Geen risico op foute automatisering",
      description: "Jij bepaalt waar automatisering mag en waar controle nodig is. Altijd veilig.",
    },
  ];

  // 4 praktische e-commerce scenario's
  const scenarios = [
    {
      title: "Levering vertraagd",
      auto: "Cusmato stuurt automatisch een update met nieuwe levertijd",
      manual: "Team grijpt in bij klachten of complexe situaties",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Retouraanvraag",
      auto: "Binnen termijn → automatisch retourlabel en instructies",
      manual: "Buiten termijn of complexe vraag → team neemt over",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
        </svg>
      ),
    },
    {
      title: "Factuurvraag",
      auto: "Automatisch factuur opnieuw versturen met juiste bijlage",
      manual: "Bij betwisting of onduidelijkheid → team controleert eerst",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "VIP-klant",
      auto: "Ticket krijgt direct VIP-label en hoge prioriteit",
      manual: "Elk antwoord eerst goedgekeurd door team voor extra aandacht",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  // FAQ - Max 4 vragen
  const faqItems = [
    {
      id: "approval-verplicht",
      question: "Kan ik goedkeuring verplichten per categorie?",
      answer: "Ja, je kunt per categorie en zelfs per regeltype instellen of Cusmato automatisch mag handelen of eerst jouw goedkeuring nodig heeft. Bijvoorbeeld: standaard vragen kunnen automatisch, maar financiële vragen of VIP klanten altijd eerst goedkeuring. Je hebt volledige controle over wat automatisch gaat en wat wordt gereviewd.",
      category: "Controle",
    },
    {
      id: "meerdere-workflows",
      question: "Kan ik meerdere workflows tegelijk gebruiken?",
      answer: "Ja, je kunt verschillende workflows instellen voor verschillende categorieën, kanalen of klanttypes. Bijvoorbeeld: één workflow voor retouren, één voor facturen, en één voor VIP-klanten. Alle workflows werken naast elkaar en Cusmato past automatisch de juiste workflow toe op basis van de context.",
      category: "Functionaliteit",
    },
    {
      id: "uitzonderingen",
      question: "Hoe gaat Cusmato om met uitzonderingen?",
      answer: "Cusmato herkent uitzonderingen op basis van jouw regels en escalatie triggers. Bij twijfel, complexe vragen of specifieke voorwaarden (bijv. bedrag boven X, VIP klant, buiten termijn) wordt het ticket automatisch doorgestuurd naar jouw team met alle relevante context. Zo blijft controle waar nodig en automatisering waar mogelijk.",
      category: "Functionaliteit",
    },
    {
      id: "audit-logging",
      question: "Is er een log van wat Cusmato verstuurt?",
      answer: "Ja, alles wordt gelogd in je AI Helpdesk dashboard. Je ziet altijd wat Cusmato heeft verstuurd, wanneer, waarom (welke regel/trigger), en of het automatisch is gegaan of met goedkeuring. Dit audit trail helpt je om workflows te verfijnen en geeft volledige transparantie over alle communicatie met klanten.",
      category: "Transparantie",
    },
  ];

  const heroConfig = subpagesHeroConfig["workflows-regels"];

  return (
    <>
      {/* Hero - Exact zoals Prijzen */}
      <div className="bg-white">
        <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <MobileSubpageHero
              label={heroConfig.label}
              title={heroConfig.title}
              description={heroConfig.description}
              imageSrc={heroConfig.imageSrc}
              imageAlt={heroConfig.imageAlt}
              primaryCta={heroConfig.primaryCta}
              secondaryCta={heroConfig.secondaryCta}
            />
          </div>
        </main>
      </div>
      
      <DarkPageLayout noBottomPadding={true}>

        {/* 2. WAT IS EEN WORKFLOW? — Horizontale flow */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Wat is een workflow?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
                  Van ticket tot actie in 5 stappen. Jij bepaalt op elk moment wat automatisch gebeurt.
                </p>
              </div>
            </Reveal>
            <WorkflowFlow steps={workflowSteps} />
          </SectionContainer>
        </DarkSection>

        {/* 3. WAAROM DIT BETER IS — 3 value blocks */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Waarom dit beter is
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {valueBlocks.map((block, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <DarkCard>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                      {block.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{block.title}</h3>
                    <p className="text-base text-slate-300 leading-relaxed">
                      {block.description}
                    </p>
                  </DarkCard>
                </Reveal>
              ))}
            </div>
          </SectionContainer>
        </DarkSection>

        {/* 4. PRAKTISCHE VOORBEELDEN — 4 e-commerce scenario's */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Praktische voorbeelden
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  Herkenbare e-commerce scenario's: wat gebeurt automatisch en waar grijpt je team in?
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {scenarios.map((scenario, index) => (
                <Reveal key={index} delay={0.15 + index * 0.05}>
                  <DarkCard>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                      {scenario.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{scenario.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-green-400 mb-1">Automatisch</div>
                            <p className="text-sm text-slate-300 leading-relaxed">{scenario.auto}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-blue-400 mb-1">Team controleert</div>
                            <p className="text-sm text-slate-300 leading-relaxed">{scenario.manual}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DarkCard>
                </Reveal>
              ))}
            </div>
          </SectionContainer>
        </DarkSection>

        {/* 5. CONTROLE & VEILIGHEID — Compact blok (laatste dark section, geen bottom margin) */}
        <DarkSection spacing="tight" className="mb-0">
          <SectionContainer maxWidth="lg">
            <Reveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm p-10 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                    Controle & veiligheid
                  </h2>
                </div>
                <div className="space-y-5 max-w-2xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Audit log</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Alles wordt gelogd: wat is verstuurd, wanneer, waarom en of het automatisch ging.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Approval mode</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Per categorie instellen of antwoorden automatisch gaan of eerst goedkeuring nodig hebben.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Handmatige override</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Altijd mogelijk om handmatig in te grijpen, zelfs als automatische workflow actief is.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </SectionContainer>
        </DarkSection>
      </DarkPageLayout>

      {/* 6. FAQ — Max 4 vragen (buiten dark layout) */}
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <SectionContainer maxWidth="3xl">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center leading-[1.15]">
              Veelgestelde vragen
            </h2>
          </Reveal>
          <FAQAccordion items={faqItems} />
        </SectionContainer>
      </section>

      {/* Standaard CTA - Identiek aan alle andere productpagina's */}
      <div className="bg-white relative">
        <FinalCTA />
        <BottomMobileCTA />
      </div>
    </>
  );
}
