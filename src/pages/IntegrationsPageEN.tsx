import { useState, useMemo, lazy, Suspense } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { integrationsEN, categoriesEN, Integration, IntegrationCategory } from "../data/integrationsEN";
import IntegrationCardEN from "../components/integrations/IntegrationCardEN";
import IntegrationModalEN from "../components/integrations/IntegrationModalEN";
import Reveal from "../components/Reveal";
import SubpageHeroMinimal from "../components/SubpageHeroMinimal";
import PremiumImage from "../components/PremiumImage";
import WorkflowSteps from "../components/WorkflowSteps";
import { ROUTES } from "../lib/constants";

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

type SortOption = "name" | "category" | "status";

export default function IntegrationsPageEN() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory | "All">("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredAndSortedIntegrations = useMemo(() => {
    let filtered = integrationsEN.filter((integration) => {
      const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        case "status":
          const statusOrder = { available: 0, beta: 1, coming_soon: 2 };
          return statusOrder[a.status] - statusOrder[b.status];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Clean Text-Only Hero */}
      <SubpageHeroMinimal
        eyebrow=""
        title="Integrations"
        description="Connect your tools and automate customer responses via email and chat. Connect Shopify, Zendesk, Gmail, Outlook and dozens of other tools in minutes."
        primaryCTA={{
          text: "Try 14 days for free",
          href: toEnglishUrl(ROUTES.tryFree),
        }}
      />

      <main className="pt-0 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Info Badge */}
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm text-slate-500 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100+ other integrations available on request
              </p>
            </div>
          </Reveal>

          {/* Intro text above grid */}
          <Reveal>
            <p className="text-xs sm:text-sm text-slate-600 text-center mb-6 max-w-2xl mx-auto">
              All integrations are focused on automatically answering customer questions, without manual work.
            </p>
          </Reveal>

          {/* Sticky Filter Bar */}
          <div className="sticky top-[64px] z-40 bg-white/98 border-b border-slate-200/80 py-3 mb-6 sm:mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Search */}
              <div className="flex-1 w-full sm:max-w-sm">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-1.5 justify-start sm:justify-end">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  All
                </button>
                {categoriesEN.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort & Counter */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs text-slate-500">Sort:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-2.5 py-1.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 bg-white"
                  >
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="status">Status</option>
                  </select>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {filteredAndSortedIntegrations.length}
                </div>
              </div>
            </div>
          </div>

          {/* Central CTA above grid */}
          <Reveal>
            <div className="text-center mb-10">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to={toEnglishUrl(ROUTES.tryFree)}
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-150"
                >
                  Try 14 days for free
                </Link>
              </motion.div>
              <p className="text-xs text-slate-500 mt-3">
                We'll set up connections during a brief introduction.
              </p>
            </div>
          </Reveal>

          {/* Integrations Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${searchQuery}-${selectedCategory}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12"
            >
              {filteredAndSortedIntegrations.map((integration) => (
                <IntegrationCardEN
                  key={integration.id}
                  integration={integration}
                  onDetailsClick={setSelectedIntegration}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredAndSortedIntegrations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-sm sm:text-base text-slate-600 mb-4 leading-snug sm:leading-relaxed">
                No integrations found for "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <Reveal>
            <div className="text-center bg-slate-50 rounded-xl p-6 sm:p-8 md:p-12 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Missing an integration?
              </h2>
              <p className="text-sm text-slate-600 mb-1">
                100+ other integrations available on request.
              </p>
              <p className="text-xs text-slate-500 mb-6">
                Contact us and we'll help you with the integration you need.
              </p>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to="/en/try-14-days-for-free"
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  Request integration
                </Link>
              </motion.div>
            </div>
          </Reveal>

          {/* WorkflowSteps Section - How integrations work */}
          <section className="mt-16 sm:mt-20 lg:mt-24">
            <WorkflowSteps
              steps={[
                {
                  id: "connect",
                  title: "Connect your sources",
                  sentence: "Connect Shopify, bol.com, WooCommerce and email with Cusmato in minutes.",
                  chips: ["Shopify", "bol.com", "WooCommerce", "Email"],
                  visual: {
                    type: "connection",
                    sources: ["Shopify", "bol.com", "Gmail"],
                    target: "Cusmato Inbox",
                  },
                  logos: ["/logo-shopify.png", "/logo-gmail.png", "/Bol-logo-short.png"],
                },
                {
                  id: "centralize",
                  title: "Centralize customer profiles",
                  sentence: "Cusmato automatically collects contact details and order history in one profile.",
                  chips: ["Contact sync", "Order history", "Automatic"],
                  visual: {
                    type: "profile",
                  },
                  logos: ["/logo-shopify.png", "/logo-zendesk.png"],
                },
                {
                  id: "ticket",
                  title: "Automatic context",
                  sentence: "For each new ticket, Cusmato immediately adds relevant customer context.",
                  chips: ["Ticket context", "Customer history", "Auto add"],
                  visual: {
                    type: "ticket",
                  },
                  logos: ["/logo-zendesk.png", "/logo-gmail.png"],
                },
              ]}
              title="How the connection works"
              subtitle="In three steps, connect your tools and start automating."
            />
          </section>

          {/* Features Grid - Converted from long text */}
          <section className="mt-16 sm:mt-20 lg:mt-24">
            <Reveal>
              <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: "Quick setup",
                    description: "Connect in minutes via APIs and webhooks.",
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Real-time sync",
                    description: "Automatic synchronization of data and context.",
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ),
                  },
                  {
                    title: "No hassle",
                    description: "No migrations needed, start automating right away.",
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      {/* Global CTA - Desktop */}
      <section className="hidden md:block relative py-12 sm:py-20 md:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/Onderkant footer.webp"
            alt=""
            className="w-full h-full object-cover object-bottom"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30" />
        </div>
        
        {/* Fade-out to white at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-slate-900 mb-4 leading-[1.05] tracking-[-0.01em]">
                Ready to automate your customer support?
              </h2>
              <p className="text-base sm:text-[16px] md:text-[17px] text-slate-500 mb-8 leading-relaxed max-w-[28rem] sm:max-w-prose mx-auto">
                Schedule a demo and try Cusmato free for 14 days.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/en/try-14-days-for-free"
                    className="inline-flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto h-11 py-3 px-6 sm:h-10 sm:py-0 sm:px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
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
                  className="inline-flex items-center justify-center w-full max-w-[240px] sm:max-w-none sm:w-auto h-10 py-2.5 px-5 sm:py-0 sm:px-4 rounded-full border border-slate-300 text-slate-700 bg-white font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
                >
                  Start onboarding
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA - Mobile */}
      <section className="md:hidden relative py-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/Onderkant footer.webp"
            alt=""
            className="w-full h-full object-cover object-bottom"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30" />
        </div>
        
        {/* Fade-out to white at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="max-w-4xl mx-auto sm:px-6 relative z-10">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4 leading-[1.05] tracking-[-0.01em]">
                Ready to automate your customer support?
              </h2>
              <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-[28rem] mx-auto">
                Schedule a demo and try Cusmato free for 14 days.
              </p>

              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/en/try-14-days-for-free"
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

      {/* Modal */}
      <IntegrationModalEN
        integration={selectedIntegration}
        onClose={() => setSelectedIntegration(null)}
      />
    </div>
  );
}
