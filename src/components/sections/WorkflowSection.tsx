import { Link } from "react-router-dom";
import WorkflowSteps from "../WorkflowSteps";

export default function WorkflowSection() {
  const steps = [
    {
      id: "connect",
      title: "Koppelen",
      sentence: "We koppelen Cusmato aan jouw bestaande systemen via API's en webhooks.",
      chips: ["API's", "Webhooks", "Snelle setup"],
      visual: {
        type: "connection" as const,
        sources: ["Shopify", "Zendesk", "Gmail"],
        target: "Cusmato",
      },
      logos: ["/logo-shopify.png", "/logo-zendesk.png", "/logo-gmail.png"],
    },
    {
      id: "automate",
      title: "Automatiseren",
      sentence: "Cusmato begint direct met het afhandelen van klantvragen in jouw tone of voice.",
      chips: ["Automatisch", "Tone of voice", "24/7"],
      visual: {
        type: "ticket" as const,
      },
      logos: ["/logo-zendesk.png", "/logo-gmail.png"],
    },
    {
      id: "optimize",
      title: "Optimaliseren",
      sentence: "De AI leert van elke interactie en wordt continu beter in het helpen van jouw klanten.",
      chips: ["Machine learning", "Feedback loop", "Betere kwaliteit"],
      visual: {
        type: "profile" as const,
      },
      logos: ["/logo-shopify.png"],
    },
  ];

  return (
    <div className="bg-slate-50">
      <WorkflowSteps
        steps={steps}
        title="Zo werkt het"
        subtitle="In drie eenvoudige stappen ben je klaar om te automatiseren."
      />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="text-center">
          <Link
            to="/integraties"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-colors"
          >
            Integraties bekijken
          </Link>
        </div>
      </div>
    </div>
  );
}
