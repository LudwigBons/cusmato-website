import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

interface LaptopMockupProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function LaptopMockup({ 
  className = "", 
  imageSrc = "/dashboard.png",
  imageAlt = "Cusmato dashboard - AI klantenservice automatisering"
}: LaptopMockupProps) {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.4 : 1.2, 
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={shouldReduceMotion ? {} : {
        rotateX: 2,
        rotateY: -1,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle blue radial glow behind mockup */}
      <div 
        className="absolute -inset-8 -z-10 opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
          // REMOVED filter: blur(40px) for scroll performance - using static gradient instead
        }}
      />

      {/* MacBook-style Laptop Frame */}
      <div className="relative">
        {/* Screen Section */}
        <div 
          className="relative bg-slate-900 rounded-t-[8px] rounded-b-[2px] px-[3px] pt-[3px] pb-[8px]"
          style={{
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Screen Bezel */}
          <div className="relative bg-black rounded-t-[5px] rounded-b-[1px] overflow-hidden">
            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-900 rounded-full z-10" />
            
            {/* Screen Content */}
            <div 
              className="relative bg-white"
              style={{ aspectRatio: "16/10" }}
            >
              {/* Skeleton Placeholder */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse">
                  <div className="p-4 space-y-3">
                    <div className="h-3 bg-slate-300 rounded w-3/4" />
                    <div className="h-2 bg-slate-300 rounded w-full" />
                    <div className="h-2 bg-slate-300 rounded w-5/6" />
                    <div className="mt-4 space-y-2">
                      <div className="h-16 bg-slate-300 rounded-lg" />
                      <div className="h-16 bg-slate-300 rounded-lg" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error Fallback */}
              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="h-2 bg-blue-200 rounded w-32 mx-auto" />
                  </div>
                </div>
              )}

              {/* Dashboard Screenshot */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(false);
                }}
                style={{ aspectRatio: "16/10" }}
              />

              {/* Subtle screen reflection overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Base/Keyboard Section */}
        <div 
          className="relative bg-slate-800 rounded-b-[20px] h-[18px] mt-[-2px]"
          style={{
            boxShadow: `
              0 10px 25px -5px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(0, 0, 0, 0.1),
              inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          {/* Trackpad area indicator */}
          <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[120px] h-[8px] bg-slate-900/60 rounded-full" />
        </div>

        {/* Hover shadow enhancement */}
        <motion.div
          className="absolute -inset-4 -z-10 rounded-2xl opacity-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, transparent 70%)",
            // REMOVED filter: blur(20px) for scroll performance
          }}
          whileHover={shouldReduceMotion ? {} : {
            opacity: 1,
            transition: { duration: 0.3 }
          }}
        />
      </div>
    </motion.div>
  );
}
