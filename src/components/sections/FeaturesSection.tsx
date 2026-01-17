import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();
  const features = [
    {
      title: "Beantwoordt klanten 24/7",
      description: "Automatische afhandeling van orders, retouren en vragen. Je klanten krijgen altijd snel en accuraat antwoord, dag en nacht.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Werkt met jouw systemen",
      description: "API's, webhooks, supporttools en e-mail. Cusmato integreert naadloos met je bestaande stack zonder gedoe.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      title: "Leert jouw tone of voice",
      description: "AI past zich aan aan jouw merk en wordt steeds slimmer. Elke conversatie leert Cusmato beter communiceren in jouw stijl.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              AI die je klantenservice écht overneemt
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cusmato handelt klantvragen zelfstandig af, terwijl jij de controle houdt.
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.18 } }}
              className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow duration-180"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
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
              Bekijk alle functies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}