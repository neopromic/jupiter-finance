# 💚 Jupiter finance, seu gerenciador de finanças inteligente.

O Jupiter Finance foi desenvolvido com auxilio da full stack week, do Felipe Rocha, e sofreu algumas mudanças para torná-lo único e feito com carinho por mim, Wesley. 💚

## 💚 Funcionalidades

### Funcionalidades Base
- [x] Você pode adicionar transações com base na sua data atual, transações futuras (com o date picker), e adicionar transações da datas passadas.
- [x] Você pode deletar transações
- [x] Você pode editar transações (nome, valor, data, etc)
- [x] Validações de segurança adicionadas, você pode obter os dados apenas se você estiver autenticado, e se aqueles dados forem seus.
- [x] Adicionar logs de clicks, page views, web records, e mais, usando o PostHog.

### Em Desenvolvimento
- [ ] Dashboard pra gerenciar usuários, orgs, webhooks, e mais. (Apenas pra desenvolvimento e pra administração apenas, em produção.)
- [ ] Adicionar novos meios de autenticação além do clerk (auth js, por exemplo).
- [ ] Adicionar WebHooks do discord, etc
- [ ] Adicionar organizações no login (originalmente clerk, deve ser implementado do zero se for auth js. A logica deve ser feita o mais genérica o possível em caso do uso de outros métodos de login.).

### Novas Funcionalidades Planejadas
#### Análise e Inteligência
- [ ] Sistema de categorização automática de transações usando IA
- [ ] Previsões de gastos mensais baseadas em padrões históricos
- [ ] Alertas inteligentes para gastos irregulares ou suspeitos
- [ ] Análise de tendências de gastos com visualizações avançadas
- [ ] Sistema de pontuação de saúde financeira

#### Orçamentos e Metas
- [ ] Criação de orçamentos personalizados por categoria
- [ ] Sistema de metas financeiras com tracking de progresso
- [ ] Lembretes automáticos para contas recorrentes
- [ ] Sugestões personalizadas de economia baseadas nos padrões de gasto

#### Integração e Importação
- [ ] Importação automática de extratos bancários
- [ ] Integração com PIX para registro automático de transações
- [ ] Suporte para múltiplas contas bancárias
- [ ] Exportação de relatórios em diversos formatos

#### Compartilhamento e Social
- [ ] Sistema de finanças compartilhadas para famílias
- [ ] Comparação anônima com médias de gastos de outros usuários
- [ ] Dicas e educação financeira personalizadas
- [ ] Integração com redes sociais para compartilhamento de metas atingidas

#### Segurança e Backup
- [ ] Sistema de backup automático de dados
- [ ] Autenticação em duas etapas
- [ ] Criptografia end-to-end dos dados financeiros
- [ ] Logs detalhados de todas as alterações

#### PWA e Mobile
- [ ] Versão PWA para acesso offline
- [ ] Notificações push para alertas importantes
- [ ] Interface otimizada para mobile
- [ ] Scanner de notas fiscais via câmera


#### Gestão de Clientes
- [ ] Perfil detalhado de cada cliente com histórico de transações
- [ ] Segmentação de clientes por valor lifetime, frequência de compra e categorias
- [ ] Sistema de tags personalizáveis para classificar clientes
- [ ] Métricas de Customer Acquisition Cost (CAC) e Customer Lifetime Value (CLV)
- [ ] Análise de churn e previsão de cancelamentos
- [ ] Dashboard individual por cliente mostrando sua jornada na empresa

#### Analytics de Vendas
- [ ] Relatórios detalhados de vendas por período, categoria e vendedor
- [ ] Análise de sazonalidade e picos de venda
- [ ] Previsão de receita baseada em histórico e tendências
- [ ] Métricas de conversão e funil de vendas
- [ ] Análise de produtos mais vendidos e margens de lucro
- [ ] Tracking de metas de vendas por equipe/vendedor

