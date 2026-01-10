import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_URL = "https://calendly.com/cusmato/cusmato-kennismakingsgesprek";

// Global flag to ensure script is only loaded once across all instances
let scriptLoadingPromise: Promise<void> | null = null;
let isScriptLoaded = false;
const scriptLoadedCallbacks: Set<() => void> = new Set();

interface CalendlyInlineProps {
  url?: string;
}

function loadCalendlyScript(): Promise<void> {
  // If already loaded, resolve immediately
  if (isScriptLoaded && window.Calendly) {
    return Promise.resolve();
  }

  // If script is already loading, return existing promise
  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT_URL}"]`
  );

  if (existingScript) {
    // Script tag exists, wait for it to load
    scriptLoadingPromise = new Promise((resolve, reject) => {
      if (window.Calendly) {
        isScriptLoaded = true;
        resolve();
        return;
      }

      const handleLoad = () => {
        isScriptLoaded = true;
        scriptLoadingPromise = null;
        // Execute all queued callbacks
        scriptLoadedCallbacks.forEach(cb => cb());
        scriptLoadedCallbacks.clear();
        resolve();
      };

      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", () => {
        scriptLoadingPromise = null;
        reject(new Error("Failed to load Calendly script"));
      }, { once: true });

      // Fallback: poll for Calendly availability (max 10 seconds)
      let pollCount = 0;
      const pollInterval = setInterval(() => {
        if (window.Calendly) {
          clearInterval(pollInterval);
          handleLoad();
        } else if (pollCount++ > 100) {
          clearInterval(pollInterval);
          scriptLoadingPromise = null;
          reject(new Error("Calendly script timeout"));
        }
      }, 100);
    });

    return scriptLoadingPromise;
  }

  // Create and load script
  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      // Small delay to ensure Calendly is fully initialized
      setTimeout(() => {
        isScriptLoaded = true;
        scriptLoadingPromise = null;
        // Execute all queued callbacks
        scriptLoadedCallbacks.forEach(cb => cb());
        scriptLoadedCallbacks.clear();
        resolve();
      }, 100);
    };

    script.onerror = () => {
      scriptLoadingPromise = null;
      reject(new Error("Failed to load Calendly script"));
    };

    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

export default function CalendlyInline({ url = CALENDLY_URL }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const initializedRef = useRef(false);

  // Lazy load: IntersectionObserver to detect when widget is in view
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before widget enters viewport
        threshold: 0.01,
      }
    );

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Load script and initialize widget when in view
  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;

    const initializeWidget = async () => {
      // Guard: prevent double initialization
      if (initializedRef.current || !containerRef.current) {
        return;
      }

      try {
        // Load script (single-load guard handled by loadCalendlyScript)
        await loadCalendlyScript();

        if (!isMounted || !containerRef.current || !window.Calendly) {
          return;
        }

        // Mark as initialized before calling initInlineWidget
        initializedRef.current = true;

        // Clear container to prevent duplicates
        containerRef.current.innerHTML = "";

        // Initialize Calendly inline widget
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });

        setIsLoading(false);
        setHasError(false);
      } catch (error) {
        console.error("Error initializing Calendly widget:", error);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    initializeWidget();

    return () => {
      isMounted = false;
    };
  }, [isInView, url]);

  return (
    <div 
      ref={wrapperRef}
      className="w-full calendly-widget-wrapper relative"
    >
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        style={{ 
          width: "100%"
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center calendly-skeleton">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-slate-500">Calendly wordt geladen...</p>
          </div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center calendly-error">
          <div className="text-center px-4">
            <p className="text-sm text-slate-600 mb-3">
              Er was een probleem met het laden van de kalender.
            </p>
            <a
              href={url}
              className="inline-flex items-center justify-center text-sm text-blue-600 hover:text-blue-700 underline"
            >
              Open kalender in nieuw venster
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
