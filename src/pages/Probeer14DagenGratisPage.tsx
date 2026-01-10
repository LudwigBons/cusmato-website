import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import CalendlyInline from "../components/CalendlyInline";

export default function Probeer14DagenGratisPage() {

  const benefits = [
    "Automatisch antwoorden via e-mail & chat",
    "Volledig in jouw tone of voice",
    "Controle & goedkeuring mogelijk",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                <span className="sm:hidden">14 dagen gratis</span>
                <span className="hidden sm:inline">Probeer 14 dagen gratis</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Plan een korte kennismaking en ontdek hoe Cusmato klantvragen automatisch afhandelt via AI.
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
                  Plan een kennismakingsgesprek
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto">
                  In 15 minuten laten we zien hoe Cusmato werkt voor jouw organisatie.
                </p>
              </div>
            </Reveal>

            {/* Calendly Widget Container - No Reveal to prevent re-renders */}
            <CalendlyInline />
          </div>
        </div>
      </main>

      <GlobalCTA />
    </div>
  );
}