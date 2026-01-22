import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import BottomMobileCTA from "../components/BottomMobileCTA";
import FAQAccordion from "../components/FAQAccordion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";
import { ROUTES } from "../lib/constants";

// Helper function to convert Dutch routes to English routes
const toEnglishUrl = (path: string): string => {
  if (path.startsWith("/en/")) {
    return path; // Already English
  }
  switch (path) {
    case ROUTES.tryFree: return "/en/try-14-days-for-free";
    case ROUTES.contact: return "/en/contact";
    default: return `/en${path}`;
  }
};

type Category = 
  | "General"
  | "Automation & AI"
  | "Control & approval"
  | "Integrations"
  | "Security & privacy"
  | "Implementation"
  | "Pricing / trial"
  | "Support / onboarding";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
}

const categories: Category[] = [
  "General",
  "Automation & AI",
  "Control & approval",
  "Integrations",
  "Security & privacy",
  "Implementation",
  "Pricing / trial",
  "Support / onboarding",
];

const faqs: FAQItem[] = [
  // GENERAL
  {
    id: "wat-is-cusmato",
    question: "What is Cusmato?",
    answer: "Cusmato is in-house AI software for e-commerce customer service. It automates customer responses via email and chat, 24/7, in your tone of voice, with control and approval if you want.",
    category: "General",
  },
  {
    id: "voor-welke-bedrijven",
    question: "Which companies is Cusmato intended for?",
    answer: "Online stores and e-commerce teams that receive many daily questions about orders, shipping, returns, invoices and product information. Perfect for companies that want to scale without additional support staff.",
    category: "General",
  },
  {
    id: "welke-kanalen",
    question: "Which channels does Cusmato support?",
    answer: "Email and chat are the primary channels. WhatsApp and other channels are possible via integrations or on request. Contact us to discuss which channels are available for your situation.",
    category: "General",
  },
  {
    id: "wat-voor-vragen",
    question: "What kind of questions can Cusmato automate?",
    answer: "Common support questions such as order status, delivery time, return requests, address changes, product questions, warranty and invoices. Cusmato is particularly effective with repetitive questions that make up 60-70% of your support tickets.",
    category: "General",
  },

  // AUTOMATION & AI
  {
    id: "hoe-begrijpt-cusmato",
    question: "How does Cusmato 'understand' my customer question?",
    answer: "Cusmato recognizes intent and context based on conversation content and linked data (e.g. order info). The AI system analyzes the question, retrieves relevant information and creates an appropriate answer that fits your tone of voice and business rules.",
    category: "Automation & AI",
  },
  {
    id: "gebruikt-data-trainen",
    question: "Does Cusmato use my data to train other models?",
    answer: "No, absolutely not. Your data remains completely yours and is not used to train public models. Cusmato uses in-house developed AI technology and your data is only used for your own automations.",
    category: "Automation & AI",
  },
  {
    id: "tone-of-voice",
    question: "Can Cusmato answer in our tone of voice?",
    answer: "Yes, absolutely. You set tone of voice rules and Cusmato follows them consistently. During onboarding we train Cusmato on your existing communication, so every answer sounds like your team.",
    category: "Automation & AI",
  },
  {
    id: "meerdere-talen",
    question: "Can Cusmato handle multiple languages?",
    answer: "Yes, depending on your setup. Dutch and English are standard and most commonly used, but other languages are possible. Discuss during onboarding which languages you need.",
    category: "Automation & AI",
  },

  // CONTROL & APPROVAL
  {
    id: "antwoorden-laten-controleren",
    question: "Can I have answers checked by an employee?",
    answer: "Yes. You can choose fully automatic or 'draft + approval'. With approval, Cusmato prepares a draft answer that an employee can review and send. You can set this per question type or intent.",
    category: "Control & approval",
  },
  {
    id: "regels-instellen",
    question: "Can I set rules for when Cusmato does/doesn't send automatically?",
    answer: "Yes. For example, you can set that Cusmato only answers automatically for known intents, low complexity or within certain order statuses. More complex questions can automatically escalate to an employee.",
    category: "Control & approval",
  },
  {
    id: "als-cusmato-niet-zeker",
    question: "What if Cusmato isn't sure?",
    answer: "It can escalate to an employee, or ask a clarifying question, depending on your preference and settings. You always maintain control over how Cusmato handles uncertain situations.",
    category: "Control & approval",
  },

  // INTEGRATIONS
  {
    id: "welke-tools-integreert",
    question: "Which tools does Cusmato integrate with?",
    answer: "Cusmato integrates with Gmail, Outlook, Shopify, Magento, Zendesk, WooCommerce, marketplaces such as Bol.com and more. 100+ other integrations are possible on request. View our integrations page for the complete overview.",
    category: "Integrations",
  },
  {
    id: "hoe-lang-koppelen",
    question: "How long does connecting take on average?",
    answer: "Often within 1 day for standard integrations such as Gmail, Outlook or Shopify. More complex stacks with multiple systems can take longer. We discuss this during onboarding and keep you informed.",
    category: "Integrations",
  },
  {
    id: "custom-integratie",
    question: "Can you also build a custom integration?",
    answer: "Yes, if there's no standard connection, we can build a custom integration. Discuss during your introduction which tools you need and we'll look at the possibilities together.",
    category: "Integrations",
  },

  // SECURITY & PRIVACY
  {
    id: "is-cusmato-veilig",
    question: "Is Cusmato secure?",
    answer: "Yes. Access and data are protected with modern security standards and you maintain control over what is sent. We use in-house developed AI technology and comply with GDPR requirements.",
    category: "Security & privacy",
  },
  {
    id: "waar-data-opgeslagen",
    question: "Where is data stored?",
    answer: "Depending on your setup and preferences. We discuss this during onboarding and ensure storage that meets your requirements and compliance needs.",
    category: "Security & privacy",
  },
  {
    id: "rechten-rollen-instellen",
    question: "Can I set rights/roles?",
    answer: "Yes, so team members only see what's needed. You can set different roles and permissions, for example for approvals, settings or only viewing automations.",
    category: "Security & privacy",
  },

  // IMPLEMENTATION
  {
    id: "hoe-ziet-onboarding-eruit",
    question: "What does onboarding look like?",
    answer: "In 3 steps: (1) connect channel/tools, (2) tone of voice + add FAQ/knowledge, (3) test + go live. We guide you through the entire process and ensure everything works as desired before you go live.",
    category: "Implementation",
  },
  {
    id: "hoe-snel-resultaat",
    question: "How quickly will I see results?",
    answer: "Often within a few days for common questions. After connecting and initial setup, Cusmato can already help directly with frequently asked questions. As the system learns more from your specific situation, the answers get better and better.",
    category: "Implementation",
  },
  {
    id: "wat-nodig-om-te-starten",
    question: "What do you need to get started?",
    answer: "Access to your support channel (e.g. email inbox), basic company info, common questions, and optionally order/customer data via integration. We discuss during onboarding exactly what's needed for your situation.",
    category: "Implementation",
  },

  // PRICING / TRIAL
  {
    id: "gratis-proefperiode",
    question: "Do you have a free trial?",
    answer: "Yes: Try 14 days for free via a brief introduction. No credit card required. Schedule a conversation and discover how Cusmato can automate your customer service.",
    category: "Pricing / trial",
  },
  {
    id: "waar-kan-ik-starten",
    question: "Where can I start?",
    answer: "Via /en/try-14-days-for-free you can schedule an introduction call via Calendly. We discuss your situation and help you get started with the free trial.",
    category: "Pricing / trial",
  },
  {
    id: "hoe-werkt-opzeggen",
    question: "How does cancellation work?",
    answer: "You're not tied to anything during the trial period. After the trial period, you can easily cancel whenever you want, without long-term contracts or cancellation periods.",
    category: "Pricing / trial",
  },

  // SUPPORT / ONBOARDING
  {
    id: "hulp-bij-inrichting",
    question: "Do I get help with setup?",
    answer: "Yes, we help with structure, tone of voice and the first automations. During onboarding we ensure everything works as desired and your team is familiar with the system.",
    category: "Support / onboarding",
  },
  {
    id: "speciale-workflows",
    question: "What if I have special workflows?",
    answer: "Then we set up rules and exceptions together, so it fits your processes. Cusmato is flexible and adaptable. We ensure it works with your specific situation and workflows.",
    category: "Support / onboarding",
  },
];

