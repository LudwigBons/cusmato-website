import { useEffect, useState, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/cusmato/cusmato-kennismakingsgesprek";

interface CalendlyInlineProps {
  url?: string;
}

export default function CalendlyInline({ url = CALENDLY_URL }: CalendlyInlineProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Set timeout to show fallback after 6 seconds
    timeoutRef.current = setTimeout(() => {
      setHasError(true);
      setIsLoading(false);
    }, 6000);

    // Check if iframe loads successfully
    const handleLoad = () => {
      setIsLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
    };
  }, []);

  const iframeUrl = url.includes("?") ? `${url}&hide_gdpr_banner=1` : `${url}?hide_gdpr_banner=1`;

  return (
    <div className="relative w-full">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg border border-slate-200 min-h-[600px] sm:min-h-[700px]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
            <p className="text-sm text-slate-600">Calendly wordt geladen…</p>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg border border-slate-200 p-8 min-h-[600px] sm:min-h-[700px]">
          <p className="text-base text-slate-700 mb-6 text-center">
            Lukt het niet om Calendly te laden? Open de planner in een nieuw tabblad.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Open planner
          </a>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={iframeUrl}
          title="Plan een kennismakingsgesprek met Cusmato"
          className="w-full min-h-[600px] sm:min-h-[700px] border-0 rounded-lg"
          loading="lazy"
          allow="camera; microphone; fullscreen"
        />
      )}
    </div>
  );
}
