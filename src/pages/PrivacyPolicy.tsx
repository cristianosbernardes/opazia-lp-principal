import { LegalLayout } from "@/components/LegalLayout";

const PrivacyPolicy = () => {
    return (
        <LegalLayout title="Política de Privacidade da Opazia">
            <p className="mb-4">
                <strong>URL de publicação:</strong> opazia.com/politica-de-privacidade<br />
                <strong>Última atualização:</strong> fevereiro de 2026<br />
                <strong>Versão:</strong> 1.0
            </p>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
                <p>
                    A Opazia ("nós", "nosso", "Opazia" ou "Empresa") é uma plataforma SaaS de gestão de relacionamento com clientes (CRM) e gerenciamento de leads, acessível em <strong>app.opazia.com</strong>.
                </p>
                <p className="mt-4">
                    Esta Política de Privacidade ("Política") descreve como coletamos, usamos, processamos, armazenamos e protegemos seus dados pessoais e de seus leads quando você utiliza nossa plataforma, sites e serviços relacionados (coletivamente, "Serviços").
                </p>
                <p className="mt-4 font-semibold">Esta Política se aplica a:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Clientes e usuários da plataforma Opazia (controladores de dados)</li>
                    <li>Leads e contatos gerenciados através da plataforma (titulares de dados)</li>
                    <li>Visitantes do site opazia.com</li>
                </ul>
                <p className="mt-4">A Opazia atua como:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Controlador de Dados</strong> em relação aos seus dados de conta e uso da plataforma</li>
                    <li><strong>Operadora de Dados</strong> em relação aos dados de leads fornecidos por você</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Dados Pessoais que Coletamos</h2>
                <h3 className="text-lg font-medium mb-3">2.1 Dados do Usuário (Controlador)</h3>
                <p>Quando você se registra e utiliza a Opazia, coletamos:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Dados de Identificação:</strong> nome completo, e-mail corporativo, telefone, CPF (se aplicável)</li>
                    <li><strong>Dados de Acesso:</strong> nome de usuário, senha (criptografada), histórico de login, IP</li>
                    <li><strong>Dados de Conta:</strong> empresa, cargo, departamento, foto de perfil</li>
                    <li><strong>Dados de Uso:</strong> funcionalidades acessadas, campanhas criadas, relatórios gerados, padrões de navegação</li>
                    <li><strong>Dados de Pagamento:</strong> informações de faturamento, histórico de transações (processadas por terceiros)</li>
                    <li><strong>Dados Técnicos:</strong> tipo de navegador, sistema operacional, cookies, identificadores de dispositivo</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">2.2 Dados de Leads (Operação em nome do controlador)</h3>
                <p>Quando leads são capturados através de integrações ou importados, coletamos:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Identificação:</strong> nome, sobrenome, e-mail, telefone</li>
                    <li><strong>Dados Profissionais:</strong> empresa, cargo, segmento de indústria</li>
                    <li><strong>Dados Complementares:</strong> CPF/CNPJ, endereço, localização geográfica</li>
                    <li><strong>Histórico de Interação:</strong> fontes de captura, campanhas recebidas, respostas, conversas via WhatsApp</li>
                    <li><strong>Dados do Facebook Lead Ads:</strong> leads capturados diretamente das campanhas Meta</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">2.3 Dados de Terceiros</h3>
                <p>Coletamos dados de contatos através de:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Meta Lead Ads Integration:</strong> via Facebook Lead Ads (requer aprovação de acesso)</li>
                    <li><strong>WhatsApp Business API:</strong> mensagens e metadados de conversas</li>
                    <li><strong>Importação de Dados:</strong> uploads por você ou seus colaboradores</li>
                    <li><strong>Integrações Externas:</strong> APIs de terceiros conectadas à sua conta</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Base Legal para Processamento de Dados (LGPD)</h2>
                <p>Conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018), processamos seus dados com base em:</p>

                <h3 className="text-lg font-medium mt-6 mb-3">3.1 Para Dados de Usuários (Clientes)</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Execução de Contrato:</strong> fornecer acesso à plataforma, gerenciar sua conta, processar pagamentos</li>
                    <li><strong>Consentimento:</strong> envio de newsletters e comunicações de marketing</li>
                    <li><strong>Obrigação Legal:</strong> cumprimento de leis tributárias, fiscais e regulatórias brasileiras</li>
                    <li><strong>Interesses Legítimos:</strong> melhorar segurança, prevenir fraudes, análise de uso</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">3.2 Para Dados de Leads</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Consentimento do Titular:</strong> leads foram consentidos pela fonte (Meta Ads, formulários, importações)</li>
                    <li><strong>Contrato:</strong> você é responsável por obter e gerenciar o consentimento dos leads</li>
                    <li><strong>Interesses Legítimos:</strong> comunicação comercial autorizada pelo responsável do lead</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Como Usamos Seus Dados</h2>
                <h3 className="text-lg font-medium mb-3">4.1 Operação e Prestação de Serviços</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Criar e gerenciar sua conta na plataforma</li>
                    <li>Fornecer acesso a recursos, funcionalidades e dashboards</li>
                    <li>Processar e armazenar dados de leads</li>
                    <li>Enviar e rastrear comunicações via WhatsApp</li>
                    <li>Gerar relatórios e análises de campanha</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4.2 Comunicações</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Enviar confirmações de conta e notificações de segurança</li>
                    <li>Informar sobre atualizações, mudanças de serviço e manutenção</li>
                    <li>Responder a suas dúvidas e solicitações de suporte</li>
                    <li>Enviar comunicações de marketing (somente com seu consentimento)</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4.3 Melhorias e Segurança</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Aprimorar funcionalidades e experiência de usuário</li>
                    <li>Detecção, prevenção e resolução de fraudes e abusos</li>
                    <li>Garantir conformidade com LGPD, Meta Platform Policy e WhatsApp Terms</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4.4 Conformidade Legal</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Cumprimento de requisitos legais e regulatórios brasileiros</li>
                    <li>Atendimento a solicitações de autoridades competentes</li>
                    <li>Proteção de direitos, privacidade e segurança</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Integração com Meta (Facebook Lead Ads)</h2>
                <h3 className="text-lg font-medium mb-3">5.1 Coleta de Dados do Facebook</h3>
                <p>A Opazia integra com a Meta (Facebook) para capturar leads diretamente de campanhas Facebook Lead Ads. Esta integração requer autorização explícita do usuário para acessar as seguintes permissões:</p>
                <ul className="list-disc pl-6 space-y-1 mt-4">
                    <li><code>business_management</code> — gerenciar recursos do Gerenciador de Negócios</li>
                    <li><code>leads_retrieval</code> — recuperar leads de formulários Facebook Lead Ads</li>
                    <li><code>pages_read_engagement</code> — ler dados de engajamento de páginas</li>
                    <li><code>pages_manage_metadata</code> — gerenciar metadados e webhooks de páginas</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">5.2 Uso dos Dados do Facebook</h3>
                <p>Confirmamos que:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Não vendemos</strong> dados de leads capturados via Meta a terceiros</li>
                    <li><strong>Não combinamos</strong> dados do Meta com outras fontes de dados para rastreamento ou publicidade sem consentimento explícito</li>
                    <li>Usamos dados somente para os fins autorizados no Gerenciador de Negócios da Meta</li>
                    <li>Respeitamos restrições de contato de leads (timing, frequência, consentimento)</li>
                    <li>Os dados são usados exclusivamente para gestão de relacionamento com clientes (CRM)</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">5.3 Conformidade com Meta Platform Policy</h3>
                <p>A Opazia opera em conformidade com a <a href="https://developers.facebook.com/policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Meta Platform Policy</a> e os <a href="https://www.facebook.com/legal/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Termos de Serviço de Dados do Facebook</a>. Não utilizamos os dados obtidos via integração Meta para:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Publicidade comportamental de terceiros</li>
                    <li>Rastreamento de usuários fora da plataforma</li>
                    <li>Venda ou compartilhamento comercial não autorizado</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">5.4 Responsabilidades Compartilhadas</h3>
                <table className="w-full mt-4 border-collapse border border-border">
                    <thead>
                        <tr className="bg-muted/50">
                            <th className="border border-border p-2 text-left">Responsabilidade</th>
                            <th className="border border-border p-2 text-left">Meta</th>
                            <th className="border border-border p-2 text-left">Opazia</th>
                            <th className="border border-border p-2 text-left">Você (Cliente)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2">Coleta de dados no formulário</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">—</td>
                            <td className="border border-border p-2 text-center">—</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Transmissão para Opazia</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">—</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Armazenamento na plataforma</td>
                            <td className="border border-border p-2 text-center">—</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">—</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Conformidade LGPD</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">✓</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Consentimento do lead</td>
                            <td className="border border-border p-2 text-center">✓</td>
                            <td className="border border-border p-2 text-center">—</td>
                            <td className="border border-border p-2 text-center">✓</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Contato com o lead</td>
                            <td className="border border-border p-2 text-center">—</td>
                            <td className="border border-border p-2 text-center">—</td>
                            <td className="border border-border p-2 text-center">✓</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Integração com WhatsApp Business API</h2>
                <h3 className="text-lg font-medium mb-3">6.1 Processamento de Dados via WhatsApp</h3>
                <p>Quando você envia mensagens via WhatsApp Business API através da Opazia:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Coletamos o número do telefone do destinatário</li>
                    <li>Armazenamos histórico de mensagens e metadados (data, hora, status de entrega)</li>
                    <li>Processamos dados para autenticação e roteamento de mensagens</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">6.2 Conformidade com WhatsApp Terms</h3>
                <p>Confirmamos que:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Não usamos WhatsApp para spam, phishing ou abuso</li>
                    <li>Respeitamos timing de mensagens e taxas de limite de frequência</li>
                    <li>Obtemos consentimento explícito antes de enviar mensagens em massa</li>
                    <li>Não compartilhamos dados de WhatsApp para publicidade comportamental</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Compartilhamento de Dados</h2>
                <h3 className="text-lg font-medium mb-3">7.1 Compartilhamento Necessário</h3>
                <p>Compartilhamos dados com prestadores de serviço para operação da plataforma:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Infraestrutura de Nuvem (Supabase):</strong> armazenamento, banco de dados, autenticação</li>
                    <li><strong>Meta (Facebook):</strong> sincronização de leads via API autorizada</li>
                    <li><strong>WhatsApp Business:</strong> transmissão de mensagens e metadados</li>
                    <li><strong>Provedores de E-mail:</strong> envio de notificações e confirmações</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">7.2 Não Vendemos Dados</h3>
                <p>A Opazia <strong>não vende, aluga ou negocia</strong> seus dados ou dados de leads para brokers, agências de marketing ou fins comerciais não autorizados.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">7.3 Cumprimento Legal</h3>
                <p>Podemos compartilhar dados com autoridades públicas quando obrigados por lei, mandado ou ordem judicial competente.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Retenção de Dados</h2>
                <table className="w-full mt-4 border-collapse border border-border">
                    <thead>
                        <tr className="bg-muted/50">
                            <th className="border border-border p-2 text-left">Tipo de Dado</th>
                            <th className="border border-border p-2 text-left">Período de Retenção</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2">Dados de conta (usuário ativo)</td>
                            <td className="border border-border p-2">Durante o contrato</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Dados de conta (após cancelamento)</td>
                            <td className="border border-border p-2">Até 90 dias</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Logs de acesso e auditoria</td>
                            <td className="border border-border p-2">12 meses</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Dados fiscais e pagamentos</td>
                            <td className="border border-border p-2">Até 5 anos (obrigação legal)</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Dados de leads (conta ativa)</td>
                            <td className="border border-border p-2">Conforme sua configuração</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Dados de leads (após cancelamento)</td>
                            <td className="border border-border p-2">30 dias para exportação, depois excluídos</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Backups</td>
                            <td className="border border-border p-2">Até 180 dias após exclusão</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2">Histórico de conversas WhatsApp</td>
                            <td className="border border-border p-2">12 meses (padrão)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Direitos dos Titulares de Dados (LGPD — Art. 17-22)</h2>
                <p>Você, e seus leads mediante solicitação, têm direito a:</p>
                <table className="w-full mt-4 border-collapse border border-border">
                    <thead>
                        <tr className="bg-muted/50">
                            <th className="border border-border p-2 text-left">Direito</th>
                            <th className="border border-border p-2 text-left">Descrição</th>
                            <th className="border border-border p-2 text-left">Prazo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2"><strong>Acesso</strong></td>
                            <td className="border border-border p-2">Relatório dos dados processados</td>
                            <td className="border border-border p-2">15 dias úteis</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><strong>Retificação</strong></td>
                            <td className="border border-border p-2">Corrigir dados inexatos</td>
                            <td className="border border-border p-2">Imediato (via plataforma)</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><strong>Exclusão</strong></td>
                            <td className="border border-border p-2">Remover dados desnecessários</td>
                            <td className="border border-border p-2">30 dias úteis</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><strong>Portabilidade</strong></td>
                            <td className="border border-border p-2">Exportar dados (CSV/JSON)</td>
                            <td className="border border-border p-2">15 dias úteis</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><strong>Oposição</strong></td>
                            <td className="border border-border p-2">Opor-se ao processamento por interesse legítimo</td>
                            <td className="border border-border p-2">15 dias úteis</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><strong>Limitação</strong></td>
                            <td className="border border-border p-2">Pausar uso dos dados durante disputa</td>
                            <td className="border border-border p-2">15 dias úteis</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-6 font-semibold">Como exercer seus direitos:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>E-mail:</strong> contato@opazia.com</li>
                    <li><strong>Assunto:</strong> <code>[LGPD] Tipo de Solicitação</code></li>
                    <li><strong>Informações necessárias:</strong> nome completo, e-mail da conta, descrição da solicitação</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. Segurança de Dados</h2>
                <p>Implementamos as seguintes medidas de segurança:</p>
                <ul className="list-disc pl-6 space-y-1 mt-4">
                    <li>Criptografia de dados em trânsito (TLS 1.2+) e em repouso</li>
                    <li>Autenticação multifator (MFA) disponível para todos os usuários</li>
                    <li>Segregação de dados por organização (multi-tenant isolado)</li>
                    <li>Controle de acesso baseado em perfis (RBAC)</li>
                    <li>Auditorias regulares de segurança</li>
                    <li>Backups automáticos criptografados</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">11. Cookies</h2>
                <p>Usamos cookies para manter sessão de login, lembrar preferências e análise anônima de uso. Você pode desabilitar cookies no navegador, mas isso pode impactar funcionalidades da plataforma.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">12. Menores de Idade</h2>
                <p>A Opazia não coleta ou processa dados de menores de 18 anos. Você é responsável por garantir que todos os leads gerenciados têm 18+ anos e consentimento adequado.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">13. Transferência Internacional de Dados</h2>
                <p>Dados podem ser armazenados em servidores fora do Brasil (infraestrutura de nuvem). Nesses casos, garantimos nível de proteção equivalente à LGPD mediante cláusulas contratuais padrão (SCC) com os processadores.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">14. Encarregado de Proteção de Dados (DPO)</h2>
                <p><strong>Contato de Privacidade / DPO:</strong></p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>E-mail:</strong> contato@opazia.com</li>
                    <li><strong>Assunto:</strong> <code>Questão de Privacidade / LGPD</code></li>
                    <li><strong>Prazo de resposta:</strong> 15 dias úteis</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">15. Alterações nesta Política</h2>
                <p>Quando fizermos mudanças substanciais, notificaremos por e-mail com 30 dias de antecedência e publicaremos a nova versão em opazia.com/politica-de-privacidade.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">16. Legislação Aplicável</h2>
                <p>Esta Política é regida pelas leis brasileiras:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Lei 13.709/2018 (LGPD)</li>
                    <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                    <li>Código de Defesa do Consumidor (Lei 8.078/1990)</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">17. Contato</h2>
                <address className="not-italic">
                    <strong>Opazia Soluções em Tecnologia</strong><br />
                    CNPJ: 23.248.724/0001-54<br />
                    Endereço: Rua Wanderlei Junior, 225 - Campinas/SC - CEP 88101-010<br />
                    📧 <a href="mailto:contato@opazia.com" className="text-primary hover:underline">contato@opazia.com</a><br />
                    🌐 <a href="https://opazia.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">opazia.com</a><br />
                    🕒 Suporte: Segunda a Sexta, 09:00–18:00 (Brasília)
                </address>
            </section>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
