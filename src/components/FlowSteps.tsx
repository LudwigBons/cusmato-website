import { memo, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

interface FlowStep {
  title: string;
  description: string;
  chips?: string[];
}

interface FlowStepsProps {
  steps: FlowStep[];
  title?: string;
  subtitle?: string;
}

function FlowSteps({ steps, title, subtitle }: FlowStepsProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setActiveStep(0);
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [shouldReduceMotion]);

  const progressPercentage = ((activeStep + 1) / steps.length) * 100;

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
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

        {/* Desktop Layout: 2-column with progress rail */}
        <div className="hidden lg:grid lg:grid-cols-[80px_1fr] gap-12">
          {/* Progress Rail (Left) */}
          <div className="relative flex flex-col items-center pt-1">
            {/* Base rail line */}
            <div className="absolute top-1 bottom-0 w-[1px] bg-slate-200" />
            
            {/* Progress indicator */}
            <motion.div
              className="absolute top-1 w-[1px] bg-blue-600 origin-top"
              style={{
                boxShadow: "0 0 8px rgba(37, 99, 235, 0.4)",
              }}
              initial={false}
              animate={{
                height: shouldReduceMotion ? "100%" : `${progressPercentage}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Step dots */}
            <div className="relative flex flex-col justify-between h-full w-full items-center py-1">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 mt-8 first:mt-0"
                  initial={false}
                  animate={{
                    scale: activeStep === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full border-2 transition-colors ${
                      activeStep >= index
                        ? "bg-blue-600 border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                        : "bg-white border-slate-300"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Step Cards (Right) */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                initial={isInView ? { opacity: 0, y: 12 } : { opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: shouldReduceMotion ? 0 : index * 0.1 },
                      }
                    : {}
                }
                className={`relative bg-white rounded-2xl border ${
                  activeStep === index
                    ? "border-blue-200 shadow-lg shadow-blue-500/10"
                    : "border-slate-200 shadow-sm"
                } p-6 md:p-8 transition-all duration-300`}
              >
                {/* Accent line on active step */}
                {activeStep === index && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Optional chips */}
                  {step.chips && step.chips.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {step.chips.map((chip, chipIndex) => (
                        <span
                          key={chipIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Horizontal scroll with dots */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-6 scroll-snap-x scroll-smooth snap-x snap-mandatory scrollbar-hide">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                initial={isInView ? { opacity: 0, y: 12 } : { opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: shouldReduceMotion ? 0 : index * 0.1 },
                      }
                    : {}
                }
                className="min-w-[280px] sm:min-w-[320px] bg-white rounded-2xl border border-slate-200 shadow-sm p-6 snap-start"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.chips && step.chips.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {step.chips.map((chip, chipIndex) => (
                      <span
                        key={chipIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const card = stepRefs.current[index];
                  if (card) {
                    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === index ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FlowSteps);
