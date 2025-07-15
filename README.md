# SOBRE O PROJETO

Projeto de compra de ingresso para eventos.
É dividido em Ingresso e Pagamento.
Desenvolvido com fila de processamento.


# RODANDO O PROJETO

Rodar aplicação com "npx nodemon src/main.ts"
Rodar testes com "npx jest"

Atualização:
    Rodar com "docker-compose up --build"


# DEPENDÊNCIAS

▶️ @hapi/hapi
Framework web como o Express, mas mais estruturado e com foco em APIs robustas.

Pode ser usado no lugar do Express (ou junto, dependendo do projeto).

▶️ @types/amqplib
Tipagens TypeScript pra usar a lib amqplib (RabbitMQ) com IntelliSense e segurança de tipos.

▶️ @types/cors
Tipagens TypeScript para a lib cors.

▶️ @types/express
Tipagens TypeScript para a lib express.

▶️ @types/sinon
Tipagens TypeScript para o sinon, que é uma biblioteca de mocks/spies/stubs pra testes.

▶️ amqplib
Lib que permite comunicação com RabbitMQ (mensageria entre microsserviços).

▶️ axios
Cliente HTTP baseado em Promises. Serve pra fazer requisições para APIs (como fetch, mas melhorado).

▶️ cors
Lib pra liberar ou restringir acesso entre domínios diferentes (CORS = Cross-Origin Resource Sharing).

Muito usado quando seu frontend e backend estão em domínios diferentes.

▶️ express
Framework web minimalista para Node.js. Super usado pra APIs REST.

▶️ nodemon
Monitora mudanças nos arquivos e reinicia o app automaticamente. Usado em dev.

▶️ pg-promise
Biblioteca para usar PostgreSQL com Promises, de forma fluente e moderna. Alternativa ao Sequelize ou TypeORM pra SQL puro com código organizado.

▶️ sinon
Biblioteca para testes: permite criar mocks, spies e stubs (testar comportamentos isolados).

▶️ ts-node
Permite rodar arquivos .ts diretamente com Node.js sem compilar antes.

▶️ typescript
O compilador TypeScript oficial. Necessário pra qualquer projeto .ts.


# ESTRUTURA DO PROJETO

A arquitetura foi inspirada no DDD (Domain-Driven Design) e na Clean Architetcture.
Possui camadas bem definidas separando as responsabilidades.

## Estrutura da Aplicação

A aplicação está organizada de forma modular, seguindo os princípios da Clean Architecture e Domain-Driven Design (DDD). Abaixo estão as responsabilidades de cada diretório:

### 1 – `application`
Contém a lógica de orquestração da aplicação.

- `repository`: Define interfaces para acesso a dados.
- `usecase`: Casos de uso que coordenam as regras de negócio.

### 2 – `domain`
Camada de domínio puro, onde residem as regras de negócio.

- `entities`: Entidades que representam os objetos centrais do domínio.
- `event`: Eventos de domínio que descrevem ações relevantes do negócio.

### 3 – `infra`
Responsável pelas implementações concretas das dependências externas.

- `queue`: Implementações para mensageria e filas.
- `registry`: Registro de dependências e injeção de dependência.
- `repository`: Implementações concretas dos repositórios definidos na camada de aplicação.
