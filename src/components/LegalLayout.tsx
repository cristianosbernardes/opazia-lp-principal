import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        // Se estiver em uma página legal, volta para a home antes de rolar
        navigate("/", { state: { scrollTo: id } });
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Header
                scrollTo={scrollToSection}
                onOpenModal={() => navigate("/", { state: { openModal: true } })}
            />
            <main className="pt-24 pb-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-12">
                        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {title}
                        </h1>
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-table:border-collapse prose-th:bg-muted/50 prose-th:p-2 prose-td:border prose-td:border-border prose-td:p-2">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer scrollTo={scrollToSection} />
        </div>
    );
}
