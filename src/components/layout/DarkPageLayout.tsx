import { ReactNode } from "react";

interface DarkPageLayoutProps {
  children: ReactNode;
  noBottomPadding?: boolean;
}

/**
 * DarkPageLayout - Wrapper for pages with dark blue gradient background
 * Includes full-bleed background fix for mobile (breaks out of parent padding)
 */
export default function DarkPageLayout({ children, noBottomPadding = false }: DarkPageLayoutProps) {
  return (
    <div className="relative -mx-5 sm:mx-0">
      {/* Dark background with gradient + glow blobs - full-bleed on mobile, breaks out of parent padding */}
      {/* Background only covers main content, not extra space below */}
      <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/8 rounded-full blur-[140px] pointer-events-none hidden md:block" />
      <main className={`relative z-10 pt-20 sm:pt-24 px-5 sm:px-0 ${noBottomPadding ? 'pb-0' : 'pb-12 sm:pb-16'}`}>
        {children}
      </main>
    </div>
  );
}
