import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  LayoutDashboard,
  GitBranch,
  Users,
  FileText,
  Wallet,
  Trophy,
  CalendarDays,
  Send,
  UsersRound,
  AlertTriangle,
  Clock,
  TrendingDown,
  UserPlus,
  Settings,
  Rocket,
  Check,
  Star,
  ChevronDown,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ──────────────────── Animated Section Wrapper ──────────────────── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ──────────────────── Data ──────────────────── */
const features = [
  { icon: LayoutDashboard, title: "Dashboard Executivo", desc: "Métricas em tempo real: faturamento, conversão, ticket médio e metas de vendas." },
  { icon: GitBranch, title: "Pipeline Kanban", desc: "Visualize cada etapa do funil e mova leads com drag-and-drop intuitivo." },
  { icon: Users, title: "Gestão de Leads", desc: "Leads do Meta Ads caem direto na plataforma. Filtre, organize e converta." },
  { icon: FileText, title: "Gerador de Propostas", desc: "Crie propostas personalizadas em segundos e acompanhe o status de cada uma." },
  { icon: Wallet, title: "Financeiro Completo", desc: "DRE, comissões, receitas e despesas — tudo em um só lugar." },
  { icon: Trophy, title: "Ranking de Vendas", desc: "Gamifique sua equipe com rankings de desempenho e metas individuais." },
  { icon: CalendarDays, title: "Agenda Integrada", desc: "Gerencie reuniões, ligações e videochamadas com calendário mensal." },
  { icon: Send, title: "Disparos em Massa", desc: "Campanhas de WhatsApp com variáveis personalizadas e agendamento." },
  { icon: UsersRound, title: "Gestão de Equipe", desc: "Squads, permissões e cargos para organizar seu time de vendas." },
];

const plans = [
  {
    name: "Key Starter",
    price: "147,90",
    users: "1 usuário",
    features: ["Dashboard executivo", "Pipeline Kanban", "Gestão de Leads", "Gerador de Propostas", "Suporte por e-mail"],
    popular: false,
  },
  {
    name: "Key Essencial",
    price: "597,90",
    users: "5 usuários",
    features: ["Tudo do Starter", "Financeiro completo", "Ranking de vendas", "Agenda integrada", "Suporte prioritário"],
    popular: true,
  },
  {
    name: "Key Prime",
    price: "1.297,90",
    users: "20 usuários",
    features: ["Tudo do Essencial", "Disparos em massa", "Gestão de equipe", "Integração Meta Ads", "Gerente de sucesso"],
    popular: false,
  },
  {
    name: "Key Black",
    price: "2.497,00",
    users: "Usuários ilimitados",
    features: ["Tudo do Prime", "SaaS Admin", "API personalizada", "Onboarding dedicado", "SLA garantido"],
    popular: false,
  },
];

const faqs = [
  { q: "O Opazia tem período de teste gratuito?", a: "Sim! Todos os planos incluem 7 dias de trial gratuito, sem necessidade de cartão de crédito. Cancele a qualquer momento." },
  { q: "Posso trocar de plano depois?", a: "Claro! Você pode fazer upgrade ou downgrade a qualquer momento. A diferença será calculada proporcionalmente." },
  { q: "Como funciona a integração com Meta Ads?", a: "Basta conectar sua conta do Meta Business Suite ao Opazia. Os leads das suas campanhas cairão automaticamente na plataforma, prontos para serem trabalhados." },
  { q: "Posso enviar mensagens pelo WhatsApp direto da plataforma?", a: "Sim! O Opazia se integra com o WhatsApp Business API para envio de mensagens individuais e campanhas em massa com personalização." },
  { q: "O Opazia funciona para consórcio e financiamento?", a: "Sim! O Opazia foi projetado especificamente para profissionais que atuam nos mercados de consórcio e financiamento, atendendo às dores comuns de ambos os segmentos." },
  { q: "Meus dados estão seguros?", a: "Absolutamente. Utilizamos criptografia de ponta a ponta, backups automáticos e infraestrutura em nuvem com alta disponibilidade e conformidade com LGPD." },
];

