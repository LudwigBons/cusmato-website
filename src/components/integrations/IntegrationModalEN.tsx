import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Integration } from "../../data/integrationsEN";
import { ROUTES } from "../../lib/constants";

// Helper function to convert Dutch routes to English routes
const toEnglishUrl = (path: string): string => {
  if (path.startsWith("/en/")) {
    return path; // Already English
  }
  switch (path) {
    case ROUTES.tryFree: return "/en/try-14-days-for-free";
    default: return `/en${path}`;
  }
};

interface IntegrationModalProps {
  integration: Integration | null;
  onClose: () => void;
}

export default function IntegrationModalEN({ integration, onClose }: IntegrationModalProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!integration) return null;

  const statusConfig = {
    available: { label: "Available", color: "bg-green-50 text-green-700 border-green-200" },
    beta: { label: "Beta", color: "bg-blue-50 text-blue-700 border-blue-200" },
    coming_soon: { label: "Coming soon", color: "bg-slate-50 text-slate-600 border-slate-200" },
  };

  const status = statusConfig[integration.status];

  return (
    <AnimatePresence>
      {integration && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {integration.logo ? (
                      <img
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-400 font-semibold">
                          {integration.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{integration.name}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-slate-500">{integration.category}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    What can you automate?
                  </h3>
                  <ul className="space-y-2">
                    {integration.automationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {integration.requirements && integration.requirements.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {integration.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-slate-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200 mb-4">
                  <p className="text-sm text-slate-600 text-center">
                    100+ other integrations available on request.
                  </p>
                </div>

                <div className="flex gap-3">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1"
                  >
                    <Link
                      to={toEnglishUrl(ROUTES.tryFree)}
                      onClick={onClose}
                      className="block w-full text-center rounded-full px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Try 14 days for free
                    </Link>
                  </motion.div>
                  <button
                    onClick={onClose}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-full transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
