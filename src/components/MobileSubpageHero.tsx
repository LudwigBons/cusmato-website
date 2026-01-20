import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Suspense } from "react";
import ImageFrame from "./ImageFrame";

interface CTAProps {
  label: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

interface MobileSubpageHeroProps {
  label?: string; // kleine uppercase label (eyebrow)
  title: string | ReactNode;
  description: string | ReactNode;
  primaryCta?: CTAProps;
  secondaryCta?: CTAProps;
  imageSrc: string; // verplicht
  imageAlt: string;
  dark?: boolean; // Voor dark pages zoals workflows/in-house-ai
}

/**
 * MobileSubpageHero - Exact dezelfde structuur/spacing als /prijzen hero
 * Mobile-first: image bovenaan, dan text
 * Desktop: split layout zoals prijzen
 */
function MobileSubpageHero({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  dark = false,
}: MobileSubpageHeroProps) {
  const textColor = dark ? "text-white" : "text-slate-900";
  const textColorMuted = dark ? "text-slate-300" : "text-slate-600";
  const labelColor = dark ? "text-blue-400" : "text-blue-500";

  const renderCTA = (cta: CTAProps, isPrimary: boolean) => {
    const baseClasses = isPrimary
      ? dark
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-blue-600 text-white hover:bg-blue-700"
      : dark
      ? "border border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

    const classes = `inline-flex items-center justify-center w-full max-w-[280px] sm:max-w-none sm:w-auto h-11 py-3 px-6 rounded-full font-semibold text-sm transition-colors ${baseClasses}`;

    if (cta.onClick) {
      return (
        <button onClick={cta.onClick} className={classes}>
          {cta.label}
        </button>
      );
    }

    if (cta.external && cta.href) {
      return (
        <a href={cta.href} target="_blank" rel="noreferrer" className={classes}>
          {cta.label}
        </a>
      );
    }

    if (cta.href) {
      return (
        <Link to={cta.href} className={classes}>
          {cta.label}
        </Link>
      );
    }

    return null;
  };

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Mobile: Image eerst, Desktop: Image rechts */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <Suspense fallback={null}>
            <ImageFrame
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="16/10"
              variant={dark ? "dark" : "light"}
              showGlow={!dark}
              loading="eager"
              className="max-w-[520px]"
            />
          </Suspense>
        </div>

        {/* Mobile: Text onder image, Desktop: Text links */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <Reveal>
            {/* Label/Eyebrow */}
            {label && (
              <p
                className={`text-[10px] sm:text-xs font-semibold ${labelColor} uppercase tracking-[0.15em] mb-4 sm:mb-6`}
              >
                {label}
              </p>
            )}

            {/* H1 - Exact zoals prijzen */}
            <h1
              className={`text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold ${textColor} mb-6 leading-[1.05] tracking-tight`}
            >
              {title}
            </h1>

            {/* Description - Exact zoals prijzen (geen mb-8 hier, alleen in spacing onder CTAs) */}
            <p
              className={`text-base sm:text-lg lg:text-xl ${textColorMuted} max-w-xl mx-auto lg:mx-0 leading-relaxed ${(primaryCta || secondaryCta) ? 'mb-8' : ''}`}
            >
              {description}
            </p>

            {/* CTAs - Compact zoals prijzen */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                {primaryCta && renderCTA(primaryCta, true)}
                {secondaryCta && renderCTA(secondaryCta, false)}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default memo(MobileSubpageHero);
