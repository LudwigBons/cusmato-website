import { memo } from "react";

interface PremiumImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "21/9";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "light" | "dark";
  showGlow?: boolean;
  glowPosition?: "center" | "top" | "bottom";
  offset?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-[480px]",
  md: "max-w-[640px]",
  lg: "max-w-[720px]",
  xl: "max-w-[860px]",
  "2xl": "max-w-[960px]",
};

const aspectRatioClasses = {
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "21/9": "aspect-[21/9]",
};

function PremiumImage({
  src,
  alt,
  className = "",
  aspectRatio = "16/9",
  maxWidth = "lg",
  variant = "light",
  showGlow = true,
  glowPosition = "center",
  offset = false,
}: PremiumImageProps) {
  const borderClass = variant === "dark" ? "border-white/10" : "border-slate-200/70 md:border-slate-200/70";
  // Mobile: very subtle shadow or none, desktop: original shadow
  const shadowClass =
    variant === "dark"
      ? "shadow-none md:shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      : "shadow-none md:shadow-[0_30px_90px_rgba(0,0,0,0.25)]";

  const glowPositions = {
    center: "-inset-12",
    top: "-inset-12 -top-16",
    bottom: "-inset-12 -bottom-16",
  };

  return (
    <div
      className={`relative w-full ${maxWidthClasses[maxWidth]} mx-auto ${offset ? "lg:-mt-6 lg:translate-y-0" : ""} ${className}`}
    >
      {/* Glow Blob Behind Image - hidden on mobile */}
      {showGlow && (
        <div
          className={`hidden md:block absolute ${glowPositions[glowPosition]} -z-10 opacity-[0.15] sm:opacity-[0.20] lg:opacity-[0.25]`}
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.20) 0%, transparent 70%)",
            filter: "blur(110px)",
            animation: "workflow-glow-breathe 15s ease-in-out infinite",
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
        />
      )}

      {/* Premium Device Frame */}
      <div
        className={`premium-image-frame relative rounded-3xl overflow-hidden ${shadowClass} border ${borderClass} ring-1 ${variant === "dark" ? "ring-white/10" : "ring-slate-200/30"}`}
      >
        <div className={aspectRatioClasses[aspectRatio]}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={aspectRatio === "16/9" ? 1600 : aspectRatio === "16/10" ? 1600 : aspectRatio === "4/3" ? 1200 : 2100}
            height={aspectRatio === "16/9" ? 900 : aspectRatio === "16/10" ? 1000 : aspectRatio === "4/3" ? 900 : 900}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(PremiumImage);
