# 🎬 MovieFlix API

API REST desenvolvida para **fins educacionais**, com **CRUD completo**, filtros por gênero e documentação interativa via **Swagger (OpenAPI)**.

O projeto simula uma aplicação real de catálogo de filmes, seguindo boas práticas de organização, tipagem e manutenção de código.

---

## 📚 Sobre o projeto

O **MovieFlix API** foi criado para praticar conceitos de **back-end com Node.js**, utilizando:
- **TypeScript** para tipagem estática e maior segurança;
- **Express** como framework HTTP;
- **Prisma ORM (v6)** para gerenciamento de banco de dados;
- **PostgreSQL** como banco relacional.

A aplicação conta com rotas completas, validação de dados, documentação interativa e uma estrutura modular, fácil de manter e evoluir.

---

## 🧰 Tecnologias utilizadas
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM (v6)**
- **PostgreSQL**
- **Swagger UI / OpenAPI**

---

## ✔️ Pré-requisitos
- Node.js (v18 ou superior)
- PostgreSQL
- npm ou yarn

---

## 🚀 Como rodar o projeto

### 1️⃣ Clonar o repositório
```bash
git clone <url-do-repo>
cd movieflix-api
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz com:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

### 4️⃣ Gerar o Prisma Client
```bash
npx prisma generate
```

### 5️⃣ Executar migrações
```bash
npx prisma migrate dev
```

### 6️⃣ Iniciar o servidor

**Modo desenvolvimento:**
```bash
npm run dev
```

**Modo produção:**
```bash
npm run build
npm start
```

A API estará disponível em: `http://localhost:3000`

---

## 📘 Documentação da API

A documentação interativa está disponível em:
**http://localhost:3000/docs**

![Swagger Documentation](./assets/swagger.png)

> Documentação detalhada das rotas, parâmetros, request body, responses e códigos HTTP.

---

## 🔎 Principais Endpoints

| Método   | Rota                   | Descrição                        |
|----------|------------------------|----------------------------------|
| GET      | `/movies`              | Listar todos os filmes           |
| GET      | `/movies/:id`          | Retornar filme pelo ID           |
| GET      | `/movies/genre/:name`  | Filtrar filmes por gênero        |
| POST     | `/movies`              | Cadastrar novo filme             |
| PUT      | `/movies/:id`          | Atualizar filme existente        |
| DELETE   | `/movies/:id`          | Remover filme                    |

---

## 📦 Estrutura do Projeto


```
movieflix-api/
├── assets/                  # Imagens e recursos estáticos (Swagger)
├── data/
│   ├── pgadmin/             # Dados do PgAdmin
│   └── postgres/            # Dados do PostgreSQL
├── generated/
│   └── prisma/              # Prisma Client gerado
├── node_modules/            # Dependências do projeto
├── prisma/
│   ├── migrations/          # Migrações do banco
│   ├── schema.prisma        # Schema do Prisma
│   └── seed.js              # Seed do banco
├── src/
│   └── server.ts            # Código principal da API (Express)
├── Dockerfile               # Configuração do Docker
├── docker-compose.yml       # Orquestração de containers
├── package.json             # Configurações e scripts
├── README.md                # Documentação do projeto
├── swagger.json             # Especificação OpenAPI
├── tsconfig.json            # Configuração do TypeScript
```

> Código fonte em `src/`, schema e migrações em `prisma/`, documentação em `swagger.json` e assets. Estrutura pensada para **estudos e evolução** do projeto.

---

## 🛠️ Observações

- Projeto desenvolvido para **fins de estudo e portfólio**.
- A extensão do Prisma no VS Code pode apresentar **avisos visuais incorretos** na versão 6 — isso **não afeta o funcionamento**.
- Preparado para futuras melhorias, como autenticação, paginação e filtros avançados.

---

## 🙏 Agradecimentos

Agradeço ao **Dev em Dobro**, à comunidade **Node.js** e **Prisma**, e a todos os materiais que contribuíram para o desenvolvimento deste projeto.

---

## 👩‍💻 Autora

Desenvolvido por **Dev Seravali**  
[GitHub](https://github.com/devseravali) | [LinkedIn](https://www.linkedin.com/in/dev-seravali) | [YouTube](https://www.youtube.com/@devseravali)
---