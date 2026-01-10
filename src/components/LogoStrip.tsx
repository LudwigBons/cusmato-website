import { useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function LogoStrip() {
  const shouldReduceMotion = useReducedMotion();
  
  // Logos in order for balanced display
  const logos = [
    { name: "Shopify", path: "/logo-shopify.png" },
    { name: "Zendesk", path: "/logo-zendesk.png" },
    { name: "Bol.com", path: "/Bol-logo-short.png" },
    { name: "Intercom", path: "/Intercom-logo.png" },
    { name: "Outlook", path: "/logo-outlook.png" },
    { name: "Gmail", path: "/logo-gmail.png" },
    { name: "WooCommerce", path: "/Woo-logo-long.png" },
    { name: "Magento", path: "/logo-magento.png" },
    { name: "Mailchimp", path: "/logo-mailchimp.png" },
  ];

  // Duplicate logos 3 times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="pt-12 md:pt-14 pb-8 md:pb-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-8">
            <p className="text-[14px] md:text-[15px] text-slate-500 leading-[1.55]">
              Werkt naadloos met tools die je al gebruikt
            </p>
          </div>
        </Reveal>

        {/* Marquee Container with gradient masks */}
        <div className="relative h-12 md:h-14 overflow-hidden">
          {/* Left gradient fade - smoother entry */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right gradient fade - smoother exit */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex items-center h-full overflow-hidden">
            {shouldReduceMotion ? (
              // Static grid for reduced motion
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 w-full">
                {logos.map((logo, index) => (
                  <div
                    key={`logo-static-${index}`}
                    className="flex items-center justify-center logo-item"
                    style={{ width: '120px' }}
                  >
                    <img
                      src={logo.path}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-8 md:h-9 w-auto object-contain max-w-full"
                    />
                  </div>
                ))}
              </div>
            ) : (
              // Animated marquee
              <div 
                className="flex items-center whitespace-nowrap logo-marquee-scroll"
                style={{
                  gap: '36px',
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex items-center justify-center flex-shrink-0 logo-item"
                    style={{
                      width: '150px', // Desktop: shows ~7 logos
                    }}
                  >
                    <img
                      src={logo.path}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="h-8 md:h-9 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
