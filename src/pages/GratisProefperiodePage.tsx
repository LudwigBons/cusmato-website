import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import UniversalCTA from "../components/UniversalCTA";
import CalendlyInline from "../components/CalendlyInline";

export default function GratisProefperiodePage() {

  const features = [
    "Automatisch antwoorden via e-mail & chat",
    "Volledig in jouw tone of voice",
    "Controle & goedkeuring mogelijk",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          {/* Hero */}
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                <span className="sm:hidden">Automatiseer klantantwoorden</span>
                <span className="hidden sm:inline">Start met het automatiseren van klantantwoorden</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Plan een korte kennismaking en ontdek hoe Cusmato klantvragen automatisch afhandelt via AI.
              </p>
              
              <ul className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Calendly Section */}
          <Reveal>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Plan een kennismakingsgesprek
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto">
                  In 15 minuten laten we zien hoe Cusmato werkt voor jouw organisatie.
                </p>
              </div>

              {/* Calendly Widget Container */}
              <CalendlyInline />
            </div>
          </Reveal>
        </div>
      </main>

      <UniversalCTA />
    </div>
  );
}