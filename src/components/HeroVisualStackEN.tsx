import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense } from "react";

const HeroTicketOverlay = lazy(() => import("./HeroTicketOverlay"));

function HeroVisualStackEN() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center px-4 sm:px-6 lg:px-0">
      {/* DESKTOP: Visual Stack Container (hidden on mobile) */}
      <div className="hidden lg:block relative w-full max-w-[700px] mx-auto">
        
        {/* 1. ACHTERGROND - Grote afgeronde afbeelding links */}
        <motion.div
          className="relative w-full lg:w-[60%] aspect-[3/4] rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(59, 130, 246, 0.08)",
          }}
        >
          <img
            src="/Automatiseer je klantenservice.webp"
            alt="Customer support team with Cusmato"
            width="1200"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20 pointer-events-none" />
        </motion.div>

        {/* 2. BLOKKEN - Drie lichtblauwe/witte kaarten OVER de afbeelding, rechts (hidden on mobile, visible on desktop) */}
        <div className="hidden lg:block absolute top-0 right-0 lg:right-[-8%] w-[45%] lg:w-[50%] space-y-4 pointer-events-none max-w-[350px]">
          
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
                <span className="text-slate-600">customer@example.com</span>
              </div>
              <div className="text-xs text-slate-700">
                <span className="font-medium">Subject:</span>{" "}
                <span className="text-slate-600">Where is my order?</span>
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
              <h3 className="text-sm font-semibold text-slate-900">New ticket</h3>
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
                Email
              </span>
              <span>•</span>
              <span>Shopify</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                Normal
              </span>
            </div>

            {/* Workflow stappen */}
            <div className="space-y-2 mb-4 pb-4 border-b border-slate-200/60">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Cusmato classifies: <span className="font-medium">'Delivery'</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Reply suggested <span className="text-slate-500">(0.8s)</span></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sent to customer</span>
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

      {/* MOBILE: Compact stacked layout */}
      <div className="lg:hidden relative w-full max-w-[400px] mx-auto space-y-3">
        {/* 1. Hero Image - Single image only */}
        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-slate-200 shadow-none md:shadow-lg">
          <img
            src="/Automatiseer je klantenservice.webp"
            alt="Customer support team with Cusmato"
            width="1200"
            height="900"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* 2. Compact flow cards */}
        <div className="space-y-2.5">
          {/* Step 1: Incoming Email (compact) */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-lg p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.12)",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[9px] font-semibold text-blue-600 uppercase tracking-wider">Step 1</span>
            </div>
            <div className="text-[11px] text-slate-700 truncate">
              <span className="font-medium">From:</span>{" "}
              <span className="text-slate-600 truncate">customer@example.com</span>
            </div>
            <div className="text-[11px] text-slate-700 truncate mt-1">
              <span className="font-medium">Subject:</span>{" "}
              <span className="text-slate-600 truncate">Where is my order?</span>
            </div>
          </motion.div>

          {/* Step 2: Ticket Created (compact) */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-lg p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.12)",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[9px] font-semibold text-blue-600 uppercase tracking-wider">Step 2</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] font-semibold">Auto</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-600">
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">Shopify</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">Email</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">Normal</span>
            </div>
            <div className="mt-2 text-[10px] text-slate-600">
              Classification: <span className="font-medium text-slate-700">Delivery</span> • 0.8s
            </div>
          </motion.div>

          {/* Step 3: Reply Sent (compact) */}
          <motion.div
            className="bg-white/98 backdrop-blur-sm rounded-lg p-3 border shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              borderColor: "rgba(59, 130, 246, 0.12)",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.08)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[9px] font-semibold text-green-600 uppercase tracking-wider">Step 3</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[10px] text-slate-700">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-1.5 h-1.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Prepared reply</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-700">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-1.5 h-1.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default memo(HeroVisualStackEN);
