import { memo, ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  default: "bg-white border-slate-200 shadow-sm",
  elevated: "bg-white border-slate-200 shadow-md",
  outlined: "bg-white border-slate-300",
};

function Card({ children, variant = "default", hover = false, className = "", onClick }: CardProps) {
  const baseStyles = `rounded-xl border p-6 ${variants[variant]} ${hover ? "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer" : ""} ${className}`;

  if (onClick) {
    return (
      <div className={baseStyles} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick()}>
        {children}
      </div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

export default memo(Card);
