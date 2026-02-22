import { DollarSign, Users, Percent, TrendingUp, CreditCard, Clock, AlertCircle, BarChart3, Target, Download, Filter } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const kpis = [
  { label: "Faturamento do Mês", value: "R$ 0", change: "+0.0%", icon: DollarSign, featured: true },
  { label: "Leads Ativos", value: "0", change: "+0.0%", icon: Users },
  { label: "Taxa de Conversão", value: "0.0%", change: "+0.0%", icon: Percent },
  { label: "Comissão Acumulada", value: "R$ 0", change: "+0.0%", icon: TrendingUp },
];

const kpisSecondary = [
  { label: "Ticket Médio", value: "R$ 0", change: "0%", icon: CreditCard },
  { label: "Transações", value: "0", icon: BarChart3 },
  { label: "Leads Pendentes", value: "0", icon: AlertCircle },
  { label: "Tempo Médio", value: "0d", icon: Clock },
];

const chartData = [
  { month: "Set", value: 0 },
  { month: "Out", value: 0 },
  { month: "Nov", value: 0 },
  { month: "Dez", value: 0 },
  { month: "Jan", value: 0 },
  { month: "Fev", value: 0 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Visão Executiva</h1>
          <p className="text-sm text-muted-foreground">Acompanhe o desempenho do seu negócio em tempo real</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Download className="h-4 w-4" /> Exportar
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Filter className="h-4 w-4" /> Vendedores
          </button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
            + Nova Venda
          </button>
        </div>
      </div>

      {/* KPI Row 1 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.label}
              className={`rounded-xl p-5 ${
                kpi.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground border border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className={`text-xs font-semibold uppercase tracking-wide ${kpi.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {kpi.label}
                </p>
                <Icon className={`h-5 w-5 ${kpi.featured ? "text-primary-foreground/60" : "text-muted-foreground/50"}`} />
              </div>
              <p className="mt-2 text-2xl font-bold">{kpi.value}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
                  kpi.featured ? "bg-primary-foreground/20 text-primary-foreground" : "bg-success/10 text-success"
                }`}>
                  ↗ {kpi.change}
                </span>
                <span className={`text-xs ${kpi.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  vs. período anterior
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* KPI Row 2 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpisSecondary.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary/60" />
                {kpi.change && <span className="text-xs text-muted-foreground">↗ {kpi.change}</span>}
              </div>
              <p className="mt-2 text-2xl font-bold text-card-foreground">{kpi.value}</p>
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      {/* Chart + Goal */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="col-span-2 rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-card-foreground">Desempenho de Vendas</h2>
              <p className="text-sm text-muted-foreground">Comparativo com metas mensais</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted transition-colors">
              <BarChart3 className="h-4 w-4" /> Detalhes
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(22, 100%, 52%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(22, 100%, 52%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" tickFormatter={(v) => `R$${v / 1000}k`} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="hsl(22, 100%, 52%)" fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sales Goal */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
              <Target className="h-5 w-5 text-destructive" /> Meta de Vendas
            </h2>
            <span className="text-xs text-muted-foreground">📅 6 dias</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Ritmo ideal</p>
          <div className="relative h-3 w-full rounded-full bg-muted overflow-hidden mb-4">
            <div className="absolute h-full rounded-full bg-destructive" style={{ width: "0%" }} />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mb-4">
            <span>0</span>
            <span>R$ 0</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-primary">Saldo restante</p>
              <p className="text-xl font-bold text-card-foreground">R$ 0</p>
            </div>
            <div>
              <p className="text-xs text-primary">Necessário/Dia</p>
              <p className="text-xl font-bold text-card-foreground">R$ 0</p>
            </div>
          </div>
          <div className="rounded-lg bg-destructive/10 p-3">
            <p className="text-xs text-destructive flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> Atenção: Você está 80% abaixo do ritmo ideal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
