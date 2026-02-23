import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { featuresList } from "@/config/content";
import { Badge } from "@/components/ui/badge";

export function Features() {
    return (
        <AnimatedSection id="funcionalidades" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge className="mb-4 rounded border border-primary/20 bg-primary/10 text-primary">Funcionalidades</Badge>
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Tudo que você precisa para vender mais</h2>
                    <p className="mt-4 text-muted-foreground">9 módulos integrados em uma única plataforma.</p>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {featuresList.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group rounded border border-border bg-sidebar-accent/50 p-6 transition-all hover:border-primary/50 hover:bg-sidebar-accent hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <f.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
