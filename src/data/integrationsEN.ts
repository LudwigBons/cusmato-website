export type IntegrationStatus = "available" | "beta" | "coming_soon";
export type IntegrationCategory = "Email" | "E-commerce" | "Chat" | "Support" | "Messaging" | "Marketplace";

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

export const integrationsEN: Integration[] = [
  // Email
  {
    id: "gmail",
    name: "Gmail",
    category: "Email",
    status: "available",
    description: "Automatic email responses from your Gmail inbox.",
    logo: "/logo-gmail.png",
    automationFeatures: [
      "Automatically respond to emails",
      "Look up order information",
      "Process returns",
    ],
    requirements: ["Gmail account", "OAuth access"],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "Email",
    status: "available",
    description: "Microsoft Outlook integration for business email accounts.",
    logo: "/logo-outlook.png",
    automationFeatures: [
      "Automatically respond to emails",
      "Calendar integration",
      "Contact synchronization",
    ],
    requirements: ["Outlook/Microsoft 365 account"],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "zoho-mail",
    name: "Zoho Mail",
    category: "Email",
    status: "available",
    description: "Integration with Zoho Mail for automatic email responses.",
    automationFeatures: [
      "Automatically respond to emails",
      "Ticket management",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  // E-commerce
  {
    id: "shopify",
    name: "Shopify",
    category: "E-commerce",
    status: "available",
    description: "Automatic order and customer information from your Shopify store.",
    logo: "/logo-shopify.png",
    automationFeatures: [
      "Look up order status",
      "Process returns",
      "Retrieve customer data",
    ],
    requirements: ["Shopify store", "Admin API access"],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "E-commerce",
    status: "available",
    description: "Full integration with your WordPress WooCommerce store.",
    automationFeatures: [
      "Look up order information",
      "Retrieve product details",
      "Synchronize customer data",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "magento",
    name: "Magento",
    category: "E-commerce",
    status: "available",
    description: "Full e-commerce platform integration for Magento stores.",
    logo: "/logo-magento.png",
    automationFeatures: [
      "Order management",
      "Customer information",
      "Product catalog",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "bol-com",
    name: "Bol.com",
    category: "E-commerce",
    status: "available",
    description: "Automatic responses to questions about Bol.com orders and returns.",
    automationFeatures: [
      "Look up order status",
      "Process returns",
      "Answer customer questions",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "five-x",
    name: "Five X",
    category: "E-commerce",
    status: "available",
    description: "Integration with Five X e-commerce platform for order management.",
    automationFeatures: [
      "Order information",
      "Customer data",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "medusa",
    name: "Medusa",
    category: "E-commerce",
    status: "available",
    description: "Open-source e-commerce platform integration for Medusa stores.",
    automationFeatures: [
      "Order management",
      "Product information",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  // Marketplace
  {
    id: "amazon",
    name: "Amazon",
    category: "Marketplace",
    status: "available",
    description: "Automatic responses to Amazon order and return questions.",
    automationFeatures: [
      "Look up order status",
      "Process returns",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "anwb-mirakl",
    name: "ANWB (via Mirakl)",
    category: "Marketplace",
    status: "available",
    description: "Integration with ANWB marketplace via Mirakl platform.",
    automationFeatures: [
      "Order management",
      "Answer customer questions",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "obelink",
    name: "Obelink",
    category: "Marketplace",
    status: "available",
    description: "Automatic responses to Obelink order and product questions.",
    automationFeatures: [
      "Order information",
      "Product details",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "kaufland",
    name: "Kaufland",
    category: "Marketplace",
    status: "available",
    description: "Integration with Kaufland marketplace for order management.",
    automationFeatures: [
      "Order status",
      "Customer questions",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "alltricks",
    name: "Alltricks",
    category: "Marketplace",
    status: "available",
    description: "Automatic responses to Alltricks order and product questions.",
    automationFeatures: [
      "Order information",
      "Product details",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "mediamarkt",
    name: "MediaMarkt",
    category: "Marketplace",
    status: "available",
    description: "Integration with MediaMarkt marketplace for customer service automation.",
    automationFeatures: [
      "Order management",
      "Process returns",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  // Chat/Messaging
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "Messaging",
    status: "available",
    description: "Automatic responses via WhatsApp Business API.",
    automationFeatures: [
      "Automatically respond in WhatsApp",
      "Share order status",
      "Process returns",
    ],
    requirements: ["WhatsApp Business API", "Approved account"],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    category: "Support",
    status: "available",
    description: "Connect with your existing Zendesk account for automated tickets.",
    logo: "/logo-zendesk.png",
    automationFeatures: [
      "Automatically respond to tickets",
      "Ticket routing",
      "Synchronize customer data",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "Email",
    status: "available",
    description: "Integrate with your email marketing platform for customer communication.",
    logo: "/logo-mailchimp.png",
    automationFeatures: [
      "Email automation",
      "Customer segmentation",
    ],
    buttonText: "Connect",
    buttonAction: "connect",
  },
  // Special
  {
    id: "cusmato-bol-agent",
    name: "Cusmato Bol.com Browser Agent",
    category: "E-commerce",
    status: "available",
    description: "Special browser agent for advanced Bol.com integration.",
    automationFeatures: [
      "Advanced order management",
      "Real-time synchronization",
    ],
    buttonText: "Manage",
    buttonAction: "manage",
  },
];

export const categoriesEN: IntegrationCategory[] = ["Email", "E-commerce", "Chat", "Support", "Messaging", "Marketplace"];
