import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import MegaMenu, { getMegaMenuData } from "./MegaMenu";
import MobileMegaMenu from "./MobileMegaMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  // Close mega menu and mobile menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location.pathname]);

  // Handle mega menu hover with delay
  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (!shouldReduceMotion) {
      setIsMegaMenuOpen(true);
    }
  };

  const handleMegaMenuLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // Increased delay to prevent flickering during cursor movement between trigger and menu
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 200);
  };

  // REPLACED useScroll + useMotionValueEvent with passive IntersectionObserver for zero scroll jank
  useEffect(() => {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '20px';
    sentinel.style.left = '0';
    sentinel.style.width = '1px';
    sentinel.style.height = '1px';
    sentinel.style.pointerEvents = 'none';
    sentinel.style.visibility = 'hidden';
    document.body.appendChild(sentinel);

    let lastScrolledState = isScrolled;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Only update state if crossing threshold (avoid unnecessary re-renders)
        const scrolled = !entry.isIntersecting;
        if (scrolled !== lastScrolledState) {
          lastScrolledState = scrolled;
          setIsScrolled(scrolled);
        }
      },
      { threshold: 0, rootMargin: '-20px 0px 0px 0px' }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (document.body.contains(sentinel)) {
        document.body.removeChild(sentinel);
      }
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []); // Empty deps - only mount once

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        triggerRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMegaMenuOpen) {
          setIsMegaMenuOpen(false);
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMegaMenuOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
        if (isMobileMenuOpen) {
          document.body.style.overflow = "";
        }
      };
    }
  }, [isMegaMenuOpen, isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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

  const navItems = [
    { name: "Home", path: getEnglishRoute("/"), hasMegaMenu: false },
    { name: "Cusmato AI", path: getEnglishRoute("/ai-helpdesk"), hasMegaMenu: true },
    { name: isEnglish ? "Integrations" : "Integraties", path: getEnglishRoute("/integraties"), hasMegaMenu: false },
    { name: isEnglish ? "Pricing" : "Prijzen", path: getEnglishRoute("/prijzen"), hasMegaMenu: false },
    { name: "FAQ", path: getEnglishRoute("/faq"), hasMegaMenu: false },
    { name: "Blog", path: getEnglishRoute("/blog"), hasMegaMenu: false },
  ];

  const handleLinkClick = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      animate={{
        boxShadow: isScrolled
          ? "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      className="sticky top-0 z-50 bg-white/95 border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative flex h-[64px] items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link to={getEnglishRoute("/")} className="flex items-center" aria-label="Cusmato">
                <img 
                  className="w-[34px] h-[34px] object-contain transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(47,102,255,0.2))' }} 
                  src="/logo.png" 
                  alt="Cusmato" 
                />
              </Link>
            </motion.div>
          </div>

          {/* Center: Navigation Links (centered) */}
          <nav className="hidden lg:flex items-center gap-[18px] text-slate-600 font-semibold text-sm absolute left-1/2 -translate-x-1/2" aria-label="Primary">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
                ref={item.hasMegaMenu ? triggerRef : null}
                onMouseEnter={item.hasMegaMenu ? handleMegaMenuEnter : undefined}
                onMouseLeave={item.hasMegaMenu ? handleMegaMenuLeave : undefined}
                className="relative"
              >
                <Link 
                  to={item.path}
                  onClick={() => {
                    if (item.hasMegaMenu) {
                      setIsMegaMenuOpen(!isMegaMenuOpen);
                    } else {
                      handleLinkClick();
                    }
                  }}
                  className={`px-2 py-2.5 relative group flex items-center gap-1.5 transition-colors 
                    bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 
                    data-[state=open]:bg-transparent data-[active]:bg-transparent aria-[current=page]:bg-transparent
                    rounded ${
                    item.hasMegaMenu 
                      ? (isMegaMenuOpen ? "text-slate-900" : "text-slate-600 hover:text-slate-900")
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  {item.hasMegaMenu && (
                    <motion.svg
                      className={`w-3.5 h-3.5 transition-colors ${
                        isMegaMenuOpen ? "text-slate-700" : "text-slate-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                  {/* Blue underline animation - shows on hover and when mega menu is open */}
                  {!shouldReduceMotion && (
                    <motion.span
                      className="absolute bottom-1 left-0 h-0.5 bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: item.hasMegaMenu && isMegaMenuOpen ? "100%" : 0
                      }}
                      whileHover={{ 
                        width: "100%"
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>

                {/* Mega Menu for Cusmato AI */}
                {item.hasMegaMenu && (
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        ref={megaMenuRef}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden lg:block fixed top-[72px] left-1/2 -translate-x-1/2 z-50 w-[min(90vw,1200px)] max-w-[1200px]"
                        onMouseEnter={handleMegaMenuEnter}
                        onMouseLeave={handleMegaMenuLeave}
                      >
                        <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 w-full max-h-[90vh] overflow-y-auto">
                          <MegaMenu config={getMegaMenuData()} onLinkClick={handleLinkClick} isMobile={false} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right: CTA Buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:gap-3 ml-auto">
            {/* Mobile CTA Button */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden"
            >
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center h-8 px-3 text-xs font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {isEnglish ? "Try 14 days for free" : "Probeer 14 dagen gratis"}
              </Link>
            </motion.div>

            {/* Desktop: Login and CTA buttons - same size, aligned */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher - Desktop */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to={isEnglish ? "/" : "/en"}
                  className="inline-flex items-center justify-center cursor-pointer"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    padding: "4px",
                  }}
                  onMouseEnter={(e) => {
                    if (!shouldReduceMotion) {
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                  }}
                  aria-label={isEnglish ? "Switch to Dutch" : "Switch to English"}
                >
                  <img
                    src={isEnglish ? "/Flag_of_the_Netherlands.svg" : "/1280px-Flag_of_the_United_Kingdom.svg_.webp"}
                    alt={isEnglish ? "Dutch" : "English"}
                    className="w-full h-full object-cover rounded-full"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <a
                  href="https://www.cusmato.app/auth/login"
                  className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-colors whitespace-nowrap"
                >
                  Login
                </a>
              </motion.div>
              
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  {isEnglish ? "Try 14 days for free" : "Probeer 14 dagen gratis"}
                </Link>
              </motion.div>
            </div>

            {/* Tablet: Login button only (for md breakpoint) */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="hidden md:flex lg:hidden"
            >
              <a
                href="https://www.cusmato.app/auth/login"
                className="inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-sm font-semibold border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-colors hover:shadow-sm"
              >
                Login
              </a>
            </motion.div>
            
            {/* Mobile: Language Switcher */}
            <div className="lg:hidden mr-2">
              <Link
                to={isEnglish ? "/" : "/en"}
                className="inline-flex items-center justify-center cursor-pointer"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  padding: "3px",
                }}
                aria-label={isEnglish ? "Switch to Dutch" : "Switch to English"}
              >
                <img
                  src={isEnglish ? "/Flag_of_the_Netherlands.svg" : "/1280px-Flag_of_the_United_Kingdom.svg_.webp"}
                  alt={isEnglish ? "Dutch" : "English"}
                  className="w-full h-full object-cover rounded-full"
                />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Drawer */}
              <motion.div
                ref={mobileMenuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 z-50 w-full max-w-[100vw] h-[100dvh] bg-white lg:hidden flex flex-col"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
              >
                {/* Header with close button */}
                <div className="sticky top-0 z-10 bg-white border-b border-slate-200/60 flex items-center justify-between px-5 h-[64px] flex-shrink-0">
                  <img 
                    className="w-[34px] h-[34px] object-contain" 
                    src="/logo.png" 
                    alt="Cusmato" 
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto">
                  {/* Navigation Links - Filter out Blog, FAQ, and "Cusmato AI" on mobile */}
                  <nav className="px-5 py-4 space-y-1 border-b border-slate-200">
                    {navItems
                      .filter((item) => {
                        // Hide "Cusmato AI" mega menu trigger on mobile
                        if (item.hasMegaMenu) return false;
                        // Hide Blog and FAQ on mobile
                        if (item.path === "/blog" || item.path === "/faq") return false;
                        return true;
                      })
                      .map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 text-base font-semibold rounded-lg px-3 -mx-3 transition-colors ${
                              isActive
                                ? "text-slate-900"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                  </nav>

                  {/* Mobile Mega Menu Content (Accordion) */}
                  <MobileMegaMenu onLinkClick={() => setIsMobileMenuOpen(false)} />
                </div>

                {/* CTA Button - Sticky bottom (only primary) */}
                <div className="sticky bottom-0 bg-white border-t border-slate-200 px-5 py-4 flex-shrink-0">
                  <Link
                    to="/probeer-14-dagen-gratis"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    {isEnglish ? "Try 14 days for free" : "Probeer 14 dagen gratis"}
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}