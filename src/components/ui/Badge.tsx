import { memo, ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "success" | "warning" | "info" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
};

const sizes = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-2.5 py-1 text-xs",
};

function Badge({ children, variant = "neutral", size = "md", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}

export default memo(Badge);
