import { Link } from "react-router-dom";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Cusmato heeft ons helpen schalen zonder extra personeel in te huren. De AI begrijpt onze klanten perfect.",
      name: "Sarah van den Berg",
      company: "TechStore",
    },
    {
      quote: "We besparen nu uren per dag aan klantenservice. De kwaliteit van de antwoorden is uitstekend.",
      name: "Mark Jansen",
      company: "E-commerce Solutions",
    },
    {
      quote: "De integratie was eenvoudig en binnen een week waren we volledig operationeel. Geweldig product.",
      name: "Lisa de Vries",
      company: "Retail Pro",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Wat klanten zeggen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-lg border border-slate-200 p-6 md:p-8">
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/probeer-14-dagen-gratis"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}