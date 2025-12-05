# 🎬 MovieFlix API

API desenvolvida para fins de estudo, permitindo gerenciar filmes com CRUD completo, filtros por gênero e documentação via Swagger.

---

## 📚 Sobre o projeto
O MovieFlix API foi criado para praticar conceitos de backend utilizando **Node.js + TypeScript + Express + Prisma ORM** com banco **PostgreSQL**.  
A API inclui rotas completas, documentação interativa e uma estrutura simples de manter e evoluir.

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
Antes de iniciar, você precisa ter instalado:
- Node.js (versão 18 ou superior)
- PostgreSQL
- Gerenciador de pacotes npm ou yarn

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório
```bash
git clone <url-do-repo>
cd movieflix-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo `.env`
Crie um arquivo `.env` na raiz contendo:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

### 4. Gere o Prisma Client
```bash
npx prisma generate
```

### 5. Execute as migrações
```bash
npx prisma migrate dev
```

### 6. Inicie o servidor
**Modo desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm run build
npm start
```

---

## 📘 Documentação da API

Acesse a documentação interativa através de:  
**http://localhost:3000/docs**

![Swagger Documentation](./assets/swagger.png)

> A imagem acima mostra a documentação Swagger com as principais rotas da API.

---


## 🔎 Principais rotas

| Método   | Rota                | Descrição                |
|----------|---------------------|--------------------------|
| **GET**  | `/movies`           | Lista todos os filmes    |
| **POST** | `/movies`           | Cadastra um novo filme   |
| **GET**  | `/movies/:genreName`| Filtra filmes por gênero |
| **PUT**  | `/movies/:id`       | Atualiza um filme        |
| **DELETE** | `/movies/:id`     | Remove um filme          |

---

## 📦 Exemplos de Requisição e Resposta

### POST /movies
**Requisição:**
```json
{
	"title": "O Poderoso Chefão",
	"genre_id": 1,
	"language_id": 1,
	"oscar_count": 3,
	"release_date": "1972-03-24"
}
```
**Resposta de sucesso:**
```json
{
	"id": 10,
	"title": "O Poderoso Chefão",
	"genre_id": 1,
	"language_id": 1,
	"oscar_count": 3,
	"release_date": "1972-03-24T00:00:00.000Z"
}
```

### GET /movies
**Resposta:**
```json
[
	{
		"id": 1,
		"title": "Matrix",
		"genre": { "id": 1, "name": "Ação" },
		"language": { "id": 1, "name": "Português" },
		"oscar_count": 4,
		"release_date": "1999-03-31T00:00:00.000Z"
	}
]
```

### PUT /movies/:id
**Requisição:**
```json
{
	"title": "Matrix Reloaded",
	"oscar_count": 0
}
```
**Resposta de sucesso:**
Status 200

### DELETE /movies/:id
**Resposta de sucesso:**
Status 200
```json
{ "message": "Filme deletado com sucesso" }
```

---

## 🛠️ Observações
- Este projeto foi feito para fins de estudo.
- Caso use VS Code, a extensão oficial do Prisma pode mostrar avisos visuais incorretos com a versão 6 — isso **não afeta o funcionamento**.

---

## 📁 Estrutura do Projeto

```
movieflix-api/
├── assets/                  # Imagens e recursos estáticos (ex: swagger.png)
├── dist/                    # Código compilado (gerado pelo build)
├── node_modules/            # Dependências do projeto
├── prisma/
│   ├── migrations/          # Migrações do banco de dados
│   └── schema.prisma        # Schema do Prisma ORM
├── src/
│   └── server.ts            # Código principal da API (Express)
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore               # Arquivos/pastas ignorados pelo git
├── package.json             # Configurações e scripts do projeto
├── README.md                # Documentação do projeto
├── swagger.json             # Documentação OpenAPI/Swagger
├── tsconfig.json            # Configuração do TypeScript
```

- O código fonte está em `src/`.
- O schema e as migrações do banco ficam em `prisma/`.
- A documentação da API está em `swagger.json` e ilustrada em `assets/`.
- O build TypeScript gera arquivos em `dist/`.
- As variáveis de ambiente ficam no `.env`.

> Estrutura pensada para facilitar estudos, manutenção e evolução do projeto.

---

## 🙏 Agradecimentos

Agradeço ao **Dev em Dobro**, à comunidade Node.js e Prisma, e a todos os materiais de estudo que me ajudaram a construir este projeto.

---

## 👩‍💻 Autor

Desenvolvido por **Dev Seravali**

[GitHub](https://github.com/devseravali) | [LinkedIn](https://www.linkedin.com/in/devseravali) | [YouTube](https://www.youtube.com/@devseravali)

---