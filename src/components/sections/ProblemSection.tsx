import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion();
  const benefits = [
    "Minder handmatig werk",
    "Snellere reacties",
    "Schaal support zonder extra team",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Waarom traditionele support niet schaalbaar is
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Supportteams besteden 60-70% van hun tijd aan herhaalbare vragen. Dit kost gemiddeld 8-10 uur per dag per medewerker en schaalt niet mee wanneer je groeit. Automatiseer deze taken en focus op wat echt belangrijk is.
            </p>
          </div>
        </Reveal>

        <motion.ul
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="space-y-5 text-left max-w-2xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4"
            >
              <svg 
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" 
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
              <span className="text-base text-slate-700 leading-relaxed font-medium">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
