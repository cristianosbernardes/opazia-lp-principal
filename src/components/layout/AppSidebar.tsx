import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, GitBranch, Monitor, FileText, Table2, Wallet,
  Trophy, CalendarDays, Send, Users, Bell, User, Settings,
  HelpCircle, Megaphone, ShieldCheck, ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/pipeline", label: "Pipeline de Vendas", icon: GitBranch },
  { to: "/leads", label: "Leads", icon: Monitor },
  { to: "/propostas", label: "Gerador de propostas", icon: FileText },
  { to: "/tabelas", label: "Tabelas de Vendas", icon: Table2 },
  { to: "/financeiro", label: "Financeiro", icon: Wallet },
  { to: "/ranking", label: "Ranking", icon: Trophy },
  { to: "/agenda", label: "Agenda", icon: CalendarDays },
  { to: "/disparos", label: "Disparos", icon: Send },
  { to: "/usuarios", label: "Usuários", icon: Users },
  { to: "/notificacoes", label: "Notificações", icon: Bell },
  { to: "/perfil", label: "Perfil", icon: User },
  { to: "/configuracoes", label: "Configurações", icon: Settings },
  { to: "/ajuda", label: "Ajuda", icon: HelpCircle },
  { divider: true } as any,
  { to: "/trafego", label: "Tráfego Pago", icon: Megaphone },
  { to: "/admin", label: "SaaS Admin", icon: ShieldCheck, highlight: true },
];

interface Props {
  collapsed: boolean;
  onToggle: () => void;
}

export function AppSidebar({ collapsed, onToggle }: Props) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "relative flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 border-r border-sidebar-border",
        collapsed ? "w-[68px]" : "w-[220px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center gap-2 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          O
        </div>
        {!collapsed && <span className="text-lg font-bold text-sidebar-accent-foreground">OPAZIA</span>}
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-[18px] z-10 flex h-6 w-6 items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
      >
        <ChevronLeft className={cn("h-3.5 w-3.5 transition-transform", collapsed && "rotate-180")} />
      </button>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 space-y-0.5">
        {navItems.map((item, i) => {
          if (item.divider) {
            return <div key={i} className="my-2 border-t border-sidebar-border" />;
          }
          const Icon = item.icon;
          const isActive = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                item.highlight && !isActive && "text-primary",
                collapsed && "justify-center px-2"
              )}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" size={18} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
