// FinalCTA.tsx - Premium clean final CTA

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.05] tracking-tight">
            Klaar om je support te automatiseren?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 max-w-[28rem] sm:max-w-2xl mx-auto leading-relaxed">
            Start vandaag met Cusmato AI Helpdesk. Gratis proberen, daarna schaal je op wanneer jij er klaar voor bent.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              to="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Probeer 14 dagen gratis
            </Link>
            <a
              href="https://www.cusmato.app/welkom"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full border border-slate-300 bg-white text-slate-900 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
            >
              Plan demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}