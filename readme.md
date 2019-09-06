# Desafio 02. Iniciando aplicação backend

Este é um repo criado para mostrar o resultado do desafio 2 do bootcamp da rocketseat. O desafio consiste em:

- Criar uma aplicação do zero utilizando Node com Express.

Nessa aplicação estão configuradas as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilizando PostgresSQL);

### Autenticação

- A autenticação é feita utilizando JWT.
- A validação dos dados de entrada é feita utilizando a lib Yup.

### Cadastro e atualização de usuários

- Novos usuários podem se cadastrar utilizando nome, e-mail e senha.
- Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.
- A senha é criptografada utilizando o bcrypt

### Resumo

Libs utilizadas:

- bcryptjs
- express
- jsonwebtoken
- pg
- pg-hstore
- sequelize
- yup

Dev dependencies:

- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- nodemon
- prettier
- sequelize-cli
- sucrase

Tudo isso configurado e funcionando, bora pro próximo desafio!
