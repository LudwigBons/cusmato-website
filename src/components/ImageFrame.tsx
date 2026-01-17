import { memo } from "react";

interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "16/10" | "4/3" | "3/2";
  variant?: "light" | "dark";
  showGlow?: boolean;
  className?: string;
  loading?: "lazy" | "eager";
}

const aspectRatioClasses = {
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
};

function ImageFrame({
  src,
  alt,
  aspectRatio = "16/10",
  variant = "light",
  showGlow = false,
  className = "",
  loading = "lazy",
}: ImageFrameProps) {
  const borderClass = variant === "dark" ? "border-white/10" : "border-blue-200/40";
  const shadowClass =
    variant === "dark"
      ? "shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      : "shadow-[0_30px_90px_rgba(0,0,0,0.25)]";

  return (
    <div className={`relative w-full ${className}`}>
      {/* Subtle blue glow behind image */}
      {showGlow && (
        <div
          className="absolute -inset-4 lg:-inset-6 bg-blue-400/15 rounded-[32px] blur-2xl -z-10 opacity-60"
          style={{
            animation: "image-glow-breathe 8s ease-in-out infinite",
          }}
        />
      )}

      {/* Image Frame */}
      <div
        className={`relative rounded-[28px] lg:rounded-[32px] overflow-hidden ${shadowClass} border ${borderClass} bg-slate-100`}
      >
        <div className={aspectRatioClasses[aspectRatio]}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading={loading}
            decoding="async"
          />
          {/* Dark gradient overlay for premium look */}
          {variant === "dark" && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ImageFrame);
