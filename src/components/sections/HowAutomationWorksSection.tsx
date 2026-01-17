import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function HowAutomationWorksSection() {
  const shouldReduceMotion = useReducedMotion();
  
  const features = [
    {
      title: "Automated email answers",
      description: "Automatiseer 70% van je e-mailvragen zonder handmatig werk.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Chat & WhatsApp automation",
      description: "Beantwoord klantvragen 24/7 via chat en WhatsApp, direct en consistent.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Jouw tone of voice",
      description: "Elk antwoord klinkt als jouw merk, volledig getraind op jouw communicatiestijl.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Optie tot review & approval",
      description: "Kies voor volledig automatisch of review elk antwoord voor controle.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Zo werkt Cusmato
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Automatiseer klantenservice zonder kwaliteit te verliezen. Cusmato begrijpt vragen, haalt de juiste data op en verstuurt antwoorden die klinken als jouw team.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
