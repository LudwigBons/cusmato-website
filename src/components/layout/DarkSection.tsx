import { ReactNode } from "react";

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "tight" | "standard" | "loose";
}

const spacingClasses = {
  tight: "mb-12 sm:mb-16",
  standard: "mb-20 sm:mb-28 lg:mb-32",
  loose: "mb-24 sm:mb-32 lg:mb-40",
};

/**
 * DarkSection - Section wrapper with consistent spacing for dark pages
 * Matches InHouseAIPage section spacing exactly
 */
export default function DarkSection({
  children,
  className = "",
  spacing = "standard",
}: DarkSectionProps) {
  // If className contains mb-0, override spacing
  const hasMb0 = className.includes("mb-0");
  const finalSpacing = hasMb0 ? "" : spacingClasses[spacing];
  
  return (
    <section className={`${finalSpacing} ${className}`}>
      {children}
    </section>
  );
}
