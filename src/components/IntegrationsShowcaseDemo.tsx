// IntegrationsShowcaseDemo.tsx - Premium clean integrations UI

import { useState, useEffect, useRef, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const INTEGRATIONS = [
  { id: "shopify", name: "Shopify", logo: "/logo-shopify.png", x: 20, y: 25 },
  { id: "zendesk", name: "Zendesk", logo: "/logo-zendesk.png", x: 70, y: 20 },
  { id: "gmail", name: "Gmail", logo: "/logo-gmail.png", x: 25, y: 75 },
  { id: "outlook", name: "Outlook", logo: "/logo-outlook.png", x: 75, y: 70 },
];

const CONTEXT_DATA = [
  { label: "Order status", value: "Onderweg" },
  { label: "Track & trace", value: "94XXXX…70216" },
  { label: "Eerdere tickets", value: "2" },
];

function IntegrationsShowcaseDemo() {
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([]);
  const [loadedData, setLoadedData] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setConnectedIntegrations(INTEGRATIONS.map((i) => i.id));
      setLoadedData(CONTEXT_DATA.map((d) => d.label));
      return;
    }

    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    const runAnimation = () => {
      setConnectedIntegrations([]);
      setLoadedData([]);

      INTEGRATIONS.forEach((integration, idx) => {
        timeoutRef.current = setTimeout(() => {
          setConnectedIntegrations((prev) => [...prev, integration.id]);

          if (idx === INTEGRATIONS.length - 1) {
            CONTEXT_DATA.forEach((data, dataIdx) => {
              timeoutRef.current = setTimeout(() => {
                setLoadedData((prev) => [...prev, data.label]);

                if (dataIdx === CONTEXT_DATA.length - 1) {
                  timeoutRef.current = setTimeout(() => {
                    timeoutRef.current = setTimeout(runAnimation, 3000);
                  }, 2500);
                }
              }, dataIdx * 500);
            });
          }
        }, idx * 800);
      });
    };

    runAnimation();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isPaused, reducedMotion]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-transparent rounded-2xl -z-10" />
      
      <div className="relative w-full max-w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 grid place-items-center shadow-sm">
              <img
                src="/Cusmato icon white transparant-geconverteerd-van-webp.svg"
                alt="Cusmato"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Integraties</div>
              <div className="text-[10px] text-slate-500">Connected platforms</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500">
              {connectedIntegrations.length} / {INTEGRATIONS.length}
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-auto lg:h-[calc(500px-65px)] min-h-[400px] lg:min-h-0 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-slate-50/30 to-white scale-[0.95] sm:scale-100 origin-top">
          {/* Integration Logos */}
          {INTEGRATIONS.map((integration) => {
            const isConnected = connectedIntegrations.includes(integration.id);

            return (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: isConnected ? 1 : 0.25,
                  scale: isConnected ? 1 : 0.85,
                  top: `${integration.y}%`,
                  left: `${integration.x}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={`rounded-xl border p-3 bg-white transition-all duration-300 ${
                    isConnected ? "border-blue-300 shadow-sm" : "border-slate-200"
                  }`}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="h-7 w-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                {isConnected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm"
                  />
                )}
              </motion.div>
            );
          })}

          {/* Connection Lines */}
          {connectedIntegrations.length > 0 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {INTEGRATIONS.filter((i) => connectedIntegrations.includes(i.id)).map((integration) => {
                const centerX = 50;
                const centerY = 50;
                return (
                  <motion.line
                    key={`line-${integration.id}`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    x1={`${integration.x}%`}
                    y1={`${integration.y}%`}
                    x2={`${centerX}%`}
                    y2={`${centerY}%`}
                    stroke="#2563eb"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity={0.25}
                  />
                );
              })}
            </svg>
          )}

          {/* Cusmato Center */}
          <motion.div
            initial={{ opacity: 0.4, scale: 0.85 }}
            animate={{
              opacity: connectedIntegrations.length > 0 ? 1 : 0.4,
              scale: connectedIntegrations.length > 0 ? 1 : 0.85,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-5 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-blue-600 grid place-items-center mb-2 mx-auto">
                <img
                  src="/Cusmato icon white transparant-geconverteerd-van-webp.svg"
                  alt="Cusmato"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="text-xs font-semibold text-slate-900 text-center">Cusmato</div>
            </div>
          </motion.div>

          {/* Context Data Pill */}
          {loadedData.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full border border-slate-200 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 shadow-sm max-w-[calc(100%-2rem)] sm:max-w-none"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
                {CONTEXT_DATA.map((data, index) => {
                  const isLoaded = loadedData.includes(data.label);
                  return (
                    <div key={data.label} className="flex items-center gap-2">
                      {/* Chip with check icon */}
                      <div className="flex items-center gap-1.5">
                        {isLoaded ? (
                          <svg
                            className="w-4 h-4 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            className="h-3 w-3 border-2 border-blue-600 border-t-transparent rounded-full"
                          />
                        )}
                        <span className="text-[13px] text-slate-700 whitespace-nowrap">{data.label}</span>
                      </div>
                      {/* Divider between items (not after last item) */}
                      {index < CONTEXT_DATA.length - 1 && (
                        <div className="hidden sm:block h-4 w-px bg-slate-200/60 mx-1" />
                      )}
                    </div>
                  );
                })}
                {/* Quality badge (only when all loaded) */}
                {loadedData.length === CONTEXT_DATA.length && (
                  <>
                    <div className="hidden sm:block h-4 w-px bg-slate-200/60 mx-1" />
                    <div className="bg-emerald-50 rounded-full px-3 py-1">
                      <span className="text-[13px] font-semibold text-emerald-700 whitespace-nowrap">
                        +85% kwaliteit
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(IntegrationsShowcaseDemo);