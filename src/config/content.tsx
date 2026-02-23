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
} from "lucide-react";

export const featuresList = [
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

export const painPoints = [
  { icon: AlertTriangle, title: "Leads desorganizados", desc: "Leads espalhados em planilhas, WhatsApp e anotações. Você perde oportunidades todos os dias por falta de centralização." },
  { icon: Clock, title: "Tempo desperdiçado", desc: "Horas gastas em tarefas manuais que poderiam ser automatizadas. Propostas, follow-ups e relatórios tomam seu dia." },
  { icon: TrendingDown, title: "Vendas imprevisíveis", desc: "Sem visibilidade do funil, você não sabe onde estão seus gargalos e não consegue prever o faturamento do mês." },
];

export const howItWorksSteps = [
  { step: "01", icon: UserPlus, title: "Cadastre-se", desc: "Crie sua conta em menos de 2 minutos. Sem burocracia, sem cartão de crédito." },
  { step: "02", icon: Settings, title: "Configure", desc: "Conecte seu Meta Ads e WhatsApp. Personalize seu pipeline e convide sua equipe." },
  { step: "03", icon: Rocket, title: "Venda mais", desc: "Seus leads chegam automaticamente. Acompanhe, converta e escale seus resultados." },
];

export const metrics = [
  { value: "+300%", label: "Aumento em conversão" },
  { value: "10x", label: "Mais rápido em propostas" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "-60%", label: "Tempo em tarefas manuais" },
];

export const plansList = [
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

export const faqsList = [
  { q: "O Opazia tem período de teste gratuito?", a: "Sim! Todos os planos incluem 7 dias de trial gratuito, sem necessidade de cartão de crédito. Cancele a qualquer momento." },
  { q: "Posso trocar de plano depois?", a: "Claro! Você pode fazer upgrade ou downgrade a qualquer momento. A diferença será calculada proporcionalmente." },
  { q: "Como funciona a integração com Meta Ads?", a: "Basta conectar sua conta do Meta Business Suite ao Opazia. Os leads das suas campanhas cairão automaticamente na plataforma, prontos para serem trabalhados." },
  { q: "Posso enviar mensagens pelo WhatsApp direto da plataforma?", a: "Sim! O Opazia se integra com o WhatsApp Business API para envio de mensagens individuais e campanhas em massa com personalização." },
  { q: "O Opazia funciona para consórcio e financiamento?", a: "Sim! O Opazia foi projetado especificamente para profissionais que atuam nos mercados de consórcio e financiamento, atendendo às dores comuns de ambos os segmentos." },
  { q: "Meus dados estão seguros?", a: "Absolutamente. Utilizamos criptografia de ponta a ponta, backups automáticos e infraestrutura em nuvem com alta disponibilidade e conformidade com LGPD." },
];
