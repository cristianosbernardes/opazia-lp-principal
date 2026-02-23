# PRD - Plataforma OPAZIA

## 1. VISÃO DO PRODUTO
**OPAZIA** é uma plataforma SaaS "All-in-One" de gestão empresarial focada em *alta performance*, *rigor financeiro* e *controle operacional*. Diferente de CRMs genéricos, o Opazia oferece uma experiência "Command Center" (Industrial HUD) para gestores que exigem precisão.

## 2. OBJETIVOS
- Centralizar a gestão de Leads, Vendas, Financeiro e Equipes em um único "Sistema Operacional".
- Oferecer uma experiência visual de alta densidade e performance (Design Industrial).
- Prover ferramentas avançadas de administração SaaS (Multi-tenant, Roles, Planos).
- Garantir segurança e isolamento de dados por Tenant (Organização).

## 3. PERSONA
**Gestor/Dono de Negócio (SMB)**
- Gerencia múltiplos vendedores e fluxos financeiros.
- Precisa de dados em tempo real e controle total sobre permissões.
- Valoriza velocidade, precisão e "power user features".

**Vendedor/Operador**
- Foca em fechar negócios rapidamente.
- Precisa de um CRM ágil (Kanban) e ferramentas de comunicação (WhatsApp/Email).

## 4. FUNCIONALIDADES CORE

### 4.1 Autenticação & Acesso (Supabase Auth)
- Login Híbrido: Email/Senha + Google Auth.
- Multi-tenancy: Usuários pertencem a Organizações (Tenants).
- Roles: `master`, `admin`, `manager`, `sales`, `financial`.

### 4.2 Dashboard Executivo
- KPIs em Tempo Real (Faturamento, Leads, Conversão).
- Gráficos de Alta Performance (Recharts).
- Visão unificada de performance da equipe.

### 4.3 CRM & Pipeline de Vendas
- **Kanban Avançado**: Drag & Drop (dnd-kit) com totalização por coluna.
- **Filtros Dinâmicos**: Filtragem por nome, empresa e status.
- **Gestão de Perdas**: Motivos de perda configuráveis (preço, concorrente, etc.).
- **Gestão de Leads**:
  - Cadastro detalhado (Empresa, Contato, Valor).
  - Distribuição automática de leads (Round Robin).
  - Histórico de Atividades (Logs automáticos de mudanças de status).
  - Importação de Leads via CSV/Excel.

### 4.4 Gestão Financeira e Dashboard
- **Painel Executivo Financeiro:** Visão de caixa, receitas previstas (baseado em comissões) e despesas usando gráficos de alta performance (Recharts).
- **Controle de Receitas e Despesas** com categorias customizáveis.
- **Relatórios Financeiros Detalhados** e fluxo de caixa.
- **Exportação:** Exportação em lote de dados financeiros para Excel/CSV.

### 4.5 Administração SaaS (Super Admin)
- Gestão de Planos e Assinaturas.
- Controle de Tenants e Usuários Globais.
- SQL Editor Integrado para manutenção técnica.
- Logs de Auditoria do Sistema.

### 4.6 Tráfego Pago (Growth Workspace)
- **Promoção de Serviços**: Espaço para divulgação de serviços de tráfego pago da agência.
- **Lead Capture**: Captação de clientes interessados em anúncios (Facebook/Google Ads).
- **Proposta de Valor**: Foco em baixo custo por lead e alta performance.

### 4.7 Gerador de Propostas (Novo)
- **Criação Rápida**: Geração de propostas comerciais em PDF com poucos cliques.
- **Templates Dinâmicos**: Modelos personalizáveis com variáveis do lead.
- **Cálculos Automáticos**: Valor total, parcelamento e descontos.
- **Ações Integradas**:
  - Download PDF imediato.
  - Envio direto para WhatsApp (com anexo).
  - Compartilhamento via Link.

### 4.8 Central de Notificações e Automação
- **Histórico Completo**: Visualização de todas as notificações e mensagens automatizadas enviadas na aba "Histórico" do hub de Automação.
- **Prova de Entrega**: Registro histórico para auditoria de alertas e comunicações importantes.

### 4.9 Módulo de Conexão WhatsApp (Evolution API)
- **Multi-Instância**: Suporte a múltiplas conexões de WhatsApp por organização.
- **Gestão Completa**:
  - QR Code em tempo real.
  - Status de conexão (Conectado, Aguardando, Desconectado).
  - Edição de nome da instância (`instance_name`).
  - Exclusão e desconexão segura através de UI otimista.
- **Templates de Mensagem**:
  - Criação de respostas rápidas (Saudação, Cobrança, Agendamento).
  - Categorização de modelos ("Histórico" ao invés de guias separadas estáticas).
- **Envio de Mídia**: Suporte nativo para envio de PDFs e Imagens.

### 4.10 Módulo de Tabelas de Vendas (Client vs SaaS)
- **Painel SaaS (Master)**: Super Admins criam templates oficiais globais (com categorias globais `is_global`) e gerenciam as URLs dos PDFs das tabelas originais.
- **Painel Cliente**: Organizações podem "Importar" templates oficiais em sua conta. A tabela clonada vaza para a sua base, permitindo que insiram um link próprio ou mantenham o link oficial. Há suporte visual verde anti-duplicação (Substituir/Duplicar/Cancelar).
- **Filtros Facetados**: Busca por categoria flexível com botões iterativos, exibindo badges inteligentes ao invés de selects empilhados.

### 4.11 Central de Exportações de Dados
- **Exportação Universal**: Integração do botão de "Exportar Excel" (gerado via XLSX) no Dashboard Financeiro, Módulo de Leads (CSV customizado) e nas próprias Tabelas de Vendas.

## 5. REQUISITOS NÃO-FUNCIONAIS
- **Performance**: Tempo de carregamento < 1s (SPA Vite).
- **Design**: "Industrial Power Grid" (Branco, Preto, Vermelho, Bordas 85% lum, Radius 4px, Font Inter).
- **Estilo Visual:** Shadcn UI + Tailwind CSS (Inter font).
- **Proibição:** Uso de `alert()`, `confirm()` ou `prompt()` nativos é vetado. Utilizar componentes `Dialog` ou `Toast`.
- **Ícones:** Lucide React.
- **Escalabilidade**: Arquitetura pronta para milhares de tenants.

## 6. INTEGRAÇÕES PREVISTAS
- **Email Transacional**: Resend (Convites, Recuperação de Senha, Notificações).
- **WhatsApp**: API Oficial (ou gateways parceiros).
- **Pagamentos**: Stripe/Asaas (para gestão de assinaturas).

## 7. ONBOARDING & ENGAJAMENTO
- **Fluxo de Convite**: Email via Resend com token seguro.
- **Setup Inicial**: Criação de Organização e Perfil guiada.
- **Tour Visual**: Destaque para funcionalidades chave no primeiro acesso.

## 8. MÉTRICAS DE SUCESSO
- Conversão de Leads (Taxa de Fechamento).
- Retenção de Clientes (Churn Rate do SaaS).
- Engajamento Diário (DAU/MAU).
