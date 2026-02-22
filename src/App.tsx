import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Pipeline from "./pages/Pipeline";
import Leads from "./pages/Leads";
import Propostas from "./pages/Propostas";
import Financeiro from "./pages/Financeiro";
import Ranking from "./pages/Ranking";
import Agenda from "./pages/Agenda";
import Disparos from "./pages/Disparos";
import Usuarios from "./pages/Usuarios";
import Notificacoes from "./pages/Notificacoes";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/propostas" element={<Propostas />} />
            <Route path="/tabelas" element={<PlaceholderPage title="Tabelas de Vendas" />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/disparos" element={<Disparos />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/perfil" element={<PlaceholderPage title="Perfil" />} />
            <Route path="/configuracoes" element={<PlaceholderPage title="Configurações" />} />
            <Route path="/ajuda" element={<PlaceholderPage title="Ajuda" />} />
            <Route path="/trafego" element={<PlaceholderPage title="Tráfego Pago" />} />
            <Route path="/admin" element={<PlaceholderPage title="SaaS Admin" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
