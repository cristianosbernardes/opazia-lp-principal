import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { plansList } from "@/config/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export function Pricing() {
    return (
        <AnimatedSection id="planos" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge className="mb-4 rounded border border-primary/20 bg-primary/10 text-primary">Planos</Badge>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Escolha o plano ideal para o seu negócio</h2>
                    <p className="mt-4 text-sidebar-foreground/60">Todos os planos incluem 7 dias de trial gratuito.</p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {plansList.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col rounded border p-6 transition-all hover:shadow-xl hover:border-primary/50 ${plan.popular
                                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                    : "border-border bg-sidebar-accent/30"
                                }`}
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-4 text-primary-foreground border-0">
                                    <Star className="mr-1 h-3 w-3" /> Mais popular
                                </Badge>
                            )}

                            {/* Header do Card (conforme Style Guide) */}
                            <div className="-mx-6 -mt-6 mb-6 rounded-t border-b border-border/40 bg-muted/5 p-6 pb-4">
                                <h3 className="text-lg font-semibold text-white uppercase">{plan.name}</h3>
                                <p className="mt-1 text-sm text-sidebar-foreground/60">{plan.users}</p>
                            </div>

                            <div className="mt-1">
                                <span className="text-sm text-sidebar-foreground/60">R$</span>
                                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                <span className="text-sm text-sidebar-foreground/60">/mês</span>
                            </div>

                            <ul className="mt-6 flex-1 space-y-3">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-sidebar-foreground/70">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`mt-8 w-full h-10 rounded font-semibold transition-transform active:scale-[0.98] ${plan.popular ? "shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 border-0 text-white hover:scale-[1.02]" : "border-border hover:border-sidebar-foreground/50 hover:bg-sidebar-accent"
                                    }`}
                                variant={plan.popular ? "default" : "outline"}
                            >
                                Começar trial grátis
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
