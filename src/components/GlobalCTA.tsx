import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function GlobalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-12 sm:py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/Onderkant footer.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30" />
      </div>
      
      {/* Fade-out to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      
      {/* Content */}
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