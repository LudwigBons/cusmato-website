import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function HeroTicketOverlay() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[360px] sm:max-w-[400px]"
    >
      {/* Subtle blue glow behind card */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.5, 0.7, 0.5],
                transition: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }
        }
        className="absolute -inset-2 bg-blue-400/20 rounded-2xl blur-xl -z-10"
      />
      
      {/* Ticket Card */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -6, 0],
                transition: {
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }
        }
        whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -8 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-5 sm:p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-slate-700">Nieuw ticket</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            Auto
          </span>
        </div>

        {/* Subject */}
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
          Waar blijft mijn bestelling?
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            E-mail
          </span>
          <span>•</span>
          <span>Shopify</span>
          <span className="ml-auto px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs">
            Normaal
          </span>
        </div>

        {/* Timeline */}
        <div className="space-y-2.5 mb-4 pb-4 border-b border-slate-200/60">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="flex items-center gap-2 text-xs text-slate-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Cusmato classificeert: 'Levering'</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="flex items-center gap-2 text-xs text-slate-600"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Antwoord voorgesteld (0.8s)</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.6 }}
            className="flex items-center gap-2 text-xs text-green-600 font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Verzonden naar klant</span>
          </motion.div>
        </div>

        {/* Avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
              <span className="text-[10px] font-semibold text-white">C</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center">
              <span className="text-[10px] font-semibold text-slate-600">T</span>
            </div>
          </div>
          <div className="flex-1 text-xs text-slate-600">
            <span className="font-medium">Team</span>
            <span className="mx-1">+</span>
            <span className="font-medium text-blue-600">Cusmato AI</span>
          </div>
          <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(HeroTicketOverlay);
