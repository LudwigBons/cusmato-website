import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import Reveal from "../Reveal";

const scenarios = [
  {
    id: "order",
    label: "Orderstatus / Track & Trace",
    customerMessage: "Hoi, ik heb vorige week een bestelling gedaan (ordernummer #12345). Wanneer wordt deze bezorgd?",
    intent: "Order Status",
    confidence: 98,
    context: ["Bestelling gevonden", "Verzendstatus: Onderweg", "Verwachte bezorging: Morgen"],
    draft: "Hoi! Je bestelling #12345 is gisteren verzonden en is momenteel onderweg. Volgens de vervoerder wordt deze morgen bezorgd. Je ontvangt een e-mail zodra het pakket is afgeleverd. Laat het weten als je nog vragen hebt!",
  },
  {
    id: "return",
    label: "Retour aanvragen",
    customerMessage: "Ik wil graag een product terugsturen. Hoe kan ik een retour aanvragen?",
    intent: "Return Request",
    confidence: 95,
    context: ["Product gevonden in ordergeschiedenis", "Retourbeleid: 30 dagen", "Retourlink beschikbaar"],
    draft: "Hoi! Ik help je graag met het retourneren. Je kunt een retour aanvragen via deze link: [retourlink]. Zorg ervoor dat het product in originele staat is en de verpakking meelevert. Je ontvangt binnen 2-3 werkdagen een retourlabel per e-mail. Laat het weten als je hulp nodig hebt!",
  },
  {
    id: "product",
    label: "Productvraag (maat/voorraad)",
    customerMessage: "Ik zie dat jullie een mooie trui verkopen. Is deze nog op voorraad in maat M?",
    intent: "Product Question",
    confidence: 92,
    context: ["Product gevonden", "Voorraad: 5 stuks", "Beschikbaar in alle maten"],
    draft: "Hoi! De trui is inderdaad nog op voorraad in maat M (nog 5 stuks beschikbaar). Je kunt deze direct bestellen via de website. Als je snel bent, leveren we deze binnen 1-2 werkdagen. Laat het weten als je nog vragen hebt!",
  },
  {
    id: "invoice",
    label: "Factuur / betaling",
    customerMessage: "Ik heb nog geen factuur ontvangen van mijn laatste bestelling. Kunnen jullie deze opsturen?",
    intent: "Invoice Request",
    confidence: 97,
    context: ["Bestelling gevonden", "Factuur gegenereerd", "Beschikbaar in account"],
    draft: "Hoi! Ik stuur je graag de factuur. Je kunt deze direct downloaden via je account: [factuurlink]. Als je geen account hebt, stuur ik de factuur per e-mail binnen enkele minuten. Laat het weten als je nog vragen hebt!",
  },
];

export default function ScenarioDemo() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [approvalMode, setApprovalMode] = useState<"auto" | "review">("review");
  const [showDraft, setShowDraft] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Show draft after initial delay
  useEffect(() => {
    const timer = setTimeout(() => setShowDraft(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleScenarioChange = (scenario: typeof scenarios[0]) => {
    setActiveScenario(scenario);
    setShowDraft(false);
    setTimeout(() => setShowDraft(true), 800);
  };

  return (
    <section id="demo" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-[36px] sm:text-[40px] md:text-[44px] font-semibold text-slate-900 mb-4 leading-[1.12] tracking-[-0.01em] max-w-[60ch] mx-auto">
              Zie hoe Cusmato werkt
            </h2>
            <p className="text-[17px] text-slate-500 leading-[1.55] max-w-[60ch] mx-auto">
              Kies een scenario en zie hoe Cusmato automatisch klantvragen begrijpt en beantwoordt.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Scenario Tabs */}
          <div className="space-y-4">
            {scenarios.map((scenario) => (
              <motion.button
                key={scenario.id}
                onClick={() => handleScenarioChange(scenario)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  activeScenario.id === scenario.id
                    ? "bg-blue-50 border-blue-200 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                }`}
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${
                    activeScenario.id === scenario.id ? "text-blue-900" : "text-slate-900"
                  }`}>
                    {scenario.label}
                  </span>
                  {activeScenario.id === scenario.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-blue-600"
                    />
                  )}
                </div>
              </motion.button>
            ))}

            {/* Approval Mode Toggle */}
            <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Goedkeuringsmodus</span>
                <button
                  onClick={() => setApprovalMode(approvalMode === "auto" ? "review" : "auto")}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                    approvalMode === "auto" ? "bg-blue-600" : "bg-slate-300"
                  }`}
                >
                  <motion.div
                    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{ x: approvalMode === "auto" ? 24 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </button>
              </div>
              <p className="text-xs text-slate-600">
                {approvalMode === "auto"
                  ? "Antwoorden worden automatisch verzonden"
                  : "Antwoorden vereisen eerst goedkeuring"}
              </p>
            </div>
          </div>

          {/* RIGHT: Live Demo Card */}
          <div className="relative">
            <motion.div
              className="bg-white rounded-2xl border border-slate-200/60 shadow-xl p-6 space-y-6"
              layout
            >
              {/* Incoming Message */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`message-${activeScenario.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-slate-300" />
                    <div>
                      <div className="h-2 bg-slate-400 rounded w-20 mb-1" />
                      <div className="h-1.5 bg-slate-300 rounded w-16" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{activeScenario.customerMessage}</p>
                </motion.div>
              </AnimatePresence>

              {/* AI Analysis */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`analysis-${activeScenario.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"
                    />
                    <span className="text-xs font-semibold text-blue-900">Cusmato analyseert...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-700">Intent:</span>
                      <span className="text-xs font-semibold text-blue-900">{activeScenario.intent}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-700">Confidence:</span>
                      <span className="text-xs font-semibold text-green-600">{activeScenario.confidence}%</span>
                    </div>
                    <div className="pt-2 border-t border-blue-200">
                      {activeScenario.context.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-slate-700 mb-1"
                        >
                          <div className="w-1 h-1 rounded-full bg-blue-600" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Draft Reply */}
              <AnimatePresence mode="wait">
                {showDraft && (
                  <motion.div
                    key={`draft-${activeScenario.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-white rounded-lg p-4 border-2 border-slate-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-900">AI Draft</span>
                      <motion.span
                        className="text-xs text-green-600"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Typing...
                      </motion.span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{activeScenario.draft}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <AnimatePresence mode="wait">
                {showDraft && (
                  <motion.div
                    key={`actions-${activeScenario.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 1.3 }}
                    className="flex gap-3"
                  >
                    {approvalMode === "review" ? (
                      <>
                        <motion.button
                          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                          className="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all"
                        >
                          Goedkeuren & Versturen
                        </motion.button>
                        <motion.button
                          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                          className="px-4 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors"
                        >
                          Bewerken
                        </motion.button>
                      </>
                    ) : (
                      <motion.button
                        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all"
                      >
                        Automatisch Verzonden ✓
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
