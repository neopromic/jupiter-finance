# 💚 Jupiter finance, seu gerenciador de finanças inteligente.

O Jupiter Finance foi desenvolvido com auxilio da full stack week, do Felipe Rocha, e sofreu algumas mudanças para torná-lo único e feito com carinho por mim, Wesley. 💚

---

## 💚 Funcionalidades

- [x] Você pode adicionar transações com base na sua data atual, transações futuras (com o date picker), e adicionar transações da datas passadas.
- [x] Você pode deletar transações
- [x] Você pode editar transações (nome, valor, data, etc)
- [x] Validações de segurança adicionadas, você pode obter os dados apenas se você estiver autenticado, e se aqueles dados forem seus.
- [ ] Dashboard pra gerenciar usuários, orgs, webhooks, e mais. (Apenas pra desenvolvimento e pra administração apenas, em produção.)
- [ ] Adicionar novos meios de autenticação além do clerk (auth js, por exemplo).
- [x] Adicionar logs de clicks, page views, web records, e mais, usando o PostHog.
- [ ] Adicionar WebHooks do discord, etc
- [ ] Adicionar organizações no login (originalmente clerk, deve ser implementado do zero se for auth js. A logica deve ser feita o mais genérica o possível em caso do uso de outros métodos de login.).

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
