// FinalCTAEN.tsx - English version of premium clean final CTA with background image

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FinalCTAEN() {
  return (
    <section className="hidden md:block relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/Onderkant footer.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30" />
      </div>
      
      {/* Fade-out to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-tight">
            Ready to automate your support?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
            Start today with Cusmato AI Helpdesk. Try free, then scale up when you're ready.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
            <Link
              to="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto h-11 py-3 px-6 sm:h-10 sm:py-0 sm:px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Try 14 days for free
            </Link>
            <a
              href="https://www.cusmato.app/welkom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full max-w-[240px] sm:max-w-none sm:w-auto h-10 py-2.5 px-5 sm:py-0 sm:px-4 rounded-full border border-slate-300 bg-white text-slate-900 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              Start onboarding
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
