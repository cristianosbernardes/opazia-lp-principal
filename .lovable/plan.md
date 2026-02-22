
# Página de Vendas do Opazia

## O que será feito

Substituir todo o aplicativo atual por uma **landing page de vendas** moderna e persuasiva para o SaaS Opazia, focada em converter visitantes em assinantes.

## Estrutura da Landing Page

### 1. Header/Navegacao
- Logo Opazia + links ancorais (Funcionalidades, Planos, FAQ)
- Botao CTA "Comece seu trial gratis"

### 2. Hero Section
- Titulo impactante sobre gestao de vendas para consorcio e financiamento
- Subtitulo explicativo
- CTA principal "Teste gratis por 7 dias"
- Imagem/mockup do dashboard do app (usando screenshot ou ilustracao)

### 3. Problema / Dor
- Cards destacando as dores do publico-alvo (leads desorganizados, falta de controle, perda de vendas)

### 4. Funcionalidades
- Grid com as principais features: Dashboard, Pipeline Kanban, Leads com Meta Ads, Propostas, Financeiro, Ranking, Agenda, Disparos em Massa, Gestao de Equipe
- Icones + descricao curta de cada

### 5. Como Funciona
- 3 passos simples (Cadastre-se, Configure, Venda mais)

### 6. Social Proof / Metricas
- Numeros de impacto (ex: "+300% em conversao", "10x mais rapido")

### 7. Planos e Precos
- 4 cards com os planos:
  - Key Starter: R$ 147,90 (1 usuario)
  - Key Essencial: R$ 597,90 (5 usuarios)
  - Key Prime: R$ 1.297,90 (20 usuarios)
  - Key Black: R$ 2.497,00 (ilimitado)
- Destaque no plano mais popular
- Badge "7 dias gratis" em todos

### 8. FAQ
- Perguntas frequentes em acordeao

### 9. CTA Final
- Secao de chamada final para acao

### 10. Footer
- Links, logo, redes sociais

## Detalhes Tecnicos

- **Remover**: Sidebar, Topbar, AppLayout, todas as paginas internas (Dashboard, Pipeline, Leads, etc.)
- **Criar**: Uma unica pagina `LandingPage.tsx` com todas as secoes acima
- **Manter**: Design system (cores laranja `#FF6B08`, `#DB5301`, `#FE900A`, fundo escuro, fonte Inter)
- **Usar**: `framer-motion` para animacoes de scroll, componentes do shadcn/ui (Accordion para FAQ, Button para CTAs)
- **Simplificar** o `App.tsx` para ter apenas a rota da landing page e uma rota 404
- Pagina totalmente responsiva (mobile, tablet, desktop)
- Scroll suave entre secoes
- Animacoes de entrada nos elementos conforme o usuario rola a pagina