/* ──────────────────── Component ──────────────────── */
export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground scroll-smooth">
      {/* ═══════════ 1. HEADER ═══════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-sidebar-border bg-sidebar/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-lg">O</div>
            <span className="text-xl font-bold tracking-tight text-white">Opazia</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Funcionalidades", "funcionalidades"],
              ["Planos", "planos"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm text-sidebar-foreground/70 transition-colors hover:text-primary">
                {label}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollTo("planos")} className="rounded-full">
              Comece grátis
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button className="text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-sidebar-border bg-sidebar px-4 pb-4 md:hidden"
          >
            {[
              ["Funcionalidades", "funcionalidades"],
              ["Planos", "planos"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full py-3 text-left text-sidebar-foreground/70 hover:text-primary">
                {label}
              </button>
            ))}
            <Button className="mt-2 w-full rounded-full" onClick={() => scrollTo("planos")}>
              Comece grátis
            </Button>
          </motion.div>
        )}
      </header>

      {/* ═══════════ 2. HERO ═══════════ */}
      <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-6 rounded-full border-primary/30 bg-primary/10 px-4 py-1.5 text-primary">
              🚀 7 dias grátis — sem cartão de crédito
            </Badge>

            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Venda mais consórcios e financiamentos com o{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Opazia
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-sidebar-foreground/70 sm:text-xl">
              A plataforma completa de gestão de vendas que centraliza leads, automatiza seu pipeline e dispara sua conversão.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/30" onClick={() => scrollTo("planos")}>
                Teste grátis por 7 dias <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-sidebar-border px-8 text-base text-white hover:bg-sidebar-accent" onClick={() => scrollTo("funcionalidades")}>
                Ver funcionalidades
              </Button>
            </div>
          </motion.div>

          {/* Mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-xl border border-sidebar-border bg-sidebar-accent shadow-2xl shadow-primary/10"
          >
            <div className="flex items-center gap-2 border-b border-sidebar-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-warning/60" />
              <div className="h-3 w-3 rounded-full bg-success/60" />
              <span className="ml-2 text-xs text-sidebar-muted">app.opazia.com.br</span>
            </div>
            <div className="grid grid-cols-4 gap-4 p-6">
              {[
                { label: "Faturamento", value: "R$ 284.500", icon: BarChart3, color: "text-primary" },
                { label: "Leads Ativos", value: "1.247", icon: Users, color: "text-success" },
                { label: "Conversão", value: "34,8%", icon: Target, color: "text-accent" },
                { label: "Comissão", value: "R$ 42.675", icon: Zap, color: "text-info" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-sidebar-border bg-sidebar p-4 text-center">
                  <kpi.icon className={`mx-auto mb-2 h-5 w-5 ${kpi.color}`} />
                  <p className="text-lg font-bold text-white sm:text-xl">{kpi.value}</p>
                  <p className="text-xs text-sidebar-muted">{kpi.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ 3. PROBLEMA / DOR ═══════════ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Você reconhece esses problemas?</h2>
            <p className="mt-4 text-sidebar-foreground/60">Se sim, o Opazia foi feito para você.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { icon: AlertTriangle, title: "Leads desorganizados", desc: "Leads espalhados em planilhas, WhatsApp e anotações. Você perde oportunidades todos os dias por falta de centralização." },
              { icon: Clock, title: "Tempo desperdiçado", desc: "Horas gastas em tarefas manuais que poderiam ser automatizadas. Propostas, follow-ups e relatórios tomam seu dia." },
              { icon: TrendingDown, title: "Vendas imprevisíveis", desc: "Sem visibilidade do funil, você não sabe onde estão seus gargalos e não consegue prever o faturamento do mês." },
            ].map((pain, i) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-xl border border-destructive/20 bg-destructive/5 p-6 transition-colors hover:border-destructive/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <pain.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sidebar-foreground/60">{pain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 4. FUNCIONALIDADES ═══════════ */}
      <AnimatedSection id="funcionalidades" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 rounded-full border-primary/30 bg-primary/10 text-primary">Funcionalidades</Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Tudo que você precisa para vender mais</h2>
            <p className="mt-4 text-sidebar-foreground/60">9 módulos integrados em uma única plataforma.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group rounded-xl border border-sidebar-border bg-sidebar-accent/50 p-6 transition-all hover:border-primary/40 hover:bg-sidebar-accent"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sidebar-foreground/60">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 5. COMO FUNCIONA ═══════════ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Comece em 3 passos simples</h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", icon: UserPlus, title: "Cadastre-se", desc: "Crie sua conta em menos de 2 minutos. Sem burocracia, sem cartão de crédito." },
              { step: "02", icon: Settings, title: "Configure", desc: "Conecte seu Meta Ads e WhatsApp. Personalize seu pipeline e convide sua equipe." },
              { step: "03", icon: Rocket, title: "Venda mais", desc: "Seus leads chegam automaticamente. Acompanhe, converta e escale seus resultados." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-xl border border-sidebar-border bg-sidebar-accent/30 p-8 text-center"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                  {s.step}
                </span>
                <div className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-sidebar-foreground/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 6. SOCIAL PROOF ═══════════ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sidebar-border bg-gradient-to-br from-primary/10 via-sidebar-accent to-sidebar-accent p-10 sm:p-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Resultados que falam por si</h2>
              <p className="mt-4 text-sidebar-foreground/60">Números reais de quem usa o Opazia.</p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-4">
              {[
                { value: "+300%", label: "Aumento em conversão" },
                { value: "10x", label: "Mais rápido em propostas" },
                { value: "98%", label: "Satisfação dos clientes" },
                { value: "-60%", label: "Tempo em tarefas manuais" },
              ].map((m, i) => (
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

      {/* ═══════════ 7. PLANOS E PREÇOS ═══════════ */}
      <AnimatedSection id="planos" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 rounded-full border-primary/30 bg-primary/10 text-primary">Planos</Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Escolha o plano ideal para o seu negócio</h2>
            <p className="mt-4 text-sidebar-foreground/60">Todos os planos incluem 7 dias de trial gratuito.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-sidebar-border bg-sidebar-accent/30 hover:border-sidebar-border/80"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 text-primary-foreground">
                    <Star className="mr-1 h-3 w-3" /> Mais popular
                  </Badge>
                )}

                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-sidebar-foreground/60">{plan.users}</p>

                <div className="mt-5">
                  <span className="text-sm text-sidebar-foreground/60">R$</span>
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm text-sidebar-foreground/60">/mês</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-sidebar-foreground/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full rounded-full ${
                    plan.popular ? "shadow-md shadow-primary/20" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Começar trial grátis
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 8. FAQ ═══════════ */}
      <AnimatedSection id="faq" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Perguntas frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-sidebar-border">
                <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sidebar-foreground/70">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* ═══════════ 9. CTA FINAL ═══════════ */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary p-10 text-center sm:p-16">
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
                className="mt-8 rounded-full bg-white px-10 text-base font-semibold text-primary hover:bg-white/90 shadow-xl"
                onClick={() => scrollTo("planos")}
              >
                Comece seu trial grátis agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════ 10. FOOTER ═══════════ */}
      <footer className="border-t border-sidebar-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">O</div>
                <span className="text-lg font-bold text-white">Opazia</span>
              </div>
              <p className="mt-3 text-sm text-sidebar-foreground/50">
                Gestão de vendas inteligente para consórcio e financiamento.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Produto</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/50">
                <li><button onClick={() => scrollTo("funcionalidades")} className="hover:text-primary transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => scrollTo("planos")} className="hover:text-primary transition-colors">Planos</button></li>
                <li><button onClick={() => scrollTo("faq")} className="hover:text-primary transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Empresa</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/50">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-sidebar-foreground/50">
                <li><a href="#" className="hover:text-primary transition-colors">Termos de uso</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sidebar-border pt-6 sm:flex-row">
            <p className="text-sm text-sidebar-foreground/40">© 2026 Opazia. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sidebar-foreground/40 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-sidebar-foreground/40 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-sidebar-foreground/40 hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
