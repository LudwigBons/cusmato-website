import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * BottomMobileCTAEN - English version of mobile CTA
 * Matches AI-helpdesk page CTA exactly
 */
export default function BottomMobileCTAEN() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="md:hidden relative py-12 overflow-hidden">
      {/* Background image - exact same as GlobalCTA */}
      <div className="absolute inset-0">
        <img
          src="/Onderkant footer.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        {/* Overlay gradient for text readability - exact same */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30" />
      </div>
      
      {/* Fade-out to white at bottom - exact same */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      
      {/* Content - exact same structure */}
      <div className="max-w-4xl mx-auto sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 leading-[1.05] tracking-[-0.01em]">
              Ready to automate customer responses?
            </h2>
            <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-[28rem] mx-auto">
              Schedule an introduction & try 14 days for free
            </p>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center w-full max-w-[280px] h-11 py-3 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Try 14 days for free
                </Link>
              </motion.div>
              <motion.a
                href="https://www.cusmato.app/welkom"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center w-full max-w-[240px] h-10 py-2.5 px-5 rounded-full border border-slate-300 text-slate-700 bg-white font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
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
