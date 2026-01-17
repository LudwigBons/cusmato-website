import { memo } from "react";
import { Link } from "react-router-dom";
import PremiumImage from "../PremiumImage";

function ContainedHeroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-[96px] bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center sm:text-left order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              Één inbox. Volledige controle.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[560px] mx-auto sm:mx-0">
              Beheer alle klantvragen vanuit één centrale plek. Cusmato automatiseert waar mogelijk en geeft je team de tools om uitzonderlijke service te leveren.
            </p>
            <div className="flex flex-col items-center sm:items-start gap-3">
              <Link
                to="/probeer-14-dagen-gratis"
                className="inline-flex items-center justify-center w-full sm:w-auto h-11 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
              >
                Start vandaag →
              </Link>
            </div>
          </div>

          {/* Right: Premium Image in Card */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Subtle Glow Behind Image */}
              <div
                className="absolute -inset-12 -z-10 opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(56, 189, 248, 0.20) 0%, transparent 70%)",
                  filter: "blur(120px)",
                }}
              />

              {/* Premium Image Card */}
              <div className="premium-image-frame relative rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.25)] border border-slate-200/70 ring-1 ring-slate-200/30">
                <div className="aspect-[16/9]">
                  <img
                    src="/Smarter Support Operations.webp"
                    alt="Smarter support operations - één inbox volledige controle"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContainedHeroSection);
