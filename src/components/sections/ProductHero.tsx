import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import LaptopMockup from "../LaptopMockup";

export default function ProductHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white" />
        
        {/* Radial gradients */}
        {/* Removed blur-3xl for performance - replaced with static gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/25 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-100/20 rounded-full translate-x-1/2 translate-y-1/2 opacity-60" />
        
        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Hn3AAAAAXNSR0IArs4c6QAAAB9JREFUGFdjZGRkYGBgYGBgYGBgYGBgYGBgYGBgYAAK/wB+gA/0/wAAAABJRU5ErkJggg==")`,
            backgroundSize: "4px 4px",
          }}
        />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.02) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-[44px] md:text-[52px] lg:text-[60px] font-semibold text-slate-900 leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-6 max-w-[28ch] mx-auto lg:mx-0">
              Wat Cusmato precies doet
            </h1>
            
            <p className="text-base md:text-[18px] text-slate-500 leading-relaxed mb-8 sm:mb-10 max-w-[28rem] sm:max-w-[60ch] mx-auto lg:mx-0">
              Cusmato automatiseert klantantwoorden via e-mail en chat. In jouw tone of voice, met volledige controle wanneer je het wil.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Start 14 dagen gratis
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={shouldReduceMotion ? {} : { 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <a
                  href="https://www.cusmato.app/welkom"
                  className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  Bekijk demo
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Laptop Mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <LaptopMockup className="max-w-[580px] w-full" />
          </div>

          {/* Mobile Mockup */}
          <div className="lg:hidden col-span-2 mt-12 flex justify-center">
            <LaptopMockup className="max-w-md w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
