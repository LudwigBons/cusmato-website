import { Link } from "react-router-dom";
import HeroProductScene from "../components/HeroProductScene";
import LogoStrip from "../components/LogoStrip";
import CapabilitiesGrid from "../components/CapabilitiesGrid";
import ShowcaseSection from "../components/ShowcaseSection";
import HelpdeskShowcaseDemo from "../components/HelpdeskShowcaseDemo";
import WorkflowsShowcaseDemo from "../components/WorkflowsShowcaseDemo";
import IntegrationsShowcaseDemo from "../components/IntegrationsShowcaseDemo";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <div className="relative bg-white overflow-x-hidden">
      {/* 1. Hero - Cinematic Product Scene */}
      <HeroProductScene />

      {/* 2. Logo Strip */}
      <LogoStrip />

      {/* 3. Capabilities Grid */}
      <CapabilitiesGrid />

      {/* 4. Showcase 1: AI Helpdesk */}
      <ShowcaseSection>
        <div className="lg:col-span-1 flex items-center">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              AI Helpdesk
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Automatisch antwoorden</span>
              <span className="hidden sm:inline">Automatisch klantvragen beantwoorden en versturen via e-mail en andere kanalen.</span>
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Antwoorden in jouw stijl — automatisch of na goedkeuring.</span>
              <span className="hidden sm:inline">Cusmato leest tickets, haalt context op en genereert antwoorden in jouw stijl — automatisch of na goedkeuring.</span>
            </p>
            <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row">
              <Link
                to="/ai-helpdesk"
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Bekijk AI Helpdesk →
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center">
          <HelpdeskShowcaseDemo />
        </div>
      </ShowcaseSection>

      {/* 5. Showcase 2: Workflows & Regels */}
      <ShowcaseSection reverse={true} background="slate">
        <div className="lg:col-span-1 flex items-center justify-center order-2 lg:order-1">
          <WorkflowsShowcaseDemo />
        </div>
        <div className="lg:col-span-1 flex items-center order-1 lg:order-2">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              Workflows & regels
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              Bepaal wanneer Cusmato automatisch handelt of doorstuurt naar je team.
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              Stel slimme regels in op basis van categorie, urgency of klantsegment — volledig naar jouw behoeften.
            </p>
            <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row">
              <Link
                to="/workflows-regels"
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Bekijk Workflows →
              </Link>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* 6. Showcase 3: Integraties + Context */}
      <ShowcaseSection>
        <div className="lg:col-span-1 flex items-center">
          <div className="text-center sm:text-left mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-[1.15] tracking-tight">
              <span className="sm:hidden">Koppelingen</span>
              <span className="hidden sm:inline">Integraties + context</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-3 sm:mb-4 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              <span className="sm:hidden">Shopify, Zendesk, Gmail en meer.</span>
              <span className="hidden sm:inline">Koppel Shopify, Zendesk, Gmail, Outlook en tientallen andere tools.</span>
            </p>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 leading-relaxed max-w-[28rem] sm:max-w-none mx-auto sm:mx-0">
              Cusmato haalt automatisch context op: orderstatus, tracking, eerdere tickets en meer — alles wat nodig is voor het perfecte antwoord.
            </p>
            <div className="flex flex-col items-center gap-3 sm:items-start sm:flex-row">
              <Link
                to="/integraties"
                className="inline-flex items-center justify-center w-full max-w-[320px] sm:w-auto h-10 px-4 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Bekijk Integraties →
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 flex items-center justify-center">
          <IntegrationsShowcaseDemo />
        </div>
      </ShowcaseSection>

      {/* 7. Final CTA */}
      <FinalCTA />
    </div>
  );
}
