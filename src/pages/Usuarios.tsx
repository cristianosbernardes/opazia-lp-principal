import { UserPlus, Building2, Users as UsersIcon, Search, Filter, Settings } from "lucide-react";
import { useState } from "react";

const tabs = ["Por Squad", "Lista Completa"];

const members = [
  { name: "cristiano.sbernardes", role: "Vendedor", badge: "Dono", squad: "Sem Squad" },
];

export default function Usuarios() {
  const [activeTab, setActiveTab] = useState("Por Squad");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestão de Equipe</h1>
          <p className="text-sm text-muted-foreground">Gerencie membros, squads e permissões do seu time</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Building2 className="h-4 w-4" /> Gerenciar Cargos
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <UsersIcon className="h-4 w-4" /> Gerenciar Squads
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
            <UserPlus className="mr-1 inline h-4 w-4" /> Convidar Membro
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 w-96">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Buscar por nome ou e-mail..." className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>FILTRAR:</span>
          <button className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 hover:bg-muted transition-colors">
            <Filter className="h-3.5 w-3.5" /> Todos os Squads
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Members */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-primary">Sem Squad</h3>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{members.length} membros</span>
        </div>
        {members.map((m) => (
          <div key={m.name} className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">CS</div>
              <div>
                <p className="text-sm font-medium text-foreground">{m.name}</p>
                <div className="flex gap-2 mt-0.5">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{m.role}</span>
                  <span className="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded">{m.badge}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">✕ 0 cargo</span>
              <button className="text-muted-foreground hover:text-primary"><Settings className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
