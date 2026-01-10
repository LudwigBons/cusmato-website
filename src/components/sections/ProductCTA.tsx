import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";

export default function ProductCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/50 via-white to-white">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <motion.div
            className="bg-white rounded-2xl border border-slate-200/60 shadow-xl p-8 md:p-12 text-center"
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.01,
              boxShadow: "0 20px 60px -12px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-slate-900 mb-4 leading-[1.12] tracking-[-0.01em]">
              Start 14 dagen gratis
            </h2>
            
            <ul className="flex flex-col items-center gap-3 mb-8 text-sm sm:text-[15px] text-slate-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Automatische antwoorden voor e-commerce klantvragen
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Volledige controle en aanpasbare tone of voice
              </li>
            </ul>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { 
                y: -2,
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-5 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base font-semibold bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              >
                Probeer 14 dagen gratis
              </Link>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
