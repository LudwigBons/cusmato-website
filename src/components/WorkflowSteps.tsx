import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface StepVisual {
  type: "connection" | "profile" | "ticket";
  sources?: string[];
  target?: string;
}

interface WorkflowStep {
  id: string;
  title: string;
  sentence: string;
  chips: string[];
  visual: StepVisual;
  logos?: string[];
}

interface WorkflowStepsProps {
  steps: WorkflowStep[];
  title?: string;
  subtitle?: string;
}

function WorkflowSteps({ steps, title = "Zo werkt de koppeling", subtitle }: WorkflowStepsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  // Auto-advance animation (optional, can be disabled)
  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [steps.length, shouldReduceMotion]);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle blue radial glow behind preview panel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Desktop Layout: Step selector + Preview panel */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Left: Step Selector Pills */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                    activeStep === index
                      ? "bg-blue-50 border-blue-200 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        activeStep === index
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        activeStep === index ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {step.title}
                    </span>
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
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 md:p-10 relative min-h-[400px]"
                >
                  {/* Faded integration logos background */}
                  {currentStep.logos && currentStep.logos.length > 0 && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-[0.15] pointer-events-none">
                      <div className="flex items-center justify-center gap-6 h-full">
                        {currentStep.logos.map((logo, idx) => (
                          <img
                            key={idx}
                            src={logo}
                            alt=""
                            className="h-8 w-auto object-contain grayscale"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Headline */}
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {currentStep.title}
                    </h3>

                    {/* Short sentence */}
                    <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                      {currentStep.sentence}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {currentStep.chips.map((chip, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Mini Visual */}
                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <MiniVisual visual={currentStep.visual} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress line / Signal flow below preview panel */}
          <div className="mt-8 relative">
            <div className="h-[2px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={false}
                animate={{
                  width: shouldReduceMotion
                    ? "100%"
                    : `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            {/* Moving dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full shadow-lg"
              initial={false}
              animate={{
                left: shouldReduceMotion
                  ? "100%"
                  : `${((activeStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ marginLeft: "-6px" }}
            />
          </div>
        </div>

        {/* Mobile Layout: Horizontal scroll tabs + Preview below */}
        <div className="lg:hidden">
          {/* Horizontal scroll tabs */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide scroll-snap-x snap-x snap-mandatory">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all scroll-snap-start ${
                  activeStep === index
                    ? "bg-blue-50 border-blue-200"
                    : "bg-white border-slate-200"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep === index
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-sm font-medium whitespace-nowrap ${
                    activeStep === index ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Preview Panel (Mobile) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative min-h-[320px]"
            >
              {currentStep.logos && currentStep.logos.length > 0 && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-[0.12] pointer-events-none">
                  <div className="flex items-center justify-center gap-4 h-full">
                    {currentStep.logos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        alt=""
                        className="h-6 w-auto object-contain grayscale"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {currentStep.title}
                </h3>
                <p className="text-base text-slate-600 mb-4 leading-relaxed">
                  {currentStep.sentence}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentStep.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <MiniVisual visual={currentStep.visual} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile progress line */}
          <div className="mt-6 relative">
            <div className="h-[2px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={false}
                animate={{
                  width: shouldReduceMotion
                    ? "100%"
                    : `${((activeStep + 1) / steps.length) * 100}%`,
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
                  : `${((activeStep + 1) / steps.length) * 100}%`,
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

// Mini Visual Component for step preview
function MiniVisual({ visual }: { visual: StepVisual }) {
  const shouldReduceMotion = useReducedMotion();

  if (visual.type === "connection") {
    return (
      <div className="relative">
        {/* Inbox box */}
        <div className="relative bg-slate-50 border-2 border-slate-200 rounded-lg p-4 min-h-[140px]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Cusmato Inbox
          </div>

          {/* Source nodes */}
          <div className="flex items-center justify-between mb-4">
            {visual.sources?.map((source, idx) => (
              <motion.div
                key={idx}
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-600"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 2,
                          delay: idx * 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
                        },
                      }
                }
              >
                {source}
              </motion.div>
            ))}
          </div>

          {/* Connection lines with animated pulse */}
          <div className="relative h-[2px] bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full"
              animate={
                shouldReduceMotion
                  ? { width: "100%" }
                  : {
                      width: ["0%", "100%"],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      },
                    }
              }
            />
          </div>

          {/* Target */}
          {visual.target && (
            <motion.div
              className="mt-4 w-full h-8 bg-blue-50 border-2 border-blue-200 rounded flex items-center justify-center text-xs font-medium text-blue-700"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      borderColor: ["rgb(191 219 254)", "rgb(96 165 250)", "rgb(191 219 254)"],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              {visual.target}
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  if (visual.type === "profile") {
    return (
      <div className="relative">
        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 min-h-[140px]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Klantprofiel
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-200 rounded-full w-3/4" />
            <div className="h-2 bg-slate-200 rounded-full w-1/2" />
            <div className="h-2 bg-blue-200 rounded-full w-2/3 mt-4" />
          </div>
        </div>
      </div>
    );
  }

  if (visual.type === "ticket") {
    return (
      <div className="relative">
        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 min-h-[140px]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Nieuw Ticket
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-blue-100 rounded w-full" />
            <div className="h-2 bg-slate-200 rounded w-5/6" />
            <motion.div
              className="mt-3 h-2 bg-green-100 rounded w-1/3"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scaleX: [1, 1.05, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default memo(WorkflowSteps);
