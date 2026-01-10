import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type BackgroundVariant = "default" | "hero" | "dark" | "pricing" | "faq" | "integrations";

interface BackgroundCanvasProps {
  variant?: BackgroundVariant;
  children?: ReactNode;
  className?: string;
}

export default function BackgroundCanvas({ variant = "default", children, className = "" }: BackgroundCanvasProps) {
  const shouldReduceMotion = useReducedMotion();

  // Glow configurations per variant
  const glowConfig = {
    default: {
      topLeft: { color: "rgba(59, 130, 246, 0.04)", size: "800px", x: "-50%", y: "-50%" },
      topRight: { color: "rgba(147, 197, 253, 0.03)", size: "900px", x: "50%", y: "-50%" },
      bottomCenter: { color: "rgba(59, 130, 246, 0.02)", size: "1000px", x: "50%", y: "50%" },
    },
    hero: {
      topLeft: { color: "rgba(59, 130, 246, 0.06)", size: "1000px", x: "-40%", y: "-40%" },
      topRight: { color: "rgba(147, 197, 253, 0.05)", size: "1100px", x: "40%", y: "-40%" },
      bottomCenter: { color: "rgba(59, 130, 246, 0.03)", size: "1200px", x: "50%", y: "60%" },
    },
    dark: {
      topLeft: { color: "rgba(59, 130, 246, 0.08)", size: "900px", x: "-50%", y: "-50%" },
      topRight: { color: "rgba(59, 130, 246, 0.06)", size: "1000px", x: "50%", y: "-50%" },
      bottomCenter: { color: "rgba(147, 197, 253, 0.04)", size: "1100px", x: "50%", y: "50%" },
    },
    pricing: {
      topLeft: { color: "rgba(59, 130, 246, 0.05)", size: "850px", x: "-50%", y: "-50%" },
      topRight: { color: "rgba(147, 197, 253, 0.04)", size: "950px", x: "50%", y: "-50%" },
      bottomCenter: { color: "rgba(59, 130, 246, 0.03)", size: "1050px", x: "50%", y: "50%" },
    },
    faq: {
      topLeft: { color: "rgba(59, 130, 246, 0.03)", size: "750px", x: "-50%", y: "-50%" },
      topRight: { color: "rgba(147, 197, 253, 0.02)", size: "850px", x: "50%", y: "-50%" },
      bottomCenter: { color: "rgba(59, 130, 246, 0.02)", size: "950px", x: "50%", y: "50%" },
    },
    integrations: {
      topLeft: { color: "rgba(59, 130, 246, 0.05)", size: "900px", x: "-50%", y: "-50%" },
      topRight: { color: "rgba(147, 197, 253, 0.04)", size: "1000px", x: "50%", y: "-50%" },
      bottomCenter: { color: "rgba(59, 130, 246, 0.03)", size: "1100px", x: "50%", y: "50%" },
    },
  };

  const glows = glowConfig[variant];

  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none ${className}`} style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />

      {/* Radial gradient glows - REMOVED blur-3xl for scroll performance, using static gradients */}
      <div
        className="absolute rounded-full"
        style={{
          width: glows.topLeft.size,
          height: glows.topLeft.size,
          background: `radial-gradient(circle, ${glows.topLeft.color.replace('0.04', '0.08').replace('0.03', '0.06').replace('0.02', '0.04')} 0%, transparent 70%)`,
          top: 0,
          left: 0,
          transform: `translate(${glows.topLeft.x}, ${glows.topLeft.y})`,
          opacity: 0.6,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: glows.topRight.size,
          height: glows.topRight.size,
          background: `radial-gradient(circle, ${glows.topRight.color.replace('0.03', '0.06').replace('0.02', '0.04')} 0%, transparent 70%)`,
          top: 0,
          right: 0,
          transform: `translate(${glows.topRight.x}, ${glows.topRight.y})`,
          opacity: 0.6,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: glows.bottomCenter.size,
          height: glows.bottomCenter.size,
          background: `radial-gradient(circle, ${glows.bottomCenter.color.replace('0.02', '0.04').replace('0.03', '0.06')} 0%, transparent 70%)`,
          bottom: 0,
          left: "50%",
          transform: `translate(${glows.bottomCenter.x}, ${glows.bottomCenter.y})`,
          opacity: 0.6,
        }}
      />

      {/* Subtle grid texture (32px) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle noise overlay - REMOVED mix-blend-mode for scroll performance */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Hn3AAAAAXNSR0IArs4c6QAAAB9JREFUGFdjZGRkYGBgYGBgYGBgYGBgYGBgYGBgYAAK/wB+gA/0/wAAAABJRU5ErkJggg==")`,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Animated gradient drift */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.01, 0.02, 0.01],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.008) 100%)
          `,
        }}
      />

      {children}
    </div>
  );
}
