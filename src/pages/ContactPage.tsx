export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5">
              Neem contact op
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Heb je vragen? We helpen je graag verder.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-12 mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <a href="mailto:hello@cusmato.nl" className="text-blue-600 hover:text-blue-700">
                  hello@cusmato.nl
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Demo boeken</h3>
                <p className="text-slate-600 mb-4">
                  Boek een persoonlijke demo en zie hoe Cusmato werkt voor jouw bedrijf.
                </p>
                <a
                  href="https://www.cusmato.app/welkom"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Plan demo
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/probeer-14-dagen-gratis"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
            >
              Start gratis
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}