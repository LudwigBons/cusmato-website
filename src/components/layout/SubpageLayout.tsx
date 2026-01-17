import { ReactNode } from "react";

interface SubpageLayoutProps {
  children: ReactNode;
  variant?: "light" | "dark";
}

export default function SubpageLayout({ children, variant = "light" }: SubpageLayoutProps) {
  if (variant === "dark") {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Dark background with gradient + glow blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-400/8 rounded-full blur-[140px] pointer-events-none" />
        
        <main className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Subtle light blue glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />
      </div>
      
      <main className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {children}
      </main>
    </div>
  );
}
