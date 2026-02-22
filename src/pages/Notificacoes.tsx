import { Bell, Search, Filter } from "lucide-react";

export default function Notificacoes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Bell className="h-6 w-6" /> Notificações
          </h1>
          <p className="text-sm text-muted-foreground">Acompanhe todos os alertas e comunicações importantes do sistema.</p>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Marcar tudo como lido
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Filtrar por título ou conteúdo..." className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
          </div>
          <button className="rounded-lg border border-border p-2 hover:bg-muted transition-colors">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <div className="py-12 text-center">
          <p className="text-sm text-primary italic">Nenhuma notificação encontrada.</p>
        </div>
      </div>
    </div>
  );
}
