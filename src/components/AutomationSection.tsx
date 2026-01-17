export default function AutomationSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            AI die je klantenservice écht overneemt
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cusmato handelt klantvragen zelfstandig af, terwijl jij de controle houdt.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Column 1 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
            <div className="px-2.5 sm:px-0">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Beantwoordt klanten 24/7
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Automatische afhandeling van orders, retouren en vragen. Je klanten krijgen altijd snel en accuraat antwoord, dag en nacht.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
            <div className="px-2.5 sm:px-0">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Werkt met jouw systemen
              </h3>
              <p className="text-slate-600 leading-relaxed">
                API's, webhooks, supporttools en e-mail. Cusmato integreert naadloos met je bestaande stack zonder gedoe.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
            <div className="px-2.5 sm:px-0">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Leert jouw tone of voice
              </h3>
              <p className="text-slate-600 leading-relaxed">
                AI past zich aan aan jouw merk en wordt steeds slimmer. Elke conversatie leert Cusmato beter communiceren in jouw stijl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}