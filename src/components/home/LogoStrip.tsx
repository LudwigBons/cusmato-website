// LogoStrip.tsx - Grote gekleurde partner logos (statisch, zoals screenshot)

const LOGOS = [
  { src: "/logo-shopify.png", alt: "Shopify", name: "Shopify" },
  { src: "/logo-zendesk.png", alt: "Zendesk", name: "Zendesk" },
  { src: "/Bol-logo-short.png", alt: "bol.com", name: "bol.com" },
  { src: "/Intercom-logo.png", alt: "Intercom", name: "Intercom" },
  { src: "/logo-outlook.png", alt: "Outlook", name: "Outlook" },
  { src: "/logo-gmail.png", alt: "Gmail", name: "Gmail" },
];

export default function LogoStrip() {
  return (
    <section className="py-10 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {LOGOS.map((logo, idx) => (
            <div
              key={logo.name + idx}
              className="flex items-center justify-center h-16 w-full max-w-[160px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto max-h-12 object-contain"
                loading="lazy"
                onError={(e) => {
                  // Placeholder fallback
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const placeholder = document.createElement("div");
                  placeholder.className = "text-xs font-semibold text-slate-500 text-center";
                  placeholder.textContent = logo.name;
                  img.parentElement?.appendChild(placeholder);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}