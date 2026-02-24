import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
    return (
        <footer className="border-t border-border py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary font-bold text-primary-foreground">O</div>
                            <span className="text-lg font-bold text-foreground">Opazia</span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Gestão de vendas inteligente para consórcio e financiamento.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Produto</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><button onClick={() => scrollTo("funcionalidades")} className="hover:text-primary transition-colors text-left">Funcionalidades</button></li>
                            <li><button onClick={() => scrollTo("planos")} className="hover:text-primary transition-colors text-left">Planos</button></li>
                            <li><button onClick={() => scrollTo("faq")} className="hover:text-primary transition-colors text-left">FAQ</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Empresa</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/termos-de-servico" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
                            <li><Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de privacidade</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="text-sm text-muted-foreground">© 2026 Opazia. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" aria-label="E-mail" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
