import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls to the top of the page on route change.
 * Handles hash anchors correctly and works reliably on iOS Safari.
 * 
 * Behavior:
 * - Route change (pathname/search change): scroll to top
 * - Hash in URL: scroll to anchor element
 * - Browser back/forward: preserve native scroll restoration
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const previousPathnameRef = useRef<string>("");

  useEffect(() => {
    const currentLocation = `${pathname}${search}`;
    const isPathChange = currentLocation !== previousPathnameRef.current;
    previousPathnameRef.current = currentLocation;

    // Note: Modern browsers handle back/forward scroll restoration automatically
    // We only force scroll on pathname/search changes (not hash-only changes for same page)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = "auto"; // Always auto for instant scroll (no smooth animation)

    // If hash exists, scroll to anchor element
    if (hash) {
      const elementId = hash.substring(1);
      
      // Small delay to ensure DOM is ready (especially for lazy-loaded content)
      const scrollToAnchor = () => {
        const element = document.getElementById(elementId) || document.querySelector(`[name="${elementId}"]`);
        
        if (element) {
          // CSS scroll-padding-top (96px) is already set in index.css, but we add explicit offset for reliability
          const headerOffset = 96;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            left: 0,
            behavior: scrollBehavior,
          });

          // iOS Safari fallback
          document.documentElement.scrollTop = Math.max(0, offsetPosition);
          if (document.body) {
            document.body.scrollTop = Math.max(0, offsetPosition);
          }
        }
      };

      // Try immediately
      scrollToAnchor();
      
      // Also try in next frame (iOS timing issue)
      requestAnimationFrame(() => {
        scrollToAnchor();
      });

      // Final check after content loads
      setTimeout(scrollToAnchor, 150);
      return;
    }

    // No hash: scroll to top on pathname/search change
    if (isPathChange) {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: scrollBehavior,
        });

        // iOS Safari fallback - set both
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Immediate scroll
      scrollToTop();

      // Also scroll in next frame (iOS Safari sometimes has late layout)
      requestAnimationFrame(() => {
        scrollToTop();
      });

      // Double-check after a brief delay (for async content)
      setTimeout(() => {
        if (window.pageYOffset > 10) {
          scrollToTop();
        }
      }, 100);
    }
  }, [pathname, search, hash]);

  return null;
}
