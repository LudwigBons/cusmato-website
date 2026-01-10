// Motion variants - SSR safe with premium easing
const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeUp = {
  initial: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -20,
  },
};

export const fadeUpSmall = {
  initial: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.15,
    },
  },
};

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
};

// Premium cinematic easing
export const transition = {
  duration: prefersReducedMotion ? 0 : 0.8,
  ease: [0.16, 1, 0.3, 1] as const, // Smooth, cinematic ease-out
};

export const transitionFast = {
  duration: prefersReducedMotion ? 0 : 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
};

// Spring-like animation for buttons and micro-interactions
export const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

// Helper to check for reduced motion (client-side only)
export const getReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};