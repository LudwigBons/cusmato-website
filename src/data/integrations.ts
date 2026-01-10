export type IntegrationStatus = "available" | "beta" | "coming_soon";
export type IntegrationCategory = "E-mail" | "E-commerce" | "Chat" | "Support" | "Messaging" | "Marketplace";

export interface Integration {
  id: string;
  name: string;
  category: IntegrationCategory;
  status: IntegrationStatus;
  description: string;
  logo?: string;
  automationFeatures: string[];
  requirements?: string[];
  buttonText: string;
  buttonAction: "connect" | "manage" | "dns" | "request";
}

export const integrations: Integration[] = [
  // E-mail
  {
    id: "gmail",
    name: "Gmail",
    category: "E-mail",
    status: "available",
    description: "Automatische beantwoording van e-mails vanuit je Gmail inbox.",
    logo: "/logo-gmail.png",
    automationFeatures: [
      "Automatisch antwoorden op e-mails",
      "Orderinformatie opzoeken",
      "Retouren verwerken",
    ],
    requirements: ["Gmail account", "OAuth toegang"],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "E-mail",
    status: "available",
    description: "Microsoft Outlook integratie voor zakelijke e-mail accounts.",
    logo: "/logo-outlook.png",
    automationFeatures: [
      "Automatisch antwoorden op e-mails",
      "Kalender integratie",
      "Contacten synchronisatie",
    ],
    requirements: ["Outlook/Microsoft 365 account"],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "zoho-mail",
    name: "Zoho Mail",
    category: "E-mail",
    status: "available",
    description: "Integratie met Zoho Mail voor automatische e-mail antwoorden.",
    automationFeatures: [
      "Automatisch antwoorden op e-mails",
      "Ticket management",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  // E-commerce
  {
    id: "shopify",
    name: "Shopify",
    category: "E-commerce",
    status: "available",
    description: "Automatische order- en klantinformatie uit je Shopify webshop.",
    logo: "/logo-shopify.png",
    automationFeatures: [
      "Orderstatus opzoeken",
      "Retouren verwerken",
      "Klantgegevens ophalen",
    ],
    requirements: ["Shopify store", "Admin API toegang"],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "E-commerce",
    status: "available",
    description: "Volledige integratie met je WordPress WooCommerce webshop.",
    automationFeatures: [
      "Orderinformatie opzoeken",
      "Productdetails ophalen",
      "Klantgegevens synchroniseren",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "magento",
    name: "Magento",
    category: "E-commerce",
    status: "available",
    description: "Volledige e-commerce platform integratie voor Magento stores.",
    logo: "/logo-magento.png",
    automationFeatures: [
      "Orderbeheer",
      "Klantinformatie",
      "Productcatalogus",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "bol-com",
    name: "Bol.com",
    category: "E-commerce",
    status: "available",
    description: "Automatische antwoorden op vragen over Bol.com orders en retouren.",
    automationFeatures: [
      "Orderstatus opzoeken",
      "Retouren verwerken",
      "Klantvragen beantwoorden",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "five-x",
    name: "Five X",
    category: "E-commerce",
    status: "available",
    description: "Integratie met Five X e-commerce platform voor orderbeheer.",
    automationFeatures: [
      "Orderinformatie",
      "Klantgegevens",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "medusa",
    name: "Medusa",
    category: "E-commerce",
    status: "available",
    description: "Open-source e-commerce platform integratie voor Medusa stores.",
    automationFeatures: [
      "Orderbeheer",
      "Productinformatie",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  // Marketplace
  {
    id: "amazon",
    name: "Amazon",
    category: "Marketplace",
    status: "available",
    description: "Automatische antwoorden op Amazon order- en retourvragen.",
    automationFeatures: [
      "Orderstatus opzoeken",
      "Retouren verwerken",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "anwb-mirakl",
    name: "ANWB (via Mirakl)",
    category: "Marketplace",
    status: "available",
    description: "Integratie met ANWB marketplace via Mirakl platform.",
    automationFeatures: [
      "Orderbeheer",
      "Klantvragen beantwoorden",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "obelink",
    name: "Obelink",
    category: "Marketplace",
    status: "available",
    description: "Automatische antwoorden op Obelink order- en productvragen.",
    automationFeatures: [
      "Orderinformatie",
      "Productdetails",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "kaufland",
    name: "Kaufland",
    category: "Marketplace",
    status: "available",
    description: "Integratie met Kaufland marketplace voor orderbeheer.",
    automationFeatures: [
      "Orderstatus",
      "Klantvragen",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "alltricks",
    name: "Alltricks",
    category: "Marketplace",
    status: "available",
    description: "Automatische antwoorden op Alltricks order- en productvragen.",
    automationFeatures: [
      "Orderinformatie",
      "Productdetails",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "mediamarkt",
    name: "MediaMarkt",
    category: "Marketplace",
    status: "available",
    description: "Integratie met MediaMarkt marketplace voor klantenservice automatisering.",
    automationFeatures: [
      "Orderbeheer",
      "Retouren verwerken",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  // Chat/Messaging
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Messaging",
    status: "available",
    description: "Automatische antwoorden via WhatsApp Business API.",
    automationFeatures: [
      "Automatisch antwoorden in WhatsApp",
      "Orderstatus delen",
      "Retouren verwerken",
    ],
    requirements: ["WhatsApp Business API", "Goedgekeurd account"],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Support",
    status: "available",
    description: "Koppel met je bestaande Zendesk account voor geautomatiseerde tickets.",
    logo: "/logo-zendesk.png",
    automationFeatures: [
      "Automatisch antwoorden op tickets",
      "Ticket routing",
      "Klantgegevens synchroniseren",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "E-mail",
    status: "available",
    description: "Integreer met je e-mail marketing platform voor klantcommunicatie.",
    logo: "/logo-mailchimp.png",
    automationFeatures: [
      "E-mail automatisering",
      "Klantsegmentatie",
    ],
    buttonText: "Koppelen",
    buttonAction: "connect",
  },
  // Special
  {
    id: "cusmato-bol-agent",
    name: "Cusmato Bol.com Browser Agent",
    category: "E-commerce",
    status: "available",
    description: "Speciale browser agent voor geavanceerde Bol.com integratie.",
    automationFeatures: [
      "Geavanceerde orderbeheer",
      "Real-time synchronisatie",
    ],
    buttonText: "Beheer",
    buttonAction: "manage",
  },
];

export const categories: IntegrationCategory[] = ["E-mail", "E-commerce", "Chat", "Support", "Messaging", "Marketplace"];