// ShowcaseSection.tsx - Reusable wrapper voor showcase secties (500px hoog)

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ShowcaseSectionProps {
  children: ReactNode;
  reverse?: boolean;
  background?: "white" | "slate";
}

export default function ShowcaseSection({
  children,
  reverse = false,
  background = "white",
}: ShowcaseSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-24 ${background === "slate" ? "bg-slate-50/50" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 xl:gap-20 items-center min-h-0 lg:min-h-[500px] lg:h-[500px] ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}