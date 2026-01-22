import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";
import FinalCTAEN from "../components/FinalCTAEN";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfigEN } from "../lib/subpagesHeroConfig";

export default function BestellingenRetourenPageEN() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Orders & returns | Cusmato";
  }, []);

  const flowSteps = useMemo(() => [
    { title: "Inbox", description: "Question arrives in AI Helpdesk" },
    { title: "Order context", description: "Cusmato links order data" },
    { title: "Shipping/return status", description: "Action + answer to customer" },
  ], []);

  const features = useMemo(() => [
    {
      icon: "orderstatus",
      title: "Order status per ticket",
      description: "Cusmato automatically links order data to each ticket in your AI Helpdesk. Customers get immediate answers to 'where is my order?' with all relevant information.",
    },
    {
      icon: "tracking",
      title: "Track & trace automatically",
      description: "Shipping updates and track & trace codes are automatically linked to tickets. Customers receive real-time updates without manual work.",
    },
    {
      icon: "retour",
      title: "Returns with rules",
      description: "Policy-based return requests are automatically processed within AI Helpdesk. Cusmato checks rules, creates labels and provides status updates, all from the same inbox.",
    },
    {
      icon: "proactief",
      title: "Proactive updates",
      description: "In case of shipping delays, Cusmato automatically sends a message to the customer via AI Helpdesk, before questions arise. Customers stay informed without you having to do anything.",
    },
    {
      icon: "kanaal",
      title: "Channel-independent",
      description: "Whether a question comes in via Shopify, bol.com or other marketplaces, everything comes together in your AI Helpdesk inbox. Cusmato handles all orders consistently, regardless of the channel.",
    },
    {
      icon: "escalatie",
      title: "Escalations to team",
      description: "In case of exceptions or complex questions, Cusmato automatically forwards to your team, with all order context and history. You see immediately what's going on.",
    },
  ], []);

  const workflowSteps = useMemo(() => [
    {
      number: "1",
      title: "Question arrives in AI Helpdesk",
      description: "A customer asks via email or chat: 'Where is my order?' The ticket automatically appears in your AI Helpdesk inbox, linked to the customer.",
    },
    {
      number: "2",
      title: "Cusmato links order + customer + policies",
      description: "Cusmato automatically looks up the associated order data, checks shipping status, track & trace codes and your return policy. All context is linked to the ticket.",
    },
    {
      number: "3",
      title: "Cusmato performs action (return/label/status)",
      description: "Depending on the question and your settings, Cusmato automatically performs actions: create return label, update order status, or share shipping info. Everything happens within AI Helpdesk.",
    },
    {
      number: "4",
      title: "Answer is sent (auto or with approval)",
      description: "Cusmato sends a personalized answer to the customer with all relevant information. You can choose to approve first, or send automatically right away.",
    },
  ], []);

  const faqItems = useMemo(() => [
    {
      id: "orderdata-koppelen",
      question: "Does Cusmato automatically link order data to tickets?",
      answer: "Yes, when a customer question arrives in your AI Helpdesk, Cusmato automatically looks up associated order data via your webshop integrations (Shopify, WooCommerce, bol.com, etc.). Order number, customer data, products, payment status and shipping status are immediately linked to the ticket, so Cusmato can respond with context.",
      category: "Functionality",
    },
    {
      id: "vervoerders",
      question: "Which carriers are supported?",
      answer: "Cusmato works with all major carriers via API integrations: PostNL, DHL, DPD, UPS and others. Track & trace information is automatically retrieved and linked to tickets in your AI Helpdesk. If your carrier is not yet directly supported, we can still retrieve the information via your webshop data or track & trace APIs.",
      category: "Integrations",
    },
    {
      id: "goedkeuring-retouren",
      question: "Can I have returns processed only with approval?",
      answer: "Yes, you can set per return type whether Cusmato may act directly or needs your approval first. For example: standard returns within 14 days can be automatic, but returns after that period or for expensive products go to you first for review. You configure this per category in your AI Helpdesk settings.",
      category: "Control",
    },
    {
      id: "geen-order-match",
      question: "What happens if there is no order match?",
      answer: "If Cusmato cannot find an associated order (e.g. because the order number is incorrect or the order is in another system), it informs the customer politely and provides suggestions to check. In case of doubt, the ticket is automatically escalated to your team with a clear overview of what was attempted.",
      category: "Functionality",
    },
  ], []);

  const dataSources = useMemo(() => [
    { type: "Channels", items: ["Shopify", "WooCommerce", "bol.com"] },
    { type: "Cusmato AI", items: ["Automatically created tickets/updates"] },
  ], []);

  const heroConfig = subpagesHeroConfigEN["bestellingen-retouren"];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Hero - Exact zoals Prijzen */}
          <MobileSubpageHero
            label={heroConfig.label}
            title={
              heroConfig.titleMobile ? (
                <>
                  <span className="sm:hidden">{heroConfig.titleMobile}</span>
                  <span className="hidden sm:inline">{heroConfig.title}</span>
                </>
              ) : (
                heroConfig.title
              )
            }
            description={heroConfig.description}
            imageSrc={heroConfig.imageSrc}
            imageAlt={heroConfig.imageAlt}
            primaryCta={heroConfig.primaryCta}
          />
        </div>
      </main>
      
      {/* Hero with Flow Pipeline */}
      <section className="relative pt-0 sm:pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/30 via-white to-white overflow-hidden">
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
                AUTOMATION • WITHIN AI HELPDESK
              </p>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-[-0.01em]">
                <span className="sm:hidden">Orders & returns</span>
                <span className="hidden sm:inline">Orders & returns, automatically from your AI Helpdesk</span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-4 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
                Orders & returns are automatically handled from your AI Helpdesk. Tickets + orders + shipping status in one flow.
              </p>
              <p className="text-base text-slate-500 mb-10 max-w-2xl mx-auto">
                Cusmato links order data to each ticket and handles actions such as returns, tracking and status updates, automatically or with approval.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Try 14 days for free
                </a>
                <a
                  href="https://www.cusmato.app/welkom"
                  className="inline-flex items-center justify-center text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  View demo →
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
              In one overview
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Bestellingen dashboard.png"
                    alt="Orders Dashboard - Tickets linked to order data"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  Tickets linked to order data
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Verzendingen.png"
                    alt="Shipping - Direct overview of shipping status and tracking"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  See immediately: shipped, tracking and status
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
              <span className="md:hidden">What does it automate?</span>
              <span className="hidden md:inline">What does Cusmato automate in this flow?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Everything happens within your AI Helpdesk, from the moment a ticket arrives to the action and the answer.
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
              <span className="md:hidden">How it works</span>
              <span className="hidden md:inline">How it works in the AI Helpdesk</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              From the moment a question arrives to sending the answer, everything happens in one flow.
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
              <span className="md:hidden">Where does data come from?</span>
              <span className="hidden md:inline">Where does the data come from?</span>
            </h2>
            <p className="text-base text-slate-600 mb-10 text-center max-w-xl mx-auto">
              Everything comes together in one inbox.
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
                    alt="Built for support teams - Orders and returns automation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Built for support teams
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Cusmato is made for e-commerce support teams. Automate orders and returns while your team focuses on more complex questions.
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
