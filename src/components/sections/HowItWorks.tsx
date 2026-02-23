import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { howItWorksSteps } from "@/config/content";

export function HowItWorks() {
    return (
        <AnimatedSection className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Comece em 3 passos simples</h2>
                </div>

                <div className="mt-14 grid gap-8 sm:grid-cols-3">
                    {howItWorksSteps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative rounded border border-border bg-sidebar-accent/30 p-8 text-center"
                        >
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                                {s.step}
                            </span>
                            <div className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded bg-primary/10">
                                <s.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                            <p className="mt-2 text-sm text-sidebar-foreground/60">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
