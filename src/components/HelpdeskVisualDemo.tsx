import { useState, useEffect, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HelpdeskVisualDemoProps {
  variant?: "default" | "tone-of-voice" | "approval" | "workflow";
}

/**
 * HelpdeskVisualDemo - Micro-demo showing Inbox → Cusmato → Reply flow
 * Auto-cycles through 3 states every 2.5s
 */
function HelpdeskVisualDemo({ variant = "default" }: HelpdeskVisualDemoProps) {
  const shouldReduceMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);
  
  // Variant-specific content
  const content = {
    default: {
      steps: [
        {
          title: "Nieuw ticket",
          subject: "Waar blijft mijn bestelling?",
          body: "Ik heb vorige week besteld maar nog niets ontvangen.",
          from: "klant@example.com",
        },
        {
          title: "Cusmato analyseert",
          tag: "Tone of voice match",
          shimmer: true,
        },
        {
          title: "Draft reply",
          reply: "Bedankt voor je vraag. We hebben je order gevonden en deze wordt vandaag verzonden. Tracking code: TR123456.",
          badge: "Autonoom",
        },
      ],
    },
    "tone-of-voice": {
      steps: [
        {
          title: "Nieuw ticket",
          subject: "Kun je mijn retour opnieuw verwerken?",
          body: "Mijn retour is aangekomen maar ik zie nog geen terugbetaling.",
          from: "klant@example.com",
        },
        {
          title: "Cusmato leert jouw stijl",
          tag: "98% tone match",
          shimmer: true,
        },
        {
          title: "Draft reply",
          reply: "Bedankt voor je bericht. We hebben je retour ontvangen en verwerken deze vandaag. Binnen 3-5 werkdagen zie je de terugbetaling op je rekening.",
          badge: "Autonoom",
        },
      ],
    },
    approval: {
      steps: [
        {
          title: "Nieuw ticket",
          subject: "VIP-klant: Order opnieuw verzenden",
          body: "Ik ben een VIP-klant en mijn order is kwijtgeraakt. Graag ASAP opnieuw versturen.",
          from: "vip@example.com",
        },
        {
          title: "Cusmato classificeert",
          tag: "VIP-klant gedetecteerd",
          shimmer: true,
        },
        {
          title: "Wacht op goedkeuring",
          reply: "Bedankt voor je bericht. We hebben je order gevonden en bereiden deze voor op herverzending.",
          badge: "Approval mode",
          pending: true,
        },
      ],
    },
    workflow: {
      steps: [
        {
          title: "Nieuw ticket",
          subject: "Retouraanvraag #12345",
          body: "Ik wil graag mijn bestelling retourneren. Hoe werkt dat?",
          from: "klant@example.com",
        },
        {
          title: "Cusmato triggert workflow",
          tag: "Retour workflow actief",
          shimmer: true,
        },
        {
          title: "Workflow uitgevoerd",
          reply: "Bedankt voor je retouraanvraag. We hebben automatisch een retourlabel aangemaakt en verstuurd naar je e-mail. Label: RET-12345.",
          badge: "Autonoom",
          workflow: true,
        },
      ],
    },
  };

  const steps = content[variant].steps;

  // Auto-cycle through steps
  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentStep(0); // Show first step only
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, steps.length]);

  return (
    <div className="w-full h-full flex flex-col max-h-[240px] sm:max-h-[280px] lg:max-h-[360px]">
      {/* Demo Card */}
      <div className="flex-1 bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
        {/* Card Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <div className="flex-1 text-center">
            <span className="text-xs font-medium text-slate-600">{steps[currentStep].title}</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-h-[180px] sm:min-h-[200px]">
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Van:</span>
                  <span className="font-medium text-slate-700">{(steps[currentStep] as any).from}</span>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {(steps[currentStep] as any).subject}
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {(steps[currentStep] as any).body}
              </p>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Shimmer effect */}
                  {(steps[currentStep] as any).shimmer && !shouldReduceMotion && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                  <div className="relative w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium">
                  {(steps[currentStep] as any).tag}
                </span>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">Antwoord:</span>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                    (steps[currentStep] as any).pending
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  {(steps[currentStep] as any).badge}
                </span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-600">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {(steps[currentStep] as any).reply}
                </p>
              </div>
              {(steps[currentStep] as any).workflow && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Retourlabel aangemaakt & verstuurd</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Step Indicator Dots */}
      {!shouldReduceMotion && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentStep
                  ? "w-6 bg-blue-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Stap ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(HelpdeskVisualDemo);
