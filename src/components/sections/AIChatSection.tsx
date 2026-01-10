export default function AIChatSection() {
  const features = [
    "Antwoorden in het Nederlands en Engels",
    "24/7 beschikbaar",
    "Volledig aanpasbaar per bedrijf",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              AI-antwoorden via chat en e-mail
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg 
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-base text-slate-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Mobile Chat Visual */}
          <div className="hidden md:block relative">
            <div className="relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-xs mx-auto">
              <img
                src="/cusmato-ai-chat-mobile-conversation.webp"
                alt="AI chat conversatie op mobiel"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}