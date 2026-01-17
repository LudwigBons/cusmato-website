import { Suspense, lazy, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ImageFrame from "./ImageFrame";
import HeroTicketOverlay from "./HeroTicketOverlay";

const HeroCodeAnimation = lazy(() => import("./HeroCodeAnimation"));

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full order-first lg:order-last">
      {/* Container with correct stacking */}
      <div className="relative w-full lg:max-w-[600px] lg:ml-auto">
        {/* Background glow - z-0 */}
        <div className="absolute -inset-8 lg:-inset-12 bg-blue-400/15 rounded-[32px] blur-3xl -z-0 opacity-60" />

        {/* Image Card - z-10 */}
        <motion.div
          className="relative z-10"
          initial={shouldReduceMotion ? {} : { opacity: 1, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageFrame
            src="/Automatiseer je klantenservice.webp"
            alt="Automatiseer je klantenservice met Cusmato"
            aspectRatio="16/10"
            variant="dark"
            showGlow={false}
            loading="eager"
            className="lg:min-h-[420px]"
          />
        </motion.div>

        {/* Ticket Overlay - z-20 (desktop, half overlapping) */}
        <div className="hidden lg:block absolute z-20 right-0 top-[45%] -translate-y-1/2 translate-x-[-32px]">
          <HeroTicketOverlay />
        </div>

        {/* Code Animation - z-[15] (desktop, behind/next to ticket) */}
        <div className="hidden lg:block absolute z-[15] right-[-60px] top-[65%] -translate-y-1/2">
          <Suspense fallback={null}>
            <HeroCodeAnimation />
          </Suspense>
        </div>
      </div>

      {/* Mobile: Ticket and Code below image */}
      <div className="lg:hidden mt-6 space-y-6">
        <div className="flex justify-center">
          <HeroTicketOverlay />
        </div>
        <div className="flex justify-center">
          <Suspense fallback={null}>
            <HeroCodeAnimation />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroVisual);
