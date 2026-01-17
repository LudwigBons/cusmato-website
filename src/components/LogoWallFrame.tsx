import { memo } from "react";

interface LogoWallFrameProps {
  image: string;
  alt: string;
  variant?: "light" | "dark";
}

function LogoWallFrame({ image, alt, variant = "dark" }: LogoWallFrameProps) {
  const borderClass = variant === "dark" ? "border-white/10" : "border-slate-200/60";
  const bgClass = variant === "dark" ? "bg-slate-800/50 backdrop-blur-sm" : "bg-white/95 backdrop-blur-sm";
  const shadowClass =
    variant === "dark"
      ? "shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      : "shadow-[0_30px_90px_rgba(0,0,0,0.25)]";

  return (
    <div className="relative w-full">
      {/* Subtle blue glow around frame */}
      <div className="absolute -inset-4 bg-blue-400/10 rounded-[32px] blur-2xl -z-10 opacity-60" />
      
      {/* Logo Wall Frame */}
      <div
        className={`relative rounded-[32px] overflow-hidden ${shadowClass} border ${borderClass} ${bgClass}`}
      >
        <div className="aspect-[16/10]">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover opacity-[0.98]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(LogoWallFrame);
