import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function SupportInboxAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [showTyping, setShowTyping] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      return;
    }

    // Typing indicator
    const typingTimer = setTimeout(() => setShowTyping(true), 2000);
    // Progress bar for "Prepared reply"
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(progressInterval);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* 1) Email Incoming Card - Top-left */}
      <motion.div
        className="absolute top-[8%] left-[-8%] md:left-[-12%] z-10 w-[240px] sm:w-[260px]"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.3 } }}
      >
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
          style={{
            borderColor: "rgba(59, 130, 246, 0.14)",
            boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.14)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Incoming email</span>
          </div>

          {/* Email Meta */}
          <div className="space-y-2 mb-3">
            <div className="text-xs text-slate-600">
              <span className="font-medium text-slate-700">From:</span> klant@example.com
            </div>
            <div className="text-xs text-slate-600">
              <span className="font-medium text-slate-700">Subject:</span> Waar blijft mijn bestelling?
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {["Email", "Shopify", "Normal"].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
              >
                {idx === 0 && (
                  <svg className="w-2.5 h-2.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                )}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 2) Draft + Send Card - Bottom-right */}
      <motion.div
        className="absolute bottom-[-8%] right-[-8%] md:right-[-12%] z-10 w-[240px] sm:w-[260px]"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={shouldReduceMotion ? {} : { y: 6, transition: { duration: 0.3 } }}
      >
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
          style={{
            borderColor: "rgba(59, 130, 246, 0.14)",
            boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.14)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Cusmato AI draft</span>
          </div>

          {/* Steps */}
          <div className="space-y-2.5">
            {[
              { text: "Classified: Levering", done: true },
              { text: "Template selected: Track & Trace", done: true },
              { text: "Prepared reply", done: progress === 100, showProgress: true },
              { text: "Sent via email", done: progress === 100 },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + idx * 0.15 }}
                className="flex items-start gap-2"
              >
                {step.done ? (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    {showTyping && step.showProgress ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    )}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {step.text}
                    {step.showProgress && progress < 100 && (
                      <span className="inline-block ml-1">
                        <motion.span
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          ({progress}%)
                        </motion.span>
                      </span>
                    )}
                  </p>
                  {step.showProgress && progress < 100 && (
                    <div className="mt-1.5 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3) Follow-up Status Mini Bubble - Optional, super klein */}
      <motion.div
        className="absolute top-[45%] right-[-6%] md:right-[-10%] z-10 w-[140px] sm:w-[160px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
      >
        <div
          className="bg-green-50/95 backdrop-blur-sm rounded-lg p-3 border shadow-md"
          style={{
            borderColor: "rgba(34, 197, 94, 0.2)",
            boxShadow: "0 4px 12px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(34, 197, 94, 0.2)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-medium text-green-700">
              Status: Delivered ✓
            </span>
          </div>
          <p className="text-[10px] text-green-600 mt-1">
            Added to customer profile
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(SupportInboxAnimation);
