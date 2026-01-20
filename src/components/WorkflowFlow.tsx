import { ReactNode } from "react";

interface FlowStep {
  label: string;
  description: string;
}

interface WorkflowFlowProps {
  steps: FlowStep[];
}

/**
 * WorkflowFlow - Horizontal flow visualization for workflow steps
 * Ticket → Classificatie → Regel → Actie → Controle
 */
export default function WorkflowFlow({ steps }: WorkflowFlowProps) {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal flow */}
      <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="contents">
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-base font-semibold">{index + 1}</span>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="text-center max-w-[160px]">
                <div className="text-base font-semibold text-white mb-2">{step.label}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{step.description}</div>
              </div>
            </div>

            {/* Arrow - Hidden on last item */}
            {index < steps.length - 1 && (
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical stack */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Step Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-400/40 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">{index + 1}</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 pt-2">
              <div className="text-base font-semibold text-white mb-1">{step.label}</div>
              <div className="text-sm text-slate-400 leading-relaxed">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
