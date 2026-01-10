import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function GlobalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-slate-900 mb-4 leading-[1.05] tracking-[-0.01em]">
              Klaar om klantantwoorden te automatiseren?
            </h2>
            <p className="text-base sm:text-[16px] md:text-[17px] text-slate-500 mb-8 leading-relaxed max-w-[28rem] sm:max-w-prose mx-auto">
              Plan een kennismaking & probeer 14 dagen gratis
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Probeer 14 dagen gratis
                </Link>
              </motion.div>
              <motion.a
                href="https://www.cusmato.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors"
              >
                Bekijk dashboard
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}