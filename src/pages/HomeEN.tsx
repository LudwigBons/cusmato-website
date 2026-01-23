import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import HeroProductSceneEN from "../components/HeroProductSceneEN";
import LogoStripEN from "../components/LogoStripEN";
import ShowcaseSection from "../components/ShowcaseSection";
import BottomMobileCTAEN from "../components/BottomMobileCTAEN";

// Lazy load below-fold components for faster initial load
const CapabilitiesGridEN = lazy(() => import("../components/CapabilitiesGridEN"));
const HelpdeskShowcaseDemo = lazy(() => import("../components/HelpdeskShowcaseDemo"));
const WorkflowImage = lazy(() => import("../components/WorkflowImage"));
const LogoWallFrame = lazy(() => import("../components/LogoWallFrame"));
const PremiumImage = lazy(() => import("../components/PremiumImage"));
const FinalCTAEN = lazy(() => import("../components/FinalCTAEN"));

export default function HomeEN() {
  return (
    <div className="relative bg-white">
      {/* 1. Hero - Cinematic Product Scene */}
      <HeroProductSceneEN />

      {/* 2. Logo Strip */}
      <LogoStripEN />

      {/* 3. Capabilities Grid */}
      <Suspense fallback={null}>
        <CapabilitiesGridEN />
      </Suspense>

      {/* 4. Showcase 1: AI Helpdesk */}
      <ShowcaseSection>
        <div className="lg:col-span-1 flex items-center">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              AI Helpdesk
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Automatically respond</span>
              <span className="hidden sm:inline">Automatically answer and send customer inquiries via email and other channels.</span>
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Answers in your style, automatically or after approval.</span>
              <span className="hidden sm:inline">Cusmato reads tickets, retrieves context and generates answers in your style, automatically or after approval.</span>
            </p>
            <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row">
              <Link
                to="/en/ai-helpdesk"
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                View AI Helpdesk →
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center">
          <Suspense fallback={null}>
            <HelpdeskShowcaseDemo />
          </Suspense>
        </div>
      </ShowcaseSection>

      {/* 5. Showcase 2: Workflows & Rules */}
      <section className="relative py-12 sm:py-16 lg:py-24 mx-4 sm:mx-6 lg:mx-0 rounded-3xl sm:rounded-none overflow-hidden">
        {/* Dark background with moving glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl sm:rounded-none">
          {/* Moving glow blobs */}
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            style={{
              animation: "glow-drift-1 20s ease-in-out infinite",
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"
            style={{
              animation: "glow-drift-2 25s ease-in-out infinite",
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 xl:gap-16 items-center min-h-0 lg:min-h-[500px]">
            {/* Image Column - Larger (55%) */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <Suspense fallback={null}>
                <WorkflowImage />
              </Suspense>
            </div>
            {/* Text Column - Smaller (45%) */}
            <div className="order-1 lg:order-2 flex items-center">
              <div className="text-center sm:text-left mx-auto sm:mx-0">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight">
                  Workflows & rules
                </h2>
                <p className="text-base sm:text-lg text-blue-100 mb-3 sm:mb-4 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
                  Determine when Cusmato automatically handles or forwards to your team.
                </p>
                <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
                  Set up smart rules based on category, urgency or customer segment, fully tailored to your needs.
                </p>
                <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row">
                  <Link
                    to="/en/workflows-regels"
                    className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors"
                  >
                    View Workflows →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Showcase 3: Integrations + Context - Clean 2-column with LogoWallFrame */}
      <ShowcaseSection>
        <div className="lg:col-span-1 flex items-center order-2 lg:order-1">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              <span className="sm:hidden">Connections</span>
              <span className="hidden sm:inline">Integrations + context</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-[36ch] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Shopify, Zendesk, Gmail and more.</span>
              <span className="hidden sm:inline">Connect Shopify, Zendesk, Gmail, Outlook and dozens of other tools.</span>
            </p>
            <ul className="space-y-5 sm:space-y-3 mb-10 sm:mb-10 text-left max-w-[36ch] sm:max-w-none mx-auto sm:mx-0">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-slate-700">Automatically retrieve context from orders and tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-slate-700">Previous tickets and customer history visible</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm sm:text-base text-slate-700">Directly initiate actions in connected systems</span>
              </li>
            </ul>
            <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row mt-8 sm:mt-0">
              <Link
                to="/en/integrations"
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                View Integrations →
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center order-1 lg:order-2">
          <Suspense fallback={null}>
            <LogoWallFrame
              image="/Cusmato helpdesk.png"
              alt="Cusmato integrations logo wall"
              variant="light"
            />
          </Suspense>
        </div>
      </ShowcaseSection>

      {/* 7. Benefits Section - Text + Image Layout */}
      <section className="py-24 sm:py-16 lg:py-24 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 items-center">
            {/* Left: Text + Stats Cards */}
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
                Save time and support costs immediately
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-10 sm:mb-8 leading-relaxed max-w-[36ch] sm:max-w-xl mx-auto sm:mx-0">
                Cusmato handles tickets faster and reduces your team's workload. Automate where possible, manual where needed.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-[16px] border border-slate-200/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 ring-1 ring-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
                        Time per ticket down
                      </div>
                      <div className="text-sm text-slate-600">
                        Faster processing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-[16px] border border-slate-200/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 ring-1 ring-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
                        Faster first response
                      </div>
                      <div className="text-sm text-slate-600">
                        Immediate responses
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-[16px] border border-slate-200/70 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 ring-1 ring-blue-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
                        Fewer manual follow-ups
                      </div>
                      <div className="text-sm text-slate-600">
                        More automation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Premium Image */}
            <div className="order-first lg:order-last">
              <Suspense fallback={null}>
                <PremiumImage
                  src="/Automated Customer Support.webp"
                  alt="Focused support automation with Cusmato"
                  aspectRatio="16/9"
                  maxWidth="xl"
                  variant="light"
                  showGlow={true}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <Suspense fallback={null}>
        <FinalCTAEN />
      </Suspense>

      {/* Mobile CTA - Exact same as AI-helpdesk */}
      <BottomMobileCTAEN />
    </div>
  );
}
