import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { painPoints } from "@/config/content";

export function PainPoints() {
    return (
        <AnimatedSection className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Você reconhece esses problemas?</h2>
                    <p className="mt-4 text-sidebar-foreground/60">Se sim, o Opazia foi feito para você.</p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-3">
                    {painPoints.map((pain, i) => (
                        <motion.div
                            key={pain.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="group rounded border border-destructive/20 bg-destructive/5 p-6 transition-colors hover:border-destructive/40"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-destructive/10">
                                <pain.icon className="h-6 w-6 text-destructive" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-sidebar-foreground/60">{pain.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
