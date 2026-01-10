import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";

const integrations = [
  { name: "Gmail", logo: "/logo-gmail.png" },
  { name: "Outlook", logo: "/logo-outlook.png" },
  { name: "Intercom", logo: "/Intercom-logo.png" },
  { name: "Zendesk", logo: "/logo-zendesk.png" },
  { name: "Shopify", logo: "/logo-shopify.png" },
  { name: "WooCommerce", logo: "/Woo-logo-long.png" },
  { name: "Magento", logo: "/logo-magento.png" },
  { name: "Bol.com", logo: "/Bol-logo-short.png" },
  { name: "Mailchimp", logo: "/logo-mailchimp.png" },
  { name: "WhatsApp", logo: "/logo-gmail.png" }, // Placeholder
  { name: "Shopify Plus", logo: "/logo-shopify.png" },
  { name: "Zendesk Chat", logo: "/logo-zendesk.png" },
];

export default function IntegrationsWall() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img
          src="/cusmato-api-integrations-flow.webp"
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-[36px] sm:text-[40px] md:text-[44px] font-semibold text-slate-900 mb-4 leading-[1.12] tracking-[-0.01em] max-w-[60ch] mx-auto">
              Werkt met jouw tools
            </h2>
            <p className="text-[17px] text-slate-500 leading-[1.55] max-w-[60ch] mx-auto">
              Cusmato koppelt direct aan je bestaande support- en e-commerce tools.
            </p>
          </div>
        </Reveal>

        {/* Integration Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -2, 0],
                    }
              }
              transition={{
                opacity: { duration: 0.4, delay: index * 0.05 },
                y: shouldReduceMotion
                  ? { duration: 0.4, delay: index * 0.05 }
                  : {
                      duration: 4 + (index % 3) * 0.5,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
              }}
              whileHover={shouldReduceMotion ? {} : { 
                rotate: 2,
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="bg-white/95 rounded-xl border border-slate-200/80 p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-20"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="max-h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <p className="text-[15px] text-slate-500 leading-[1.55]">
              +100 andere integraties beschikbaar op aanvraag
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
