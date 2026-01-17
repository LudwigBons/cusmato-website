import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

export default function IntegrationsSection() {
  const shouldReduceMotion = useReducedMotion();
  const integrations = [
    { name: "Gmail", logo: "/logo-gmail.png" },
    { name: "Outlook", logo: "/logo-outlook.png" },
    { name: "Shopify", logo: "/logo-shopify.png" },
    { name: "Zendesk", logo: "/logo-zendesk.png" },
    { name: "Magento", logo: "/logo-magento.png" },
    { name: "Mailchimp", logo: "/logo-mailchimp.png" }, // Placeholder voor WooCommerce
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Naadloos te koppelen met jouw tools
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-prose mx-auto mb-6">
              Cusmato sluit direct aan op de tools die je al gebruikt, zonder complexe implementaties.
            </p>
          </div>
        </Reveal>

        {/* Logo Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 mb-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, opacity: 1 }}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} integratie`}
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="text-sm text-slate-500 text-center mb-6">
            100+ andere integraties beschikbaar op aanvraag
          </p>
          {/* CTA */}
          <div className="text-center">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                to="/integraties"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
              >
                Bekijk alle integraties
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
