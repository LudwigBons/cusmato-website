import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedHeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base background */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* Blob 1 - Drifts left to right */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-90"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 40, 0],
                opacity: [0.85, 1, 0.85],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Drifts bottom to top */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-85"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          bottom: "15%",
          right: "15%",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -40, 0],
                opacity: [0.85, 1, 0.85],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Darker gradient for depth - Mostly static */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.14) 0%, transparent 60%)",
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                opacity: [0.5, 0.6, 0.5],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Very faint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
