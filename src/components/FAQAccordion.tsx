import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  searchQuery?: string;
}

export default function FAQAccordion({ items, searchQuery = "" }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = searchQuery
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  const copyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    // Optional: show toast notification
  };

  return (
    <div className="space-y-4">
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-600">Geen resultaten gevonden.</p>
        </div>
      ) : (
        filteredItems.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <motion.div
              key={item.id}
              id={item.id}
              initial={false}
              className="bg-white rounded-xl border border-slate-200 hover:shadow-sm transition-shadow duration-200 group"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
              >
                <h3 className="text-base md:text-lg font-semibold text-slate-900 pr-8">
                  {item.question}
                </h3>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={(e) => copyLink(item.id, e)}
                    className="opacity-60 hover:opacity-100 p-1.5 rounded hover:bg-slate-100 transition-opacity"
                    aria-label="Kopieer link"
                    title="Kopieer link naar deze vraag"
                  >
                    <svg
                      className="w-4 h-4 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  >
                    <svg
                      className="w-5 h-5 text-slate-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                    animate={shouldReduceMotion ? {} : { height: "auto", opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                          {item.answer}
                        </p>
                        <a
                          href="/probeer-14-dagen-gratis"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                        >
                          Nog vragen?
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })
      )}
    </div>
  );
}
