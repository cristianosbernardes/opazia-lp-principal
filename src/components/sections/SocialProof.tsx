import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { metrics } from "@/config/content";

export function SocialProof() {
    return (
        <AnimatedSection className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded border border-border bg-gradient-to-br from-primary/10 via-sidebar-accent to-sidebar-accent p-10 sm:p-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Resultados que falam por si</h2>
                        <p className="mt-4 text-sidebar-foreground/60">Números reais de quem usa o Opazia.</p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-4">
                        {metrics.map((m, i) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-4xl font-extrabold text-primary sm:text-5xl">{m.value}</p>
                                <p className="mt-2 text-sm text-sidebar-foreground/70">{m.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
