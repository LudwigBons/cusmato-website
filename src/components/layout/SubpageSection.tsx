import { ReactNode } from "react";

interface SubpageSectionProps {
  children: ReactNode;
  className?: string;
  containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-[1200px]",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export default function SubpageSection({
  children,
  className = "",
  containerMaxWidth = "xl",
}: SubpageSectionProps) {
  return (
    <section className={`mb-20 sm:mb-28 lg:mb-32 ${className}`}>
      <div className={`${maxWidths[containerMaxWidth]} mx-auto sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  );
}
