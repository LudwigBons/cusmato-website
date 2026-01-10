import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import GlobalCTA from "../components/GlobalCTA";
import FAQAccordion from "../components/FAQAccordion";
import { fadeUp, staggerContainer, viewport } from "../lib/motion";

type Category = 
  | "Algemeen"
  | "Automatisering & AI"
  | "Controle & goedkeuring"
  | "Integraties"
  | "Veiligheid & privacy"
  | "Implementatie"
  | "Pricing / proefperiode"
  | "Support / onboarding";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
}

const categories: Category[] = [
  "Algemeen",
  "Automatisering & AI",
  "Controle & goedkeuring",
  "Integraties",
  "Veiligheid & privacy",
  "Implementatie",
  "Pricing / proefperiode",
  "Support / onboarding",
];

const faqs: FAQItem[] = [
  // ALGEMEEN
  {
    id: "wat-is-cusmato",
    question: "Wat is Cusmato?",
    answer: "Cusmato is in-house AI-software voor e-commerce klantenservice. Het automatiseert klantantwoorden via e-mail en chat—24/7—in jouw tone of voice, met controle en goedkeuring als je dat wilt.",
    category: "Algemeen",
  },
  {
    id: "voor-welke-bedrijven",
    question: "Voor welke bedrijven is Cusmato bedoeld?",
    answer: "Webshops en e-commerce teams die dagelijks veel vragen krijgen over bestellingen, verzending, retouren, facturen en productinformatie. Perfect voor bedrijven die willen schalen zonder extra supportpersoneel.",
    category: "Algemeen",
  },
  {
    id: "welke-kanalen",
    question: "Welke kanalen ondersteunt Cusmato?",
    answer: "E-mail en chat zijn de primaire kanalen. WhatsApp en andere kanalen zijn mogelijk via integraties of op aanvraag. Neem contact op om te bespreken welke kanalen voor jouw situatie beschikbaar zijn.",
    category: "Algemeen",
  },
  {
    id: "wat-voor-vragen",
    question: "Wat voor vragen kan Cusmato automatiseren?",
    answer: "Veelvoorkomende supportvragen zoals orderstatus, levertijd, retouraanvragen, adreswijzigingen, productvragen, garantie en facturen. Cusmato is bijzonder effectief bij herhaalbare vragen die 60-70% van je supporttickets uitmaken.",
    category: "Algemeen",
  },

  // AUTOMATISERING & AI
  {
    id: "hoe-begrijpt-cusmato",
    question: "Hoe 'begrijpt' Cusmato mijn klantvraag?",
    answer: "Cusmato herkent intentie en context op basis van conversatie-inhoud en gekoppelde data (bijv. orderinfo). Het AI-systeem analyseert de vraag, haalt relevante informatie op en stelt een passend antwoord op dat past bij jouw tone of voice en bedrijfsregels.",
    category: "Automatisering & AI",
  },
  {
    id: "gebruikt-data-trainen",
    question: "Gebruikt Cusmato mijn data om andere modellen te trainen?",
    answer: "Nee, absoluut niet. Je data blijft volledig van jou en wordt niet gebruikt om publieke modellen te trainen. Cusmato gebruikt in-house ontwikkelde AI-technologie en jouw data wordt alleen gebruikt voor jouw eigen automatiseringen.",
    category: "Automatisering & AI",
  },
  {
    id: "tone-of-voice",
    question: "Kan Cusmato antwoorden in onze tone of voice?",
    answer: "Ja, absoluut. Je stelt tone of voice regels in en Cusmato volgt die consistent. Tijdens de onboarding trainen we Cusmato op jouw bestaande communicatie, zodat elk antwoord klinkt als jouw team.",
    category: "Automatisering & AI",
  },
  {
    id: "meerdere-talen",
    question: "Kan Cusmato meerdere talen?",
    answer: "Ja, afhankelijk van je setup. Nederlands en Engels zijn standaard het meest gebruikt, maar andere talen zijn mogelijk. Bespreek tijdens onboarding welke talen je nodig hebt.",
    category: "Automatisering & AI",
  },

  // CONTROLE & GOEDKEURING
  {
    id: "antwoorden-laten-controleren",
    question: "Kan ik antwoorden laten controleren door een medewerker?",
    answer: "Ja. Je kunt kiezen voor volledig automatisch of 'concept + goedkeuring'. Bij goedkeuring legt Cusmato een conceptantwoord klaar dat een medewerker kan reviewen en verzenden. Je kunt dit per vraagtype of intentie instellen.",
    category: "Controle & goedkeuring",
  },
  {
    id: "regels-instellen",
    question: "Kan ik regels instellen wanneer Cusmato wel/niet automatisch verstuurt?",
    answer: "Ja. Je kunt bijvoorbeeld instellen dat Cusmato alleen automatisch antwoordt bij bekende intents, lage complexiteit of binnen bepaalde orderstatussen. Complexere vragen kunnen automatisch escaleren naar een medewerker.",
    category: "Controle & goedkeuring",
  },
  {
    id: "als-cusmato-niet-zeker",
    question: "Wat als Cusmato het niet zeker weet?",
    answer: "Dan kan het escaleren naar een medewerker, of een verduidelijkende vraag stellen—afhankelijk van je voorkeur en instellingen. Je houdt altijd controle over hoe Cusmato omgaat met onzekere situaties.",
    category: "Controle & goedkeuring",
  },

  // INTEGRATIES
  {
    id: "welke-tools-integreert",
    question: "Met welke tools integreert Cusmato?",
    answer: "Cusmato integreert met Gmail, Outlook, Shopify, Magento, Zendesk, WooCommerce, marketplaces zoals Bol.com en meer. Op aanvraag zijn 100+ andere integraties mogelijk. Bekijk onze integraties pagina voor het volledige overzicht.",
    category: "Integraties",
  },
  {
    id: "hoe-lang-koppelen",
    question: "Hoe lang duurt koppelen gemiddeld?",
    answer: "Vaak binnen 1 dag voor standaard integraties zoals Gmail, Outlook of Shopify. Complexere stacks met meerdere systemen kunnen langer duren—we bespreken dit tijdens onboarding en houden je op de hoogte.",
    category: "Integraties",
  },
  {
    id: "custom-integratie",
    question: "Kunnen jullie ook een custom integratie bouwen?",
    answer: "Ja, als er geen standaardkoppeling is, kunnen we een custom integratie bouwen. Bespreek tijdens je kennismaking welke tools je nodig hebt en we bekijken samen de mogelijkheden.",
    category: "Integraties",
  },

  // VEILIGHEID & PRIVACY
  {
    id: "is-cusmato-veilig",
    question: "Is Cusmato veilig?",
    answer: "Ja. Toegang en data worden beschermd met moderne beveiligingsstandaarden en je houdt controle over wat er wordt verstuurd. We gebruiken in-house ontwikkelde AI-technologie en voldoen aan AVG/GDPR-vereisten.",
    category: "Veiligheid & privacy",
  },
  {
    id: "waar-data-opgeslagen",
    question: "Waar wordt data opgeslagen?",
    answer: "Afhankelijk van jouw setup en voorkeuren. We bespreken dit tijdens onboarding en zorgen voor opslag die voldoet aan je eisen en compliance-vereisten.",
    category: "Veiligheid & privacy",
  },
  {
    id: "rechten-rollen-instellen",
    question: "Kan ik rechten/rollen instellen?",
    answer: "Ja, zodat teamleden alleen zien wat nodig is. Je kunt verschillende rollen en permissies instellen, bijvoorbeeld voor goedkeuringen, instellingen of alleen het bekijken van automatiseringen.",
    category: "Veiligheid & privacy",
  },

  // IMPLEMENTATIE
  {
    id: "hoe-ziet-onboarding-eruit",
    question: "Hoe ziet onboarding eruit?",
    answer: "In 3 stappen: (1) koppelen kanaal/tools, (2) tone of voice + FAQ/kennis toevoegen, (3) testen + live. We begeleiden je door het hele proces en zorgen dat alles naar wens werkt voordat je live gaat.",
    category: "Implementatie",
  },
  {
    id: "hoe-snel-resultaat",
    question: "Hoe snel zie ik resultaat?",
    answer: "Vaak binnen enkele dagen bij veelvoorkomende vragen. Na de koppeling en eerste setup kan Cusmato al direct helpen met veelgestelde vragen. Naarmate het systeem meer leert van jouw specifieke situatie, worden de antwoorden steeds beter.",
    category: "Implementatie",
  },
  {
    id: "wat-nodig-om-te-starten",
    question: "Wat hebben jullie nodig om te starten?",
    answer: "Toegang tot je supportkanaal (bijv. e-mail inbox), basis bedrijfsinfo, veelvoorkomende vragen, en eventueel order/klantdata via integratie. We bespreken tijdens onboarding precies wat nodig is voor jouw situatie.",
    category: "Implementatie",
  },

  // PRICING / PROEFPERIODE
  {
    id: "gratis-proefperiode",
    question: "Hebben jullie een gratis proefperiode?",
    answer: "Ja: Probeer 14 dagen gratis via een korte kennismaking. Geen creditcard nodig. Plan een gesprek en ontdek hoe Cusmato jouw klantenservice kan automatiseren.",
    category: "Pricing / proefperiode",
  },
  {
    id: "waar-kan-ik-starten",
    question: "Waar kan ik starten?",
    answer: "Via /probeer-14-dagen-gratis kun je een kennismakingsgesprek inplannen via Calendly. We bespreken jouw situatie en helpen je op weg met de gratis proefperiode.",
    category: "Pricing / proefperiode",
  },
  {
    id: "hoe-werkt-opzeggen",
    question: "Hoe werkt opzeggen?",
    answer: "Je zit nergens aan vast tijdens de proefperiode. Na de proefperiode kun je eenvoudig opzeggen wanneer je wilt—geen langdurige contracten of opzegtermijnen.",
    category: "Pricing / proefperiode",
  },

  // SUPPORT / ONBOARDING
  {
    id: "hulp-bij-inrichting",
    question: "Krijg ik hulp bij inrichting?",
    answer: "Ja, we helpen met structuur, tone of voice en de eerste automatiseringen. Tijdens onboarding zorgen we dat alles naar wens werkt en je team vertrouwd is met het systeem.",
    category: "Support / onboarding",
  },
  {
    id: "speciale-workflows",
    question: "Wat als ik speciale workflows heb?",
    answer: "Dan richten we samen regels en uitzonderingen in, zodat het past bij jouw processen. Cusmato is flexibel en aanpasbaar—we zorgen dat het werkt met jouw specifieke situatie en workflows.",
    category: "Support / onboarding",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "Alle">("Alle");
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    if (selectedCategory !== "Alle") {
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
                Alles wat je moet weten over Cusmato en het automatiseren van klantantwoorden.
              </p>

              {/* Search Input */}
              <div className="max-w-xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Zoek in FAQ…"
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
                    to="/probeer-14-dagen-gratis"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
                  >
                    Probeer 14 dagen gratis
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/integraties"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Bekijk integraties
                  </Link>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Category Pills */}
          <Reveal>
            <div className="mb-8 md:mb-12">
              <div className="flex flex-wrap gap-2 justify-center overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
                <button
                  onClick={() => setSelectedCategory("Alle")}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === "Alle"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  Alle
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
                <span className="md:hidden">Nog vragen?</span>
                <span className="hidden md:inline">Nog niet gevonden wat je zoekt?</span>
              </h2>
              <p className="text-base text-slate-600 mb-6 max-w-[28rem] sm:max-w-xl mx-auto leading-relaxed">
                Neem contact op tijdens een gratis kennismakingsgesprek en we beantwoorden al je vragen persoonlijk.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/probeer-14-dagen-gratis"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors hover:shadow-md"
                  >
                    Plan gratis gesprek
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to="/integraties"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                  >
                    Bekijk integraties
                  </Link>
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
                  Controle mogelijk
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
    </div>
  );
}
