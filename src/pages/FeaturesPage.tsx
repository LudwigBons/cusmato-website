export default function FeaturesPage() {
  const features = [
    {
      title: "Order lookup",
      description: "Zoekt bestellingen op en geeft direct de juiste status door.",
    },
    {
      title: "Retouren & workflows",
      description: "Verwerkt retourvragen en voert vaste stappen automatisch uit.",
    },
    {
      title: "E-mail automatisering",
      description: "Schrijft en verstuurt antwoorden (of zet ze klaar ter controle).",
    },
    {
      title: "Tone of voice",
      description: "Klinkt als jouw merk — consistent in elke reactie.",
    },
    {
      title: "Veilig & compliant",
      description: "Beveiliging en gegevensrichtlijnen zijn ingebouwd.",
    },
    {
      title: "In-house AI",
      description: "Zelf ontwikkeld systeem: controle, flexibiliteit en onafhankelijkheid.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5">
              Wat Cusmato voor je automatiseert
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-snug sm:leading-relaxed">
              Van simpele vragen tot support-taken — Cusmato pakt het op, leert ervan en blijft verbeteren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6">
                <div className="px-2.5 sm:px-0">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center h-10 sm:h-auto px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              14 dagen gratis
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}