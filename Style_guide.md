# STYLE GUIDE - Plataforma OPAZIA

Este documento define os padrões de design e layout que devem ser seguidos em todos os módulos e novas telas do projeto.

## 1. LAYOUT E ESTRUTURA GLOBAL

### 1.1. Comportamento de Scroll (Scroll Locking)
Para garantir uma experiência de aplicação nativa (SPA) e evitar problemas de usabilidade com cabeçalhos fixos, seguimos o padrão de **Scroll Independente de Conteúdo**.

- **Window/Body:** A rolagem da janela principal (`window`) deve ser **travada** (`overflow-hidden`). O aplicativo ocupa 100% da altura da viewport (`h-screen`).
- **Cabeçalho (TopBar):** Deve permanecer **fixo** ou estacionário no topo, sem nunca ser empurrado pela rolagem do conteúdo.
- **Área de Conteúdo (Main):** Apenas esta área deve ter rolagem (`overflow-y-auto`).

### 1.2. Caminhos de Navegação (Breadcrumbs)
Para manter o usuário orientado, o `TopBar` deve exibir o caminho de navegação atual seguindo o padrão:
- **Formato:** `Início > [Nome do Módulo] > [Sub-página]` (se aplicável).
- **Mapeamento:** Todos os módulos devem ter rótulos amigáveis definidos no objeto `pathLabels` do `TopBar.tsx`.
- **Comportamento Mobile:** Em telas pequenas, deve-se exibir apenas o nome do módulo atual para economizar espaço e evitar truncamento excessivo.

#### Implementação Padrão (Tailwind CSS)

A estrutura DOM deve seguir esta hierarquia para funcionar corretamente:

```tsx
// 1. Container Principal (App/Layout)
// Ocupa toda a tela e impede rolagem global
<div className="h-screen w-screen overflow-hidden flex flex-col">
  
  // 2. Sidebar e Banners (Opcional)
  <Sidebar />
  
  // 3. Wrapper de Conteúdo
  // Ajusta margem lateral (sidebar) e ocupa altura total
  <div className="h-full flex flex-col transition-all ...">
  
    // 4. Cabeçalho Fixo
    <TopBar />
    
    // 5. Área de Conteúdo Rolável
    // flex-1: Ocupa resto do espaço
    // overflow-y-auto: Scroll apenas aqui
    <main className="flex-1 min-h-0 overflow-y-auto p-4 md:p-6">
      {children}
    </main>
    
  </div>
</div>
```

---

## 2. FILOSOFIA DE DESIGN

O design segue o conceito **"Industrial Power Grid"** adaptado para o padrão corporativo Opazia:
- **Alta Densidade:** Informações compactas para power users.
- **Precisão:** Bordas definidas (1px), contrastes claros baseados em **Branco, Preto e Vermelho**.
- **Raio de Borda (Border Radius):** Padrão ESTRITO de **4px (`rounded-md` ou `rounded`)**.
    - **Regra:** Todos os containers, botões, inputs e itens de menu devem ter 4px de arredondamento.
- **Tipografia:** Fonte **Inter**. Tamanhos legíveis, pesos semibold para destaque.

---

## 3. CORES E TEMA (ESTILO PAGINA DA EMBRACON)

O visual principal passa a ser **Branco (Clean)**, base de leitura em **Preto/Grayscale** forte, com destaques em **Vermelho Opazia**.
- **Fundos (Backgrounds):** Fundos brancos (`bg-white` ou neutros claríssimos) para a área de conteúdo e cartões em `bg-white` com leve sombra técnica.
- **Primary:** Vermelho OPAZIA (Brand/Chamadas de Ação).
- **Foreground:** Pretos muito densos (`text-slate-900` ou puro negro) para contrastes e cabeçalhos.
- **Bordas:** Uso consistente de `border-border` (`border-gray-200/300`) para delimitação, seguindo estética power grid limpa.

## 4. COMPONENTES DE UI (INDUSTRIAL SYSTEM)

### 4.1. Cards (Planos e Dashboards)

O padrão visual para cards deve seguir a estética "Industrial Power Grid":
- **Grid Responsivo:**
    - Mobile: 1 coluna (`grid-cols-1`)
    - Tablet: 2 colunas (`sm:grid-cols-2`)
    - Desktop: 3 colunas (`lg:grid-cols-3`)
    - Ultrawide: 4 colunas (`xl:grid-cols-4`)
