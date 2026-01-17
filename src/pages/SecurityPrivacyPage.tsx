import { useMemo, useEffect } from "react";

type TocItem = { id: string; label: string };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Anchor({ id }: { id: string }) {
  return <span id={id} className="relative -top-24 block h-0 w-0" aria-hidden="true" />;
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Toc({ items }: { items: TocItem[] }) {
  return (
    <div className="sticky top-24 hidden self-start lg:block">
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
        <div className="mb-3 text-xs font-semibold tracking-wide text-slate-500">
          INHOUD
        </div>
        <nav className="space-y-2">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span className="line-clamp-1">{it.label}</span>
              <span className="ml-3 h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
            </a>
          ))}
        </nav>

        <div className="mt-5 rounded-xl border border-blue-200/60 bg-blue-50 p-4">
          <div className="text-sm font-semibold text-slate-900">Vragen?</div>
          <p className="mt-1 text-sm text-slate-600">
            Neem contact op voor security- of privacyvragen.
          </p>
          <a
            href="/probeer-14-dagen-gratis"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Neem contact op
          </a>
          <p className="mt-2 text-xs text-slate-500">
            (Deze knop volgt jouw site-regel: "Neem contact op" → Probeer14DagenGratisPage)
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "neutral" | "blue";
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border p-5 shadow-sm",
        tone === "blue"
          ? "border-blue-200/70 bg-blue-50"
          : "border-slate-200 bg-white"
      )}
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

