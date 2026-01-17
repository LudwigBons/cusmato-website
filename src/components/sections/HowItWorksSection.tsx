import WorkflowSteps from "../WorkflowSteps";

export default function HowItWorksSection() {
  const steps = [
    {
      id: "connect",
      title: "Koppel je bronnen",
      sentence: "Verbind Shopify, bol.com, WooCommerce en e-mail met Cusmato in minuten.",
      chips: ["Shopify", "bol.com", "WooCommerce", "E-mail"],
      visual: {
        type: "connection" as const,
        sources: ["Shopify", "bol.com", "Gmail"],
        target: "Cusmato Inbox",
      },
      logos: ["/logo-shopify.png", "/logo-gmail.png", "/Bol-logo-short.png"],
    },
    {
      id: "centralize",
      title: "Centraliseer klantprofielen",
      sentence: "Cusmato verzamelt automatisch contactgegevens en orderhistorie in één profiel.",
      chips: ["Contact sync", "Orderhistorie", "Automatisch"],
      visual: {
        type: "profile" as const,
      },
      logos: ["/logo-shopify.png", "/logo-zendesk.png"],
    },
    {
      id: "ticket",
      title: "Automatische context",
      sentence: "Bij elk nieuw ticket voegt Cusmato direct relevante klantcontext toe.",
      chips: ["Ticket context", "Klantgeschiedenis", "Auto toevoegen"],
      visual: {
        type: "ticket" as const,
      },
      logos: ["/logo-zendesk.png", "/logo-gmail.png"],
    },
  ];

  return (
    <WorkflowSteps
      steps={steps}
      title="Zo werkt de koppeling"
      subtitle="In drie stappen koppel je je tools en start je met automatiseren."
    />
  );
}