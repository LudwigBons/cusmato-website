/**
 * Mobile Design System Tokens
 * Based on homepage hero section styling
 */

// Container max-widths
export const CONTAINER_WIDTHS = {
  hero: "max-w-[1280px]",
  standard: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-6xl",
} as const;

// Container padding (mobile-first) - match hero exactly
// Hero uses: sm:px-6 md:px-8 lg:px-12 (no px-4, relies on parent spacing)
// For standard sections, use: px-4 sm:px-6 lg:px-8
export const CONTAINER_PADDING = {
  hero: "sm:px-6 md:px-8 lg:px-12", // Hero style (no px-4)
  standard: "px-4 sm:px-6 lg:px-8", // Standard sections (with px-4 for mobile safety)
} as const;

// Section vertical spacing
export const SECTION_SPACING = {
  tight: "py-12 sm:py-16 lg:py-20",
  standard: "py-16 sm:py-20 md:py-24 lg:py-28",
  hero: "pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-20 sm:pb-24 md:pb-32 lg:pb-36",
} as const;

// Grid gaps
export const GRID_GAPS = {
  tight: "gap-6 sm:gap-8 lg:gap-12",
  standard: "gap-8 sm:gap-12 lg:gap-16",
  hero: "gap-8 sm:gap-12 lg:gap-20",
} as const;

// Typography - Headings
export const TYPOGRAPHY = {
  h1: "text-3xl sm:text-[40px] md:text-[44px] lg:text-[52px] font-semibold text-slate-900 leading-[1.1] sm:leading-[1.05] tracking-[-0.01em]",
  h2: "text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-[1.15] tracking-tight",
  h3: "text-2xl sm:text-3xl font-semibold text-slate-900 leading-[1.15] tracking-tight",
  body: "text-base sm:text-[15px] md:text-[16px] lg:text-[17px] text-slate-500 leading-relaxed",
  bodyLarge: "text-base sm:text-lg text-slate-600 leading-relaxed",
} as const;

// Text max-widths for readability
export const TEXT_MAX_WIDTH = {
  body: "max-w-[28rem] sm:max-w-[560px]",
  bodyLarge: "max-w-[28rem] sm:max-w-none",
} as const;

// Button sizing (consistent across site)
export const BUTTON_SIZING = {
  container: "flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start w-full sm:w-auto",
  button: "inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full font-semibold text-sm",
} as const;

// Image styling
export const IMAGE_STYLING = {
  rounded: "rounded-2xl",
  shadow: "shadow-lg",
  border: "border border-slate-200",
} as const;
