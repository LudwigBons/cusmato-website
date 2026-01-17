import { memo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface SetupStep {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
}

const setupSteps: SetupStep[] = [
  {
    id: "connect",
    title: "Koppel bronnen",
    shortDesc: "Verbind Shopify, bol.com, WooCommerce en e-mail met Cusmato in minuten.",
    bullets: [
      "API-koppelingen automatisch",
      "Realtime synchronisatie",
      "Geen migraties nodig",
    ],
  },
  {
    id: "rules",
    title: "Stel regels in",
    shortDesc: "Definieer wanneer Cusmato automatisch handelt, welke templates gebruikt worden, en wanneer escalatie nodig is.",
    bullets: [
      "Als/dan logica per categorie",
      "Uitzonderingen en VIP-rules",
      "Approval mode per regeltype",
    ],
  },
  {
    id: "live",
    title: "Ga live",
    shortDesc: "Begin veilig met approval mode. Zodra je vertrouwen hebt, zet je specifieke onderdelen op autopilot.",
    bullets: [
      "Test met approval eerst",
      "Stap voor stap automatiseren",
      "Volledige controle behouden",
    ],
  },
];

function WorkflowSetupShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = setupSteps[activeStep];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle glow behind preview */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Zo stel je het in
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In drie stappen ben je klaar om workflows te automatiseren.
          </p>
        </div>

        {/* Desktop Layout: Tabs + Preview */}
        <div className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
          {/* Left: Step Tabs/Pills */}
          <div className="space-y-3">
            {setupSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                whileHover={shouldReduceMotion ? {} : { x: 4, transition: { duration: 0.2 } }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-200 ${
                  activeStep === index
                    ? "bg-blue-50 border-blue-200 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
                aria-selected={activeStep === index}
                role="tab"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      activeStep === index
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-semibold mb-0.5 ${
                        activeStep === index ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Preview Panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 16, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, x: -16, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 md:p-10 relative min-h-[420px]"
              >
                {/* Mock UI Preview */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">Cusmato Inbox</span>
                  </div>

                  <div className="space-y-3">
                    {/* Mock ticket row */}
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-slate-700">Nieuw ticket</span>
                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs">Auto</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded w-3/4 mb-2" />
                      <div className="flex gap-2">
                        <div className="h-1.5 bg-slate-200 rounded w-16" />
                        <div className="h-1.5 bg-slate-200 rounded w-20" />
                      </div>
                    </div>

                    {/* Mock rule indicator */}
                    {activeStep === 1 && (
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-xs font-medium text-blue-900">Regel actief: Levering → Auto reply</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {currentStep.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                    {currentStep.shortDesc}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {currentStep.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="mt-6 relative">
              <div className="h-[2px] bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={false}
                  animate={{
                    width: shouldReduceMotion
                      ? "100%"
                      : `${((activeStep + 1) / setupSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-lg"
                initial={false}
                animate={{
                  left: shouldReduceMotion
                    ? "100%"
                    : `${((activeStep + 1) / setupSteps.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ marginLeft: "-6px" }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout: Horizontal Scroll */}
        <div className="lg:hidden">
          {/* Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide scroll-snap-x snap-x snap-mandatory">
            {setupSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl border transition-all scroll-snap-start ${
                  activeStep === index
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-slate-200"
                }`}
                aria-selected={activeStep === index}
                role="tab"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep === index
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-sm font-semibold whitespace-nowrap ${
                    activeStep === index ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Preview Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative min-h-[320px]"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-slate-900">Cusmato Inbox</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="h-2 bg-slate-200 rounded w-3/4 mb-2" />
                  <div className="h-1.5 bg-slate-200 rounded w-1/2" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {currentStep.title}
              </h3>
              <p className="text-base text-slate-600 mb-4 leading-relaxed">
                {currentStep.shortDesc}
              </p>
              <ul className="space-y-2.5">
                {currentStep.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="mt-6 relative">
            <div className="h-[2px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={false}
                animate={{
                  width: shouldReduceMotion
                    ? "100%"
                    : `${((activeStep + 1) / setupSteps.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-lg"
              initial={false}
              animate={{
                left: shouldReduceMotion
                  ? "100%"
                  : `${((activeStep + 1) / setupSteps.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ marginLeft: "-6px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WorkflowSetupShowcase);
