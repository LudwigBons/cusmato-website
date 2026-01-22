import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundCanvas from "./BackgroundCanvas";

export default function Layout() {
  const location = useLocation();
  
  // Determine background variant based on route
  const getBackgroundVariant = (): "default" | "hero" | "dark" | "pricing" | "faq" | "integrations" => {
    if (location.pathname === "/" || location.pathname === "/en" || location.pathname === "/ai-helpdesk" || location.pathname === "/en/ai-helpdesk") return "hero";
    if (location.pathname === "/faq" || location.pathname === "/en/faq") return "faq";
    if (location.pathname === "/integraties" || location.pathname === "/en/integrations" || location.pathname === "/en/integraties") return "integrations";
    if (location.pathname === "/prijzen" || location.pathname === "/en/pricing" || location.pathname === "/en/prijzen") return "pricing";
    return "default";
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden" data-theme={location.pathname.split("/")[1] || "home"}>
      <BackgroundCanvas variant={getBackgroundVariant()} />
      <Header />
      <main className="flex-grow relative z-0 px-5 sm:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}