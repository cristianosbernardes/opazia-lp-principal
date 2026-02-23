import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegistrationModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function RegistrationModal({ isOpen, onOpenChange }: RegistrationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the URL with query parameters
        const baseUrl = "https://app.opazia.com/register";
        const params = new URLSearchParams();
        if (formData.name) params.append("name", formData.name);
        if (formData.email) params.append("email", formData.email);
        if (formData.whatsapp) params.append("whatsapp", formData.whatsapp);

        const finalUrl = `${baseUrl}?${params.toString()}`;

        // Redirect to the Opazia App registration page in the same tab
        window.location.href = finalUrl;
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] rounded border-border">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-foreground">Crie sua conta</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Preencha seus dados rápidos para acessar seu teste gratuito de 7 dias na Opazia.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-foreground">
                            Nome Completo
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Digite seu nome..."
                            value={formData.name}
                            onChange={handleChange}
                            className="h-10 rounded border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-foreground">
                            E-mail Comercial
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-10 rounded border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp" className="text-foreground">
                            WhatsApp
                        </Label>
                        <Input
                            id="whatsapp"
                            name="whatsapp"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className="h-10 rounded border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="mt-4 h-10 rounded shadow-md bg-gradient-to-r from-primary to-primary/80 px-6 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform text-white border-0 w-full"
                    >
                        Continuar para o Cadastro
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
