/**
 * Centralized hero configuration for all subpages
 * Matches exact structure and spacing of PricingPage
 */

export interface SubpageHeroConfig {
  label?: string;
  title: string; // Always string for consistency
  titleMobile?: string; // Optional mobile-specific title
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  dark?: boolean;
}

export const subpagesHeroConfig: Record<string, SubpageHeroConfig> = {
  "ai-helpdesk": {
    label: "AI HELPDESK",
    title: "Automatiseer e-commerce klantenservice met Cusmato AI Helpdesk",
    titleMobile: "AI Helpdesk automatiseren",
    description:
      "Cusmato begrijpt klantvragen, schrijft antwoorden in jouw tone of voice en handelt tickets automatisch af, met of zonder goedkeuring.",
    imageSrc: "/Focused Support Automation.webp",
    imageAlt: "AI Helpdesk automatisering met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
    secondaryCta: {
      label: "Bekijk demo",
      href: "https://www.cusmato.app/welkom",
      external: true,
    },
  },
  "workflows-regels": {
    label: "WORKFLOWS & REGELS",
    title: "Volledige controle over je AI-workflows",
    description: "Automatiseer wat kan. Behoud controle waar nodig.",
    imageSrc: "/Control Your Support Flow.webp",
    imageAlt: "Workflows & regels controle met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
    secondaryCta: {
      label: "Bekijk voorbeeld workflow",
      href: "/contact",
    },
    dark: false, // Hero is buiten dark layout
  },
  "bestellingen-retouren": {
    label: "BESTELLINGEN & RETOUREN",
    title: "Bestellingen & retouren, automatisch vanuit je AI Helpdesk",
    titleMobile: "Bestellingen & retouren",
    description:
      "Bestellingen & retouren worden automatisch afgehandeld vanuit je AI Helpdesk. Tickets + orders + verzendstatus in één flow.",
    imageSrc: "/One Inbox. Full Control..webp",
    imageAlt: "Bestellingen & retouren automatisering met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
  },
  teamchat: {
    label: "TEAMCHAT",
    title: "Teamchat",
    description: "Samenwerken rondom tickets in één gedeelde inbox. Real-time updates, comments en collaboratie voor je support team.",
    imageSrc: "/People Behind Cusmato AI Dashboard.webp",
    imageAlt: "Teamchat en samenwerking met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
  },
  "ai-facturatie": {
    label: "AI FACTURATIE",
    title: "AI Facturatie",
    description: "Automatisch facturen versturen, betalingen opvolgen en factuurvragen beantwoorden. Volledig geïntegreerd in je AI Helpdesk.",
    imageSrc: "/Efficient Support Management.webp",
    imageAlt: "AI Facturatie met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
  },
  knowledgebase: {
    label: "KNOWLEDGEBASE",
    title: "Knowledgebase",
    description: "Koppel je knowledgebase aan Cusmato en laat AI automatisch de juiste informatie vinden en gebruiken in antwoorden.",
    imageSrc: "/Smarter Support Operations.webp",
    imageAlt: "Knowledgebase integratie met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
  },
  klantdata: {
    label: "KLANTDATA",
    title: "Klantdata geïntegreerd in elk ticket",
    description:
      "Cusmato koppelt automatisch klantcontext aan elk ticket: bestelgeschiedenis, kanaal, status en activiteit. Snellere en betere antwoorden, zonder handmatig werk.",
    imageSrc: "/Real-Time Support Insights.webp",
    imageAlt: "Klantdata en real-time support insights met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
  },
  "in-house-ai": {
    label: "IN-HOUSE AI",
    title: "In-house AI",
    description:
      "Cusmato draait op eigen AI-logica voor klantenservice: sneller, consistenter en volledig afgestemd op e-commerce workflows.",
    imageSrc: "/Built for Support Teams.webp",
    imageAlt: "In-house AI voor support teams met Cusmato",
    primaryCta: {
      label: "Probeer 14 dagen gratis",
      href: "/probeer-14-dagen-gratis",
    },
    secondaryCta: {
      label: "Neem contact op",
      href: "/contact",
    },
  },
};
