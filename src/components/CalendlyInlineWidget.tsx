import { useEffect, useRef, useState } from "react";
import { loadCalendly } from "../lib/calendly";

interface CalendlyInlineWidgetProps {
  url: string;
  minWidth?: number;
  height?: number;
}

export default function CalendlyInlineWidget({
  url,
  minWidth = 320,
  height = 700,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const initializedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initializeWidget = async () => {
      if (initializedRef.current || !containerRef.current) return;
      
      initializedRef.current = true;

      try {
        // Load Calendly script (will reuse if already loaded)
        await loadCalendly();

        if (!containerRef.current) return;

        // Clear container to prevent duplicates
        containerRef.current.innerHTML = "";

        // Initialize widget
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: containerRef.current,
          });

          // Small delay for smooth transition before hiding loader
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
        setIsLoading(false);
      }
    };

    // IntersectionObserver to lazy load when widget is near viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !initializedRef.current) {
            initializeWidget();
            // Disconnect observer after triggering once
            if (observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }
        });
      },
      {
        rootMargin: "400px", // Start loading 400px before widget enters viewport
        threshold: 0.01,
      }
    );

    observerRef.current.observe(container);

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      initializedRef.current = false;
    };
  }, [url]);

  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg border border-slate-200 z-10">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
            <p className="text-sm text-slate-600">Calendly wordt geladen…</p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden rounded-lg"
        style={{
          minWidth: `${minWidth}px`,
          height: `${height}px`,
        }}
      />
    </div>
  );
}
