import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";
import FinalCTAEN from "../components/FinalCTAEN";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfigEN } from "../lib/subpagesHeroConfig";

export default function AIFacturatiePageEN() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "AI invoicing | Cusmato";
  }, []);

  const flowSteps = [
    { title: "Invoice question in inbox", description: "The ticket arrives in your AI Helpdesk" },
    { title: "Invoice match and status", description: "Cusmato automatically links the invoice data" },
    { title: "Answer and action sent", description: "The answer and invoice are sent to the customer via PDF or link" },
  ];

  const features = [
    {
      icon: "opzoeken",
      title: "Find & match invoice",
      description: "Cusmato automatically finds the right invoice based on email, order number or customer data. Every invoice question is linked to the corresponding ticket in your AI Helpdesk.",
    },
    {
      icon: "versturen",
      title: "Resend invoice",
      description: "When a customer indicates they have lost their invoice, Cusmato finds the invoice and automatically resends it as a PDF attachment or via a secure link. Everything happens within AI Helpdesk with full logging.",
    },
    {
      icon: "betaalstatus",
      title: "Explain payment status",
      description: "Cusmato automatically checks whether an invoice is open, paid, failed or refunded. Customers get immediate clarity on the status, without you having to check manually.",
    },
    {
      icon: "btw",
      title: "Answer VAT and invoice data questions",
      description: "Questions about VAT rates, invoice numbers, payment details or invoice details are answered automatically. Cusmato retrieves the correct information from your invoicing system and provides context-rich answers.",
    },
    {
      icon: "herinnering",
      title: "Reminders & follow-ups",
      description: "Based on your rules, Cusmato automatically sends reminders for outstanding invoices. You determine when and how often, and Cusmato handles it via AI Helpdesk with full control.",
    },
    {
      icon: "escalatie",
      title: "Escalate for exceptions",
      description: "In case of fraud, chargebacks, accounting questions or other exceptions, Cusmato automatically forwards to your finance team. All invoice context and history are included, so you immediately know what's going on.",
    },
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Ticket arrives with an invoice question, VAT question or payment status question",
      description: "A customer asks via email or chat for an invoice, VAT information or payment status. The ticket automatically appears in your AI Helpdesk inbox, linked to the customer.",
    },
    {
      number: "2",
      title: "Cusmato automatically links customer, order and invoice and checks the status",
      description: "Cusmato automatically looks up the associated invoice via your invoicing system or webshop integration. It checks payment status, invoice date, amount and all relevant data. All context is linked to the ticket.",
    },
    {
      number: "3",
      title: "Cusmato creates an answer and adds the attachment or link",
      description: "Cusmato generates a personalized answer in your tone of voice and automatically adds the invoice as a PDF attachment or secure link. For VAT questions, it provides the correct information immediately.",
    },
    {
      number: "4",
      title: "The answer is automatically sent or submitted for approval and logged in your dashboard",
      description: "Depending on your settings, the answer is automatically sent or first submitted for approval. Everything is logged in your AI Helpdesk dashboard, so you always see what has been sent and why.",
    },
  ];

  const controlPoints = [
    "You can set per category whether approval is required",
    "Templates and tone of voice remain consistent in all communication",
    "You see in the audit trail exactly what has been sent and why",
    "Complex questions are automatically forwarded to your finance team",
  ];

  const faqItems = [
    {
      id: "factuurdata-lezen",
      question: "Which invoice data must Cusmato be able to read?",
      answer: "Cusmato needs access to invoice numbers, invoice data, amounts, payment status, VAT data and customer data. This can be via integrations with your invoicing system (such as Exact, Moneybird, or native webshop invoicing) or via API connections. All data remains secure and encrypted, and you determine which information Cusmato may use.",
      category: "Technical",
    },
    {
      id: "factuur-bijlage",
      question: "Can Cusmato send invoices as attachments?",
      answer: "Yes, Cusmato can automatically send invoices as PDF attachments or generate a secure download link. You can set whether this may be automatic or needs approval first. When resending invoices, the original invoice is always used, so there is no confusion.",
      category: "Functionality",
    },
    {
      id: "refunds-creditnota",
      question: "Does this work with refunds and credit notes?",
      answer: "Yes, Cusmato recognizes questions about refunds and credit notes and can automatically look them up and explain them. For refunds, the status is checked and the customer is informed about when the refund will be processed. Credit notes are automatically linked to tickets just like invoices and can be resent if necessary.",
      category: "Functionality",
    },
    {
      id: "goedkeuring-financieel",
      question: "Can I require approval for financial emails?",
      answer: "Yes, you can set per category whether Cusmato may act directly or needs your approval first. For financial emails such as sending invoices, changing payment status or refunds, you can set that these are always approved first. You configure this per action type in your AI Helpdesk settings, so you have full control over what goes automatically and what is reviewed first.",
      category: "Control",
    },
  ];

  const heroConfig = subpagesHeroConfigEN["ai-facturatie"];

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
            primaryCta={heroConfig.primaryCta ? {
              ...heroConfig.primaryCta,
              href: "/en/try-14-days-for-free"
            } : undefined}
          />
        </div>
      </main>

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
                    src="/Ai facturatie.png"
                    alt="Invoices overview and status in the AI Helpdesk dashboard"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  You see all invoices in overview with their status
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/40">
                  <img
                    src="/Klantdata.png"
                    alt="Customer data as context per ticket in the AI Helpdesk"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-center text-sm text-slate-400 mt-4">
                  All customer data is used as context for each ticket
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
              <span className="hidden md:inline">What does Cusmato automate here?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Everything happens within your AI Helpdesk, from the moment an invoice question arrives to sending the answer and performing actions.
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
              <span className="md:hidden">How it works</span>
              <span className="hidden md:inline">How it works in the AI Helpdesk</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              From the moment an invoice question arrives to sending the answer, everything happens in one seamless flow.
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

      {/* Rules & Control */}
      <Section variant="soft">
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-3xl font-semibold text-slate-900 mb-6 text-center leading-[1.15]">
              Rules & control
            </h2>
            <p className="text-base text-slate-600 mb-8 text-center max-w-xl mx-auto">
              Full control over what goes automatically and what is reviewed first.
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
