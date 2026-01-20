import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface DarkCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * DarkCard - Card component for dark sections
 * Matches InHouseAIPage card styling exactly:
 * - bg-white/5 backdrop-blur-sm
 * - rounded-xl border border-white/10
 * - shadow-sm hover:shadow-md
 */
export default function DarkCard({ children, className = "", hover = true }: DarkCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardClasses = "bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all p-8 lg:p-9 h-full flex flex-col";

  if (hover) {
    return (
      <motion.div
        whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
        className={`${cardClasses} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${cardClasses} ${className}`}>
      {children}
    </div>
  );
}
