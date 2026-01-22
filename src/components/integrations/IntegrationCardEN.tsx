import { motion, useReducedMotion } from "framer-motion";
import { Integration } from "../../data/integrationsEN";

interface IntegrationCardProps {
  integration: Integration;
  onDetailsClick: (integration: Integration) => void;
}

export default function IntegrationCardEN({ integration, onDetailsClick }: IntegrationCardProps) {
  const shouldReduceMotion = useReducedMotion();
  
  const statusConfig = {
    available: { label: "Available", color: "bg-green-50 text-green-700 border-green-200" },
    beta: { label: "Beta", color: "bg-blue-50 text-blue-700 border-blue-200" },
    coming_soon: { label: "Coming soon", color: "bg-slate-50 text-slate-600 border-slate-200" },
  };

  const status = statusConfig[integration.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="relative bg-white rounded-xl border border-slate-200 p-6 transition-all duration-200 ease-out focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
      
      {/* Content */}
      <div className="relative px-2.5 sm:px-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {integration.logo ? (
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="w-10 h-10 object-contain opacity-90 flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <span className="text-slate-400 font-semibold text-sm">
                  {integration.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-slate-900 truncate">{integration.name}</h3>
              <span className="text-xs font-medium text-slate-500">{integration.category}</span>
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${status.color} flex-shrink-0`}>
            {status.label}
          </span>
        </div>

        <p className="text-sm text-slate-600 mb-5 leading-relaxed line-clamp-2">
          {integration.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => onDetailsClick(integration)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
          >
            View details
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Hover border and shadow */}
      <div className="absolute inset-0 rounded-xl border border-blue-300/60 shadow-md opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
    </motion.div>
  );
}
