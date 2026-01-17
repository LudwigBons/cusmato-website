import { useState, useEffect, useRef, useCallback, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Step {
  id: string;
  label: string;
  color: "blue" | "emerald";
}

const STEPS: Step[] = [
  { id: "1", label: "Trigger", color: "blue" },
  { id: "2", label: "Condition", color: "blue" },
  { id: "3", label: "Action", color: "emerald" },
  { id: "4", label: "Notify", color: "emerald" },
];

function WorkflowVisual() {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Pause when offscreen or tab hidden
  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsPaused(!entries[0]?.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [reducedMotion]);

  // Animation loop
  useEffect(() => {
    if (reducedMotion) {
      setActiveStep(STEPS.length - 1);
      return;
    }

    if (isPaused) {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    let step = 0;
    let isCancelled = false;
    
    const nextStep = () => {
      if (isCancelled) return;
      setActiveStep(step);
      
      step++;
      
      if (step >= STEPS.length) {
        // Reset after completion
        intervalRef.current = setTimeout(() => {
          if (isCancelled) return;
          step = 0;
          setActiveStep(0);
          intervalRef.current = setTimeout(nextStep, 900);
        }, 800);
      } else {
        intervalRef.current = setTimeout(nextStep, 900);
      }
    };

    intervalRef.current = setTimeout(nextStep, 900);

    return () => {
      isCancelled = true;
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full"
      onMouseEnter={() => !reducedMotion && setIsPaused(true)}
      onMouseLeave={() => !reducedMotion && setIsPaused(false)}
    >
      <div className="relative bg-gradient-to-br from-slate-50/50 to-white rounded-2xl border border-slate-200/60 shadow-sm p-4 sm:p-6 max-h-[260px] sm:max-h-none overflow-hidden">
        {/* Steps container */}
        <div className="flex items-center justify-between gap-2 sm:gap-6 relative py-2">
          {/* Desktop connecting lines */}
          <div className="absolute left-[12%] right-[12%] top-1/2 h-0.5 -translate-y-1/2 bg-slate-200 hidden sm:block">
            {STEPS.map((step, idx) => {
              if (idx === STEPS.length - 1) return null;
              const isActive = activeStep >= idx + 1;
              return (
                <motion.div
                  key={`line-${idx}`}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  style={{ 
                    width: `${100 / (STEPS.length - 1)}%`, 
                    left: `${(idx * 100) / (STEPS.length - 1)}%`,
                    transformOrigin: "left"
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              );
            })}
          </div>

          {/* Mobile connecting line (simplified) */}
          <div className="absolute left-[15%] right-[15%] top-1/2 h-0.5 -translate-y-1/2 bg-slate-200 sm:hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeStep > 0 ? Math.min(activeStep / (STEPS.length - 1), 1) : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ width: "100%", transformOrigin: "left" }}
            />
          </div>

          {/* Steps */}
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div key={step.id} className="flex flex-col items-center flex-1 relative z-10">
                {/* Step circle */}
                <motion.div
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? step.color === "blue"
                        ? "bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/30"
                        : "bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30"
                      : isCompleted
                      ? step.color === "blue"
                        ? "bg-blue-100 border-blue-300"
                        : "bg-emerald-100 border-emerald-300"
                      : "bg-white border-slate-300"
                  }`}
                  animate={{
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className={`text-xs sm:text-sm font-semibold ${isActive ? "text-white" : "text-slate-500"}`}>
                      {step.id}
                    </span>
                  )}
                  {isActive && !reducedMotion && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        step.color === "blue" ? "bg-blue-400" : "bg-emerald-400"
                      }`}
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>

                {/* Step label */}
                <div className={`mt-2 text-center ${isActive ? "opacity-100" : "opacity-60"} transition-opacity duration-300`}>
                  <div className={`text-[10px] sm:text-xs font-medium text-slate-700 ${isActive ? "font-semibold" : ""}`}>
                    {step.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(WorkflowVisual);
