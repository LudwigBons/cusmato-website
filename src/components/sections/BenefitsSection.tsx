import { memo } from "react";
import { Link } from "react-router-dom";
import PremiumImage from "../PremiumImage";

function BenefitsSection() {
  const stats = [
    {
      icon: "clock",
      value: "Tijd per ticket omlaag",
      label: "Snellere afhandeling",
    },
    {
      icon: "zap",
      value: "Snellere first response",
      label: "Directe reacties",
    },
    {
      icon: "check",
      value: "Minder handmatige follow-ups",
      label: "Meer automatisering",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "zap":
        return (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "check":
        return (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50/70 to-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Clean Premium Container */}
        <div className="clean-benefits-container relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/70 shadow-sm p-6 sm:p-10 lg:p-14">
          {/* Subtle Background Pattern Layer */}
          <div className="absolute inset-0 z-0 opacity-[0.02] sm:opacity-[0.035] pointer-events-none">
            <img
              src="/cusmato-api-integrations-flow.webp"
              alt=""
              className="w-full h-full object-cover"
              style={{
                filter: "grayscale(1) contrast(1.1)",
                maskImage: "radial-gradient(circle at 30% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, transparent 65%)",
                WebkitMaskImage: "radial-gradient(circle at 30% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, transparent 65%)",
              }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Single Soft Blue Glow Layer */}
          <div
            className="absolute top-0 right-1/4 w-[500px] h-[500px] -z-10"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.10) 0%, transparent 70%)",
              filter: "blur(90px)",
              transform: "translateY(-30%)",
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left: Stats */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
                  Bespaar direct tijd en supportkosten
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                  Cusmato handelt tickets sneller af en verlaagt de workload van je team. Automatiseer waar mogelijk, handmatig waar nodig.
                </p>
                
                {/* Clean Premium Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="clean-benefit-card bg-white/80 backdrop-blur-sm rounded-[16px] border border-slate-200/70 p-4 sm:p-5 transition-all duration-200 hover:translate-y-[-2px] hover:border-blue-400/40 hover:shadow-[0_8px_24px_rgba(2,6,23,0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon Badge */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 ring-1 ring-blue-500/20 flex items-center justify-center">
                          {getIcon(stat.icon)}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-sm text-slate-600">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/probeer-14-dagen-gratis"
                  className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-11 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
                >
                  Probeer 14 dagen gratis
                </Link>
              </div>

              {/* Right: Premium Image Frame with Offset */}
              <div className="order-1 lg:order-2">
                <PremiumImage
                  src="/Real-Time Support Insights.webp"
                  alt="Real-time support insights en analytics"
                  aspectRatio="16/9"
                  maxWidth="xl"
                  variant="light"
                  showGlow={true}
                  offset={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);
