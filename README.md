# Projeto de API RESTful WillWallet

Uma API RESTful construída para gerenciar transações, seguindo as práticas de CRUD e organizando a arquitetura para facilitar a manutenção e o entendimento das diferentes camadas do sistema.

## Arquitetura do Projeto

A estrutura deste projeto segue uma arquitetura organizada e modular:
- **Rotas**: Recebem e mapeiam as requisições, direcionando para os controladores correspondentes.
- **Controller**: Lida com a requisição, organiza a resposta e repassa para os serviços.
- **Services**: Valida a lógica de negócios e realiza verificações necessárias.
- **Repository**: Acessa o banco de dados e realiza operações de persistência.
- **Banco de Dados**: Dados são armazenados de forma segura e acessível.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework minimalista para construção de APIs.
- **Nodemon**: Utilizado para reinicializar o servidor automaticamente durante o desenvolvimento.
- **MongoDB Atlas**: Banco de dados em nuvem para armazenar e gerenciar dados.
- **Dotenv**: Utilizado para ocultar dados sensíveis e configurar variáveis de ambiente.
- **Bcrypt**: Biblioteca para criptografar senhas e garantir a segurança dos dados do usuário.
- **JWT**: JSON Web Tokens, usados para autenticação segura e gerenciamento de sessões.
- **Joi**: Validação de dados, garantindo que informações importantes estejam no formato esperado.

## Funcionalidades da API

A API implementa as operações CRUD (Create, Read, Update, Delete) para gerenciar transações:

- **Create** (`POST`): Criação de novas transações.
- **Read** (`GET`): Leitura de transações existentes.
- **Update** (`PUT` ou `PATCH`): Atualização de dados de uma transação.
- **Delete** (`DELETE`): Remoção de uma transação.

## Setup do Projeto

Para configurar e executar o projeto, siga as instruções abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/WillerLucoles/WillWallet_API.git
   cd WillWallet_API
