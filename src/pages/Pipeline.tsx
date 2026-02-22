import { Plus, Filter, Settings, MessageSquare, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Lead {
  id: string;
  name: string;
  initials: string;
  value: string;
  stage: string;
  daysAgo: number;
}

const stages = [
  { id: "novo", label: "Novo", color: "bg-info" },
  { id: "contato", label: "Em Contato", color: "bg-destructive" },
  { id: "proposta", label: "Proposta Enviada", color: "bg-warning" },
  { id: "negociacao", label: "Negociação", color: "bg-primary" },
  { id: "fechado", label: "Fechado", color: "bg-success" },
];

const mockLeads: Lead[] = [
  { id: "1", name: "Opazia Contato", initials: "OC", value: "R$ 0", stage: "contato", daysAgo: 1 },
];

export default function Pipeline() {
  const [leads] = useState(mockLeads);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pipeline de Vendas</h1>
          <p className="text-sm text-muted-foreground">{leads.length} leads filtrados • R$ 0,00 em pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
            <span>Buscar leads (Nome, Email, Tel)</span>
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Filter className="h-4 w-4" /> Filtros
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Settings className="h-4 w-4" /> Gerenciar Etapas
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
            <Plus className="mr-1 inline h-4 w-4" /> Novo Lead
          </button>
        </div>
      </div>

      {/* Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageLeads = leads.filter((l) => l.stage === stage.id);
          return (
            <div key={stage.id} className="flex w-[280px] shrink-0 flex-col">
              {/* Column header */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${stage.color}`} />
                  <span className="text-sm font-semibold text-foreground">{stage.label}</span>
                </div>
                <span className="text-xs text-muted-foreground">{stageLeads.length}</span>
              </div>

              {/* Column body */}
              <div className="flex-1 space-y-3 rounded-xl border-2 border-dashed border-border p-3 min-h-[400px]">
                {stageLeads.length === 0 ? (
                  <p className="py-20 text-center text-sm text-muted-foreground">Vazio</p>
                ) : (
                  stageLeads.map((lead) => (
                    <div key={lead.id} className="rounded-lg border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-bold">
                          {lead.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-card-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.value}</p>
                        </div>
                      </div>
                      <button className="w-full rounded-md border border-border py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors">
                        Definir Atendimento
                      </button>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[11px] text-muted-foreground">📅 há {lead.daysAgo} dia</span>
                        <div className="flex items-center gap-1.5">
                          <MessageSquare className="h-3.5 w-3.5 text-muted-foreground hover:text-primary cursor-pointer" />
                          <Phone className="h-3.5 w-3.5 text-muted-foreground hover:text-primary cursor-pointer" />
                          <Mail className="h-3.5 w-3.5 text-muted-foreground hover:text-primary cursor-pointer" />
                          <CheckCircle className="h-3.5 w-3.5 text-muted-foreground hover:text-success cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
