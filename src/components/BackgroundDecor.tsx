import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundDecor() {
  const shouldReduceMotion = useReducedMotion();

  return (
    /* Changed from fixed to absolute where possible - but keep fixed for page-level backgrounds */
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ willChange: 'auto' as const, transform: 'translateZ(0)' }}>
      {/* Base gradient layer - static */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      {/* Radial gradient glows - static, no blur */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-cyan-100/15 rounded-full translate-x-1/2 -translate-y-1/2" />

      {/* Vignette - static */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.015) 100%),
            radial-gradient(ellipse at top, transparent 0%, rgba(0,0,0,0.01) 100%)
          `,
        }}
      />

      {/* Subtle grid texture - static, no animation on background-position */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle noise - tiny repeating PNG data URL */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVQYV2NkYGD4TwAzKTUwUjlgA+P///8ZkQCG//8ZGJgYGP7//8+AZOP//////w8MDAwMjAwMDP//MzAwAAAzZwX2ZHZ4qwAAAABJRU5ErkJggg==")`,
          backgroundSize: "4px 4px",
          willChange: "auto",
        }}
      />

      {/* Animated gradient drift - GPU-optimized transform only */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.015, 0.025, 0.015],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}
