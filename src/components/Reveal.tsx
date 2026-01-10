import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport, transition } from "../lib/motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={fadeUp}
      transition={{
        duration: shouldReduceMotion ? 0 : transition.duration,
        ease: transition.ease,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      style={{ willChange: shouldReduceMotion ? 'auto' : 'transform, opacity' }}
      className={`block w-full ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}