export default function FAQPageEN() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          {/* Hero Section */}
          <Reveal>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-[1.05]">
                FAQ
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-[28rem] sm:max-w-2xl mx-auto mb-8 leading-relaxed">
                Everything you need to know about Cusmato and automating customer responses.
              </p>

              {/* Search Input */}
              <div className="max-w-xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQ…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-11 rounded-full border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to={toEnglishUrl(ROUTES.tryFree)}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
                  >
                    Try 14 days for free
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href="https://www.cusmato.app/welkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Start onboarding
                  </a>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Category Pills */}
          <Reveal>
            <div className="mb-8 md:mb-12">
              <div className="flex flex-wrap gap-2 justify-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === "All"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FAQ Accordion */}
          <Reveal>
            <FAQAccordion items={filteredFAQs} searchQuery={searchQuery} />
          </Reveal>

          {/* Not Found Card */}
          <Reveal>
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-3xl font-bold text-slate-900 mb-3 leading-[1.15]">
                <span className="md:hidden">Still have questions?</span>
                <span className="hidden md:inline">Still haven't found what you're looking for?</span>
              </h2>
              <p className="text-base text-slate-600 mb-6 max-w-[28rem] sm:max-w-xl mx-auto leading-relaxed">
                Contact us during a free introduction call and we'll answer all your questions personally.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to={toEnglishUrl(ROUTES.tryFree)}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
                  >
                    Schedule free call
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <a
                    href="https://www.cusmato.app/welkom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Start onboarding
                  </a>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Trust Row */}
          <Reveal>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Control possible
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Tone of voice
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24/7
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  E-commerce focus
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <GlobalCTA />
      <BottomMobileCTA />
    </div>
  );
}
