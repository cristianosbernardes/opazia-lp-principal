import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
    onOpenModal: () => void;
}

export function CallToAction({ onOpenModal }: CallToActionProps) {
    return (
        <AnimatedSection className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded border border-border bg-gradient-to-br from-primary via-secondary to-primary p-10 text-center sm:p-16">
                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

                    <div className="relative">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                            Pronto para transformar suas vendas?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                            Junte-se a centenas de profissionais de consórcio e financiamento que já estão vendendo mais com o Opazia.
                        </p>
                        <Button
                            size="lg"
                            className="mt-8 h-10 rounded bg-white px-10 text-base font-semibold text-primary hover:bg-white/90 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-transform"
                            onClick={onOpenModal}
                        >
                            Comece seu trial grátis agora <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
