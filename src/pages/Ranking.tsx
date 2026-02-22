import { Trophy, Medal } from "lucide-react";

const ranking = [
  { pos: 1, name: "cristiano.sbernardes", vendas: "R$ 0,00", negocios: 0, status: "Ativo", isYou: true },
];

export default function Ranking() {
  const top = ranking[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Trophy className="h-6 w-6 text-warning" /> Ranking de Vendas
          </h1>
          <p className="text-sm text-muted-foreground">Total em vendas: R$ 0,00 no período selecionado</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          📅 01/02/26 - 28/02/26
        </button>
      </div>

      {/* Top seller card */}
      <div className="rounded-xl border-2 border-warning/40 bg-warning/5 p-6 flex items-center gap-4">
        <Medal className="h-10 w-10 text-warning" />
        <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">CS</div>
        <div>
          <p className="text-lg font-bold text-foreground">#{top.pos} {top.name}</p>
          <p className="text-sm"><span className="text-primary font-semibold">R$ 0</span> · 0 vendas</p>
        </div>
      </div>

      {/* Your position */}
      <div>
        <p className="text-sm font-semibold text-primary mb-2">Sua Posição</p>
        <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-foreground">1</span>
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">CS</div>
            <span className="text-sm font-medium text-foreground">{top.name} (Você)</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-sm font-semibold text-primary">{top.vendas}</span>
            <span className="text-sm text-muted-foreground">{top.negocios}</span>
            <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded">{top.status}</span>
          </div>
        </div>
      </div>

      {/* Full ranking */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-4">Classificação Completa</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Posição</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Vendedor</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Vendas</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Qtd. Negócios</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((r) => (
              <tr key={r.pos} className="border-b border-border last:border-0 bg-destructive/5">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-warning/20 flex items-center justify-center">
                      <Medal className="h-4 w-4 text-warning" />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">CS</div>
                    <span className="text-sm font-medium text-primary">{r.name} (Você)</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-primary">{r.vendas}</td>
                <td className="px-4 py-4 text-sm text-foreground">{r.negocios}</td>
                <td className="px-4 py-4">
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded">{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
