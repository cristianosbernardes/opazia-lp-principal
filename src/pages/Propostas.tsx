import { Plus, FileText, Eye, GitCompare, XCircle, Search, Filter } from "lucide-react";

const stats = [
  { label: "PROPOSTAS NO MÊS", value: "0", icon: FileText, color: "text-destructive/60" },
  { label: "AGUARDANDO RETORNO", value: "0", icon: Eye, color: "text-warning/60" },
  { label: "CONVERTIDAS", value: "0", icon: GitCompare, color: "text-success/60" },
  { label: "NÃO CONVERTIDAS", value: "0", icon: XCircle, color: "text-destructive/60" },
];

export default function Propostas() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6" /> Gerador de Propostas
          </h1>
          <p className="text-sm text-muted-foreground">Crie propostas personalizadas de consórcio de forma rápida e eficaz.</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
          <Plus className="mr-1 inline h-4 w-4" /> Nova Proposta
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</p>
                <Icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <p className="text-3xl font-bold text-card-foreground">{s.value}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-card-foreground">Propostas Recentes</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input placeholder="Buscar cliente..." className="bg-transparent text-sm focus:outline-none text-foreground placeholder:text-muted-foreground" />
            </div>
            <button className="rounded-lg border border-border p-1.5 hover:bg-muted transition-colors">
              <Filter className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground">Ainda não há propostas recentes</p>
          <p className="text-sm text-muted-foreground/70 mt-1">As propostas que você visualizar aparecerão aqui automaticamente.</p>
          <button className="mt-4 text-sm text-primary hover:underline">Criar minha primeira proposta customizada →</button>
        </div>
      </div>
    </div>
  );
}
