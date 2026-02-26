import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/planos" element={<LandingPage />} />
          <Route path="/funcionalidades" element={<LandingPage />} />
          <Route path="/faq" element={<LandingPage />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
