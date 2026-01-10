import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function UniversalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-[1.05]">
              Klaar om klantantwoorden te automatiseren?
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-[28rem] sm:max-w-prose mx-auto">
              Plan een gratis kennismakingsgesprek en ontdek hoe Cusmato jouw support automatiseert.
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
                  Plan gratis gesprek
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