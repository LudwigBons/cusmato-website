// WorkflowsShowcaseDemo.tsx - Premium clean rule builder UI

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Step = "when" | "then" | "output";

const RULES = [
  { type: "when" as const, label: "WHEN", text: 'onderwerp bevat "retour"' },
  { type: "then" as const, label: "THEN", text: "gebruik template: RETOUR_STANDAARD" },
  { type: "then" as const, label: "ACTION", text: "send automatisch" },
  { type: "then" as const, label: "ACTION", text: "tag: #retour" },
];

const OUTPUT = "Bedankt voor je retour aanvraag. We sturen je een retourlabel toe.";

export default function WorkflowsShowcaseDemo() {
  const [currentStep, setCurrentStep] = useState<Step>("when");
  const [highlightedRule, setHighlightedRule] = useState<number | null>(null);
  const [outputText, setOutputText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Memoize constants
  const OUTPUT_MEMO = useMemo(() => OUTPUT, []);
  const RULES_MEMO = useMemo(() => RULES, []);

  // Pause animations when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // IntersectionObserver to pause when offscreen
  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        setIsPaused(!isVisible);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setCurrentStep("then");
      setHighlightedRule(1);
      setOutputText(OUTPUT);
      return;
    }

    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const runAnimation = () => {
      setCurrentStep("when");
      setHighlightedRule(0);
      setOutputText("");

      timeoutRef.current = setTimeout(() => {
        setCurrentStep("then");
        let ruleIndex = 1;

        const highlightNext = () => {
          if (ruleIndex < RULES_MEMO.length) {
            setHighlightedRule(ruleIndex);
            ruleIndex++;

            setOutputText("");
            let charIndex = 0;
            intervalRef.current = setInterval(() => {
              if (charIndex < OUTPUT_MEMO.length) {
                setOutputText(OUTPUT_MEMO.slice(0, charIndex + 1));
                charIndex++;
              } else {
                if (intervalRef.current) clearInterval(intervalRef.current);
                if (ruleIndex < RULES_MEMO.length) {
                  timeoutRef.current = setTimeout(highlightNext, 1500);
                } else {
                  timeoutRef.current = setTimeout(runAnimation, 3000);
                }
              }
            }, 30);
          }
        };

        timeoutRef.current = setTimeout(highlightNext, 1000);
      }, 2000);
    };

    runAnimation();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, reducedMotion, OUTPUT_MEMO, RULES_MEMO]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-transparent rounded-2xl -z-10" />
      
      <div className="relative w-full max-w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden scale-[0.95] sm:scale-100 origin-top">
        {/* Topbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-sm shadow-sm">
              ⚙
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Workflow Builder</div>
              <div className="text-[10px] text-slate-500">Rule configuration</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(500px-65px)]">
          {/* Left: Rules */}
          <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-950 p-4 sm:p-5 overflow-visible lg:overflow-y-auto lg:max-h-none">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] text-white/60 font-mono">workflow.js</div>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {RULES_MEMO.map((rule, idx) => {
                const isHighlighted = highlightedRule === idx;
                const isActive = isHighlighted && currentStep === rule.type;

                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      backgroundColor: isHighlighted ? "rgba(59, 130, 246, 0.12)" : "transparent",
                      borderLeftColor: isHighlighted ? "rgb(59, 130, 246)" : "transparent",
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`rounded-lg border-l-2 px-4 py-3 ${
                      isHighlighted ? "border-l-blue-500" : "border-l-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] text-white/40 font-mono mt-0.5">{idx + 1}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-xs font-semibold ${
                              rule.type === "when"
                                ? "text-blue-400"
                                : rule.label === "THEN"
                                ? "text-emerald-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {rule.label}
                          </span>
                          <span className="text-white/60">:</span>
                        </div>
                        <div className="text-xs text-white/85 font-mono">{rule.text}</div>
                      </div>
                    </div>
                    {isActive && !reducedMotion && (
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="inline-block w-[4px] h-3.5 bg-blue-400 ml-5 mt-1 align-middle"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Output Preview */}
          <div className="w-full lg:w-1/3 bg-slate-50/50 p-4 sm:p-5 flex flex-col min-h-[200px] lg:min-h-0">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-4">
              Uitkomst
            </div>
            <motion.div
              key={highlightedRule}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="text-xs text-slate-800 leading-relaxed min-h-[200px]">
                {outputText || "Wacht op regel..."}
                {currentStep === "then" &&
                  !reducedMotion &&
                  outputText.length > 0 &&
                  outputText.length < OUTPUT_MEMO.length && (
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-[4px] h-3.5 bg-blue-600 ml-1 align-middle"
                    />
                  )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}