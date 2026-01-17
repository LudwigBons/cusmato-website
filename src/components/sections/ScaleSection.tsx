import { memo } from "react";
import { Link } from "react-router-dom";
import PremiumImage from "../PremiumImage";

function ScaleSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center sm:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              Schaal je support naadloos op
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              Cusmato groeit mee met jouw bedrijf. Automatiseer meer tickets naarmate je meer volume krijgt, zonder extra teamleden nodig te hebben.
            </p>
            <Link
              to="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Probeer 14 dagen gratis →
            </Link>
          </div>
          {/* Right: Larger Premium Image */}
          <div className="order-1 lg:order-2">
            <PremiumImage
              src="/AI-Driven Support Teams.webp"
              alt="AI-driven support teams met Cusmato AI"
              aspectRatio="16/9"
              maxWidth="xl"
              variant="light"
              showGlow={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ScaleSection);
