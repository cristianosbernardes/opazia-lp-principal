import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Cookie, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { Switch } from "./ui/switch";

interface CookiePreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

export function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        essential: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        try {
            const consentText = localStorage.getItem("opazia_cookie_consent");
            if (consentText) {
                const consent = JSON.parse(consentText);
                // Verifica se ainda está no prazo de validade (365 dias)
                if (consent.accepted && new Date().getTime() < consent.expires) {
                    return;
                }
            }
        } catch (error) {
            console.warn("Erro ao ler cookie consent no localStorage:", error);
        }

        // Pequeno atraso para a animação ficar mais suave após o carregamento
        const timer = setTimeout(() => {
            setShowConsent(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const savePreferences = (prefsToSave: CookiePreferences) => {
        const expires = new Date();
        expires.setDate(expires.getDate() + 365);

        localStorage.setItem(
            "opazia_cookie_consent",
            JSON.stringify({
                accepted: true,
                preferences: prefsToSave,
                expires: expires.getTime(),
            })
        );
        setShowConsent(false);
        setShowPreferences(false);
    };

    const handleAcceptAll = () => {
        savePreferences({ essential: true, analytics: true, marketing: true });
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const handleClose = () => {
        setShowConsent(false);
        // Não vamos salvar no localStorage, então na próxima vez vai aparecer de novo
    };

    return (
        <>
            <AnimatePresence>
                {showConsent && !showPreferences && (
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 150, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 pointer-events-none flex justify-center w-full"
                    >
                        {/* Limitando a largura máxima para alinhar com o container do site e ajustando padding para diminuir altura */}
                        {/* Borda com 85% de luminosidade: border-[#D9D9D9] (que equivale a HSL(0, 0%, 85%)) */}
                        <div className="w-full max-w-7xl rounded-xl border border-[#d9d9d9] bg-white/95 px-6 py-5 shadow-[0_-5px_30px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl pointer-events-auto relative">
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
                                aria-label="Fechar popup"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mt-3 md:mt-0 pr-6">
                                <div className="flex items-center gap-4 text-left w-full md:w-3/5 lg:w-2/3">
                                    <div className="hidden rounded-full bg-primary/10 p-2.5 text-primary md:block shrink-0">
                                        <Cookie className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-semibold text-gray-900">Políticas de Cookies e Privacidade</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-none">
                                            Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar anúncios. Ao clicar em "Aceitar todos", você concorda com nosso uso. Leia a{" "}
                                            <Link
                                                to="/politica-de-privacidade"
                                                className="font-medium text-primary hover:underline transition-colors"
                                            >
                                                Política de Privacidade
                                            </Link>.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full md:w-auto shrink-0 flex-col sm:flex-row gap-2.5 items-center justify-end">
                                    <Button
                                        variant="outline"
                                        onClick={() => setShowPreferences(true)}
                                        // Removido o bg-white no hover que causava o sumiço do texto (usando hover:bg-gray-100 dark:hover:text-gray-900 para forçar cor escura se o componente base tiver hover:text-white)
                                        className="w-full sm:w-auto font-medium text-gray-700 border-gray-300 h-10 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Personalizar cookies
                                    </Button>
                                    <Button
                                        onClick={handleAcceptAll}
                                        // Adicionado text-white explicitamente para garantir contraste adequado
                                        className="w-full sm:w-auto font-semibold text-white h-10 shadow-[0_0_15px_rgba(255,107,0,0.2)]"
                                    >
                                        Aceitar todos
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Dialog
                open={showPreferences}
                onOpenChange={(open) => {
                    if (!open) {
                        setShowPreferences(false);
                    }
                }}
            >
                {/* Alterado para o modo light com fundo branco */}
                <DialogContent className="sm:max-w-[600px] bg-white border-gray-200 text-gray-900 shadow-xl overflow-hidden p-0 rounded-2xl">
                    <DialogHeader className="p-6 pb-2 border-b border-gray-100 bg-gray-50/50">
                        <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                            <Cookie className="h-6 w-6 text-primary" />
                            Central de preferências de cookies
                        </DialogTitle>
                        <DialogDescription className="text-gray-500 text-sm pt-2 leading-relaxed">
                            Cookies são pequenos arquivos que armazenam temporariamente suas interações neste site.
                            Você pode personalizar suas preferências escolhendo quais tipos de cookies permitir.
                            A desativação de cookies pode afetar sua experiência.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar bg-white">
                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="flex flex-col space-y-1.5 flex-1">
                                <span className="text-sm font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wide">
                                    Cookies Essenciais
                                </span>
                                <span className="text-sm text-gray-600 leading-relaxed pr-4">
                                    Esses cookies são extremamente necessários para oferecer suporte às principais funcionalidades do site,
                                    como fornecer login seguro. Não é possível desabilitá-los.
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5 mt-1 shrink-0">
                                <Switch checked={true} disabled className="data-[state=checked]:bg-primary opacity-100 disabled:opacity-50" />
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sempre Ativo</span>
                            </div>
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
                            <div className="flex flex-col space-y-1.5 flex-1">
                                <span className="text-sm font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wide">
                                    Análise e desempenho
                                </span>
                                <span className="text-sm text-gray-600 leading-relaxed pr-4">
                                    Esses cookies nos permitem analisar o usage para otimização do site e avaliar a interação dos usuários com
                                    nossos serviços para melhorar sua experiência de navegação contínua.
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5 mt-1 shrink-0">
                                <Switch
                                    checked={preferences.analytics}
                                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                                    className="data-[state=checked]:bg-primary"
                                />
                            </div>
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
                            <div className="flex flex-col space-y-1.5 flex-1">
                                <span className="text-sm font-bold text-gray-900 flex items-center gap-2 uppercase tracking-wide">
                                    Publicidade e Marketing
                                </span>
                                <span className="text-sm text-gray-600 leading-relaxed pr-4">
                                    Ajuda a veicular conteúdo publicitário e campanhas direcionadas com base em seus interesses e
                                    perfil de navegação em nosso site, às vezes por meio de redes parceiras (Ex: Meta Ads, Google Ads).
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1.5 mt-1 shrink-0">
                                <Switch
                                    checked={preferences.marketing}
                                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                                    className="data-[state=checked]:bg-primary"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 p-5 border-t border-gray-100 bg-gray-50/50">
                        <Button
                            variant="outline"
                            onClick={() => {
                                setShowPreferences(false);
                            }}
                            // Ajuste de hover para evitar texto branco no botão Cancelar
                            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-6 font-medium"
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={handleSavePreferences}
                            // Adicionado text-white explicitamente para garantir contraste adequado
                            className="bg-primary text-white hover:bg-primary/90 px-8 font-semibold shadow-[0_4px_14px_0_rgba(255,107,0,0.39)]"
                        >
                            Salvar minhas escolhas
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
