import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../Reveal";

export default function PricingBottomCTA() {
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");

  const content = isEnglish
    ? {
        title: "Ready to get started with Cusmato?",
        subtitle: "Go live fast and automate support in 14 days.",
        bullets: [
          { text: "Quick setup" },
          { text: "Works with your inbox" },
          { text: "Full control" },
        ],
        primaryButton: {
          text: "Try 14 days for free",
          href: "/en/try-14-days-for-free",
        },
        secondaryButton: {
          text: "Start onboarding",
          href: "https://www.cusmato.app/welkom",
          external: true,
        },
      }
    : {
        title: "Klaar om te starten met Cusmato?",
        subtitle: "Plan je onboarding en automatiseer je support in 14 dagen.",
        bullets: [
          { text: "Snel live" },
          { text: "Werkt met je inbox" },
          { text: "Volledige controle" },
        ],
        primaryButton: {
          text: "Probeer 14 dagen gratis",
          href: "/probeer-14-dagen-gratis",
        },
        secondaryButton: {
          text: "Start onboarding",
          href: "https://www.cusmato.app/welkom",
          external: true,
        },
      };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text + Bullets */}
            <div className="order-2 lg:order-1">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 leading-[1.15]">
                  {content.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                  {content.subtitle}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="space-y-3 mb-8">
                  {content.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-base text-slate-700">{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      to={content.primaryButton.href}
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      {content.primaryButton.text}
                    </Link>
                  </motion.div>
                  {content.secondaryButton && (
                    <motion.a
                      href={content.secondaryButton.href}
                      target={content.secondaryButton.external ? "_blank" : undefined}
                      rel={content.secondaryButton.external ? "noopener noreferrer" : undefined}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors"
                    >
                      {content.secondaryButton.text}
                    </motion.a>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: Mini Card */}
            <div className="order-1 lg:order-2">
              <Reveal delay={0.1}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-sm">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">
                      {isEnglish ? "Starting from" : "Vanaf"}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      €49<span className="text-lg font-medium text-slate-600">/maand</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      {isEnglish
                        ? "Modular pricing, pay for what you use"
                        : "Modulaire prijzen, betaal voor wat je gebruikt"}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
