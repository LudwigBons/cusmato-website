import { ReactNode, memo } from "react";
import { CONTAINER_PADDING, CONTAINER_WIDTHS, SECTION_SPACING } from "../../lib/mobileDesignTokens";

export interface PageSectionProps {
  children: ReactNode;
  containerWidth?: keyof typeof CONTAINER_WIDTHS;
  spacing?: keyof typeof SECTION_SPACING;
  className?: string;
  background?: "white" | "light" | "dark";
}

/**
 * Reusable Page Section wrapper
 * Ensures consistent spacing, padding, and max-width across all sections
 * Based on homepage hero styling
 */
function PageSection({
  children,
  containerWidth = "standard",
  spacing = "standard",
  className = "",
  background = "white",
}: PageSectionProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-slate-50",
    dark: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  };

  return (
    <section className={`${SECTION_SPACING[spacing]} ${bgClasses[background]} ${className}`}>
      <div className={`${CONTAINER_WIDTHS[containerWidth]} mx-auto ${CONTAINER_PADDING.standard}`}>
        {children}
      </div>
    </section>
  );
}

export default memo(PageSection);
