import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import HeroTicketDashboardDemo from "./HeroTicketDashboardDemo";

export default function HeroProductScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Hero Background */}
      <AnimatedHeroBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-20 sm:pb-24 md:pb-32 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 h-full items-center">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                CUSMATO
              </span>
            </div>

            {/* Headline - Calm, premium */}
            <h1 className="text-4xl sm:text-[40px] md:text-[44px] lg:text-[52px] font-semibold text-slate-900 leading-[1.05] tracking-[-0.01em] mb-4 sm:mb-6">
              Automatiseer klantantwoorden
              <br />
              met <span className="text-blue-600">Cusmato</span>
            </h1>

            {/* Subtext - Calm, muted */}
            <p className="text-base sm:text-[15px] md:text-[16px] lg:text-[17px] text-slate-500 max-w-[28rem] sm:max-w-[560px] mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Cusmato automatiseert e-mail- en chatvragen voor e-commerce — 24/7, in jouw tone of voice, met controle wanneer je het wil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileTap={shouldReduceMotion ? {} : { 
                  y: 0,
                  scale: 0.98,
                  transition: { duration: 0.15 }
                }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  Probeer 14 dagen gratis
                </Link>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileTap={shouldReduceMotion ? {} : { 
                  y: 0,
                  scale: 0.98,
                  transition: { duration: 0.15 }
                }}
              >
                <a
                  href="https://www.cusmato.app/welkom"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:shadow-md transition-all duration-300"
                >
                  Start onboarding
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Ticket Dashboard Demo */}
          <motion.div
            className="hidden lg:flex items-center justify-center h-full"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroTicketDashboardDemo />
          </motion.div>

          {/* Mobile Ticket Dashboard Demo */}
          <motion.div
            className="lg:hidden mt-12 col-span-2 scale-[0.95] sm:scale-100 origin-top"
            initial={{ opacity: 0, y: 20, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroTicketDashboardDemo />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
