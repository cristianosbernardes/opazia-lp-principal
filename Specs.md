# SPECS - Plataforma OPAZIA

## 1. STACK TECNOLÓGICA

### Frontend
- **Core:** Vite + React 18
- **Linguagem:** TypeScript
- **UI System:** shadcn/ui + Tailwind CSS
- **State Management:** TanStack Query (React Query)
- **Routing:** React Router DOM v6
- **Forms:** React Hook Form + Zod
- **Drag & Drop:** @dnd-kit/core (Kanban)
- **Charts:** Recharts
- **PDF Generation:** jspdf + html2canvas (Gerador de Propostas)
- **Feedback UI:** AlertDialog (Confirmações), Sonner (Toasts). 🚫 `window.confirm` proibido.

### Backend & Database (Supabase)
- **Database:** PostgreSQL
- **Auth:** Supabase Auth (Email/Pass + Google)
- **API:** REST (PostgREST) + Edge Functions
- **Realtime:** Supabase Realtime (para updates do Kanban)
- **Storage:** Supabase Storage (para avatares e anexos)

### Integrations
- **Email:** **Resend** (Transacional: Convites, Recuperação)
- **WhatsApp:** Integração via Webhook/API (Futuro)

---

## 2. ARQUITETURA SAAS & MULTI-TENANT

### Estratégia: Row Level Security (RLS)
Cada linha no banco de dados pertence a uma `organization_id` (Tenant).
A segurança é garantida a nível de banco de dados via Policies do Postgres.

### Fluxo de Acesso
```
User Login -> Supabase Auth -> JWT (contém user_id)
Query -> Postgres (RLS Policy verifica se user_id tem acesso à org) -> Dados
```

---

## 3. CORE DATABASE SCHEMA

### Tabela: `profiles` (Extensão do auth.users)
Armazena dados públicos dos usuários.
```sql
create table profiles (
  id uuid references auth.users on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  role text default 'member', -- master, admin, sales
  organization_id uuid references organizations(id),
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `organizations` (Tenants)
```sql
create table organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique,
  plan text default 'free', -- free, pro, enterprise
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `leads`
O coração do CRM.
```sql
create table leads (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) not null,
  
  -- Dados do Lead
  name text not null,
  email text,
  phone text, -- Formatado E.164
  company text,
  position text,
  
  -- Pipeline
  status text default 'new', -- new, contact, proposal, negotiation, closed, lost
  estimated_value numeric,
  
  -- Meta
  assigned_to uuid references profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone
);
```

### Tabela: `activities` (Timeline)
```sql
create table activities (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid references leads(id) on delete cascade,
  user_id uuid references profiles(id),
  
  type text not null, -- note, status_change, call, email, whatsapp
  content text,
  metadata jsonb,
  
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `notifications`
```sql
create table notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  title text not null,
  content text not null,
  type text default 'info', -- info, success, warning, error
  read_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `faq_questions`
```sql
create table faq_questions (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id), -- Null para FAQs globais
  question text not null,
  answer text not null,
  category text,
  tags text[],
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `sales_table_categories`
Gestão descentralizada das categorias das tabelas de vendas.
```sql
create table sales_table_categories (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade not null,
  name text not null,
  color text, -- Código da cor (Tailwind ou Hex)
  is_global boolean default false, -- Se pertence ao Master (SaaS)
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `sales_table_templates`
Repositório Master Global de Tabelas da franqueadora / administração.
```sql
create table sales_table_templates (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  code text,
  category text,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `sales_tables`
Instâncias copiadas para as contas locais de cada cliente SaaS.
```sql
create table sales_tables (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade not null,
  template_id uuid references sales_table_templates(id),
  title text not null,
  code text not null,
  category text not null,
  url text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `whatsapp_connections`
Gerencia as instâncias da Evolution API conectadas.

```sql
create table whatsapp_connections (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade not null,
  user_id uuid references profiles(id) on delete cascade not null,
  instance_name text not null,
  instance_key text unique,
  phone_number text,
  status text not null default 'disconnected', -- connected, connecting, disconnected
  connected_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indices
create index idx_whatsapp_connections_user_id on whatsapp_connections(user_id);
create index idx_whatsapp_connections_organization_id on whatsapp_connections(organization_id);
```

### Tabela: `whatsapp_message_templates`
Armazena modelos de mensagens rápidas.
```sql
create table whatsapp_message_templates (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  content text not null,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Tabela: `proposals` (Gerador de Propostas)
```sql
create table proposals (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id),
  lead_id uuid references leads(id),
  user_id uuid references profiles(id),
  
  title text,
  total_value numeric,
  content jsonb, -- Dados estruturados da proposta
  status text default 'draft', -- draft, sent, accepted, rejected
  
  pdf_url text, -- Link para o PDF gerado (Supabase Storage)
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### View: `team_whatsapp_connections`
Para facilitar a consulta de gestores.
```sql
create view team_whatsapp_connections as
  select wc.*, p.full_name, p.email, p.avatar_url, p.role as user_role
  from whatsapp_connections wc
  join profiles p on p.id = wc.user_id;
```

### View: `org_stats_view`
Base do painel Executivo, consolidando status de leads (`new`, `contact`, `negotiation`, `proposal`, `closed`).
```sql
create view org_stats_view as
  select organization_id, status, count(*) as count, sum(estimated_value) as total_value
  from leads
  group by organization_id, status;
```

---

## 4. INTEGRAÇÃO DE EMAIL (RESEND)

### Setup
Usaremos a biblioteca oficial `resend` via Edge Functions ou Backend API.

```typescript
// Exemplo de envio via Supabase Edge Function
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

await resend.emails.send({
  from: 'Opazia <onboarding@opazia.com>',
  to: ['user@email.com'],
  subject: 'Bem-vindo ao Opazia!',
  html: '<strong>Seu link de acesso...</strong>'
});
```

### Casos de Uso
1. **Convite de Membro**: O Admin convida um usuário para a organização.
2. **Alertas de Sistema**: Falha no pagamento, notificações de segurança.
3. **Nurturing (Futuro)**: Emails automáticos para leads.

---

## 5. DIRETRIZES DE DESENVOLVIMENTO

### Clean Code (Frontend)
- **Componentes**: Pequenos, focados e tipados.
- **Hooks**: Lógica de negócio extraída em Custom Hooks (`useLeads`, `useAuth`).
- **Server State**: Todo dado assíncrono deve passar pelo React Query.
- **Estilo e Layout**: Consultar `STYLE_GUIDE.md` para padrões visuais e comportamentos de UI.

### Segurança
- **Nunca** expor chaves `service_role` no frontend.
- **Sempre** validar permissões via RLS no backend, não apenas esconder botões no front.
- Dados sensíveis de clientes (PII) devem ser tratados com cuidado.

---

## 6. DEPLOY CHECKLIST
- [ ] Variáveis de Ambiente (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) configuradas no Vercel.
- [ ] Políticas RLS aplicadas e testadas.
- [ ] Integração com Resend validada (Domain verification).
- [ ] Build de produção otimizado (`npm run build`).
