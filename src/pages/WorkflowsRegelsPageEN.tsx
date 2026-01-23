import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, Suspense, lazy } from "react";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";
import FinalCTAEN from "../components/FinalCTAEN";
import DarkPageLayout from "../components/layout/DarkPageLayout";
import DarkSection from "../components/layout/DarkSection";
import SectionContainer from "../components/layout/SectionContainer";
import DarkCard from "../components/ui/DarkCard";
import PremiumImage from "../components/PremiumImage";
import WorkflowFlow from "../components/WorkflowFlow";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfigEN } from "../lib/subpagesHeroConfig";

export default function WorkflowsRegelsPageEN() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Workflows & rules | Cusmato";
  }, []);

  // Horizontal flow for "What is a workflow?"
  const workflowSteps = [
    {
      label: "Ticket",
      description: "Question arrives",
    },
    {
      label: "Classification",
      description: "Cusmato recognizes type and context",
    },
    {
      label: "Rule",
      description: "Determines automatically or manually",
    },
    {
      label: "Action",
      description: "Answer or escalation to team",
    },
    {
      label: "Control",
      description: "Audit log for transparency",
    },
  ];

  // 3 value blocks - Why this is better
  const valueBlocks = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Less manual work",
      description: "Automate common questions without your team having to respond every time.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Consistent answers",
      description: "Every customer gets the same quality and information, regardless of who responds.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "No risk of wrong automation",
      description: "You determine where automation is allowed and where control is needed. Always safe.",
    },
  ];

  // 4 practical e-commerce scenarios
  const scenarios = [
    {
      title: "Delivery delayed",
      auto: "Cusmato automatically sends an update with new delivery time",
      manual: "Team intervenes in case of complaints or complex situations",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Return request",
      auto: "Within term → automatically return label and instructions",
      manual: "Outside term or complex question → team takes over",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
        </svg>
      ),
    },
    {
      title: "Invoice question",
      auto: "Automatically resend invoice with correct attachment",
      manual: "In case of dispute or uncertainty → team checks first",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "VIP customer",
      auto: "Ticket gets immediate VIP label and high priority",
      manual: "Every answer first approved by team for extra attention",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  // FAQ - Max 4 questions
  const faqItems = [
    {
      id: "approval-verplicht",
      question: "Can I require approval per category?",
      answer: "Yes, you can set per category and even per rule type whether Cusmato may act automatically or needs your approval first. For example: standard questions can be automatic, but financial questions or VIP customers always require approval first. You have full control over what goes automatically and what is reviewed.",
      category: "Control",
    },
    {
      id: "meerdere-workflows",
      question: "Can I use multiple workflows at the same time?",
      answer: "Yes, you can set up different workflows for different categories, channels or customer types. For example: one workflow for returns, one for invoices, and one for VIP customers. All workflows work alongside each other and Cusmato automatically applies the right workflow based on the context.",
      category: "Functionality",
    },
    {
      id: "uitzonderingen",
      question: "How does Cusmato handle exceptions?",
      answer: "Cusmato recognizes exceptions based on your rules and escalation triggers. In case of doubt, complex questions or specific conditions (e.g. amount above X, VIP customer, outside term) the ticket is automatically forwarded to your team with all relevant context. This keeps control where needed and automation where possible.",
      category: "Functionality",
    },
    {
      id: "audit-logging",
      question: "Is there a log of what Cusmato sends?",
      answer: "Yes, everything is logged in your AI Helpdesk dashboard. You always see what Cusmato has sent, when, why (which rule/trigger), and whether it went automatically or with approval. This audit trail helps you refine workflows and provides full transparency over all communication with customers.",
      category: "Transparency",
    },
  ];

  const heroConfig = subpagesHeroConfigEN["workflows-regels"];

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
              primaryCta={heroConfig.primaryCta ? {
                ...heroConfig.primaryCta,
                href: "/en/try-14-days-for-free"
              } : undefined}
              secondaryCta={heroConfig.secondaryCta}
            />
          </div>
        </main>
      </div>
      
      <DarkPageLayout noBottomPadding={true}>

        {/* 2. WHAT IS A WORKFLOW? — Horizontal flow */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  What is a workflow?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
                  From ticket to action in 5 steps. You determine at every moment what happens automatically.
                </p>
              </div>
            </Reveal>
            <WorkflowFlow steps={workflowSteps} />
          </SectionContainer>
        </DarkSection>

        {/* 3. WHY THIS IS BETTER — 3 value blocks */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Why this is better
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

        {/* 4. PRACTICAL EXAMPLES — 4 e-commerce scenarios */}
        <DarkSection>
          <SectionContainer maxWidth="2xl">
            <Reveal delay={0.1}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Practical examples
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  Recognizable e-commerce scenarios: what happens automatically and where does your team intervene?
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
                            <div className="text-sm font-medium text-green-400 mb-1">Automatic</div>
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
                            <div className="text-sm font-medium text-blue-400 mb-1">Team reviews</div>
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

        {/* 5. CONTROL & SECURITY — Compact block (last dark section, no bottom margin) */}
        <DarkSection spacing="tight" className="mb-0">
          <SectionContainer maxWidth="lg">
            <Reveal delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm p-10 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                    Control & security
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
                        Everything is logged: what has been sent, when, why and whether it went automatically.
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
                        Set per category whether answers go automatically or need approval first.
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
                      <h3 className="text-lg font-semibold text-white mb-2">Manual override</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Always possible to intervene manually, even if automatic workflow is active.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </SectionContainer>
        </DarkSection>
      </DarkPageLayout>

      {/* 6. FAQ — Max 4 questions (outside dark layout) */}
      <section className="bg-white py-14 sm:py-20 md:py-24">
        <SectionContainer maxWidth="3xl">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center leading-[1.15]">
              Frequently asked questions
            </h2>
          </Reveal>
          <FAQAccordion items={faqItems} />
        </SectionContainer>
      </section>

      {/* Standard CTA - Identical to all other product pages */}
      <div className="bg-white relative">
        <FinalCTAEN />
        <BottomMobileCTAEN />
      </div>
    </>
  );
}
