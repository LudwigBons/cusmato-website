interface GlowTransitionProps {
  className?: string;
}

export default function GlowTransition({ className = "" }: GlowTransitionProps) {
  return (
    <div className={`relative h-32 sm:h-40 lg:h-48 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30" />
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(147, 197, 253, 0.2) 0%, transparent 70%)"
        }}
      />
    </div>
  );
}
