import { Link } from "react-router-dom";
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
  const productLinks: FooterLink[] = [
    { label: "AI Helpdesk", href: ROUTES.aiHelpdesk },
    { label: "Bestellingen & retouren", href: ROUTES.bestellingenRetouren },
    { label: "AI facturatie", href: ROUTES.aiFacturatie },
    { label: "Workflows & regels", href: ROUTES.workflowsRegels },
    { label: "Knowledgebase", href: ROUTES.knowledgebase },
    { label: "Klantdata", href: ROUTES.klantdata },
    { label: "Teamchat", href: ROUTES.teamchat },
  ];

  const resourcesLinks: FooterLink[] = [
    { label: "Integraties", href: ROUTES.integraties },
    { label: "FAQ", href: ROUTES.faq },
    { label: "Blog", href: ROUTES.blog },
  ];

  const companyLinks: FooterLink[] = [
    { label: "Probeer 14 dagen gratis", href: ROUTES.tryFree },
    { label: "Neem contact op", href: ROUTES.contact },
    { label: "Start onboarding", href: ROUTES.onboarding, external: true },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Algemene voorwaarden", href: ROUTES.terms },
    { label: "Security & privacy", href: ROUTES.privacy },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* subtiele top glow + moving line (cleaner dan een dikke anim) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
        <div className="footer-flow h-full w-[220px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand/CTA */}
          <div className="lg:col-span-4">
            <Link to={ROUTES.home} className="inline-flex items-center gap-2.5 mb-4 group">
              <img
                className="w-8 h-8 object-contain transition-all"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(47,102,255,0.15))' }}
                src="/logo.png"
                alt="Cusmato"
              />
              <span className="text-lg font-extrabold tracking-tight text-slate-900">Cusmato</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              AI klantenservice voor e-commerce. Automatiseer tickets, behoud
              controle en schaal zonder extra druk op je team.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ROUTES.tryFree}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Probeer 14 dagen gratis
              </Link>

              <a
                href={ROUTES.onboarding}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Start onboarding →
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Support & onboarding via Cusmato
            </div>
          </div>

          {/* Links + Legal */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <Col title="Product" links={productLinks} />
              <Col title="Resources" links={resourcesLinks} />
              <Col title="Bedrijf" links={companyLinks} />
            </div>

            {/* Juridisch: kleiner, strakker, beter aligned */}
            <div className="mt-10">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-wide text-slate-500">
                      Juridisch
                    </div>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {legalLinks.map((l) => (
                        <LinkItem key={l.label + l.href} link={l} />
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-slate-600">
                    Vragen?{" "}
                    <Link
                      to={ROUTES.tryFree}
                      className="font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      Neem contact op
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
            © {new Date().getFullYear()} Cusmato. Alle rechten voorbehouden.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to={ROUTES.contact}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              to={ROUTES.privacy}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to={ROUTES.terms}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-flow{
          background: linear-gradient(90deg, rgba(37,99,235,0) 0%, rgba(37,99,235,.9) 50%, rgba(37,99,235,0) 100%);
          animation: footerFlow 6s ease-in-out infinite;
          transform: translateX(-40%);
          opacity: .55;
        }
        @keyframes footerFlow{
          0%   { transform: translateX(-40%); opacity: .25; }
          45%  { opacity: .65; }
          100% { transform: translateX(140%); opacity: .25; }
        }
        @media (prefers-reduced-motion: reduce){
          .footer-flow{ animation: none; opacity: .35; transform: translateX(0); width: 100%; }
        }
      `}</style>
    </footer>
  );
}