import { ReactNode, memo } from "react";
import Reveal from "./Reveal";

interface Step {
  number: number;
  title: string;
  description: string;
  chips?: string[]; // Optional feature chips
  visual: ReactNode; // The diagram/visual component
}

interface StepsSectionProps {
  title?: string;
  steps: Step[];
}

/**
 * StepsSection - Modern, responsive steps section component
 * Desktop: 2 columns (steps left, visual right)
 * Mobile: 1 column (steps stacked, visual smaller)
 */
function StepsSection({ title = "Zo werkt het", steps }: StepsSectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Section Title */}
        {title && (
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 leading-[1.15]">
                {title}
              </h2>
            </div>
          </Reveal>
        )}

        {/* Steps Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.1 * (index + 1)}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Step Content - Left on even, right on odd (desktop) */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2 lg:order-2" : "lg:order-1"} relative`}>
                  {/* Progress Line (Desktop only) */}
                  {index > 0 && (
                    <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-blue-200 to-transparent" />
                  )}

                  {/* Step Card */}
                  <div className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-5">
                      {/* Step Number Badge - Small and clean */}
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Feature Chips */}
                        {step.chips && step.chips.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {step.chips.map((chip, chipIndex) => (
                              <span
                                key={chipIndex}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs sm:text-sm font-medium border border-blue-100"
                              >
                                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual/Diagram - Right on even, left on odd (desktop) */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1 lg:order-1" : "lg:order-2"} flex justify-center lg:justify-start`}
                >
                  {/* Visual Card - Constrained sizing */}
                  <div className="w-full max-w-[560px] lg:max-w-none lg:w-full">
                    {/* Remove extra wrapper on mobile - visual already has its own card */}
                    <div className="w-full h-full">
                      {step.visual}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(StepsSection);
