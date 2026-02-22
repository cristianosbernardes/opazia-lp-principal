import { Plus, Download, DollarSign, TrendingUp, TrendingDown, Clock, Target, Pencil } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";

const stats = [
  { label: "RECEITA BRUTA", value: "R$ 0,00", badge: "do mês", badgeColor: "bg-success/10 text-success", icon: DollarSign },
  { label: "LUCRO LÍQUIDO", value: "R$ 0,00", badge: "do mês", badgeColor: "bg-info/10 text-info", icon: TrendingUp },
  { label: "TOTAL DESPESAS", value: "R$ 0,00", badge: "do mês", badgeColor: "bg-destructive/10 text-destructive", icon: TrendingDown },
  { label: "PENDENTE", value: "R$ 0,00", badge: "0 transações", badgeColor: "bg-warning/10 text-warning", icon: Clock },
];

const tabs = ["Visão Geral", "DRE", "Comissões", "Transações", "Histórico"];

const chartData = [
  { month: "Set", receitas: 0, despesas: 0, lucro: 0 },
  { month: "Out", receitas: 0, despesas: 0, lucro: 0 },
  { month: "Nov", receitas: 0, despesas: 0, lucro: 0 },
  { month: "Dez", receitas: 0, despesas: 0, lucro: 0 },
  { month: "Jan", receitas: 0, despesas: 0, lucro: 0 },
  { month: "Fev", receitas: 0, despesas: 0, lucro: 0 },
];

export default function Financeiro() {
  const [activeTab, setActiveTab] = useState("Visão Geral");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Financeiro</h1>
          <p className="text-sm text-muted-foreground">Gestão de DRE, comissões, receitas e despesas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-colors">
            <Plus className="mr-1 inline h-4 w-4" /> Nova Transação
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Download className="h-4 w-4" /> Exportar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</p>
                <Icon className="h-5 w-5 text-muted-foreground/40" />
              </div>
              <p className="text-2xl font-bold text-card-foreground">{s.value}</p>
              <span className={`mt-2 inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${s.badgeColor}`}>{s.badge}</span>
            </div>
          );
        })}
      </div>

      {/* Goals */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {["Meta de Receita", "Meta de Lucro"].map((title) => (
          <div key={title} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground">Fevereiro 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">0%</span>
                <button className="text-muted-foreground hover:text-primary"><Pencil className="h-3.5 w-3.5" /></button>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "0%" }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>R$ 0,00</span><span>R$ 0,00</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" /> Evolução Financeira
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="receitas" stroke="hsl(199, 89%, 48%)" fill="hsl(199, 89%, 48%, 0.1)" strokeWidth={2} />
            <Area type="monotone" dataKey="despesas" stroke="hsl(0, 72%, 51%)" fill="hsl(0, 72%, 51%, 0.1)" strokeWidth={2} />
            <Area type="monotone" dataKey="lucro" stroke="hsl(142, 71%, 45%)" fill="hsl(142, 71%, 45%, 0.1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
