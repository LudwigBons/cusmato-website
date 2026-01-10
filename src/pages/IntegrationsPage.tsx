import { useState, useMemo } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { integrations, categories, Integration, IntegrationCategory } from "../data/integrations";
import IntegrationCard from "../components/integrations/IntegrationCard";
import IntegrationModal from "../components/integrations/IntegrationModal";
import GlobalCTA from "../components/GlobalCTA";
import Reveal from "../components/Reveal";

type SortOption = "name" | "category" | "status";

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory | "All">("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredAndSortedIntegrations = useMemo(() => {
    let filtered = integrations.filter((integration) => {
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
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                Integraties
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Verbind je tools en automatiseer klantantwoorden via e-mail en chat.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100+ andere integraties beschikbaar op aanvraag
              </p>
            </div>
          </Reveal>

          {/* Intro text above grid */}
          <Reveal>
            <p className="text-xs sm:text-sm text-slate-600 text-center mb-6 max-w-2xl mx-auto">
              Alle integraties zijn gericht op het automatisch beantwoorden van klantvragen — zonder handmatig werk.
            </p>
          </Reveal>

          {/* Sticky Filter Bar */}
          <div className="sticky top-[64px] z-40 bg-white/98 border-b border-slate-200/80 py-3 mb-6 sm:mb-8 -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8">
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
                    placeholder="Zoek integraties..."
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
                  Alle
                </button>
                {categories.map((category) => (
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
                  <label className="text-xs text-slate-500">Sorteer:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-2.5 py-1.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 bg-white"
                  >
                    <option value="name">Naam</option>
                    <option value="category">Categorie</option>
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
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center rounded-full h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-150"
                >
                  Probeer 14 dagen gratis
                </Link>
              </motion.div>
              <p className="text-xs text-slate-500 mt-3">
                Koppelingen regelen we in een korte kennismaking.
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
                <IntegrationCard
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
                Geen integraties gevonden voor "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Wis filters
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <Reveal>
            <div className="text-center bg-slate-50 rounded-xl p-6 sm:p-8 md:p-12 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Mis je een integratie?
              </h2>
              <p className="text-sm text-slate-600 mb-1">
                100+ andere integraties beschikbaar op aanvraag.
              </p>
              <p className="text-xs text-slate-500 mb-6">
                Neem contact op en we helpen je met de integratie die je nodig hebt.
              </p>
              <motion.a
                href="mailto:support@cusmato.app?subject=Integratie aanvraag"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Integratie aanvragen
              </motion.a>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Global CTA */}
      <GlobalCTA />

      {/* Modal */}
      <IntegrationModal
        integration={selectedIntegration}
        onClose={() => setSelectedIntegration(null)}
      />
    </div>
  );
}