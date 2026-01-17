import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants = {
  primary: "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md focus:ring-blue-500",
  secondary: "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:shadow-md focus:ring-slate-500",
  ghost: "text-slate-600 hover:text-slate-900 focus:ring-slate-500",
};
const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 sm:h-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm",
  lg: "h-12 px-8 py-3 text-base",
};

function Button({ 
  children, 
  href, 
  to, 
  variant = "primary", 
  size = "md",
  external = false,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const motionProps = {
    whileHover: shouldReduceMotion || disabled ? {} : { y: -2, scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
    whileTap: shouldReduceMotion || disabled ? {} : { y: 0, scale: 0.98, transition: { duration: 0.15 } },
  };

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <motion.a
          href={href}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.a href={href} className={classes} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

export default memo(Button);
