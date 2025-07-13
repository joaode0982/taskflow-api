# TaskFlow API  

API REST de gerenciamento de tarefas com autenticação JWT, construída com NestJS, Prisma e PostgreSQL. Projeto de estudo com foco em modularização, segurança e boas práticas.

---
## Tecnologias utilizadas


- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT Authentication](https://jwt.io/)
- [Swagger (OpenAPI)](https://swagger.io/)
- [Class-validator](https://github.com/typestack/class-validator)
- [Vitest + Supertest](https://vitest.dev/) *(em progresso)*

---

##  Instalação

```bash
git clone https://github.com/joaode0982/taskflow-api.git
cd taskflow-api
npm install
```

## Variáveis de ambiente

Crie um arquivo .env na raiz com:
```DATABASE_URL=postgresql://postgres:postgres@localhost:5432/taskflow
JWT_SECRET=sua_chave_secreta
```



## Configurar o banco de dados
```
npx prisma migrate dev
```

> Certifique-se de que o banco `taskflow` já foi criado no PostgreSQL.

## Rodar a aplicação

Execute o seguinte comando no terminal:

```bash
npm run start:dev
```

## Endpoints principais

- `POST /tasks` – Cadastrar nova task
- `GET /tasks` – Listar todas as tasks
- `PUT /tasks/{id}` – Atualizar task
- `DELETE /tasks/{id}` – Inativar task

---

## Swagger

Acesse a documentação da API via Swagger:

👉 http://localhost:3000/api

---

## Autor

Feito por João Victor.  
Projeto feito para fins de estudo e prática com NestJS.
