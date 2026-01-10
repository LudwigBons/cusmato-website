import { Link } from "react-router-dom";

export default function WorkflowSection() {
  const steps = [
    {
      number: "1",
      title: "Koppelen",
      description: "We koppelen Cusmato aan jouw bestaande systemen via API's en webhooks.",
    },
    {
      number: "2",
      title: "Automatiseren",
      description: "Cusmato begint direct met het afhandelen van klantvragen in jouw tone of voice.",
    },
    {
      number: "3",
      title: "Optimaliseren",
      description: "De AI leert van elke interactie en wordt continu beter in het helpen van jouw klanten.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Zo werkt het
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In drie eenvoudige stappen ben je klaar om te automatiseren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/integraties"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
          >
            Integraties bekijken
          </Link>
        </div>
      </div>
    </section>
  );
}