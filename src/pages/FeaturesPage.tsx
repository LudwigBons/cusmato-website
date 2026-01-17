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
      description: "Klinkt als jouw merk, consistent in elke reactie.",
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
              Van simpele vragen tot support-taken, Cusmato pakt het op, leert ervan en blijft verbeteren.
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

          {/* Features Images Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-12 sm:mt-16 mb-12">
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Human-Approved Automation.webp"
                    alt="Human-approved automation met Cusmato features"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Automatisering met menselijke controle
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Cusmato automatiseert waar mogelijk, maar jij houdt altijd de controle. Goedkeur workflows, pas antwoorden aan of escaleer naar je team wanneer nodig.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Slimmere support operaties
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Elke feature is gericht op het versnellen en verbeteren van je supportproces. Van order lookup tot tone of voice, alles werkt samen.
              </p>
            </div>
            <div>
              <div className="relative w-full max-w-[520px] mx-auto">
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="/Smarter Support Operations.webp"
                    alt="Smarter support operations met Cusmato"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
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