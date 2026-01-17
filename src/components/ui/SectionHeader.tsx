import { memo, ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-slate-600 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default memo(SectionHeader);
