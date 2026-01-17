import { Link } from "react-router-dom";
import Reveal from "./Reveal";

interface SubpageHeroMinimalProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function SubpageHeroMinimal({
  eyebrow = "AI HELPDESK",
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: SubpageHeroMinimalProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-slate-50/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Eyebrow */}
          {eyebrow && (
            <Reveal delay={0.05}>
              <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.15em] mb-6">
                {eyebrow}
              </p>
            </Reveal>
          )}

          {/* H1 - Editorial style */}
          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-[42px] md:text-[48px] lg:text-[52px] font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] tracking-[-0.01em]">
              {title}
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-2xl mx-auto">
              {description}
            </p>
          </Reveal>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {primaryCTA && (
                  primaryCTA.href.startsWith('http') ? (
                    <a
                      href={primaryCTA.href}
                      className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                    >
                      {primaryCTA.text}
                    </a>
                  ) : (
                    <Link
                      to={primaryCTA.href}
                      className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                    >
                      {primaryCTA.text}
                    </Link>
                  )
                )}
                {secondaryCTA && (
                  secondaryCTA.href.startsWith('http') ? (
                    <a
                      href={secondaryCTA.href}
                      className="inline-flex items-center justify-center text-sm sm:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {secondaryCTA.text} →
                    </a>
                  ) : (
                    <Link
                      to={secondaryCTA.href}
                      className="inline-flex items-center justify-center text-sm sm:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {secondaryCTA.text} →
                    </Link>
                  )
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
