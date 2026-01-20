import { memo } from "react";

interface SubpageHeroImageProps {
  src: string;
  alt: string;
}

/**
 * SubpageHeroImage - Mobile-first hero image component
 * Styled like PricingPage: rounded corners, subtle shadow, proper spacing
 */
function SubpageHeroImage({ src, alt }: SubpageHeroImageProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className="relative w-full rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-sm border border-slate-200/60 bg-slate-100">
        <div className="aspect-[16/10] sm:aspect-[16/10]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            width={1600}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(SubpageHeroImage);
