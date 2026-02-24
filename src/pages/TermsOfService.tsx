import { LegalLayout } from "@/components/LegalLayout";

const TermsOfService = () => {
    return (
        <LegalLayout title="Termos de Serviço da Opazia">
            <p className="mb-4">
                <strong>URL de publicação:</strong> opazia.com/termos-de-servico<br />
                <strong>Última atualização:</strong> fevereiro de 2026<br />
                <strong>Versão:</strong> 1.0
            </p>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar, registrar-se e utilizar a plataforma Opazia (acessível em <strong>app.opazia.com</strong>) e demais serviços relacionados (coletivamente, "Serviço"), você concorda integralmente com estes Termos de Serviço ("Termos").
                </p>
                <p className="mt-4">
                    Se você não concorda com qualquer parte destes Termos, não acesse a plataforma e cesse imediatamente seu uso.
                </p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Descrição do Serviço</h2>
                <p>A Opazia é uma plataforma SaaS (Software-as-a-Service) em nuvem que oferece:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Gerenciamento de Leads:</strong> captura, armazenamento, segmentação e análise de contatos</li>
                    <li><strong>CRM:</strong> pipeline de vendas, rastreamento de interações e histórico de contatos</li>
                    <li><strong>Integração com Meta Ads:</strong> conexão com Facebook Lead Ads para captura automática de leads</li>
                    <li><strong>WhatsApp Business Integration:</strong> envio de mensagens via WhatsApp Business API</li>
                    <li><strong>Dashboards e Relatórios:</strong> análise de campanha, conversão e performance</li>
                    <li><strong>Automação:</strong> workflows e integrações com ferramentas externas</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Elegibilidade e Registro</h2>
                <h3 className="text-lg font-medium mb-3">3.1 Quem Pode Usar</h3>
                <p>Para usar a Opazia, você deve:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Ser pessoa jurídica (empresa) ou pessoa física com capacidade legal de contratar</li>
                    <li>Ter 18 anos ou mais</li>
                    <li>Não estar proibido por lei de acessar o Serviço</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">3.2 Precisão das Informações</h3>
                <p>Ao registrar-se, você se compromete a fornecer informações precisas, completas e atualizadas. Informações falsas resultam em rescisão imediata da conta.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">3.3 Segurança de Credenciais</h3>
                <p>Você é responsável por manter sua senha segura e por todas as atividades realizadas em sua conta. Notifique-nos imediatamente em caso de acesso não autorizado.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Planos, Preços e Pagamento</h2>
                <h3 className="text-lg font-medium mb-3">4.1 Planos Disponíveis</h3>
                <p>A Opazia oferece diferentes planos com funcionalidades e limites de leads. Os planos atuais e seus preços estão disponíveis em opazia.com/planos.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">4.2 Cobrança</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>Frequência:</strong> mensal ou anual (conforme plano escolhido)</li>
                    <li><strong>Método:</strong> cartão de crédito, boleto, PIX ou transferência bancária</li>
                    <li><strong>Moeda:</strong> Reais (BRL)</li>
                    <li><strong>Atraso:</strong> acesso suspenso após 10 dias de inadimplência; reativado após regularização</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">4.3 Política de Reembolso</h3>
                <p>Todos os serviços são prestados digitalmente. Uma vez ativado o plano, não há reembolso, exceto:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Falha técnica grave que impeça o uso por mais de 24 horas (não atribuível ao usuário)</li>
                    <li>Cobrança duplicada em erro</li>
                    <li>Exigência legal (decisão judicial ou LGPD)</li>
                </ul>
                <p className="mt-4">Em caso de cancelamento no meio do ciclo, pode ser concedido crédito proporcional ao período não utilizado.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">4.4 Alteração de Preços</h3>
                <p>Podemos alterar os preços com notificação prévia de 30 dias. As alterações se aplicam a novos ciclos de cobrança.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Propriedade Intelectual</h2>
                <h3 className="text-lg font-medium mb-3">5.1 Propriedade da Opazia</h3>
                <p>A Opazia é proprietária de: código-fonte, arquitetura, design, algoritmos, banco de dados, marca registrada e toda a propriedade intelectual da plataforma.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">5.2 Seus Dados</h3>
                <p>Você retém propriedade dos dados de sua conta, leads importados, campanhas e comunicações criadas na plataforma.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">5.3 Licença de Uso</h3>
                <p>Você recebe uma licença revogável, não-transferível e não-exclusiva para usar a plataforma conforme seu plano. É vedado: modificar, descompilar, fazer engenharia reversa, vender, alugar ou criar produtos concorrentes baseados em nossa tecnologia.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Responsabilidades do Usuário</h2>
                <h3 className="text-lg font-medium mb-3">6.1 Uso Aceitável</h3>
                <p>Você concorda em <strong>não utilizar</strong> a plataforma para:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Spam, phishing, scam ou fraude</li>
                    <li>Envio de malware ou código malicioso</li>
                    <li>Acesso não autorizado a dados de outros usuários</li>
                    <li>Ataques à plataforma (DDoS, hacking)</li>
                    <li>Venda de dados de leads a terceiros</li>
                    <li>Atividades ilegais de qualquer natureza</li>
                    <li>Violação de LGPD, Meta Platform Policy ou WhatsApp Business Terms</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">6.2 Responsabilidade sobre Dados de Leads</h3>
                <p>Você é responsável por garantir:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li><strong>Consentimento:</strong> todos os leads consentiam em ser contactados pela sua empresa</li>
                    <li><strong>Conformidade LGPD:</strong> você cumpre a Lei 13.709/2018 ao processar dados de leads</li>
                    <li><strong>Conformidade Meta:</strong> você respeita os Termos do Meta ao usar leads do Facebook Lead Ads, incluindo:
                        <ul className="list-disc pl-6 mt-1">
                            <li>Não combinar dados Meta com outras fontes para rastreamento sem consentimento</li>
                            <li>Não vender dados capturados via Facebook a terceiros</li>
                            <li>Respeitar restrições de contato (frequência, timing)</li>
                        </ul>
                    </li>
                    <li><strong>Conformidade WhatsApp:</strong> você obteve consentimento explícito antes de enviar mensagens em massa</li>
                    <li><strong>Menores de Idade:</strong> todos os leads têm 18 anos ou mais</li>
                </ol>
                <p className="mt-4 italic"><strong>Você indeniza a Opazia</strong> contra qualquer reclamação decorrente de violação dessas responsabilidades.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Integração com Meta (Facebook Lead Ads)</h2>
                <h3 className="text-lg font-medium mb-3">7.1 Termos Meta</h3>
                <p>Ao usar a integração Facebook Lead Ads, você concorda em:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Respeitar a <a href="https://developers.facebook.com/policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Meta Platform Policy</a></li>
                    <li>Usar dados de leads somente para contato direto com o lead</li>
                    <li>Não combinar dados Meta com outras fontes para publicidade comportamental sem consentimento</li>
                    <li>Honrar os limites de contato definidos pela Meta</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">7.2 Permissões Utilizadas</h3>
                <p>A Opazia acessa as seguintes permissões Meta em seu nome, mediante sua autorização explícita:</p>
                <table className="w-full mt-4 border-collapse border border-border">
                    <thead>
                        <tr className="bg-muted/50">
                            <th className="border border-border p-2 text-left">Permissão</th>
                            <th className="border border-border p-2 text-left">Finalidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-border p-2"><code>business_management</code></td>
                            <td className="border border-border p-2">Gerenciar Gerenciador de Negócios</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><code>leads_retrieval</code></td>
                            <td className="border border-border p-2">Recuperar leads dos formulários</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><code>pages_read_engagement</code></td>
                            <td className="border border-border p-2">Ler dados de engajamento das páginas</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><code>pages_manage_metadata</code></td>
                            <td className="border border-border p-2">Gerenciar webhooks da página</td>
                        </tr>
                        <tr>
                            <td className="border border-border p-2"><code>pages_manage_ads</code></td>
                            <td className="border border-border p-2">Gerenciar anúncios vinculados à página</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="text-lg font-medium mt-6 mb-3">7.3 Responsabilidades</h3>
                <p>Você é responsável por:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Conectar sua conta Meta à Opazia (autorizar permissões)</li>
                    <li>Garantir que tem direito de acesso às páginas e dados conectados</li>
                    <li>Desconectar a integração quando não desejar mais a sincronização</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Integração com WhatsApp Business API</h2>
                <h3 className="text-lg font-medium mb-3">8.1 Uso Permitido</h3>
                <p>Ao usar o WhatsApp Business API através da Opazia, você se compromete a:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Obter consentimento explícito dos destinatários antes de enviar mensagens</li>
                    <li>Respeitar os <a href="https://www.whatsapp.com/legal/business-terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Termos WhatsApp Business</a></li>
                    <li>Manter qualidade de mensagens (não spam, conteúdo relevante)</li>
                    <li>Não usar para phishing, fraude ou conteúdo ilegal</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">8.2 Suspensão de Conta WhatsApp</h3>
                <p>O WhatsApp pode suspender sua conta de negócios se você violar os Termos. A Opazia não se responsabiliza por suspensões causadas pelo seu uso inadequado.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Responsabilidades da Opazia</h2>
                <h3 className="text-lg font-medium mb-3">9.1 Obrigações</h3>
                <p>A Opazia se compromete a:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Manter a plataforma funcional com aplicação de atualizações e patches de segurança</li>
                    <li>Proteger seus dados conforme a Política de Privacidade</li>
                    <li>Responder a solicitações LGPD em até 30 dias úteis</li>
                    <li>Fornecer suporte dentro dos limites do plano contratado</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">9.2 Limitação de Responsabilidade</h3>
                <p>A Opazia <strong>não garante</strong> disponibilidade 100%, ausência de bugs, compatibilidade universal ou resultados de negócio específicos.</p>
                <p className="mt-4">A responsabilidade total da Opazia por danos diretos é <strong>limitada ao valor pago por você nos últimos 12 meses</strong>. Não somos responsáveis por lucros cessantes, danos indiretos ou consequentes.</p>
                <p className="mt-4 italic"><strong>Exceção:</strong> responsabilidade por dano causado por negligência grave, dolo ou violação da LGPD pela Opazia não pode ser excluída.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. Disponibilidade e Manutenção</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Manutenção planejada:</strong> notificada com 48 horas de antecedência, preferencialmente fora do horário comercial</li>
                    <li><strong>Disponibilidade alvo:</strong> 99,5% de uptime mensal</li>
                    <li><strong>Status em tempo real:</strong> status.opazia.com</li>
                    <li><strong>Downtime não planejado</strong> causado por terceiros (AWS, Meta, WhatsApp) não gera responsabilidade para a Opazia</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">11. Suspensão e Rescisão</h2>
                <h3 className="text-lg font-medium mb-3">11.1 Suspensão Imediata</h3>
                <p>A Opazia pode suspender sua conta sem aviso prévio em caso de:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Violação das regras de uso aceitável (Seção 6)</li>
                    <li>Atividades ilegais ou que coloquem a plataforma em risco</li>
                    <li>Inadimplência por 10+ dias</li>
                    <li>Suspeita de fraude</li>
                </ul>

                <h3 className="text-lg font-medium mt-6 mb-3">11.2 Cancelamento pelo Usuário</h3>
                <p>Você pode cancelar a qualquer momento via Configurações → Assinatura → Cancelar, ou por e-mail para contato@opazia.com. O cancelamento entra em vigor no fim do ciclo atual.</p>

                <h3 className="text-lg font-medium mt-6 mb-3">11.3 Após o Encerramento</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li><strong>30 dias:</strong> dados disponíveis para exportação</li>
                    <li><strong>Após 30 dias:</strong> dados marcados para exclusão</li>
                    <li><strong>Após 90 dias:</strong> dados permanentemente deletados</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">12. Indenização</h2>
                <p>Você concorda em indenizar, defender e isentar a Opazia de qualquer reclamação de terceiros decorrente de:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Violação destes Termos</li>
                    <li>Violação de LGPD, Meta Platform Policy ou WhatsApp Terms</li>
                    <li>Conteúdo ilegal ou abusivo criado ou enviado por você</li>
                    <li>Contato não autorizado com leads</li>
                </ul>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">13. Privacidade e Proteção de Dados</h2>
                <p>A Política de Privacidade (opazia.com/politica-de-privacidade) é parte integrante destes Termos. Ao usar a plataforma, você também aceita a Política de Privacidade.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">14. Alterações nestes Termos</h2>
                <p>Podemos modificar estes Termos com notificação prévia de 30 dias por e-mail. A continuidade do uso após esse prazo implica aceitação das mudanças. Se não concordar, você pode cancelar sem penalidade.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">15. Legislação e Jurisdição</h2>
                <p>Estes Termos são regidos pelas leis brasileiras, especialmente:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Lei 13.709/2018 (LGPD)</li>
                    <li>Lei 8.078/1990 (Código de Defesa do Consumidor)</li>
                    <li>Lei 12.965/2014 (Marco Civil da Internet)</li>
                </ul>
                <p className="mt-4">Qualquer disputa será resolvida em tribunais brasileiros. Antes de qualquer ação judicial, as partes devem tentar resolução amigável em até 30 dias.</p>
            </section>

            <hr className="my-8" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">16. Disposições Gerais</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Independência:</strong> nada nestes Termos cria vínculo de emprego, parceria ou agência entre as partes</li>
                    <li><strong>Integralidade:</strong> estes Termos + Política de Privacidade constituem o acordo completo</li>
                    <li><strong>Invalidade parcial:</strong> se qualquer cláusula for inválida, as demais permanecem vigentes</li>
                    <li><strong>Cessão:</strong> você não pode ceder estes Termos a terceiros sem consentimento escrito da Opazia</li>
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

export default TermsOfService;
