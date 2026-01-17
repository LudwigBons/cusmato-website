import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Reveal from "./Reveal";
import PremiumImage from "./PremiumImage";

const LazyPremiumImage = lazy(() => import("./PremiumImage"));

interface SubpageHeroSplitProps {
  title: string | React.ReactNode;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  primaryCTA?: {
    text: string;
    href: string;
  };
  imagePosition?: "left" | "right";
  variant?: "light" | "dark";
}

export default function SubpageHeroSplit({
  title,
  description,
  image,
  primaryCTA,
  imagePosition = "right",
  variant = "light",
}: SubpageHeroSplitProps) {
  const bgClass = variant === "dark" ? "saas-dark-section" : "bg-gradient-to-b from-slate-50/40 to-white";
  const textColor = variant === "dark" ? "text-white" : "text-slate-900";
  const descColor = variant === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <section className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 xl:gap-16 items-center ${imagePosition === "left" ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Text Column */}
          <div className={imagePosition === "left" ? "lg:col-start-2 order-2 lg:order-1" : "order-2 lg:order-1"}>
            <div className="text-center sm:text-left">
              <Reveal delay={0.1}>
                <h1 className={`text-4xl sm:text-[42px] md:text-[48px] lg:text-[56px] font-semibold ${textColor} mb-4 sm:mb-6 leading-[1.05] tracking-[-0.01em]`}>
                  {title}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className={`text-base sm:text-lg md:text-xl ${descColor} mb-8 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0`}>
                  {description}
                </p>
              </Reveal>
              {primaryCTA && (
                <Reveal delay={0.2}>
                  <div className="flex flex-col items-center sm:items-start gap-3">
                    {primaryCTA.href.startsWith("http") ? (
                      <a
                        href={primaryCTA.href}
                        className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-11 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
                      >
                        {primaryCTA.text}
                      </a>
                    ) : (
                      <Link
                        to={primaryCTA.href}
                        className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-11 px-6 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-200 hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
                      >
                        {primaryCTA.text}
                      </Link>
                    )}
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          {/* Image Column */}
          <div className={imagePosition === "left" ? "lg:col-start-1 order-1 lg:order-2" : "order-1 lg:order-2"}>
            <Suspense fallback={<div className="aspect-[16/9] bg-slate-200 animate-pulse rounded-3xl" />}>
              <PremiumImage
                src={image.src}
                alt={image.alt}
                aspectRatio="16/9"
                maxWidth="xl"
                variant={variant}
                showGlow={true}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
