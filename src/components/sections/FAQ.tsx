import { AnimatedSection } from "./AnimatedSection";
import { faqsList } from "@/config/content";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <AnimatedSection id="faq" className="py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Perguntas frequentes</h2>
                </div>

                <Accordion type="single" collapsible className="mt-12">
                    {faqsList.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`} className="border-border rounded mb-2 data-[state=open]:border-primary transition-colors pl-4 pr-1">
                            <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-sidebar-foreground/70 pr-4">{faq.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </AnimatedSection>
    );
}
