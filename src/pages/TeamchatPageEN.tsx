import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import TeamchatConversationDemo from "../components/TeamchatConversationDemo";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";
import FinalCTAEN from "../components/FinalCTAEN";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfigEN } from "../lib/subpagesHeroConfig";

export default function TeamchatPageEN() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Team chat | Cusmato";
  }, []);

  const featureCards = useMemo(() => [
    {
      icon: "kanalen",
      title: "Channels per team/brand",
      description: "Create separate channels for different brands, stores or teams. Keep everything organized without losing context.",
    },
    {
      icon: "mentions",
      title: "@mentions & assignments",
      description: "Tag colleagues with @mention and assign tickets directly. Everyone gets a notification and can respond immediately.",
    },
    {
      icon: "besluiten",
      title: "Record decisions at the ticket",
      description: "Record decisions and actions directly next to the ticket. No searching afterwards, everything is in one place.",
    },
    {
      icon: "notities",
      title: "Quick internal notes",
      description: "Quickly share a note with your team without the customer seeing it. Ideal for background information or internal coordination.",
    },
    {
      icon: "context",
      title: "Context: customer data + last order visible",
      description: "See customer data, order history and recent activity directly next to the chat. Everything you need, directly available.",
    },
    {
      icon: "escalatie",
      title: "Fewer escalations / faster handling",
      description: "Work together around the ticket without extra tools. Faster response times and less back-and-forth communication.",
    },
  ], []);

  const howItWorksSteps = useMemo(() => [
    {
      number: "1",
      title: "Create channels for your support flows",
      description: "Set up channels per brand, store or team. Each channel has its own chat where team members can communicate around tickets.",
    },
    {
      number: "2",
      title: "Discuss cases next to the ticket (no context loss)",
      description: "Start a conversation directly at a ticket. All context is next to the chat: customer data, history and previous messages.",
    },
    {
      number: "3",
      title: "Decision → action: label, response, or escalation",
      description: "Record decisions and take actions immediately. Label tickets, send responses or escalate to a colleague, everything from one overview.",
    },
  ], []);

  const faqItems = useMemo(() => [
    {
      id: "onderdeel-ai-helpdesk",
      question: "Is Team chat part of AI Helpdesk?",
      answer: "Yes, Team chat is fully integrated into Cusmato AI Helpdesk. You work together around tickets and customers without extra tools. All context (customer data, ticket history) is directly available next to the chat.",
      category: "Functionality",
    },
    {
      id: "kanalen-per-merk",
      question: "Can we create channels per brand/store?",
      answer: "Yes, you can create unlimited channels for different brands, stores or teams. Each channel has its own chat and you can give team members access specifically per channel. This keeps everything organized and prevents context loss.",
      category: "Configuration",
    },
    {
      id: "audit-trail",
      question: "Is there an audit trail / who said what?",
      answer: "Yes, all messages in Team chat are logged. You see who said what and when. This is useful for training, compliance and finding decisions. All conversations remain linked to the ticket.",
      category: "Management",
    },
    {
      id: "taggen-toewijzen",
      question: "Can we tag colleagues and assign tickets?",
      answer: "Yes, you can tag colleagues with @mention. They get a notification and can respond immediately. You can also assign tickets directly to team members from the chat. Everything happens next to the ticket, without having to go to another system.",
      category: "Collaboration",
    },
    {
      id: "approval-mode",
      question: "Does this work with approval/approval mode?",
      answer: "Yes, Team chat works seamlessly with approval flows. Discuss a ticket in the chat, record decisions and request approval for actions. Everything remains linked to the ticket and there is full transparency about who decided what.",
      category: "Workflows",
    },
  ], []);

  const heroConfig = subpagesHeroConfigEN["teamchat"];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Hero - Exact zoals Prijzen */}
          <MobileSubpageHero
            label={heroConfig.label}
            title={heroConfig.title}
            description={heroConfig.description}
            imageSrc={heroConfig.imageSrc}
            imageAlt={heroConfig.imageAlt}
            primaryCta={heroConfig.primaryCta}
          />
        </div>
      </main>

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
                <span className="md:hidden">Team chat in practice</span>
                <span className="hidden md:inline">How Team chat works in practice</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
                Discuss a case, tag colleagues and set up an action directly without losing context.
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
              <span className="md:hidden">Together around tickets</span>
              <span className="hidden md:inline">Work efficiently together around tickets</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Team chat helps your team make decisions faster and handle tickets without extra tools.
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

      {/* How it works - Timeline */}
      <Section variant="default" className="py-16 md:py-20 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              How it works
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Start with channels and work directly together around tickets.
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
                  alt="Team chat dashboard - Working together around tickets"
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
              Frequently asked questions
            </h2>
          </Reveal>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA - Standaard voor alle productpagina's */}
      <div className="bg-white relative">
        <FinalCTAEN />
        <BottomMobileCTAEN />
      </div>
    </div>
  );
}
