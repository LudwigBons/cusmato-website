import { Link } from "react-router-dom";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Koppelen",
      description: "We koppelen Cusmato aan jouw bestaande systemen via API's en webhooks.",
    },
    {
      number: "2",
      title: "Begrijpen",
      description: "Cusmato leert jouw tone of voice en begrijpt hoe je met klanten communiceert.",
    },
    {
      number: "3",
      title: "Versturen",
      description: "Automatisch antwoorden versturen of eerst ter goedkeuring voorleggen.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Steps */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Zo werkt Cusmato
            </h2>
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:block relative">
            <div className="relative bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
              <img
                src="/cusmato-email-automation-flow.webp"
                alt="Email automation flow"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}