// HeroTicketDashboardDemo.tsx - Compact dashboard animatie: ticket → AI antwoord → verstuurd

import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type TicketStatus = "new" | "ai-processing" | "ready" | "sent" | "solved";

interface Ticket {
  id: number;
  subject: string;
  customer: string;
  orderNumber: string;
  channel: string;
  status: TicketStatus;
}

const INITIAL_TICKETS: Ticket[] = [
  {
    id: 1246,
    subject: "Retour aanvraag",
    customer: "Maria Janssen",
    orderNumber: "#6237",
    channel: "Email",
    status: "solved",
  },
  {
    id: 1245,
    subject: "Factuur vraag",
    customer: "Peter de Boer",
    orderNumber: "#6236",
    channel: "Email",
    status: "solved",
  },
];

const NEW_TICKET: Ticket = {
  id: 1247,
  subject: "Waar is mijn bestelling?",
  customer: "Jan de Vries",
  orderNumber: "#6238",
  channel: "Email",
  status: "new",
};

const AI_RESPONSE = `Hoi Jan,

Je bestelling #6238 is onderweg.
Track & trace: 94XXXX…70216.`;

function HeroTicketDashboardDemo() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [typedResponse, setTypedResponse] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef(false);
  const mountedRef = useRef(true);
  const isPausedRef = useRef(false);

  // Cleanup all timeouts
  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach((id) => clearTimeout(id));
    timeoutRefs.current.clear();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearAllTimeouts();
      isRunningRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      // Show static end state
      setTickets([{ ...NEW_TICKET, status: "sent" }, ...INITIAL_TICKETS]);
      setSelectedTicket({ ...NEW_TICKET, status: "sent" });
      setTypedResponse(AI_RESPONSE);
      clearAllTimeouts();
      isRunningRef.current = false;
      return;
    }

    // Update ref to track current pause state
    isPausedRef.current = isPaused;

    // Pause logic: just clear timers
    if (isPaused) {
      clearAllTimeouts();
      return;
    }

    // Don't start if already running to prevent duplicate animations
    if (isRunningRef.current) {
      return;
    }

    isRunningRef.current = true;
    clearAllTimeouts();

    const runAnimation = () => {
      if (!mountedRef.current) {
        isRunningRef.current = false;
        return;
      }

      // Step A: New ticket appears
      setTickets([NEW_TICKET, ...INITIAL_TICKETS]);
      setSelectedTicket(null);
      setTypedResponse("");

      // Step B: Select ticket after delay
      const timeout1 = setTimeout(() => {
        if (!mountedRef.current || isPausedRef.current) {
          isRunningRef.current = false;
          return;
        }
        setSelectedTicket({ ...NEW_TICKET, status: "ai-processing" });
        setTickets((prev) =>
          prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "ai-processing" } : t))
        );

        // Step C: Type AI response
        const timeout2 = setTimeout(() => {
          if (!mountedRef.current || isPausedRef.current) {
            isRunningRef.current = false;
            return;
          }
          let charIndex = 0;
          intervalRef.current = setInterval(() => {
            if (!mountedRef.current || isPausedRef.current) {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
              isRunningRef.current = false;
              return;
            }

            if (charIndex >= AI_RESPONSE.length) {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
              // Step D: Ready to send
              if (!mountedRef.current || isPausedRef.current) {
                isRunningRef.current = false;
                return;
              }
              setSelectedTicket((prev) => (prev ? { ...prev, status: "ready" } : null));
              setTickets((prev) =>
                prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "ready" } : t))
              );

              // Step E: Send and mark as sent
              const timeout3 = setTimeout(() => {
                if (!mountedRef.current || isPausedRef.current) {
                  isRunningRef.current = false;
                  return;
                }
                setSelectedTicket((prev) => (prev ? { ...prev, status: "sent" } : null));
                setTickets((prev) =>
                  prev.map((t) => (t.id === NEW_TICKET.id ? { ...t, status: "sent" } : t))
                );

                // Reset after pause - check pause state before restarting
                const timeout4 = setTimeout(() => {
                  isRunningRef.current = false;
                  if (!mountedRef.current || isPausedRef.current) {
                    return;
                  }
                  // Restart animation
                  runAnimation();
                }, 2000);
                timeoutRefs.current.add(timeout4);
              }, 1500);
              timeoutRefs.current.add(timeout3);
              return;
            }

            if (mountedRef.current && !isPausedRef.current) {
              setTypedResponse(AI_RESPONSE.slice(0, charIndex + 1));
              charIndex++;
            }
          }, 30);
        }, 800);
        timeoutRefs.current.add(timeout2);
      }, 1500);
      timeoutRefs.current.add(timeout1);
    };

    runAnimation();

    return () => {
      clearAllTimeouts();
      isRunningRef.current = false;
    };
  }, [reducedMotion, isPaused]);

  return (
    <div
      className="w-full max-w-full sm:max-w-[520px] mx-auto scale-[0.95] sm:scale-100 origin-top"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="ml-2">
              <div className="text-xs font-semibold text-slate-900">Cusmato Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500">Live</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-col sm:flex-row h-auto sm:h-[340px]">
          {/* Left Panel: Ticket List */}
          <div className="w-full sm:w-2/5 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/30 p-2.5 sm:p-3 overflow-visible sm:overflow-y-auto sm:max-h-none">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Open tickets
            </div>
            <div className="space-y-2">
              <AnimatePresence initial={false}>
                {tickets.map((ticket) => {
                  const isSelected = selectedTicket?.id === ticket.id;
                  const isNew = ticket.id === NEW_TICKET.id && ticket.status === "new";
                  const isSolved = ticket.status === "solved" || ticket.status === "sent";

                  // Hide solved tickets after they're sent (except the new one)
                  if (isSolved && ticket.id !== NEW_TICKET.id) {
                    return null;
                  }

                  return (
                    <motion.div
                      key={ticket.id}
                      initial={isNew ? { opacity: 0, y: -10, scale: 0.95 } : undefined}
                      animate={isNew ? { opacity: 1, y: 0, scale: 1 } : {}}
                      exit={ticket.status === "solved" ? { opacity: 0, x: -20 } : undefined}
                      transition={{ duration: 0.3 }}
                      className={`rounded-lg border p-2.5 cursor-pointer transition-colors ${
                        isSelected
                          ? "border-blue-300 bg-blue-50 shadow-sm"
                          : ticket.status === "ai-processing"
                          ? "border-indigo-200 bg-indigo-50/50"
                          : ticket.status === "sent"
                          ? "border-emerald-200 bg-emerald-50/50"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <div className="text-[11px] font-semibold text-slate-900 truncate mb-1">
                        {ticket.subject}
                      </div>
                      <div className="text-[10px] text-slate-500 mb-2">
                        {ticket.customer} · {ticket.orderNumber}
                      </div>
                      <div
                        className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-semibold ${
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

          {/* Right Panel: Ticket Detail + AI Response */}
          <div className="w-full sm:flex-1 p-3 sm:p-4 overflow-visible sm:overflow-y-auto sm:min-h-0">
            {selectedTicket ? (
              <div className="space-y-4">
                {/* Ticket Header */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {selectedTicket.subject}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <span>{selectedTicket.customer}</span>
                    <span>·</span>
                    <span>{selectedTicket.orderNumber}</span>
                    <span>·</span>
                    <span>{selectedTicket.channel}</span>
                  </div>
                </div>

                {/* AI Response Box */}
                {(selectedTicket.status === "ai-processing" ||
                  selectedTicket.status === "ready" ||
                  selectedTicket.status === "sent") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-blue-200 bg-blue-50/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold text-slate-900">AI concept antwoord</div>
                      {selectedTicket.status === "ai-processing" && !reducedMotion && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full"
                        />
                      )}
                    </div>
                    <div className="bg-white rounded-lg p-3 text-xs text-slate-800 leading-relaxed whitespace-pre-line min-h-[80px]">
                      {typedResponse || ""}
                      {selectedTicket.status === "ai-processing" &&
                        !reducedMotion &&
                        typedResponse.length < AI_RESPONSE.length && (
                          <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block w-[6px] h-3 bg-blue-600 ml-1 align-middle"
                          />
                        )}
                    </div>

                    {/* Send Button */}
                    {selectedTicket.status === "ready" && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={!reducedMotion ? { scale: 1.02 } : {}}
                        whileTap={!reducedMotion ? { scale: 0.98 } : {}}
                        className="mt-3 w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                      >
                        Verstuur
                      </motion.button>
                    )}

                    {/* Sent State */}
                    {selectedTicket.status === "sent" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2"
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

export default memo(HeroTicketDashboardDemo);