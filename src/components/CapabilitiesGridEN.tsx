// CapabilitiesGridEN.tsx - English version of capabilities grid

import { motion } from "framer-motion";
import { memo } from "react";

const CAPABILITIES = [
  {
    title: "AI ticket automation",
    description: "Automatically answer and send customer inquiries, 24/7.",
    icon: "ai-automation",
  },
  {
    title: "Orders & returns",
    description: "Automatically answer questions about order status and return processes.",
    icon: "orders",
  },
  {
    title: "Shipping & tracking",
    description: "Retrieve real-time tracking information and pass it on to customers.",
    icon: "shipping",
  },
  {
    title: "Invoices",
    description: "Answer invoice questions and look up payment status.",
    icon: "invoices",
  },
  {
    title: "Product information",
    description: "Automatically share product details, inventory status and specifications.",
    icon: "products",
  },
  {
    title: "Customer data context",
    description: "Use customer data, order history and preferences for personalized answers.",
    icon: "customer-data",
  },
  {
    title: "Account & login",
    description: "Reset passwords, verify accounts and resolve access issues.",
    icon: "account",
  },
];

function Icon({ icon, isHighlighted = false }: { icon: string; isHighlighted?: boolean }) {
  const iconProps = { className: `w-5 h-5 ${isHighlighted ? "text-blue-600" : "text-slate-600"}` };
  
  if (icon === "orders") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    );
  }
  if (icon === "shipping") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    );
  }
  if (icon === "invoices") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (icon === "products") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    );
  }
  if (icon === "account") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    );
  }
  if (icon === "customer-data") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  }
  if (icon === "ai-automation") {
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  return null;
}

function CapabilitiesGridEN() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-5 px-3 sm:px-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              <span className="sm:hidden">What we automate</span>
              <span className="hidden sm:inline">What Cusmato automates</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[28rem] sm:max-w-xl mx-auto sm:mx-0">
              Cusmato focuses on repetitive customer inquiries you receive daily via email and chat.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CAPABILITIES.map((capability, idx) => {
            // On mobile (<640px): only show AI ticket automation, Orders & returns, and Shipping & tracking (in that order)
            const mobileVisibleCards = [
              "AI ticket automation",
              "Orders & returns",
              "Shipping & tracking"
            ];
            const isVisibleOnMobile = mobileVisibleCards.includes(capability.title);
            
            // Hide "Account & login" on desktop/tablet (>=sm)
            const isHiddenOnDesktop = capability.title === "Account & login";
            
            // Check if this is the highlighted "AI ticket automation" card
            const isHighlighted = capability.title === "AI ticket automation";
            
            return (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className={`relative rounded-2xl border ${
                isHighlighted ? "border-blue-200" : "border-slate-200"
              } ${
                isHighlighted ? "bg-blue-50/40" : "bg-white"
              } p-5 sm:p-6 lg:p-8 transition-all duration-200 ease-out focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
                !isVisibleOnMobile ? "hidden sm:block" : ""
              } ${
                isHiddenOnDesktop ? "sm:hidden" : ""
              } ${
                isHighlighted
                  ? "shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_8px_24px_-8px_rgba(59,130,246,0.35)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_8px_24px_-6px_rgba(59,130,246,0.4)]"
                  : ""
              }`}
            >
              {/* Hover glow effect (only for non-highlighted cards) */}
              {!isHighlighted && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-400/5 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
              )}
              
              {/* Content */}
              <div className="relative px-2.5 sm:px-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl border ${
                    isHighlighted ? "bg-blue-100 border-blue-200" : "bg-slate-50 border-slate-200"
                  } flex items-center justify-center flex-shrink-0`}>
                    <Icon icon={capability.icon} isHighlighted={isHighlighted} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{capability.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover border and shadow (only for non-highlighted cards) */}
              {!isHighlighted && (
                <div className="absolute inset-0 rounded-2xl border border-blue-300/60 shadow-md opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
              )}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(CapabilitiesGridEN);
