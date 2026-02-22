import { Send, Users, Snowflake, Plus } from "lucide-react";
import { useState } from "react";

const audiences = [
  { id: "all", label: "Todos os Leads", count: 0, icon: Users },
  { id: "clients", label: "Apenas Clientes", count: 0, icon: Users },
  { id: "cold", label: "Leads Frios", count: 0, icon: Snowflake },
];

export default function Disparos() {
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Send className="h-6 w-6 text-primary" /> Disparos em Massa
        </h1>
        <p className="text-sm text-muted-foreground">Crie e gerencie campanhas de mensagens</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Campaign form */}
        <div className="col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 space-y-5">
            <h2 className="text-lg font-semibold text-card-foreground">Nova Campanha</h2>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome da Campanha</label>
              <input
                placeholder="Ex: Promoção de Verão"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Selecione o Público</label>
              <div className="grid grid-cols-3 gap-3">
                {audiences.map((a) => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAudience(a.id)}
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                        selectedAudience === a.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className={`h-5 w-5 rounded border ${selectedAudience === a.id ? "border-primary bg-primary" : "border-border"} flex items-center justify-center`}>
                        {selectedAudience === a.id && <span className="text-primary-foreground text-xs">✓</span>}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                          <Icon className="h-4 w-4 text-muted-foreground" /> {a.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{a.count} contatos</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-foreground">Mensagem</label>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors">+ Nome</button>
                  <button className="rounded-lg border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors">+ Telefone</button>
                </div>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Olá {{nome_cliente}}, temos uma oferta especial para você..."
                rows={5}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
              />
              <p className="text-xs text-muted-foreground mt-1">Use {"{{nome_cliente}}"} para personalizar a mensagem</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-success py-3 text-sm font-semibold text-success-foreground hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" /> Enviar Agora
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                📅 Agendar (Em breve)
              </button>
            </div>
          </div>
        </div>

        {/* Side */}
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-card-foreground">Templates</h3>
              <button className="text-muted-foreground hover:text-primary"><Plus className="h-5 w-5" /></button>
            </div>
            <p className="text-sm text-muted-foreground">Sem templates.</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Estatísticas</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary">Total Enviados</span>
                <span className="text-sm font-semibold text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary">Campanhas Ativas</span>
                <span className="text-sm font-semibold text-foreground">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
