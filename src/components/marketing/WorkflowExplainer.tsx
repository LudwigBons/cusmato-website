import { memo, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface WorkflowCard {
  id: string;
  step: string;
  title: string;
  icon: ReactNode;
  badges: string[];
  microcopy: string;
}

const workflowCards: WorkflowCard[] = [
  {
    id: "trigger",
    step: "Stap 1",
    title: "Trigger",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    badges: ["Kanaal", "Categorie", "Urgency"],
    microcopy: "Ticket komt binnen → Cusmato herkent context.",
  },
  {
    id: "regels",
    step: "Stap 2",
    title: "Regels",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    badges: ["Als/ Dan", "Uitzonderingen", "VIP"],
    microcopy: "Jij bepaalt: auto, approval of escalatie.",
  },
  {
    id: "actie",
    step: "Stap 3",
    title: "Actie",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    badges: ["Antwoord", "Label", "Taak"],
    microcopy: "Cusmato voert acties uit in je tools.",
  },
  {
    id: "controle",
    step: "Stap 4",
    title: "Controle",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badges: ["Approval", "Audit log", "Veilige defaults"],
    microcopy: "Altijd inzicht en controle — per regel.",
  },
];

function WorkflowExplainer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Hoe workflows werken
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Je bepaalt wanneer Cusmato automatiseert, en wanneer je team het overneemt.
          </p>
        </div>

        {/* Flow Strip with Cards */}
        <div className="relative mb-16 md:mb-20">
          {/* Glow Rail Background */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 opacity-40" />
          
          {/* Animated Moving Dots */}
          {!shouldReduceMotion && (
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 overflow-hidden">
              <motion.div
                className="absolute h-full w-2 bg-blue-500 rounded-full blur-sm"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
                }}
              />
              <motion.div
                className="absolute h-full w-1.5 bg-blue-400 rounded-full blur-sm"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
                style={{
                  boxShadow: "0 0 6px rgba(96, 165, 250, 0.5)",
                }}
              />
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflowCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col relative group"
                style={{
                  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
                }}
              >
                {/* Step Chip */}
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-4 w-fit">
                  {card.step}
                </div>

                {/* Icon in Bubble */}
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Microcopy */}
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {card.microcopy}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll Alternative */}
          <div className="md:hidden mt-6 flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-snap-x snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6">
            {workflowCards.map((card, index) => (
              <div
                key={card.id}
                className="min-w-[280px] bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm flex flex-col h-full snap-start"
                style={{
                  boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-4 w-fit">
                  {card.step}
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.microcopy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Real Example Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/80 p-6 md:p-8 shadow-sm overflow-hidden"
          style={{
            boxShadow: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
              Voorbeeld in 1 ticket
            </h3>
            <p className="text-sm text-slate-600">
              Hoe Cusmato een workflow afhandelt
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left: Mini Ticket UI */}
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Nieuw ticket
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <h4 className="text-base font-semibold text-slate-900 mb-3">
                Waar blijft mijn bestelling?
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "Levering", "Normaal"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: 3 Bullets with Checks */}
            <div className="space-y-4">
              {[
                "Classificeert: Levering",
                "Pakt template: Track & Trace",
                "Zet op approval bij VIP/afwijking",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(WorkflowExplainer);
