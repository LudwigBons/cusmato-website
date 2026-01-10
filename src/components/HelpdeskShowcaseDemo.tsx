// HelpdeskShowcaseDemo.tsx - Premium clean dashboard UI animatie

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type TicketStatus = "open" | "ai-processing" | "ready" | "sent";

interface Ticket {
  id: number;
  subject: string;
  customer: string;
  orderNumber: string;
  status: TicketStatus;
}

const INITIAL_TICKETS: Ticket[] = [
  { id: 1246, subject: "Retour aanvraag", customer: "Maria J.", orderNumber: "#6237", status: "open" },
  { id: 1245, subject: "Factuur vraag", customer: "Peter B.", orderNumber: "#6236", status: "open" },
];

const NEW_TICKET: Ticket = {
  id: 1247,
  subject: "Waar is mijn bestelling?",
  customer: "Jan de Vries",
  orderNumber: "#6238",
  status: "open",
};

const AI_RESPONSE = `Hoi Jan,

Je bestelling #6238 is onderweg en wordt morgen bezorgd.
Track & trace: 94XXXX…70216.`;

const SOURCES = ["Knowledgebase", "Klantdata", "Regels"];

export default function HelpdeskShowcaseDemo() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [typedResponse, setTypedResponse] = useState("");
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileTab, setMobileTab] = useState<"tickets" | "answer">("tickets");
  const reducedMotion = useReducedMotion();

  // Memoize constants to prevent re-renders
  const SOURCES_MEMO = useMemo(() => SOURCES, []);
  const AI_RESPONSE_MEMO = useMemo(() => AI_RESPONSE, []);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sourceIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause animations when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // IntersectionObserver to pause when offscreen
  useEffect(() => {
    if (!containerRef.current || reducedMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        setIsPaused(!isVisible);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setTickets([{ ...NEW_TICKET, status: "sent" }, ...INITIAL_TICKETS]);
      setSelectedTicket({ ...NEW_TICKET, status: "sent" });
      setTypedResponse(AI_RESPONSE);
      return;
    }

    if (isPaused) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (sourceIntervalRef.current) clearInterval(sourceIntervalRef.current);
      return;
    }

    const runAnimation = () => {
      setTickets([NEW_TICKET, ...INITIAL_TICKETS]);
      setSelectedTicket(null);
      setTypedResponse("");
      setSelectedSource(null);

      timeoutRef.current = setTimeout(() => {
        setSelectedTicket({ ...NEW_TICKET, status: "ai-processing" });
        setTickets((prev) =>
          prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "ai-processing" } : t))
        );

        let sourceIndex = 0;
        sourceIntervalRef.current = setInterval(() => {
          if (sourceIndex < SOURCES_MEMO.length) {
            setSelectedSource(SOURCES_MEMO[sourceIndex]);
            sourceIndex++;
          } else {
            if (sourceIntervalRef.current) clearInterval(sourceIntervalRef.current);
          }
        }, 600);

        timeoutRef.current = setTimeout(() => {
          let charIndex = 0;
          intervalRef.current = setInterval(() => {
            if (charIndex < AI_RESPONSE_MEMO.length) {
              setTypedResponse(AI_RESPONSE_MEMO.slice(0, charIndex + 1));
              charIndex++;
            } else {
              if (intervalRef.current) clearInterval(intervalRef.current);
              setSelectedTicket((prev) => (prev ? { ...prev, status: "ready" } : null));
              setTickets((prev) =>
                prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "ready" } : t))
              );

              timeoutRef.current = setTimeout(() => {
                setSelectedTicket((prev) => (prev ? { ...prev, status: "sent" } : null));
                setTickets((prev) =>
                  prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "sent" } : t))
                );

                timeoutRef.current = setTimeout(runAnimation, 3000);
              }, 1800);
            }
          }, 35);
        }, 1800);
      }, 1800);
    };

    runAnimation();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (sourceIntervalRef.current) clearInterval(sourceIntervalRef.current);
    };
  }, [isPaused, reducedMotion, SOURCES_MEMO, AI_RESPONSE_MEMO]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent rounded-2xl -z-10" />
      
      <div className="relative w-full max-w-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden scale-[0.95] sm:scale-100 origin-top flex flex-col" style={{ maxHeight: window.innerWidth < 640 ? '420px' : 'none' }}>
        {/* Topbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 border-b border-slate-200 bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 grid place-items-center shadow-sm">
              <img
                src="/Cusmato icon white transparant-geconverteerd-van-webp.svg"
                alt="Cusmato"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">AI Helpdesk</div>
              <div className="text-[10px] text-slate-500">Live dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500">Status</span>
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="sm:hidden border-b border-slate-200 bg-white flex flex-shrink-0">
          <button
            onClick={() => setMobileTab("tickets")}
            className={`flex-1 px-4 py-2.5 text-xs font-semibold transition-colors ${
              mobileTab === "tickets"
                ? "text-blue-700 border-b-2 border-blue-600 bg-blue-50/30"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Tickets
          </button>
          <button
            onClick={() => setMobileTab("answer")}
            className={`flex-1 px-4 py-2.5 text-xs font-semibold transition-colors ${
              mobileTab === "answer"
                ? "text-blue-700 border-b-2 border-blue-600 bg-blue-50/30"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Antwoord
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden lg:h-[calc(500px-65px)]">
          {/* Mobile: Tickets Tab */}
          <div className={`${mobileTab === "tickets" ? "block" : "hidden"} sm:block w-full lg:w-2/5 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50 flex flex-col`}>
            <div className="px-3 sm:px-4 py-3 border-b border-slate-200 bg-white">
              <div className="flex gap-1 flex-wrap">
                {["Inbox", "Open", "Solved"].map((item) => (
                  <button
                    key={item}
                    className={`px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors ${
                      item === "Inbox"
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-3 sm:px-4 py-3 sm:py-4 overflow-y-auto flex-1 min-h-0 lg:max-h-none">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-3 sm:mb-4">
                Open ({tickets.filter((t) => t.status !== "sent").length})
              </div>
              <div className="space-y-2.5">
                <AnimatePresence initial={false}>
                  {tickets.map((ticket) => {
                    const isSelected = selectedTicket?.id === ticket.id;
                    const isNew = ticket.id === NEW_TICKET.id && ticket.status === "open";
                    if (ticket.status === "sent" && ticket.id !== NEW_TICKET.id) return null;

                    return (
                      <motion.div
                        key={ticket.id}
                        initial={isNew ? { opacity: 0, y: -8, scale: 0.98 } : undefined}
                        animate={
                          isNew
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { transition: { duration: 0.3 } }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`rounded-xl border p-3 cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "border-blue-300 bg-blue-50 shadow-sm"
                            : ticket.status === "ai-processing"
                            ? "border-indigo-200 bg-indigo-50/50"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                        }`}
                        onClick={() => {
                          setSelectedTicket(ticket);
                          if (window.innerWidth < 640) {
                            setMobileTab("answer");
                          }
                        }}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-slate-900 truncate mb-1">
                              {ticket.subject}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {ticket.customer} · {ticket.orderNumber}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                            ticket.status === "ai-processing"
                              ? "bg-indigo-100 text-indigo-700"
                              : ticket.status === "ready"
                              ? "bg-blue-100 text-blue-700"
                              : ticket.status === "sent"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {ticket.status === "ai-processing"
                            ? "AI bezig…"
                            : ticket.status === "ready"
                            ? "Klaar"
                            : ticket.status === "sent"
                            ? "Verstuurd ✓"
                            : "Open"}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Detail Panel - Mobile: Answer Tab, Desktop: Always visible */}
          <div className={`${mobileTab === "answer" ? "flex flex-col" : "hidden"} sm:flex sm:flex-col w-full lg:flex-1 p-4 sm:p-5 overflow-y-auto bg-white lg:min-h-0`}>
            {selectedTicket ? (
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5 sm:mb-2">
                    {selectedTicket.subject}
                  </h3>
                  <div className="text-xs text-slate-500">
                    {selectedTicket.customer} · {selectedTicket.orderNumber}
                  </div>
                </div>

                {/* Sources */}
                {(selectedTicket.status === "ai-processing" ||
                  selectedTicket.status === "ready" ||
                  selectedTicket.status === "sent") && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex gap-2 flex-wrap"
                  >
                    {SOURCES.map((source) => (
                      <div
                        key={source}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          selectedSource === source || selectedTicket.status !== "ai-processing"
                            ? "bg-slate-100 text-slate-700 border border-slate-200"
                            : "bg-slate-50 text-slate-400 border border-slate-200"
                        }`}
                      >
                        {selectedSource === source || selectedTicket.status !== "ai-processing" ? (
                          <span className="text-emerald-600 text-xs">✓</span>
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            className="h-2.5 w-2.5 border-2 border-blue-600 border-t-transparent rounded-full"
                          />
                        )}
                        <span>{source}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* AI Response */}
                {(selectedTicket.status === "ai-processing" ||
                  selectedTicket.status === "ready" ||
                  selectedTicket.status === "sent") && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-semibold text-slate-900">AI concept antwoord</div>
                      {selectedTicket.status === "ai-processing" && !reducedMotion && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full"
                        />
                      )}
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 text-xs text-slate-800 leading-relaxed whitespace-pre-line min-h-[80px] sm:min-h-[100px] font-mono">
                      {typedResponse || ""}
                      {selectedTicket.status === "ai-processing" &&
                        !reducedMotion &&
                        typedResponse.length < AI_RESPONSE.length && (
                          <motion.span
                            animate={{ opacity: [1, 0.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block w-[4px] h-3.5 bg-blue-600 ml-1 align-middle"
                          />
                        )}
                    </div>
                    {selectedTicket.status === "ready" && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        Verstuur
                      </motion.button>
                    )}
                    {selectedTicket.status === "sent" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-xl px-4 py-2.5 border border-emerald-200"
                      >
                        <span>✓</span>
                        <span>Verstuurd</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                Selecteer een ticket
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}