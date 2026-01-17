import { memo, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

function Container({ children, size = "xl", className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default memo(Container);
