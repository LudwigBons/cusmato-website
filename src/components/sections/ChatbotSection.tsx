import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

function ChatbotSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 md:order-1">
            <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <img
                src="/cusmato-ai-chatbot-nederlands.webp"
                alt="Cusmato AI chatbot antwoordt automatisch op klantvragen"
                className="w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Automatisch antwoorden in chat
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Direct antwoord op chatvragen. Cusmato begrijpt context en geeft persoonlijke antwoorden in jouw tone of voice.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Direct antwoord op chatvragen",
                "Begrijpt context en intenties",
                "Antwoordt in jouw tone of voice",
                "Altijd beschikbaar 24/7",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Plan gratis gesprek
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ChatbotSection);