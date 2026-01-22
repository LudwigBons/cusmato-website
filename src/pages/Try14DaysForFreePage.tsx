import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import BottomMobileCTA from "../components/BottomMobileCTA";
import CalendlyInlineWidget from "../components/CalendlyInlineWidget";

export default function Try14DaysForFreePage() {

  const benefits = [
    "Automatic responses via email & chat",
    "Fully in your tone of voice",
    "Control & approval possible",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                <span className="sm:hidden">14 days for free</span>
                <span className="hidden sm:inline">Try 14 days for free</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Schedule a brief introduction and discover how Cusmato automatically handles customer questions via AI.
              </p>
              
              {/* Benefits */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Calendly Card Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 lg:p-10 mb-16 overflow-hidden">
            <Reveal>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Schedule an introduction call
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto">
                  In 15 minutes we'll show you how Cusmato works for your organization.
                </p>
              </div>
            </Reveal>

            {/* Calendly Widget Container - No Reveal to prevent re-renders */}
            <CalendlyInlineWidget url="https://calendly.com/cusmato-ai/30min" />
          </div>
        </div>
      </main>

      <GlobalCTA />
      <BottomMobileCTA />
    </div>
  );
}
