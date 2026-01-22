import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { NAVIGATION } from "../lib/constants";

export interface MegaMenuSection {
  title?: string;
  items: MegaMenuItem[];
}

export interface MegaMenuItem {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  icon?: React.ReactNode;
}

export interface MegaMenuConfig {
  featured?: MegaMenuItem;
  sections: MegaMenuSection[];
  imageCard?: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    ctaExternal?: boolean;
  };
}

// Export menu data from constants (default Dutch)
export const megaMenuData: MegaMenuConfig = NAVIGATION.megaMenu;

// Helper to convert route to English version if on English page
const getEnglishRoute = (route: string, isEnglish: boolean): string => {
  if (!isEnglish || route.startsWith("http") || route.startsWith("/en")) {
    return route;
  }
  // Convert to /en/ route
  if (route === "/") {
    return "/en";
  }
  return `/en${route}`;
};

// Helper to get language-aware menu data with English routes
export const getMegaMenuData = (): MegaMenuConfig => {
  if (typeof window !== "undefined") {
    const isEnglish = window.location.pathname === "/en" || window.location.pathname.startsWith("/en/");
    const baseConfig = isEnglish ? NAVIGATION.megaMenuEN : NAVIGATION.megaMenu;
    
    // If English, convert all hrefs to /en/ routes
    if (isEnglish) {
      return {
        ...baseConfig,
        featured: baseConfig.featured ? {
          ...baseConfig.featured,
          href: getEnglishRoute(baseConfig.featured.href, isEnglish),
        } : undefined,
        sections: baseConfig.sections.map(section => ({
          ...section,
          items: section.items.map(item => ({
            ...item,
            href: getEnglishRoute(item.href, isEnglish),
          })),
        })),
        imageCard: baseConfig.imageCard ? {
          ...baseConfig.imageCard,
          ctaHref: baseConfig.imageCard.ctaExternal 
            ? baseConfig.imageCard.ctaHref 
            : getEnglishRoute(baseConfig.imageCard.ctaHref, isEnglish),
        } : undefined,
      };
    }
    
    return baseConfig;
  }
  return NAVIGATION.megaMenu;
};

interface MegaMenuProps {
  config: MegaMenuConfig;
  onLinkClick: () => void;
  isMobile?: boolean;
}

export default function MegaMenu({ config, onLinkClick, isMobile = false }: MegaMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  const LinkComponent = ({ item, className, children }: { item: MegaMenuItem; className?: string; children: React.ReactNode }) => {
    if (item.external || item.href.startsWith("http")) {
      return (
        <a href={item.href} className={className} onClick={onLinkClick} target="_blank" rel="noopener noreferrer">
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
    <div className={`w-full ${isMobile ? "px-5 py-6" : ""}`}>
      <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,380px)] items-start gap-8 lg:gap-10 xl:gap-14"}`}>
        {/* Featured Card */}
        {config.featured && (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { 
              y: isMobile ? 0 : -2,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
            }}
            className={`${config.featured.featured ? "bg-blue-50/30 rounded-xl p-6 sm:p-7 border border-blue-100/40 shadow-sm" : ""}`}
          >
            <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5">
              HELPDESK
            </h3>
            <h2 className={`${isMobile ? "text-lg" : "text-xl"} font-semibold text-slate-900 mb-2`}>
              {config.featured.label}
            </h2>
            {config.featured.description && (
              <p className={`text-sm text-slate-600 leading-relaxed mb-6 ${isMobile ? "mb-6" : "mb-7"}`}>
                {config.featured.description}
              </p>
            )}
            <LinkComponent item={config.featured}>
              <div className="inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md w-full sm:w-auto">
                {config.featured.label}
              </div>
            </LinkComponent>
          </motion.div>
        )}

        {/* Sections Grid - Desktop: 2 columns, Mobile: stacked */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-14 gap-y-8 sm:gap-y-10"}`}>
          {/* First column: AUTOMATISERING + VERANTWOORDING */}
          <div>
            {/* AUTOMATISERING section */}
            {config.sections[0] && (
              <>
                <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-6">
                  {config.sections[0].title}
                </h3>
                <ul className={`space-y-[14px] ${!isMobile ? "mb-10" : ""}`}>
                  {config.sections[0].items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { 
                          y: -1,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                      >
                        <LinkComponent
                          item={item}
                          className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </LinkComponent>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {/* VERANTWOORDING section (with divider on desktop) */}
            {config.sections[1] && (
              <div className={isMobile ? "pt-8 mt-8 border-t border-slate-200/40" : "pt-8 border-t border-slate-200/40"}>
                <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5">
                  {config.sections[1].title}
                </h4>
                <ul className="space-y-[14px]">
                  {config.sections[1].items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { 
                          y: -1,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                      >
                        <LinkComponent
                          item={item}
                          className="block text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </LinkComponent>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Second column: SELF-SERVICE & KENNIS */}
          {config.sections[2] && (
            <div>
              <h3 className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-6">
                {config.sections[2].title}
              </h3>
              <ul className="space-y-[14px]">
                {config.sections[2].items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { 
                        y: -1,
                        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                      }}
                    >
                      <LinkComponent
                        item={item}
                        className="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </LinkComponent>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Image Card */}
        {config.imageCard && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7"
            >
              <img
                src={config.imageCard.image}
                alt={config.imageCard.imageAlt}
                className="w-full h-auto rounded-[20px] shadow-sm object-cover"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </motion.div>
            <h4 className={`${isMobile ? "text-base" : "text-base"} font-semibold text-slate-900 mb-3 leading-tight`}>
              {config.imageCard.title}
            </h4>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              {config.imageCard.description}
            </p>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { 
                y: -1,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              {config.imageCard.ctaExternal ? (
                <a
                  href={config.imageCard.ctaHref}
                  className="inline-flex items-center text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={onLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {config.imageCard.ctaText}
                </a>
              ) : (
                <Link
                  to={config.imageCard.ctaHref}
                  className="inline-flex items-center text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={onLinkClick}
                >
                  {config.imageCard.ctaText}
                </Link>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