#### Gestão Financeira B2B
- [ ] Controle de contas a pagar e receber
- [ ] Gestão de fluxo de caixa por unidade de negócio
- [ ] Análise de margem de lucro por produto/serviço
- [ ] Gestão de comissões e bonificações
- [ ] Integração com sistemas de NF-e e NFS-e
- [ ] Controle de inadimplência e cobrança automática

#### Multi-tenant e Permissões
- [ ] Sistema de organizações com múltiplas unidades
- [ ] Hierarquia de permissões customizável
- [ ] Roles específicas por departamento
- [ ] Auditoria detalhada de ações por usuário
- [ ] White-label com personalização de marca
- [ ] Subdomínios personalizados por empresa

#### Integrações B2B
- [ ] API RESTful completa para integração com outros sistemas
- [ ] Webhooks para eventos importantes
- [ ] Integração com sistemas de ERP populares
- [ ] Conexão com plataformas de e-commerce
- [ ] Integração com gateways de pagamento
- [ ] SSO (Single Sign-On) empresarial

#### Gestão de Assinaturas e Recorrência
- [ ] Controle de planos e assinaturas
- [ ] Métricas de MRR (Monthly Recurring Revenue)
- [ ] Gestão de upgrades e downgrades
- [ ] Análise de cohorts por plano
- [ ] Previsão de receita recorrente
- [ ] Sistema de faturas automáticas

#### Compliance e Relatórios
- [ ] Geração automática de relatórios fiscais
- [ ] Conformidade com LGPD/GDPR
- [ ] Exportação de dados em formatos padronizados
- [ ] Trilha de auditoria completa
- [ ] Backup automático de dados críticos
- [ ] Relatórios personalizáveis para stakeholders

#### Features Enterprise
- [ ] SLA garantido com suporte prioritário
- [ ] Ambientes de sandbox para testes
- [ ] Alta disponibilidade e redundância
- [ ] Limite de requisições customizável
- [ ] Backups em múltiplas regiões
- [ ] Planos enterprise com features exclusivas

#### Automações e Processos
- [ ] Workflows personalizáveis por empresa
- [ ] Automação de cobranças recorrentes
- [ ] Notificações automáticas para eventos importantes
- [ ] Integração com sistemas de CRM
- [ ] Regras de negócio customizáveis
- [ ] Gatilhos automáticos baseados em eventos

#### Analytics Avançado
- [ ] Business Intelligence integrado
- [ ] Dashboards personalizáveis
- [ ] Exportação automática de relatórios
- [ ] Análise preditiva de tendências
- [ ] Métricas de SaaS (CAC, LTV, Churn)
- [ ] Insights automáticos baseados em IA


---
## 💚 Como contribuir
Para contribuir, você pode clonar o repositório e seguir os seguintes passos:
### 1. Clonando repositório
```bash
git clone https://github.com/neopromic/jupiter-finance.git
```
### 2. Obtendo variáveis de ambiente de desenvolvimento
- 1. Primeiro, você deve ter o docker instalado em sua máquina, ou criar um banco de testes grátis na [neon](https://neon.tech).
- 2. Em seu `.env`, cole a string de conexão obtida no [neon.tech](https://neon.tech), ou use `"postgresql://postgres:password@localhost:5432/finance-ai"` do docker.
- 3. Caso prefira usar o docker, suba o container (pois o docker compose já está configurado no projeto), usando `docker compose up -d`.
- 4. Crie um projeto no clerk, e obtenha as credenciais.
- 5. Crie uma conta no PostHog e adicione as credenciais.
- Pronto! Credenciais adicionadas! 💚
### 3. Crie uma branch nova e comece a contribuir!
- 1. Crie uma nova branch (`git branch feat/name-of-the-feat && git checkout feat/name-of-the-feat`)
- 2. Quando for fazer Pull Request, envie pra comparação com a branch de **`dev`**(desenvolvimento)! Nós lançamos primeiro na dev, e depois fazemos merge na main, quando tiver um bom número de mudanças.
---
#### Criado por Wesley Souza, com carinho. 💚
