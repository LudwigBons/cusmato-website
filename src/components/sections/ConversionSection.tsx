import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";

export default function ConversionSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Klaar om klantantwoorden te automatiseren?
            </h2>
            
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <motion.a
                href="/probeer-14-dagen-gratis"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
              >
                14 dagen gratis proberen
              </motion.a>
              <motion.a
                href="https://www.cusmato.app/welkom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:shadow-sm"
              >
                Start onboarding
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}