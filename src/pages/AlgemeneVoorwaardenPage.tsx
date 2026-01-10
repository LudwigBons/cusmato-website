import { useEffect, useMemo } from "react";

// ✅ Helper: maak nette anker-ids
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type TermSection = {
  title: string;
  content: React.ReactNode;
};

export default function AlgemeneVoorwaardenPage() {
  useEffect(() => {
    document.title = "Algemene voorwaarden | Cusmato";
  }, []);

  const sections: TermSection[] = useMemo(
    () => [
      {
        title: "1. Algemeen",
        content: (
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle diensten die Cusmato B.V. ("Cusmato")
            levert. Door gebruik te maken van de diensten van Cusmato, ga je akkoord met deze algemene
            voorwaarden.
          </p>
        ),
      },
      {
        title: "2. Definities",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cusmato:</strong> Cusmato B.V., gevestigd in Nederland, geregistreerd bij de
              Kamer van Koophandel.
            </li>
            <li>
              <strong>Klant:</strong> De natuurlijke persoon of rechtspersoon die gebruik maakt van
              de diensten van Cusmato.
            </li>
            <li>
              <strong>Dienst(en):</strong> Alle door Cusmato geleverde software, platformen,
              applicaties en gerelateerde diensten.
            </li>
            <li>
              <strong>Overeenkomst:</strong> De overeenkomst tussen Cusmato en de Klant betreffende
              het gebruik van de Diensten.
            </li>
          </ul>
        ),
      },
      {
        title: "3. Gebruik van de diensten",
        content: (
          <>
            <p>
              De Klant verkrijgt het recht om de Diensten te gebruiken in overeenstemming met de
              Overeenkomst. De Klant is verantwoordelijk voor het correct gebruiken van de Diensten en
              voor alle activiteiten die plaatsvinden onder zijn account.
            </p>
            <p>
              De Klant verbindt zich ertoe de Diensten niet te gebruiken voor illegale doeleinden of op een manier die
              schadelijk is voor Cusmato of derden.
            </p>
          </>
        ),
      },
      {
        title: "4. Betalingen",
        content: (
          <>
            <p>
              Tenzij anders overeengekomen, worden betalingen vooraf gedaan. Alle prijzen zijn exclusief BTW, tenzij
              anders vermeld.
            </p>
            <p>
              Bij niet-betaling behoudt Cusmato zich het recht voor om de toegang tot de Diensten te schorsen of te beëindigen.
            </p>
          </>
        ),
      },
      {
        title: "5. Intellectueel eigendom",
        content: (
          <>
            <p>
              Alle intellectuele eigendomsrechten op de Diensten, inclusief maar niet beperkt tot software, teksten,
              ontwerpen, logo's en andere materialen, berusten bij Cusmato of haar licentiegevers.
            </p>
            <p>
              De Klant verkrijgt geen eigendomsrechten op de Diensten, behalve het gebruiksrecht zoals bepaald in de Overeenkomst.
            </p>
          </>
        ),
      },
      {
        title: "6. Gegevensbescherming",
        content: (
          <>
            <p>
              Cusmato verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG)
              en andere toepasselijke privacywetgeving.
            </p>
            <p>
              Voor meer informatie over hoe Cusmato omgaat met persoonsgegevens, verwijzen wij naar ons privacybeleid
              dat beschikbaar is op onze website.
            </p>
          </>
        ),
      },
      {
        title: "7. Beschikbaarheid en ondersteuning",
        content: (
          <>
            <p>
              Cusmato streeft ernaar de Diensten 24/7 beschikbaar te houden, maar garandeert geen ononderbroken beschikbaarheid.
              Cusmato behoudt zich het recht voor om onderhouds- en updates uit te voeren die tijdelijke onderbrekingen kunnen veroorzaken.
            </p>
            <p>
              Cusmato biedt ondersteuning zoals beschreven in de Overeenkomst. Ondersteuning wordt geleverd binnen redelijke termijnen,
              maar er worden geen specifieke responstijden gegarandeerd, tenzij anders overeengekomen.
            </p>
          </>
        ),
      },
      {
        title: "8. Aansprakelijkheid",
        content: (
          <>
            <p>
              Cusmato is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst, gemiste besparingen,
              schade door bedrijfsstagnatie of schade door verlies van gegevens.
            </p>
            <p>
              De totale aansprakelijkheid van Cusmato is in elk geval beperkt tot het bedrag dat de Klant in het
              desbetreffende kalenderjaar heeft betaald voor de Diensten.
            </p>
            <p>
              Deze beperking geldt niet indien de schade het gevolg is van opzet of bewuste roekeloosheid van Cusmato
              of haar leidinggevenden.
            </p>
          </>
        ),
      },
      {
        title: "9. Beëindiging",
        content: (
          <>
            <p>
              Beide partijen kunnen de Overeenkomst beëindigen met inachtneming van een opzegtermijn van één maand,
              tenzij anders overeengekomen.
            </p>
            <p>
              Cusmato behoudt zich het recht voor om de Overeenkomst onmiddellijk te beëindigen indien de Klant
              inbreuk maakt op deze algemene voorwaarden of indien betalingen niet op tijd worden voldaan.
            </p>
            <p>
              Na beëindiging heeft de Klant geen toegang meer tot de Diensten en worden gegevens overeenkomstig
              het privacybeleid behandeld.
            </p>
          </>
        ),
      },
      {
        title: "10. Wijzigingen",
        content: (
          <>
            <p>
              Cusmato behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. Wijzigingen worden
              bekendgemaakt via de website en/of per e-mail.
            </p>
            <p>
              Indien de Klant niet akkoord gaat met wijzigingen, kan hij de Overeenkomst beëindigen binnen
              30 dagen na de bekendmaking van de wijzigingen.
            </p>
          </>
        ),
      },
      {
        title: "11. Toepasselijk recht en geschillen",
        content: (
          <>
            <p>
              Op deze algemene voorwaarden en de Overeenkomst is Nederlands recht van toepassing.
            </p>
            <p>
              Geschillen zullen in eerste aanleg worden voorgelegd aan de bevoegde rechter in Nederland.
            </p>
          </>
        ),
      },
      {
        title: "12. Contact",
        content: (
          <>
            <p>
              Voor vragen over deze algemene voorwaarden kun je contact opnemen met Cusmato:
            </p>
            <div className="pl-4 border-l-4 border-slate-200 mt-4">
              <p className="space-y-1">
                <strong>Cusmato B.V.</strong><br />
                E-mail: hello@cusmato.nl<br />
                Website: www.cusmato.app
              </p>
            </div>
          </>
        ),
      },
    ],
    []
  );

  const toc = useMemo(
    () =>
      sections.map((s) => ({
        title: s.title,
        id: slugify(s.title),
      })),
    [sections]
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Subtle achtergrond (geen drukke hero, wel "depth") */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-16 pt-24 lg:pt-28 overflow-x-hidden">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm">
            Juridisch
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Algemene voorwaarden
          </h1>

          <p className="mt-4 text-base text-slate-600">
            Laatst bijgewerkt: <span className="font-medium text-slate-800">9 januari 2025</span>
          </p>

          {/* Callout: vertrouwen + duidelijkheid */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 text-left shadow-sm">
            <p className="text-sm leading-6 text-slate-700">
              Deze pagina beschrijft de voorwaarden voor het gebruik van Cusmato. Lees dit document
              zorgvuldig. Bij vragen kun je contact opnemen met Cusmato.
            </p>
          </div>
        </header>

        {/* Content grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Sticky TOC */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-900">Inhoud</h2>
                  <span className="text-xs text-slate-500">{toc.length} secties</span>
                </div>

                <nav className="mt-4">
                  <ul className="space-y-1">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                          <span className="leading-6">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* kleine footer info */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs text-slate-600">
                Tip: je kunt direct linken naar een sectie via de URL met <span className="font-mono">#</span>
                {" "}anchors.
              </div>
            </div>
          </aside>

          {/* Legal content */}
          <article className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-sm">
              <div className="p-6 sm:p-8">
                {sections.map((section) => {
                  const id = slugify(section.title);
                  return (
                    <section
                      key={id}
                      id={id}
                      className="scroll-mt-28 border-b border-slate-100 pb-10 pt-2 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                          {section.title}
                        </h2>

                        <a
                          href={`#${id}`}
                          className="mt-1 hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 sm:inline-flex transition-colors"
                          aria-label={`Link naar ${section.title}`}
                        >
                          Kopieer link
                        </a>
                      </div>

                      {/* Body: "prose" look zonder tailwind-typography plugin nodig */}
                      <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
                        {section.content}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>

            {/* Bottom spacing (white space bewust, zoals jij wil) */}
            <div className="h-10 sm:h-14" />
          </article>
        </div>
      </section>
    </main>
  );
}
