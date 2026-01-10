import { ReactNode, CSSProperties } from "react";
import { cn } from "../lib/utils";

type SectionVariant = "default" | "soft" | "contrast" | "dark";

interface SectionProps {
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  noPadding?: boolean;
  style?: CSSProperties;
}

export default function Section({
  variant = "default",
  children,
  className = "",
  containerClassName = "",
  noPadding = false,
  style,
}: SectionProps) {
  const variantStyles = {
    default: "bg-white",
    soft: "bg-slate-50/40",
    contrast: "bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40",
    dark: "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900",
  };

  const basePadding = noPadding ? "" : "py-12 sm:py-16 lg:py-20";

  // Apply content-visibility to below-fold sections (not hero)
  const shouldUseContentVisibility = className.includes("cv-auto") || (!className.includes("hero") && !className.includes("no-cv"));

  return (
    <section 
      className={cn(
        "relative", 
        variantStyles[variant], 
        basePadding, 
        shouldUseContentVisibility && "cv-auto",
        className
      )} 
      style={style}
    >
      {/* Subtle section divider (top fade) */}
      {variant !== "default" && (
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-30"
          style={{
            background: "linear-gradient(to right, transparent, rgba(15, 23, 42, 0.1), transparent)",
          }}
        />
      )}

      {/* Section background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {variant === "soft" && (
          <>
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />
            {/* Removed blur-3xl for performance - replaced with static gradient */}
            <div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.04]"
              style={{
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
              }}
            />
          </>
        )}
        {variant === "contrast" && (
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />
        )}
      </div>

      {/* Content container */}
      <div className={cn("relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
