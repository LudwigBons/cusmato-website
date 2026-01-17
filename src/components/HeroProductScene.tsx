import { motion, useReducedMotion } from "framer-motion";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import HeroVisualStack from "./HeroVisualStack";
import Button from "./ui/Button";
import { ROUTES, CTAS } from "../lib/constants";

export default function HeroProductScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Hero Background */}
      <AnimatedHeroBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-20 sm:pb-24 md:pb-32 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 h-full items-center">
          
          {/* LEFT SIDE - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline - Calm, premium */}
            <h1 className="text-4xl sm:text-[40px] md:text-[44px] lg:text-[52px] font-semibold text-slate-900 leading-[1.05] tracking-[-0.01em] mb-4 sm:mb-6">
              Automatiseer je klantenservice met{" "}
              <span className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-[0.9em] h-[0.9em] object-contain animate-spin-slow"
                  style={{ marginRight: "8px" }}
                  aria-hidden="true"
                />
                <span className="text-blue-600">Cusmato</span>
              </span>
            </h1>

            {/* Subtext - Calm, muted */}
            <p className="text-base sm:text-[15px] md:text-[16px] lg:text-[17px] text-slate-500 max-w-[28rem] sm:max-w-[560px] mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Cusmato automatiseert e-mail- en chatvragen voor e-commerce, 24/7, in jouw tone of voice, met controle wanneer je het wil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button to={CTAS.tryFree.href} variant="primary" size="md">
                {CTAS.tryFree.text}
              </Button>
              <Button href={CTAS.startOnboarding.href} variant="secondary" size="md" external>
                {CTAS.startOnboarding.text}
              </Button>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Hero Visual Stack (image + ticket + 2 code snippets) */}
          <HeroVisualStack />
        </div>
      </div>
    </section>
  );
}
