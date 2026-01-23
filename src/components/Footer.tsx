import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../lib/constants";

type FooterLink = { label: string; href: string; external?: boolean };

function LinkItem({ link }: { link: FooterLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors"
      >
        <span>{link.label}</span>
      </a>
    );
  }

  return (
    <Link
      to={link.href}
      className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors"
    >
      <span>{link.label}</span>
    </Link>
  );
}

function Col({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-wide text-slate-500">
        {title}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {links.map((l) => (
          <LinkItem key={l.label + l.href} link={l} />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const location = useLocation();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");

  // Helper to get language-aware route
  const getLangRoute = (route: string): string => {
    // Don't modify external links
    if (route.startsWith("http")) {
      return route;
    }
    // If on English page, prefix with /en if not already
    if (isEnglish) {
      if (route.startsWith("/en")) {
        return route;
      }
      if (route === "/") {
        return "/en";
      }
      return `/en${route}`;
    }
    // If on Dutch page, strip /en if present
    if (route.startsWith("/en/")) {
      return route.substring(3); // Remove "/en"
    }
    return route;
  };

  const productLinks: FooterLink[] = isEnglish
    ? [
        { label: "AI Helpdesk", href: "/en/ai-helpdesk" },
        { label: "Orders & returns", href: "/en/bestellingen-retouren" },
        { label: "AI invoicing", href: "/en/ai-facturatie" },
        { label: "Workflows & rules", href: "/en/workflows-regels" },
        { label: "Knowledgebase", href: "/en/knowledgebase" },
        { label: "Customer data", href: "/en/klantdata" },
        { label: "Team chat", href: "/en/teamchat" },
      ]
    : [
        { label: "AI Helpdesk", href: ROUTES.aiHelpdesk },
        { label: "Bestellingen & retouren", href: ROUTES.bestellingenRetouren },
        { label: "AI facturatie", href: ROUTES.aiFacturatie },
        { label: "Workflows & regels", href: ROUTES.workflowsRegels },
        { label: "Knowledgebase", href: ROUTES.knowledgebase },
        { label: "Klantdata", href: ROUTES.klantdata },
        { label: "Teamchat", href: ROUTES.teamchat },
      ];

  const resourcesLinks: FooterLink[] = isEnglish
    ? [
        { label: "Integrations", href: "/en/integraties" },
        { label: "FAQ", href: "/en/faq" },
        { label: "Blog", href: "/en/blog" },
      ]
    : [
        { label: "Integraties", href: ROUTES.integraties },
        { label: "FAQ", href: ROUTES.faq },
        { label: "Blog", href: ROUTES.blog },
      ];

  const companyLinks: FooterLink[] = isEnglish
    ? [
        { label: "Try 14 days for free", href: "/en/try-14-days-for-free" },
        { label: "Start onboarding", href: ROUTES.onboarding, external: true },
        { label: "Contact us", href: "/en/try-14-days-for-free" },
      ]
    : [
        { label: "Probeer 14 dagen gratis", href: ROUTES.tryFree },
        { label: "Start onboarding", href: ROUTES.onboarding, external: true },
        { label: "Neem contact op", href: ROUTES.tryFree },
      ];

  const legalLinks: FooterLink[] = isEnglish
    ? [
        { label: "Terms & conditions", href: "/en/algemene-voorwaarden" },
        { label: "Security & privacy", href: "/en/security-privacy" },
      ]
    : [
        { label: "Algemene voorwaarden", href: ROUTES.terms },
        { label: "Security & privacy", href: ROUTES.privacy },
      ];

  return (
    <footer className="relative border-t border-slate-200 bg-white">

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand/CTA */}
          <div className="lg:col-span-4">
            <Link to={isEnglish ? "/en" : ROUTES.home} className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                className="w-8 h-8 object-contain transition-all"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(47,102,255,0.15))' }}
                src="/logo.png"
                alt="Cusmato"
              />
              <span className="text-lg font-extrabold tracking-tight text-slate-900">Cusmato</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              {isEnglish 
                ? "AI customer service for e-commerce. Automate tickets, maintain control and scale without extra pressure on your team."
                : "AI klantenservice voor e-commerce. Automatiseer tickets, behoud controle en schaal zonder extra druk op je team."
              }
            </p>

            {/* Footer CTA's - Subtle on mobile, secondary to page CTAs */}
            <div className="mt-8 sm:mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <Link
                to={isEnglish ? "/en/try-14-days-for-free" : ROUTES.tryFree}
                className="inline-flex items-center justify-center rounded-md border border-slate-300/50 bg-white text-slate-600 px-2.5 py-1.5 text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors sm:bg-blue-600 sm:text-white sm:border-blue-600 sm:shadow-sm sm:hover:bg-blue-700 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                {isEnglish ? "Try 14 days for free" : "Probeer 14 dagen gratis"}
              </Link>

              <a
                href={ROUTES.onboarding}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300/50 bg-white text-slate-600 px-2.5 py-1.5 text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors sm:border-slate-200 sm:shadow-sm sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Start onboarding →
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              {isEnglish ? "Support & onboarding via Cusmato" : "Support & onboarding via Cusmato"}
            </div>
          </div>

          {/* Links + Legal */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <Col title="Product" links={productLinks} />
              <Col title="Resources" links={resourcesLinks} />
              <Col title={isEnglish ? "Company" : "Bedrijf"} links={companyLinks} />
            </div>

            {/* Legal: kleiner, strakker, beter aligned */}
            <div className="mt-10">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-wide text-slate-500">
                      {isEnglish ? "Legal" : "Juridisch"}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {legalLinks.map((l) => (
                        <LinkItem key={l.label + l.href} link={l} />
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-slate-600">
                    {isEnglish ? "Questions? " : "Vragen? "}
                    <Link
                      to={isEnglish ? "/en/try-14-days-for-free" : ROUTES.tryFree}
                      className="font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      {isEnglish ? "Contact us" : "Neem contact op"}
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar (cleaner) */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Cusmato. {isEnglish ? "All rights reserved." : "Alle rechten voorbehouden."}
          </p>

          <div className="flex items-center gap-6">
            <Link
              to={isEnglish ? "/en/try-14-days-for-free" : ROUTES.tryFree}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              to={isEnglish ? "/en/security-privacy" : ROUTES.privacy}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to={isEnglish ? "/en/algemene-voorwaarden" : ROUTES.terms}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isEnglish ? "Terms" : "Voorwaarden"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}