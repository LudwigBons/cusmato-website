// Centralized constants for routes, navigation, and CTAs

export const ROUTES = {
  home: "/",
  
  // Product pages
  aiHelpdesk: "/ai-helpdesk",
  bestellingenRetouren: "/bestellingen-retouren",
  aiFacturatie: "/ai-facturatie",
  workflowsRegels: "/workflows-regels",
  knowledgebase: "/knowledgebase",
  klantdata: "/klantdata",
  teamchat: "/teamchat",
  inHouseAI: "/in-house-ai",
  
  // Resources
  integraties: "/integraties",
  prijzen: "/prijzen",
  faq: "/faq",
  blog: "/blog",
  
  // Company
  tryFree: "/probeer-14-dagen-gratis",
  contact: "/contact",
  onboarding: "https://www.cusmato.app/welkom",
  
  // Legal
  terms: "/algemene-voorwaarden",
  privacy: "/security-privacy",
} as const;

export const CTAS = {
  tryFree: {
    text: "Probeer 14 dagen gratis",
    href: ROUTES.tryFree,
  },
  startOnboarding: {
    text: "Start onboarding",
    href: ROUTES.onboarding,
    external: true,
  },
  requestDemo: {
    text: "Vraag demo",
    href: ROUTES.contact,
  },
  viewIntegrations: {
    text: "Bekijk Integraties →",
    href: ROUTES.integraties,
  },
} as const;

export interface MenuItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  featured?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Helper to create mutable copy
const createMenuData = () => ({
  featured: {
    label: "AI Helpdesk",
    description: "Automatische klantenservice voor e-commerce, 24/7",
    href: ROUTES.aiHelpdesk,
    featured: true,
  },
  sections: [
    {
      title: "AUTOMATISERING",
      items: [
        {
          label: "Bestellingen & retouren",
          href: ROUTES.bestellingenRetouren,
        },
        {
          label: "AI facturatie",
          href: ROUTES.aiFacturatie,
        },
        {
          label: "Workflows & regels",
          href: ROUTES.workflowsRegels,
        },
      ],
    },
    {
      title: "VERANTWOORDING",
      items: [
        {
          label: "Algemene voorwaarden",
          href: ROUTES.terms,
        },
        {
          label: "Security & privacy",
          href: ROUTES.privacy,
        },
      ],
    },
    {
      title: "SELF-SERVICE & KENNIS",
      items: [
        {
          label: "Knowledgebase",
          href: ROUTES.knowledgebase,
        },
        {
          label: "Klantdata",
          href: ROUTES.klantdata,
        },
        {
          label: "Teamchat",
          href: ROUTES.teamchat,
        },
        {
          label: "In-house AI",
          href: ROUTES.inHouseAI,
        },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        {
          label: "Prijzen",
          href: ROUTES.prijzen,
          description: "Bekijk onze modulaire prijzen en bundels",
        },
      ],
    },
  ],
  imageCard: {
    image: "/Onboard Cusmato AI.png",
    imageAlt: "Cusmato AI Onboarding",
    title: "Onboard Cusmato AI",
    description: "Onboard Cusmato in 5 minuten en start direct met automatiseren. Koppel je tools, configureer je AI Helpdesk en laat Cusmato klantvragen zelfstandig afhandelen.",
    ctaText: "Start onboarding →",
    ctaHref: ROUTES.onboarding,
    ctaExternal: true,
  },
});

export const NAVIGATION = {
  megaMenu: createMenuData(),
};
