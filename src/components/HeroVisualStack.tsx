import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense } from "react";

const HeroTicketOverlay = lazy(() => import("./HeroTicketOverlay"));

function HeroVisualStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
      {/* Visual Stack Container */}
      <div className="relative w-full max-w-[700px] mx-auto">
        
        {/* 1. ACHTERGROND - Grote afgeronde afbeelding links */}
        <motion.div
          className="relative w-full lg:w-[60%] aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.08)",
          }}
        >
          <img
            src="/Automatiseer je klantenservice.webp"
            alt="Customer support team met Cusmato"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20 pointer-events-none" />
        </motion.div>

        {/* 2. BLOKKEN - Drie lichtblauwe/witte kaarten OVER de afbeelding, rechts */}
        <div className="absolute top-0 right-0 lg:right-[-8%] w-[45%] lg:w-[50%] space-y-4 pointer-events-none">
          
          {/* BLOK A - Boven, klein */}
          <motion.div
            className="relative z-10 bg-white/98 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                INCOMING EMAIL
              </span>
            </div>

            {/* Inhoud */}
            <div className="space-y-1.5">
              <div className="text-xs text-slate-700">
                <span className="font-medium">From:</span>{" "}
                <span className="text-slate-600">klant@example.com</span>
              </div>
              <div className="text-xs text-slate-700">
                <span className="font-medium">Subject:</span>{" "}
                <span className="text-slate-600">Waar blijft mijn bestelling?</span>
              </div>
            </div>
          </motion.div>

          {/* BLOK B - Midden, middelgroot (belangrijkste) */}
          <motion.div
            className="relative z-20 bg-white/98 backdrop-blur-sm rounded-2xl p-5 border shadow-xl"
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            {/* Header met titel en status pill */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/60">
              <h3 className="text-sm font-semibold text-slate-900">Nieuw ticket</h3>
              <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
                Auto
              </span>
            </div>

            {/* Kanaal, Platform, Status */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                E-mail
              </span>
              <span>•</span>
              <span>Shopify</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                Normaal
              </span>
            </div>

            {/* Workflow stappen */}
            <div className="space-y-2 mb-4 pb-4 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Cusmato classificeert: <span className="font-medium">'Levering'</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Antwoord voorgesteld <span className="text-slate-500">(0.8s)</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verzonden naar klant</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] font-semibold text-white">T</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] font-semibold text-slate-600">C</span>
                </div>
              </div>
              <span>
                <span className="font-medium">Team</span> + <span className="font-medium text-blue-600">Cusmato AI</span>
              </span>
            </div>
          </motion.div>

          {/* BLOK C - Onder, groot maar rustig */}
          <motion.div
            className="relative z-10 bg-white/98 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            {/* Checklist */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Prepared reply</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Sent via email</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="lg:hidden relative w-full space-y-6">
        {/* Image first */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src="/Automatiseer je klantenservice.webp"
            alt="Customer support team met Cusmato"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Blocks stacked */}
        <div className="space-y-4">
          {/* Blok A */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                INCOMING EMAIL
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs text-slate-700">
                <span className="font-medium">From:</span>{" "}
                <span className="text-slate-600">klant@example.com</span>
              </div>
              <div className="text-xs text-slate-700">
                <span className="font-medium">Subject:</span>{" "}
                <span className="text-slate-600">Waar blijft mijn bestelling?</span>
              </div>
            </div>
          </motion.div>

          {/* Blok B */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-2xl p-5 border shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/60">
              <h3 className="text-sm font-semibold text-slate-900">Nieuw ticket</h3>
              <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-semibold">
                Auto
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-slate-600">
              <span>E-mail</span>
              <span>•</span>
              <span>Shopify</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">Normaal</span>
            </div>
            <div className="space-y-2 mb-4 pb-4 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Cusmato classificeert: <span className="font-medium">'Levering'</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Antwoord voorgesteld <span className="text-slate-500">(0.8s)</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verzonden naar klant</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span>
                <span className="font-medium">Team</span> + <span className="font-medium text-blue-600">Cusmato AI</span>
              </span>
            </div>
          </motion.div>

          {/* Blok C */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.18)",
              boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.18)",
            }}
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Prepared reply</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Sent via email</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroVisualStack);
