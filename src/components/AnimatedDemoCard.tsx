import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";

interface AnimatedDemoCardProps {
  variant?: "inbox" | "draft" | "approval";
}

function AnimatedDemoCard({ variant = "inbox" }: AnimatedDemoCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  
  // Pause animations when offscreen
  useEffect(() => {
    if (!containerRef.current || shouldReduceMotion) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    // Static version for reduced motion
    return (
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-lg p-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div className="h-12 bg-slate-50 rounded-lg"></div>
          <div className="h-24 bg-slate-50 rounded-lg"></div>
          <div className="h-16 bg-blue-50 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main demo card */}
      <motion.div
        className="relative bg-white/95 rounded-2xl border border-slate-200/80 shadow-xl p-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Demo content based on variant */}
        {variant === "inbox" && <InboxDemo isInView={isInView} shouldReduceMotion={!!shouldReduceMotion} />}
        {variant === "draft" && <DraftDemo />}
        {variant === "approval" && <ApprovalDemo />}
      </motion.div>
    </div>
  );
}

function InboxDemo({ isInView = true, shouldReduceMotion = false }: { isInView?: boolean; shouldReduceMotion?: boolean }) {
  const items = [
    { id: 1, from: "Sarah van der Berg", subject: "Order #12345 status?", time: "2 min geleden", highlighted: false },
    { id: 2, from: "Mark Janssen", subject: "Wanneer wordt mijn pakket bezorgd?", time: "5 min geleden", highlighted: false },
    { id: 3, from: "Lisa de Vries", subject: "Retourverzoek", time: "10 min geleden", highlighted: true },
    { id: 4, from: "Peter Bakker", subject: "Product vraag", time: "15 min geleden", highlighted: false },
  ];

  return (
    <div className="space-y-4">
      {/* Inbox list */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`p-3 rounded-lg border transition-all ${
              item.highlighted
                ? "bg-blue-50 border-blue-200 shadow-sm"
                : "bg-slate-50/50 border-slate-200/50"
            }`}
            initial={{ opacity: 0.5 }}
            animate={
              !isInView || shouldReduceMotion
                ? {}
                : {
                    opacity: item.highlighted ? 1 : 0.5,
                    scale: item.highlighted ? 1.02 : 1,
                  }
            }
            transition={{
              duration: 0.3,
              delay: index * 0.2,
              repeat: isInView && !shouldReduceMotion ? Infinity : 0,
              repeatType: "reverse",
              repeatDelay: 4,
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                  <p className="text-sm font-medium text-slate-900 truncate">{item.from}</p>
                </div>
                <p className="text-sm text-slate-600 truncate">{item.subject}</p>
              </div>
              <span className="text-xs text-slate-400 ml-2">{item.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI draft typing indicator */}
      <motion.div
        className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
          <span className="text-xs text-blue-700 font-medium ml-2">AI genereert antwoord...</span>
        </div>
        <motion.p
          className="text-sm text-slate-700"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            times: [0, 0.3, 0.5, 1],
          }}
        >
          "Beste {items.find((i) => i.highlighted)?.from}, bedankt voor je bericht. Ik zie dat je..."
        </motion.p>
      </motion.div>
    </div>
  );
}

function DraftDemo() {
  return (
    <div className="space-y-4">
      {/* Message preview */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
          <div>
            <p className="text-sm font-medium text-slate-900">Klant: Lisa de Vries</p>
            <p className="text-xs text-slate-500">Retourverzoek voor bestelling #12345</p>
          </div>
        </div>
        <div className="text-sm text-slate-600 space-y-2">
          <p>"Hallo, ik wil graag mijn bestelling retourneren..."</p>
        </div>
      </div>

      {/* AI reply bubble */}
      <motion.div
        className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/50"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{
          opacity: [0, 0, 1, 1],
          scale: [0.95, 0.98, 1, 1],
          y: [10, 5, 0, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3,
          times: [0, 0.4, 0.6, 1],
        }}
      >
        <div className="flex items-start gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-xs text-blue-700 font-medium">AI Concept</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          "Hallo Lisa, natuurlijk kunnen we je helpen met het retourneren van je bestelling. 
          Hier zijn de stappen..."
        </p>
      </motion.div>

      {/* Status chips */}
      <div className="flex gap-2">
        {["Concept", "Goedgekeurd", "Verstuurd"].map((status, index) => (
          <motion.div
            key={status}
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${
              index === 0
                ? "bg-blue-100 text-blue-700"
                : index === 1
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-700"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              scale: [0.8, 0.9, 1, 1, 0.9, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 2,
              times: [0, 0.1, 0.3, 0.7, 0.9, 1],
            }}
          >
            {status}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ApprovalDemo() {
  return (
    <div className="space-y-4">
      {/* Inbox with approval actions */}
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`p-3 rounded-lg border ${
              i === 2 ? "bg-blue-50 border-blue-200 shadow-sm" : "bg-slate-50/50 border-slate-200/50"
            }`}
            animate={{
              opacity: i === 2 ? 1 : 0.6,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: (i - 1) * 1.5,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Order vraag #{12340 + i}</p>
                <p className="text-xs text-slate-500">AI concept beschikbaar</p>
              </div>
              {i === 2 && (
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: [10, 0, 0, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <button className="px-3 py-1 text-xs font-medium bg-green-600 text-white rounded-lg">
                    Goedkeuren
                  </button>
                  <button className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 rounded-lg">
                    Bewerken
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
