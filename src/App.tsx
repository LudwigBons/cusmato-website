import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const HomeEn = lazy(() => import("./pages/HomeEN"));
const IntegrationsPage = lazy(() => import("./pages/IntegrationsPage"));
const IntegrationsPageEN = lazy(() => import("./pages/IntegrationsPageEN"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const FAQPageEN = lazy(() => import("./pages/FAQPageEN"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPageEN = lazy(() => import("./pages/BlogPageEN"));
const BlogPostPageEN = lazy(() => import("./pages/BlogPostPageEN"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const Probeer14DagenGratisPage = lazy(() => import("./pages/Probeer14DagenGratisPage"));
const Try14DaysForFreePage = lazy(() => import("./pages/Try14DaysForFreePage"));
const SecurityPrivacyPage = lazy(() => import("./pages/SecurityPrivacyPage"));
const AIHelpdeskPage = lazy(() => import("./pages/AIHelpdeskPage"));
const AIHelpdeskPageEN = lazy(() => import("./pages/AIHelpdeskPageEN"));
const BestellingenRetourenPage = lazy(() => import("./pages/BestellingenRetourenPage"));
const BestellingenRetourenPageEN = lazy(() => import("./pages/BestellingenRetourenPageEN"));
const AIFacturatiePage = lazy(() => import("./pages/AIFacturatiePage"));
const AIFacturatiePageEN = lazy(() => import("./pages/AIFacturatiePageEN"));
const WorkflowsRegelsPage = lazy(() => import("./pages/WorkflowsRegelsPage"));
const WorkflowsRegelsPageEN = lazy(() => import("./pages/WorkflowsRegelsPageEN"));
const KnowledgebasePage = lazy(() => import("./pages/KnowledgebasePage"));
const KnowledgebasePageEN = lazy(() => import("./pages/KnowledgebasePageEN"));
const KlantdataPage = lazy(() => import("./pages/KlantdataPage"));
const KlantdataPageEN = lazy(() => import("./pages/KlantdataPageEN"));
const TeamchatPage = lazy(() => import("./pages/TeamchatPage"));
const TeamchatPageEN = lazy(() => import("./pages/TeamchatPageEN"));
const AlgemeneVoorwaardenPage = lazy(() => import("./pages/AlgemeneVoorwaardenPage"));
const PrijzenPage = lazy(() => import("./pages/PrijzenPage"));
const PrijzenPageEN = lazy(() => import("./pages/PrijzenPageEN"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const InHouseAIPage = lazy(() => import("./pages/InHouseAIPage"));
const InHouseAIPageEN = lazy(() => import("./pages/InHouseAIPageEN"));

// Ultra-light loading fallback component (minimal re-render cost)
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]" style={{ contentVisibility: 'auto' }}>
    <div 
      className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" 
      style={{ willChange: 'transform' }}
    />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
            index 
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            } 
          />
          <Route 
            path="en" 
            element={
              <Suspense fallback={<PageLoader />}>
                <HomeEn />
              </Suspense>
            } 
          />
          <Route 
            path="ai-helpdesk" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AIHelpdeskPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/ai-helpdesk" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AIHelpdeskPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="bestellingen-retouren" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BestellingenRetourenPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/bestellingen-retouren" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BestellingenRetourenPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="ai-facturatie" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AIFacturatiePage />
              </Suspense>
            } 
          />
          <Route 
            path="en/ai-facturatie" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AIFacturatiePageEN />
              </Suspense>
            } 
          />
          <Route 
            path="workflows-regels" 
            element={
              <Suspense fallback={<PageLoader />}>
                <WorkflowsRegelsPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/workflows-regels" 
            element={
              <Suspense fallback={<PageLoader />}>
                <WorkflowsRegelsPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="knowledgebase" 
            element={
              <Suspense fallback={<PageLoader />}>
                <KnowledgebasePage />
              </Suspense>
            } 
          />
          <Route 
            path="en/knowledgebase" 
            element={
              <Suspense fallback={<PageLoader />}>
                <KnowledgebasePageEN />
              </Suspense>
            } 
          />
          <Route 
            path="klantdata" 
            element={
              <Suspense fallback={<PageLoader />}>
                <KlantdataPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/klantdata" 
            element={
              <Suspense fallback={<PageLoader />}>
                <KlantdataPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="teamchat" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TeamchatPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/teamchat" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TeamchatPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="integraties" 
            element={
              <Suspense fallback={<PageLoader />}>
                <IntegrationsPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/integrations" 
            element={
              <Suspense fallback={<PageLoader />}>
                <IntegrationsPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="en/integraties" 
            element={
              <Suspense fallback={<PageLoader />}>
                <IntegrationsPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="faq" 
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/faq" 
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="blog" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/blog" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="blog/:slug" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPostPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/blog/:slug" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPostPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="probeer-14-dagen-gratis" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Probeer14DagenGratisPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/try-14-days-for-free" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Try14DaysForFreePage />
              </Suspense>
            } 
          />
          <Route 
            path="en/probeer-14-dagen-gratis" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Try14DaysForFreePage />
              </Suspense>
            } 
          />
          <Route 
            path="security-privacy" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SecurityPrivacyPage />
              </Suspense>
            } 
          />
          <Route 
            path="algemene-voorwaarden" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AlgemeneVoorwaardenPage />
              </Suspense>
            } 
          />
          <Route 
            path="prijzen" 
            element={
              <Suspense fallback={<PageLoader />}>
                <PrijzenPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/pricing" 
            element={
              <Suspense fallback={<PageLoader />}>
                <PrijzenPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="en/prijzen" 
            element={
              <Suspense fallback={<PageLoader />}>
                <PrijzenPageEN />
              </Suspense>
            } 
          />
          <Route 
            path="contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            } 
          />
          <Route 
            path="in-house-ai" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InHouseAIPage />
              </Suspense>
            } 
          />
          <Route 
            path="en/in-house-ai" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InHouseAIPageEN />
              </Suspense>
            } 
          />
        </Route>
        
        {/* Redirects for old/legacy routes */}
        <Route path="cusmato-ai/helpdesk" element={<Navigate to="/ai-helpdesk" replace />} />
        <Route path="cusmato-ai/workflows" element={<Navigate to="/workflows-regels" replace />} />
        <Route path="cusmato-ai/integraties" element={<Navigate to="/integraties" replace />} />
        <Route path="product" element={<Navigate to="/ai-helpdesk" replace />} />
        <Route path="hoe-het-werkt" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
