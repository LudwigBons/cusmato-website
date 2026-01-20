import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  className?: string;
}

const maxWidths = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-[1200px]",
  "2xl": "max-w-7xl",
  "3xl": "max-w-[1400px]",
  full: "max-w-full",
};

/**
 * SectionContainer - Consistent max-width container with responsive padding
 * Matches InHouseAIPage styling exactly
 */
export default function SectionContainer({
  children,
  maxWidth = "xl",
  className = "",
}: SectionContainerProps) {
  return (
    <div className={`${maxWidths[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
