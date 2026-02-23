import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header({ scrollTo }: { scrollTo: (id: string) => void }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        scrollTo(id);
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-sidebar/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <button onClick={() => handleScroll("hero")} className="flex items-center gap-2" aria-label="Ir para o topo">
                    <div className="flex h-9 w-9 items-center justify-center rounded bg-primary font-bold text-primary-foreground text-lg">O</div>
                    <span className="text-xl font-bold tracking-tight text-foreground">Opazia</span>
                </button>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {[
                        ["Funcionalidades", "funcionalidades"],
                        ["Planos", "planos"],
                        ["FAQ", "faq"],
                    ].map(([label, id]) => (
                        <button key={id} onClick={() => handleScroll(id)} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                            {label}
                        </button>
                    ))}
                    <Button size="sm" onClick={() => handleScroll("planos")} className="h-10 rounded shadow-md bg-gradient-to-r from-primary to-primary/80 px-6 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform">
                        Comece grátis
                    </Button>
                </nav>

                {/* Mobile hamburger */}
                <button className="text-foreground md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label="Menu Principal">
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-border bg-sidebar px-4 pb-4 md:hidden"
                >
                    {[
                        ["Funcionalidades", "funcionalidades"],
                        ["Planos", "planos"],
                        ["FAQ", "faq"],
                    ].map(([label, id]) => (
                        <button key={id} onClick={() => handleScroll(id)} className="block w-full py-3 text-left text-muted-foreground hover:text-primary">
                            {label}
                        </button>
                    ))}
                    <Button className="mt-2 w-full h-10 rounded shadow-md bg-gradient-to-r from-primary to-primary/80 font-semibold active:scale-[0.98] transition-transform" onClick={() => handleScroll("planos")}>
                        Comece grátis
                    </Button>
                </motion.div>
            )}
        </header>
    );
}
