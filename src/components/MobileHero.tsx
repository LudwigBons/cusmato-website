import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SubpageHeroImage from "./SubpageHeroImage";

interface MobileHeroProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  title: string | ReactNode;
  description: string | ReactNode;
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  dark?: boolean; // For dark pages like workflows/in-house-ai
}

/**
 * MobileHero - Mobile-first hero component matching Pricing page structure
 * Structure: Image (top) → Eyebrow → H1 → Description → CTAs (optional)
 */
function MobileHero({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  dark = false,
}: MobileHeroProps) {
  const textColor = dark ? "text-white" : "text-slate-900";
  const textColorMuted = dark ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = dark ? "text-blue-400" : "text-blue-500";

  return (
    <section className={`mb-12 sm:mb-16 lg:mb-20 ${dark ? "bg-transparent" : ""}`}>
      {/* Image - Mobile-first, bovenaan */}
      <SubpageHeroImage src={imageSrc} alt={imageAlt} />

      {/* Text Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <Reveal>
            {/* Eyebrow */}
            {eyebrow && (
              <p
                className={`text-[10px] sm:text-xs font-semibold ${eyebrowColor} uppercase tracking-[0.15em] mb-4 sm:mb-6`}
              >
                {eyebrow}
              </p>
            )}

            {/* H1 */}
            <h1
              className={`text-4xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold ${textColor} mb-6 leading-[1.05] tracking-tight`}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className={`text-base sm:text-lg lg:text-xl ${textColorMuted} max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8`}
            >
              {description}
            </p>

            {/* CTAs (optional) */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                {primaryCta && (
                  <>
                    {primaryCta.external ? (
                      <a
                        href={primaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center w-full max-w-[280px] sm:w-auto h-11 py-3 px-6 rounded-full font-semibold text-sm transition-colors ${
                          dark
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {primaryCta.text}
                      </a>
                    ) : (
                      <Link
                        to={primaryCta.href}
                        className={`inline-flex items-center justify-center w-full max-w-[280px] sm:w-auto h-11 py-3 px-6 rounded-full font-semibold text-sm transition-colors ${
                          dark
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {primaryCta.text}
                      </Link>
                    )}
                  </>
                )}

                {secondaryCta && (
                  <>
                    {secondaryCta.external ? (
                      <a
                        href={secondaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center w-full max-w-[240px] sm:w-auto h-10 py-2.5 px-5 rounded-full border font-semibold text-sm transition-colors ${
                          dark
                            ? "border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                            : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {secondaryCta.text}
                      </a>
                    ) : (
                      <Link
                        to={secondaryCta.href}
                        className={`inline-flex items-center justify-center w-full max-w-[240px] sm:w-auto h-10 py-2.5 px-5 rounded-full border font-semibold text-sm transition-colors ${
                          dark
                            ? "border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                            : "border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        {secondaryCta.text}
                      </Link>
                    )}
                  </>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default memo(MobileHero);
