import { Search, Bell, Command } from "lucide-react";
import { useLocation } from "react-router-dom";

const breadcrumbMap: Record<string, string> = {
  "/": "Início",
  "/pipeline": "Pipeline de Vendas",
  "/leads": "Leads",
  "/propostas": "Gerador de propostas",
  "/tabelas": "Tabelas de Vendas",
  "/financeiro": "Financeiro",
  "/ranking": "Ranking",
  "/agenda": "Agenda",
  "/disparos": "Disparos",
  "/usuarios": "Usuários",
  "/notificacoes": "Notificações",
  "/perfil": "Perfil",
  "/configuracoes": "Configurações",
  "/ajuda": "Ajuda",
  "/trafego": "Tráfego Pago",
  "/admin": "SaaS Admin",
};

export function AppTopbar() {
  const location = useLocation();
  const currentPage = breadcrumbMap[location.pathname] || "";

  return (
    <header className="flex h-14 items-center justify-between border-b border-sidebar-border bg-topbar px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-topbar-foreground">
        <span className="opacity-60">Início</span>
        {location.pathname !== "/" && (
          <>
            <span className="opacity-40">›</span>
            <span>{currentPage}</span>
          </>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-lg border border-sidebar-border bg-sidebar-accent px-3 py-1.5 text-sm text-sidebar-muted">
          <Search className="h-4 w-4" />
          <span>Buscar...</span>
          <kbd className="ml-4 flex items-center gap-0.5 rounded border border-sidebar-border px-1.5 py-0.5 text-xs">
            <Command className="h-3 w-3" />K
          </kbd>
        </div>

        {/* Notifications */}
        <button className="relative text-topbar-foreground hover:text-primary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            3
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
            CS
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-sm font-medium text-topbar-foreground">cristiano.sbernardes</p>
            <p className="text-xs text-sidebar-muted">Master Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
