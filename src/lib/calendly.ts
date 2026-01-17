const CALENDLY_SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";
const SCRIPT_ID = "calendly-widget-script";

// Global promise to ensure script loads only once
let loadPromise: Promise<void> | null = null;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

/**
 * Loads Calendly script once and returns a promise that resolves when ready.
 * Checks if window.Calendly exists → resolves immediately.
 * Otherwise injects script tag with fixed ID to prevent duplicates.
 */
export function loadCalendly(): Promise<void> {
  // If Calendly is already available, resolve immediately
  if (window.Calendly) {
    return Promise.resolve();
  }

  // If script is already loading, return existing promise
  if (loadPromise) {
    return loadPromise;
  }

  // Check if script tag already exists
  const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  
  if (existingScript) {
    // Script exists, wait for it to load
    loadPromise = new Promise((resolve, reject) => {
      if (window.Calendly) {
        resolve();
        return;
      }

      const handleLoad = () => {
        if (window.Calendly) {
          resolve();
        } else {
          reject(new Error("Calendly script loaded but window.Calendly not available"));
        }
      };

      const handleError = () => {
        reject(new Error("Failed to load Calendly script"));
        loadPromise = null;
      };

      // Check if Calendly is already available (script might have loaded)
      if (window.Calendly) {
        handleLoad();
      } else {
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener("error", handleError, { once: true });
      }
    });

    return loadPromise;
  }

  // Create and inject script tag
  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;

    script.onload = () => {
      // Small delay to ensure Calendly is fully initialized
      setTimeout(() => {
        if (window.Calendly) {
          resolve();
        } else {
          reject(new Error("Calendly script loaded but window.Calendly not available"));
          loadPromise = null;
        }
      }, 100);
    };

    script.onerror = () => {
      reject(new Error("Failed to load Calendly script"));
      loadPromise = null;
    };

    document.head.appendChild(script);
  });

  return loadPromise;
}
