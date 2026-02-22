import { Plus, Download, Settings, Search, Filter, MessageSquare, Eye, Trash2 } from "lucide-react";

const mockLeads = [
  {
    id: "1",
    name: "Opazia Contato",
    email: "contato.opazia@gmail.com",
    status: "Em Contato",
    atendimento: "-",
    valor: "R$ 0,00",
    vendedor: "cristiano.sbernardes",
    origem: "Site",
    criacao: "21/02/2026 02:29",
  },
];

export default function Leads() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciamento de Leads</h1>
          <p className="text-sm text-muted-foreground">{mockLeads.length} leads encontrados</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Settings className="h-4 w-4" /> Configurar Lead Ideal
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Download className="h-4 w-4" /> Exportar
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
            <Plus className="mr-1 inline h-4 w-4" /> Novo Lead
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 w-96">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar por nome ou e-mail..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>FILTRAR:</span>
          <button className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 hover:bg-muted transition-colors">
            <Filter className="h-3.5 w-3.5" /> Todos os Status
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Atendimento</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Valor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Vendedor</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Origem</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Criação</th>
              <th className="px-6 py-3 text-right text-xs font-semibold uppercase text-muted-foreground">Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-foreground">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-md bg-destructive px-2.5 py-1 text-xs font-medium text-destructive-foreground">
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{lead.atendimento}</td>
                <td className="px-6 py-4 text-sm text-foreground">{lead.valor}</td>
                <td className="px-6 py-4 text-sm text-foreground">{lead.vendedor}</td>
                <td className="px-6 py-4 text-sm text-foreground">{lead.origem}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{lead.criacao}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-muted-foreground hover:text-primary transition-colors"><MessageSquare className="h-4 w-4" /></button>
                    <button className="text-muted-foreground hover:text-primary transition-colors"><Eye className="h-4 w-4" /></button>
                    <button className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