- **Estilo:**
    - **Sem Bordas Laterais Coloridas:** Visual sóbrio e limpo (Branco predominante).
    - **Hover Interativo:** `hover:shadow-xl hover:border-primary/50` para feedback tátil.
    - **Borda Base:** Fina e técnica (`border-border`), devendo respeitar a luminosidade de 85% do cinza claro sob fundo branco.
- **Header:** Fundo diferenciado (`bg-gray-50`) com borda inferior (`border-b border-border`) para hierarquia clara.
- **Tipografia:** Títulos em Uppercase e valores numéricos em destaque (font-extrabold e cor escura).

### 4.2. Shadcn/ui Base
- **Padrão Global de Interatividade:**
    - **Regra de Borda (85% Luminosidade):** Todos os elementos de input, select, datepickers e botões "Outline/Ghost" **DEVEM** ter uma borda com contraste medido contra o branco.
    - **Estado Ativo/Aberto (Focus/Open):** Quando clicado ou com menu aberto, o elemento **DEVE** ganhar borda `border-primary` (Vermelho) para indicar foco visual claro.
    - **Ícones de Gatilho (Triggers):** Ícones dentro de botões de filtro ou seletores **DEVEM** ser `text-primary` (Vermelho) para denotar interatividade.
    - **Exceção:** Botões Sólidos de Marca (Primary/Destructive/Brand) **NÃO** devem ter borda; usam preenchimento total e texto ou brilho para destaque.

Utilizar **shadcn/ui** como base, customizando apenas quando necessário:
- **Botões:** `h-10` (40px) como padrão absoluto para todos os botões (inclusive 'sm'). Estilo "Outline" deve ter borda visível preta ou cinza médio.
- **Inputs:** Com bordas definidas e foco claro (`ring-primary`).

### 4.3. Indicadores de Status (Badges)
Padronização de cores para badges de status:
- **Conectado / Sucesso:** Verde (`bg-green-100 text-green-700 border-green-200`).
- **Processando / Conectando:** Amarelo/Amber (`bg-amber-100 text-amber-700 border-amber-200`).
- **Desconectado / Erro:** Vermelho/Destructive (`bg-red-100 text-red-700 border-red-200`).
- **Neutro / Inativo:** Cinza/Muted (`bg-gray-100 text-gray-700 border-gray-200`).

### 4.4. Feedback e Popups (Dialogs/Alerts/Banners)
- **Botão Destrutivo:** SEMPRE usar `variant="destructive"`.
- **Botão Secundário (Cancelar/Outline):** Deve ter borda visível cinza (`border-gray-300`) e ao sofrer hover deve escurecer sutilmente o fundo (`hover:bg-gray-100`) para não "desaparecer" se a cor natural de hover for clara.
- **Botão Primário (Solid):** Em popups, se a cor primária for vibrante (laranja/vermelho), forçar `text-white` para garantir legibilidade.
- **Borda de Banners e Modais Light:** Usar luminosidade de 85% (equivalente a `#d9d9d9` ou `border-gray-200`) para separar fisicamente os elementos do fundo branco.
- **PROIBIDO:** O uso de diálogos nativos do navegador (`window.alert`, `window.confirm`, `window.prompt`).

### 4.5. Scrollbars e Abas (Tabs)
- **Abas:** `border-b border-border` como separador das abas; Estado ativo: Borda inferior `border-primary` e texto.

### 4.6. Busca e Filtros (Industrial Gutter)
Padrão para barras de pesquisa e filtros acima de tabelas.
- **Container:** Sem background (`bg-transparent`), apenas uma borda inferior (`border-b border-border`).

### 4.7. Padrão Master-Detail (Gerenciamento)
- Item selecionado destaque visual na borda: (`border-primary`).

### 4.8. Navegação (Sidebar)
- Altura dos Ícones/Links: `40px` como padrão para os links do menu (`sidebar-link`).

### 4.9. Input Groups (Botões Integrados)
- Estrutura relativa e Botão encaixado com proporção correta para aproveitar a estética técnica sob contraste branco x botão vermelho.
