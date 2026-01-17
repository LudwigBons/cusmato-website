import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function SupportInboxAnimationMobile() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, [shouldReduceMotion]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Email Incoming Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
          style={{
            borderColor: "rgba(59, 130, 246, 0.14)",
            boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.14)",
          }}
        >
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Incoming email</span>
          </div>
          <div className="space-y-2 mb-3">
            <div className="text-xs text-slate-600">
              <span className="font-medium text-slate-700">From:</span> klant@example.com
            </div>
            <div className="text-xs text-slate-600">
              <span className="font-medium text-slate-700">Subject:</span> Waar blijft mijn bestelling?
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Email", "Shopify", "Normal"].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Draft + Send Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full"
      >
        <div
          className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border shadow-lg"
          style={{
            borderColor: "rgba(59, 130, 246, 0.14)",
            boxShadow: "0 10px 25px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.14)",
          }}
        >
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Cusmato AI draft</span>
          </div>
          <div className="space-y-2.5">
            {[
              { text: "Classified: Levering", done: true },
              { text: "Template selected: Track & Trace", done: true },
              { text: "Prepared reply", done: progress === 100, showProgress: true },
              { text: "Sent via email", done: progress === 100 },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {step.done ? (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {step.text}
                    {step.showProgress && progress < 100 && ` (${progress}%)`}
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
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default memo(SupportInboxAnimationMobile);
