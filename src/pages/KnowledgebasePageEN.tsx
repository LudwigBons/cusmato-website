import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import FAQAccordion from "../components/FAQAccordion";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";
import FinalCTAEN from "../components/FinalCTAEN";
import MobileSubpageHero from "../components/MobileSubpageHero";
import { subpagesHeroConfigEN } from "../lib/subpagesHeroConfig";

export default function KnowledgebasePageEN() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Knowledgebase | Cusmato";
  }, []);

  const trustBullets = [
    "Customizable per channel",
    "Always up-to-date answers",
    "Feeds AI Helpdesk & workflows",
  ];

  const categoryCards = [
    {
      icon: "bestelling",
      title: "Order & delivery",
      description: "Order status, delivery times, track & trace codes and shipping options in one overview.",
    },
    {
      icon: "retour",
      title: "Cancel & return",
      description: "Return conditions, steps, terms and exceptions per product category.",
    },
    {
      icon: "betaling",
      title: "Payment & invoicing",
      description: "Invoice overview, VAT information, payment status and payment options per channel.",
    },
    {
      icon: "product",
      title: "Product advice",
      description: "Size advice, specifications, compatibility and usage instructions per product.",
    },
    {
      icon: "garantie",
      title: "Warranty & defects",
      description: "Warranty conditions, defect process, proof requirements and escalation paths.",
    },
    {
      icon: "account",
      title: "Account & privacy",
      description: "Account management, GDPR rights, verification processes and privacy settings.",
    },
  ];

  const whyCards = [
    {
      icon: "consistentie",
      title: "Consistency",
      description: "Customers get the same, accurate information via every channel, such as Shopify, bol.com or email.",
    },
    {
      icon: "sneller",
      title: "Faster",
      description: "Cusmato AI doesn't have to look up every answer again. Everything is ready in the knowledgebase.",
    },
    {
      icon: "controle",
      title: "Control",
      description: "You determine which answers are available and whether Cusmato may send automatically or needs approval first.",
    },
  ];

  const howItWorksSteps = [
    {
      number: "1",
      title: "Connect your channels (Shopify/bol/email)",
      description: "Connect your webshop, marketplaces and email with Cusmato. All channels get access to the same knowledgebase.",
    },
    {
      number: "2",
      title: "Add categories & content (policies + answers)",
      description: "Set per category which information is available: return conditions, delivery times, product details, and more. Add templates and answers.",
    },
    {
      number: "3",
      title: "Set tone-of-voice per channel (optional)",
      description: "Adjust the tone of voice per channel if desired. For example: more formal for bol.com, friendlier for your webshop.",
    },
    {
      number: "4",
      title: "Cusmato uses this automatically in tickets (with approval optional)",
      description: "For every customer question, Cusmato automatically uses the right information from your knowledgebase. You can set per category whether answers are sent directly or approved first.",
    },
  ];

  const faqItems = [
    {
      id: "per-kanaal-verschillend",
      question: "Can I use different answers per channel?",
      answer: "Yes, you can set different versions of answers per channel (Shopify, bol.com, email), or use one central knowledge base. For example: for bol.com you can show different return conditions than for your own webshop. The knowledgebase supports channel-specific content and tone-of-voice.",
      category: "Functionality",
    },
    {
      id: "verouderde-antwoorden",
      question: "How do I prevent answers from becoming outdated?",
      answer: "You can update content directly in the knowledgebase. Cusmato picks up changes automatically within a few minutes. In addition, you can keep versions, so you can always go back to a previous version if needed. We recommend regularly reviewing your most important categories.",
      category: "Management",
    },
    {
      id: "approval-per-categorie",
      question: "Can I require approval for certain categories?",
      answer: "Yes, you can set per category in the knowledgebase whether Cusmato may send automatically or needs approval first. For example: general product questions can be automatic, but warranty cases or complex refunds always require approval first.",
      category: "Control",
    },
    {
      id: "update-snelheid",
      question: "How quickly does Cusmato pick up updates?",
      answer: "Updates in the knowledgebase become active within a few minutes. As soon as you add, modify or remove content, Cusmato uses the new information for the next relevant ticket. No manual sync or refresh is needed, everything happens automatically.",
      category: "Technical",
    },
  ];

  const floatingTags = [
    "Categories",
    "Policies",
    "Templates",
  ];

  const heroConfig = subpagesHeroConfigEN["knowledgebase"];

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

      {/* Trust Bullets */}
      <Section variant="soft" className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
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
        </div>
      </Section>

      {/* Screenshot Showcase - Primary */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-slate-50/60">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            <Reveal delay={0.1}>
              <div className="relative">
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10 pointer-events-none">
                  {floatingTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-white/98 rounded-lg px-3 py-1.5 shadow-lg border border-slate-200/40"
                    >
                      <span className="text-xs font-medium text-slate-700">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Screenshot Frame */}
                {/* Reduced shadow-2xl to shadow-xl for scroll performance */}
                <div className="relative rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden bg-white/95" style={{ boxShadow: "0 10px 40px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                  <div className="max-h-[520px] overflow-hidden">
                    <img
                      src="/knowledgebase.png"
                      alt="Knowledgebase - Manage categories and channel rules in one overview"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-slate-600 mt-6">
                Manage categories and channel rules in one overview.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What do you put in the knowledgebase? */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center leading-[1.15]">
              <span className="md:hidden">What do you put in it?</span>
              <span className="hidden md:inline">What do you put in the knowledgebase?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-12 text-center max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
              Organize your knowledge per category and ensure Cusmato always uses the right information.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categoryCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-white rounded-xl border border-slate-200/80 p-6 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      {card.icon === "bestelling" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      )}
                      {card.icon === "retour" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m5 14h3a2 2 0 002-2v-6a2 2 0 00-2-2h-3.5" />
                        </svg>
                      )}
                      {card.icon === "betaling" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      )}
                      {card.icon === "product" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                      {card.icon === "garantie" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {card.icon === "account" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Why this is the foundation of your AI Helpdesk */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-6xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              Why this is the foundation of your AI Helpdesk
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Your knowledgebase is the single source of truth. AI Helpdesk bases all answers on this source, so you always communicate consistently and accurately.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {whyCards.map((card, index) => (
              <Reveal key={index} delay={0.15 + index * 0.05}>
                <div className="bg-white rounded-xl border border-slate-200/80 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    {card.icon === "consistentie" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "sneller" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {card.icon === "controle" && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Control:</span> You can determine per category whether Cusmato sends automatically or requires approval first.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How it works - Timeline */}
      <Section variant="default" className="py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 text-center">
              How it works
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Connect your channels and add knowledge. Cusmato uses it automatically.
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline connector line */}
            {/* REMOVED drop-shadow filter for scroll performance */}
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

      {/* Secondary Visual - AI Studio */}
      <Section variant="soft" className="py-14 sm:py-20 md:py-24 bg-slate-50/60 cv-auto">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                  Everything comes together in Cusmato Studio
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Your knowledgebase, workflows and AI Helpdesk work together in one overview. Manage everything from one central place.
                </p>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="rounded-xl border border-slate-200/60 shadow-lg overflow-hidden bg-white/95" style={{ boxShadow: "0 10px 40px -12px rgba(0, 0, 0, 0.12)" }}>
                  <div className="max-h-[320px] overflow-hidden">
                    <img
                      src="/AI Studio.png"
                      alt="Cusmato Studio - Where everything comes together"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
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
