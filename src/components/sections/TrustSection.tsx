import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function TrustSection() {
  const shouldReduceMotion = useReducedMotion();
  const trustPoints = [
    {
      title: "In-house AI",
      description: "Zelf ontwikkeld systeem met volledige controle en flexibiliteit.",
    },
    {
      title: "Controle & approval mogelijk",
      description: "Kies zelf: automatisch of eerst goedkeuren voordat antwoorden worden verstuurd.",
    },
    {
      title: "Veilige verwerking",
      description: "Beveiliging en gegevensrichtlijnen zijn volledig ingebouwd.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Veilig en betrouwbaar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jij houdt de controle, terwijl Cusmato automatiseert.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.18 } }}
              className="text-center bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow duration-180"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <div className="text-center">
            <Link
              to="/ai-helpdesk"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
            >
              Meer over Cusmato
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}