export default function SecurityPrivacyPage() {
  useEffect(() => {
    document.title = "Security & Privacy | Cusmato";
  }, []);

  const lastUpdated = "9 januari 2025"; // pas aan op basis van /privacy

  const toc = useMemo<TocItem[]>(
    () => [
      { id: "intro", label: "Overzicht" },
      { id: "data", label: "Welke gegevens verzamelen we?" },
      { id: "use", label: "Waarvoor gebruiken we gegevens?" },
      { id: "legal", label: "Grondslagen (AVG)" },
      { id: "security", label: "Beveiliging" },
      { id: "processors", label: "Verwerkers & subverwerkers" },
      { id: "retention", label: "Bewaartermijnen" },
      { id: "rights", label: "Jouw rechten" },
      { id: "cookies", label: "Cookies & tracking" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200/60 via-sky-200/40 to-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-56 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-200/50 via-blue-100/40 to-slate-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8 pb-20 pt-16">
        <SectionTitle
          eyebrow="SECURITY & PRIVACY"
          title="Security & privacy"
          subtitle="Hoe Cusmato omgaat met gegevens, beveiliging en jouw rechten. Transparant, concreet en afgestemd op e-commerce support."
        />

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
            <span className="font-medium text-slate-900">Laatst bijgewerkt:</span>
            <span>{lastUpdated}</span>
          </div>
        </div>

        {/* Quick highlights */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard title="Data-minimalisatie" tone="blue">
            We verzamelen alleen wat nodig is om support te automatiseren en inzicht te geven in tickets.
          </InfoCard>
          <InfoCard title="Controle & audit trail" tone="blue">
            Approval mode, logging en zichtbaarheid in wat er wordt verstuurd (waar beschikbaar in je setup).
          </InfoCard>
          <InfoCard title="Beveiliging als basis" tone="blue">
            Versleuteling, toegangscontrole en veilige koppelingen met je tools.
          </InfoCard>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* Content */}
          <article className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur md:p-10">
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-h2:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
              <Anchor id="intro" />
              <h2>Overzicht</h2>
              <p>
                {/* TODO: Plak hier de intro/summary tekst van https://www.cusmato.app/privacy */}
                Plak hier de officiële introductietekst van jullie privacy-pagina. Houd het kort en
                duidelijk, 1 tot 2 alinea's.
              </p>

              <div className="not-prose mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <InfoCard title="Wat je hier vindt">
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                    <li>Welke gegevens Cusmato verwerkt</li>
                    <li>Waarom we dat doen en op basis van welke grondslag</li>
                    <li>Hoe we beveiligen en hoelang we bewaren</li>
                    <li>Hoe je je rechten kunt uitoefenen</li>
                  </ul>
                </InfoCard>
                <InfoCard title="Voor wie?" tone="blue">
                  Deze pagina is bedoeld voor klanten, prospects en security teams die willen weten
                  hoe Cusmato data verwerkt binnen AI Helpdesk.
                </InfoCard>
              </div>

              <Anchor id="data" />
              <h2>Welke gegevens verzamelen we?</h2>
              <p>
                {/* TODO: Plak hier exact jullie opsomming: accountgegevens, ticketinhoud, orderdata, logs, etc. */}
                Plak hier de sectie "Welke gegevens…" uit jullie officiële privacybeleid.
              </p>
              <ul>
                <li>
                  <strong>Account- en gebruikersgegevens</strong> (bijv. naam, e-mail, rol/permissions).
                </li>
                <li>
                  <strong>Ticket- en communicatiegegevens</strong> (bijv. e-mail/chat inhoud, attachments).
                </li>
                <li>
                  <strong>Shop- en ordercontext</strong> zoals ordernummer, status en verzendinfo, afhankelijk van je integraties.
                </li>
                <li>
                  <strong>Technische data</strong> (bijv. logs, security events, apparaat/browser info).
                </li>
              </ul>

              <Anchor id="use" />
              <h2>Waarvoor gebruiken we gegevens?</h2>
              <p>
                {/* TODO: Plak hier jullie doeleinden (dienst leveren, support, verbetering, compliance, etc.) */}
                Plak hier de doeleinden uit jullie privacybeleid.
              </p>

              <div className="not-prose mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <InfoCard title="AI Helpdesk (core)">
                  Tickets begrijpen, concept-antwoorden opstellen, routeren en opvolging automatiseren.
                </InfoCard>
                <InfoCard title="Automatisering eromheen">
                  Context ophalen uit integraties (webshop/marketplaces) zodat antwoorden kloppen en sneller verstuurd kunnen worden.
                </InfoCard>
              </div>

              <Anchor id="legal" />
              <h2>Grondslagen (AVG)</h2>
              <p>
                {/* TODO: Plak hier jullie juridische grondslagen: uitvoering overeenkomst, gerechtvaardigd belang, toestemming, wettelijke verplichting */}
                Plak hier de "Grondslagen" sectie uit jullie privacybeleid.
              </p>

              <Anchor id="security" />
              <h2>Beveiliging</h2>
              <p>
                {/* TODO: Plak hier jullie security measures (encryptie, access control, monitoring, etc.) */}
                Plak hier de security-sectie uit jullie privacybeleid.
              </p>
              <ul>
                <li>Toegangsbeheer (rollen/permissions waar beschikbaar)</li>
                <li>Versleuteling in transit en waar relevant at rest</li>
                <li>Monitoring & logging voor incidentdetectie</li>
                <li>Beveiligde koppelingen met externe tools</li>
              </ul>

              <div className="not-prose mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">Tip voor performance</div>
                <p className="mt-2 text-sm text-slate-600">
                  Vermijd zware animaties op scroll. Gebruik liever subtiele CSS-animaties en
                  "prefers-reduced-motion" defaults.
                </p>
              </div>

              <Anchor id="processors" />
              <h2>Verwerkers & subverwerkers</h2>
              <p>
                {/* TODO: Plak hier jullie lijst/omschrijving van processors/subprocessors (hosting, analytics, email provider, etc.) */}
                Plak hier de subverwerkers-sectie uit jullie privacybeleid.
              </p>

              <Anchor id="retention" />
              <h2>Bewaartermijnen</h2>
              <p>
                {/* TODO: Plak hier jullie retention policy */}
                Plak hier de bewaartermijnen uit jullie privacybeleid.
              </p>

              <Anchor id="rights" />
              <h2>Jouw rechten</h2>
              <p>
                {/* TODO: Plak hier rechten: inzage, rectificatie, verwijdering, beperking, bezwaar, dataportabiliteit */}
                Plak hier de rechten-sectie uit jullie privacybeleid.
              </p>

              <Anchor id="cookies" />
              <h2>Cookies & tracking</h2>
              <p>
                {/* TODO: Plak hier cookie info */}
                Plak hier jullie cookie/tracking-sectie uit jullie privacybeleid.
              </p>

              <Anchor id="contact" />
              <h2>Contact</h2>
              <p>
                {/* TODO: Plak hier jullie contactgegevens voor privacy/security */}
                Plak hier de contactsectie uit jullie privacybeleid (e-mail, adres, etc.).
              </p>

              <div className="not-prose mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-200/70 bg-blue-50 p-6 sm:flex-row">
                <div>
                  <div className="text-base font-semibold text-slate-900">
                    Klaar om Cusmato veilig te gebruiken?
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Plan je onboarding of neem contact op via de proefpagina.
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.cusmato.app/welkom"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    Start onboarding →
                  </a>
                  <a
                    href="/probeer-14-dagen-gratis"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Probeer 14 dagen gratis
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* TOC */}
          <Toc items={toc} />
        </div>
      </div>
    </main>
  );
}
