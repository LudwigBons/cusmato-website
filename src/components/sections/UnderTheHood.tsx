import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

const features = [
  {
    title: "Context & Intent",
    description: "Cusmato leert van jouw orders, policies en klantgeschiedenis om de juiste context te begrijpen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Tone of Voice",
    description: "Elk antwoord klinkt als jouw team. Volledig aanpasbaar per bedrijf en consistent in elke interactie.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Control & Safety",
    description: "Confidence scores en approval rules zorgen ervoor dat alleen de juiste antwoorden worden verstuurd.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function UnderTheHood() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-[36px] sm:text-[40px] md:text-[44px] font-semibold text-slate-900 mb-4 leading-[1.12] tracking-[-0.01em] max-w-[60ch] mx-auto">
              Onder de motorkap
            </h2>
            <p className="text-[17px] text-slate-500 leading-[1.55] max-w-[60ch] mx-auto">
              Drie pijlers die Cusmato betrouwbaar en effectief maken.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { 
                y: -3,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="bg-white rounded-2xl border border-slate-200/50 p-8 shadow-sm hover:shadow-xl transition-shadow duration-400"
            >
              {/* Animated Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 border border-blue-100">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [0, -3, 0],
                            rotate: [0, 2, -2, 0],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="text-blue-600"
                  >
                    {feature.icon}
                  </motion.div>
                </div>
              </div>

              <h3 className="text-[22px] font-semibold text-slate-900 mb-3 leading-[1.12] tracking-[-0.01em]">
                {feature.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.55]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
