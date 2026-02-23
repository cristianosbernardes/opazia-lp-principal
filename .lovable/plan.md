

# Pagina de Vendas do Opazia

## Resumo

Substituir todo o aplicativo atual (dashboard, sidebar, paginas internas) por uma landing page de vendas moderna e persuasiva, focada em converter visitantes em assinantes do Opazia.

## Estrutura da Landing Page

A pagina tera 10 secoes, todas em uma unica pagina com scroll suave:

1. **Header** - Logo + navegacao ancoral + botao CTA
2. **Hero** - Titulo impactante, subtitulo, CTA principal e mockup do dashboard
3. **Problema/Dor** - 3 cards com as dores do publico-alvo
4. **Funcionalidades** - Grid com 9 features principais (Dashboard, Pipeline, Leads, Propostas, Financeiro, Ranking, Agenda, Disparos, Equipe)
5. **Como Funciona** - 3 passos simples
6. **Social Proof** - Metricas de impacto
7. **Planos e Precos** - 4 cards (Key Starter R$147,90 / Key Essencial R$597,90 / Key Prime R$1.297,90 / Key Black R$2.497,00)
8. **FAQ** - Acordeao com perguntas frequentes
9. **CTA Final** - Chamada final para acao
10. **Footer** - Links, logo, redes sociais

## Detalhes Tecnicos

### Arquivos a criar
- `src/pages/LandingPage.tsx` - Pagina unica com todas as secoes

### Arquivos a modificar
- `src/App.tsx` - Simplificar para apenas rota `/` (LandingPage) e rota 404
- `index.html` - Atualizar titulo e meta tags para "Opazia"

### Arquivos a remover (imports no App.tsx)
- Remover imports de: AppLayout, Dashboard, Pipeline, Leads, Propostas, Financeiro, Ranking, Agenda, Disparos, Usuarios, Notificacoes, PlaceholderPage
- Os arquivos das paginas internas e layout permanecem no projeto mas nao serao mais roteados

### Tecnologias utilizadas
- `framer-motion` (ja instalado) para animacoes de scroll com `useInView`
- Componentes shadcn/ui: `Accordion` para FAQ, `Button` para CTAs, `Badge` para tags de planos
- Design system existente: cores laranja (#FF6B08, #DB5301, #FE900A), fundo escuro, fonte Inter
- Pagina totalmente responsiva (mobile, tablet, desktop)
- Scroll suave via CSS `scroll-behavior: smooth` e links ancorais

