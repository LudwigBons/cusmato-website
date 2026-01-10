import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function DashboardSection() {
  const shouldReduceMotion = useReducedMotion();
  
  const kpis = [
    "Minder supporttickets",
    "Snellere reactietijden",
    "Consistente antwoorden",
    "Lagere supportkosten",
  ];

  const highlights = [
    { value: "70%", label: "Van vragen geautomatiseerd" },
    { value: "8-10h", label: "Per dag bespaard" },
    { value: "<2 min", label: "Reactietijd gemiddeld" },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <Reveal>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Resultaten die je direct merkt
              </h2>
              <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-prose">
                Teams zien meetbare impact binnen weken.
              </p>

              <motion.ul
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={staggerContainer}
                className="space-y-5 mb-8"
              >
                {kpis.map((kpi, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex items-start gap-4"
                  >
                    <svg 
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-base text-slate-700 font-medium leading-relaxed">{kpi}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* KPI Highlights */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={staggerContainer}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200"
              >
                {highlights.map((highlight, index) => (
                  <motion.div key={index} variants={fadeUp} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                      {highlight.value}
                    </div>
                    <div className="text-xs text-slate-600">
                      {highlight.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>

          {/* Right Column - Dashboard Visual */}
          <Reveal>
            <div className="hidden md:block relative">
              <div className="relative bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                <img
                  src="/dashboard.png"
                  alt="Dashboard met resultaten en impact metrics"
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-12">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors hover:shadow-md"
              >
                Probeer 14 dagen gratis
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
