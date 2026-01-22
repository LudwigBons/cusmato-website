import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { getMegaMenuData, MegaMenuItem } from "./MegaMenu";

interface AccordionSection {
  title: string;
  items: MegaMenuItem[];
}

export default function MobileMegaMenu({ onLinkClick }: { onLinkClick: () => void }) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");
  const megaMenuData = getMegaMenuData();
  
  // Helper to get English route
  const getEnglishRoute = (route: string): string => {
    if (!isEnglish || route.startsWith("http") || route.startsWith("/en")) {
      return route;
    }
    if (route === "/") {
      return "/en";
    }
    return `/en${route}`;
  };

  // Mobile menu: product-first, conversion-focused
  // Filter out Privacy/Voorwaarden items on mobile
  const accordionSections: AccordionSection[] = [
    {
      title: "Product",
      items: [
        // AI Helpdesk (featured) - #1
        ...(megaMenuData.featured ? [megaMenuData.featured] : []),
        // Workflows - #2
        {
          label: isEnglish ? "Workflows & rules" : "Workflows & regels",
          href: getEnglishRoute("/workflows-regels"),
        },
        // Integraties - #3 (from navItems, not in megaMenuData sections)
        {
          label: isEnglish ? "Integrations" : "Integraties",
          href: getEnglishRoute("/integraties"),
        },
        // Knowledgebase - #4
        ...(megaMenuData.sections[2]?.items.filter((item) => item.href === "/knowledgebase" || item.href === "/en/knowledgebase") || []),
        // Klantdata - #5
        ...(megaMenuData.sections[2]?.items.filter((item) => item.href === "/klantdata" || item.href === "/en/klantdata") || []),
        // Teamchat - #6
        ...(megaMenuData.sections[2]?.items.filter((item) => item.href === "/teamchat" || item.href === "/en/teamchat") || []),
        // In-house AI - #7 (direct na Teamchat)
        {
          label: "In-house AI",
          href: getEnglishRoute("/in-house-ai"),
        },
      ],
    },
    {
      title: "Resources",
      items: [
        // Prijzen - from Resources section
        ...(megaMenuData.sections[3]?.items || []),
      ],
    },
  ];

  // Default: only "Product" open
  const [openSections, setOpenSections] = useState<string[]>(["Product"]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const LinkComponent = ({ item, className, children }: { item: MegaMenuItem; className?: string; children: React.ReactNode }) => {
    const isActive = location.pathname === item.href;
    
    if (item.external || item.href.startsWith("http")) {
      return (
        <a
          href={item.href}
          className={className}
          onClick={onLinkClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={item.href} className={className} onClick={onLinkClick}>
        {children}
      </Link>
    );
  };

  return (
    <div className="px-5 py-4 space-y-2">
      {accordionSections.map((section) => {
        const isOpen = openSections.includes(section.title);
        return (
          <div key={section.title} className="border-b border-slate-200 last:border-0">
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-1 -mx-1"
            >
              <span className="text-sm font-medium text-slate-900">{section.title}</span>
              <motion.svg
                className="w-4 h-4 text-slate-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-0.5 pb-3">
                    {section.items.map((item, itemIdx) => {
                      const isActive = location.pathname === item.href;
                      const isAIHelpdesk = item.href === "/ai-helpdesk" || (item.featured && item.href.includes("helpdesk"));
                      
                      return (
                        <li key={itemIdx}>
                          <LinkComponent item={item}>
                            <div
                              className={`flex items-center justify-between py-3 gap-2 rounded-lg px-3 -mx-3 transition-colors ${
                                isAIHelpdesk
                                  ? "bg-blue-50 text-blue-700"
                                  : isActive
                                  ? "bg-slate-50 text-slate-900"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              <div className="flex items-start gap-2 flex-1 min-w-0">
                                {/* AI Helpdesk indicator or Active indicator */}
                                {isAIHelpdesk ? (
                                  <div className="w-0.5 h-4 bg-blue-600 rounded-full flex-shrink-0 mt-1 -ml-1" />
                                ) : isActive && (
                                  <div className="w-0.5 h-4 bg-slate-400 rounded-full flex-shrink-0 mt-1 -ml-1" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className={`text-sm ${isAIHelpdesk ? "font-medium text-blue-700" : isActive ? "font-medium" : "font-normal"}`}>
                                    {item.label}
                                  </div>
                                  {item.description && (
                                    <div className="hidden sm:block text-xs text-slate-500 mt-0.5 line-clamp-1">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <svg
                                className={`w-3.5 h-3.5 flex-shrink-0 ${isAIHelpdesk ? "text-blue-500" : "text-slate-400"}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </LinkComponent>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
