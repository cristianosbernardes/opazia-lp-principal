import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
    return (
        <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <Badge className="mb-6 rounded border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary">
                        🚀 7 dias grátis — sem cartão de crédito
                    </Badge>

                    <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Venda mais consórcios e financiamentos com o{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Opazia
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        A plataforma completa de gestão de vendas que centraliza leads, automatiza seu pipeline e dispara sua conversão.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="lg" className="h-10 rounded px-8 text-base font-semibold shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] active:scale-[0.98] transition-transform text-white border-0" onClick={() => scrollTo("planos")}>
                            Teste grátis por 7 dias <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-10 rounded border border-input px-8 text-base text-foreground hover:bg-gray-50 hover:border-gray-300 transition-colors" onClick={() => scrollTo("funcionalidades")}>
                            Ver funcionalidades
                        </Button>
                    </div>
                </motion.div>

                {/* Mockup placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-md border border-border bg-sidebar-accent shadow-2xl shadow-primary/10"
                >
                    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                        <div className="h-3 w-3 rounded-full bg-destructive/60" />
                        <div className="h-3 w-3 rounded-full bg-warning/60" />
                        <div className="h-3 w-3 rounded-full bg-success/60" />
                        <span className="ml-2 text-xs text-muted-foreground">app.opazia.com.br</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-6">
                        {[
                            { label: "Faturamento", value: "R$ 284.500", icon: BarChart3, color: "text-primary" },
                            { label: "Leads Ativos", value: "1.247", icon: Users, color: "text-success" },
                            { label: "Conversão", value: "34,8%", icon: Target, color: "text-accent" },
                            { label: "Comissão", value: "R$ 42.675", icon: Zap, color: "text-info" },
                        ].map((kpi) => (
                            <div key={kpi.label} className="rounded border border-border bg-sidebar p-4 text-center">
                                <kpi.icon className={`mx-auto mb-2 h-5 w-5 ${kpi.color}`} />
                                <p className="text-lg font-bold text-foreground sm:text-xl">{kpi.value}</p>
                                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
