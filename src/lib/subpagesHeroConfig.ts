/**
 * Centralized hero configuration for all subpages
 * Matches exact structure and spacing of PricingPage
 */

import { ROUTES } from "./constants";

// Helper function to convert Dutch routes to English routes
const toEnglishUrl = (path: string): string => {
  if (path.startsWith("/en/")) {
    return path; // Already English
  }
  // Handle specific Dutch paths and convert them to English counterparts
  switch (path) {
    case ROUTES.home: return "/en";
    case ROUTES.aiHelpdesk: return "/en/ai-helpdesk";
    case ROUTES.bestellingenRetouren: return "/en/orders-returns";
    case ROUTES.aiFacturatie: return "/en/ai-facturatie";
    case ROUTES.workflowsRegels: return "/en/workflows-regels";
    case ROUTES.knowledgebase: return "/en/knowledgebase";
    case ROUTES.klantdata: return "/en/customer-data";
    case ROUTES.teamchat: return "/en/team-chat";
    case ROUTES.inHouseAI: return "/en/in-house-ai";
    case ROUTES.integraties: return "/en/integrations";
    case ROUTES.prijzen: return "/en/pricing";
    case ROUTES.faq: return "/en/faq";
    case ROUTES.blog: return "/en/blog";
    case ROUTES.tryFree: return "/en/try-14-days-for-free";
    case ROUTES.contact: return "/en/contact";
    case ROUTES.terms: return "/en/terms-conditions";
    case ROUTES.privacy: return "/en/security-privacy";
    default: return `/en${path}`; // Fallback for other paths
  }
};

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

// English version of hero configs
export const subpagesHeroConfigEN: Record<string, SubpageHeroConfig> = {
  "ai-helpdesk": {
    label: "AI HELPDESK",
    title: "Automate e-commerce customer service with Cusmato AI Helpdesk",
    titleMobile: "Automate AI Helpdesk",
    description:
      "Cusmato understands customer questions, writes answers in your tone of voice and handles tickets automatically, with or without approval.",
    imageSrc: "/Focused Support Automation.webp",
    imageAlt: "AI Helpdesk automation with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis", // Keep same route (shared page)
    },
    secondaryCta: {
      label: "View demo",
      href: "https://www.cusmato.app/welkom",
      external: true,
    },
  },
  "bestellingen-retouren": {
    label: "ORDERS & RETURNS",
    title: "Orders & returns, automatically from your AI Helpdesk",
    titleMobile: "Orders & returns",
    description:
      "Orders & returns are automatically handled from your AI Helpdesk. Tickets + orders + shipping status in one flow.",
    imageSrc: "/One Inbox. Full Control..webp",
    imageAlt: "Orders & returns automation with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
  },
  "ai-facturatie": {
    label: "AI INVOICING",
    title: "AI invoicing, automatically from your AI Helpdesk",
    description:
      "Invoice questions are automatically handled from your AI Helpdesk. Find invoices, check payment status and resend automatically.",
    imageSrc: "/Efficient Support Management.webp",
    imageAlt: "AI invoicing automation with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
  },
  "workflows-regels": {
    label: "WORKFLOWS & RULES",
    title: "Workflows & rules",
    description:
      "Set up rules and workflows to automate customer service. You determine what happens automatically and what needs approval.",
    imageSrc: "/Control Your Support Flow.webp",
    imageAlt: "Workflows & rules with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
    secondaryCta: {
      label: "View demo",
      href: "https://www.cusmato.app/welkom",
      external: true,
    },
  },
  knowledgebase: {
    label: "KNOWLEDGEBASE",
    title: "Knowledgebase",
    description:
      "Connect your knowledgebase to Cusmato and let AI automatically find and use the right information in answers.",
    imageSrc: "/Smarter Support Operations.webp",
    imageAlt: "Knowledgebase with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
  },
  klantdata: {
    label: "CUSTOMER DATA",
    title: "Customer data",
    description:
      "Centralize customer data from all your channels and use it as context in the AI Helpdesk for faster and more accurate support.",
    imageSrc: "/Real-Time Support Insights.webp",
    imageAlt: "Customer data with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
  },
  teamchat: {
    label: "TEAM CHAT",
    title: "Team chat",
    description:
      "Work together around tickets and customers. Discuss cases, tag colleagues and make decisions without losing context.",
    imageSrc: "/People Behind Cusmato AI Dashboard.webp",
    imageAlt: "Team chat with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: "/probeer-14-dagen-gratis",
    },
  },
  "in-house-ai": {
    label: "IN-HOUSE AI",
    title: "In-house AI",
    description:
      "Cusmato runs on proprietary AI logic for customer service: faster, more consistent and fully tailored to e-commerce workflows.",
    imageSrc: "/Built for Support Teams.webp",
    imageAlt: "In-house AI for support teams with Cusmato",
    primaryCta: {
      label: "Try 14 days for free",
      href: toEnglishUrl(ROUTES.tryFree),
    },
    secondaryCta: {
      label: "Contact us",
      href: toEnglishUrl(ROUTES.contact),
    },
  },
};
