<div align="center">
  <img alt="NLW Spacetime" src=".github/assets/nlw-spacetime.png" width="30%"/>
</div>
<br>
<div align="center">
  <a>
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
    <img alt="React Native" src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
    <img alt="Expo" src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"/>
    <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img alt="Prisma" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
    <img alt="SQLite" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <a/>
</div>
<br>

## Sobre o projeto

Este é o repositório do projeto Cápsula do Tempo desenvolvido durante a Next Level Week SpaceTime (NLW) promovida pela [Rocketseat](https://www.rocketseat.com.br/). Trata-se de uma aplicação web e mobile, juntamente com uma API, que permite aos usuários criar e compartilhar mensagens, fotos e vídeos para serem armazenados e visualizados no futuro.

## Funcionalidades

- Autenticação de usuários
- Criação de postagens
- Upload de imagens
- Armazenamento de dados no banco de dados
- Visualização de postagens existentes

## Tecnologias

<table>
  <tbody>
    <tr>
      <td style="font-weight: bold">back-end</td>
      <td>
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><code>Node.JS</code></a> -
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>Typescript</code></a> -
        <a href="https://www.fastify.io/" target="_blank" rel="noopener noreferrer"><code>Fastify</code></a> -
        <a href="https://axios-http.com/ptbr/" target="_blank" rel="noopener noreferrer"><code>Axios</code></a> -
        <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer"><code>Prisma</code></a> -
        <a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer"><code>SQLite</code></a>
      </td>
    </tr>
    <tr>
      <td style="font-weight: bold">front-end</td>
      <td>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><code>React</code></a> -
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>TypeScript</code></a> -
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><code>NextJS</code></a> -
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><code>TailwindCSS</code></a> -
        <a href="https://axios-http.com/ptbr/" target="_blank" rel="noopener noreferrer"><code>Axios</code></a>
      </td>
    </tr>
    <tr>
      <td style="font-weight: bold">mobile</td>
      <td>
        <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer"><code>React Native</code></a> -
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>TypeScript</code></a> -
        <a href="https://expo.dev/" target="_blank" rel="noopener noreferrer"><code>Expo</code></a> -
        <a href="https://www.nativewind.dev/" target="_blank" rel="noopener noreferrer"><code>NativeWind</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Rodando o projeto

### pré-requisitos

Antes de rodar o projeto, é necessário ter as seguintes ferramentas instaladas:

- [`Git`](https://git-scm.com/)
- [`npm`](https://www.npmjs.com/)
- [`Node`](https://nodejs.org/)
- [`Expo`](https://docs.expo.dev/)

O projeto mobile pode ser executado em emulador, mas indico a utilização da seguinte ferramenta:
- [`Expo Go`](https://expo.dev/client)

É necessário criar dois apps oAuth no github, um para front-end e um para mobile:
#### web

As configurações para o app oauth no gituhub para web são:

<table>
  <tbody>
    <tr>
      <td style="font-weight: bold">Homepage URL:</td>
      <td><code>http://localhost:3000</code></td>
    </tr>
     <tr>
      <td style="font-weight: bold">Authorization callback URL:</td>
      <td><code>http://localhost:3000/api/auth/callback</code></td>
    </tr>
  </tbody>
</table>

Utilize o client ID nas variavéis de ambiente do front end da seguinte forma:

```bash
# web/.env.local
NEXT_PUBLIC_GITHUB_CLIENT_ID=<CLIENT_ID>
```

Adicione também ao back end junto do client secret:

```bash
# server/.env

# github web
GITHUB_CLIENT_ID=<CLIENT_ID>
GITHUB_CLIENT_SECRET=<CLIENT_SECRET>
```

#### mobile

As configurações para o app oauth no gituhub para mobile são:

<table>
  <tbody>
     <tr>
      <td style="font-weight: bold">Authorization callback URL:</td>
      <td><code>exp://IP:19000</code></td>
    </tr>
  </tbody>
</table>

ao rodar o projeto com npm start no projeto mobile, será mostrado no terminal o link do expo, basta subistituilo

Utilize o client ID no arquivo <code>mobile/app/index.tsx</code>:

```bash
11 const CLIENT_ID = <CLIENT_ID>
```

Adicione também ao back end junto do client secret:

```bash
# server/.env

# github web
GITHUB_CLIENT_ID=<CLIENT_ID>
GITHUB_CLIENT_SECRET=<CLIENT_SECRET>

# github mobile
GITHUB_CLIENT_ID=<CLIENT_ID>
GITHUB_CLIENT_SECRET=<CLIENT_SECRET>
```

Ao rodar o projeto front, comente as variaveis de ambiente mobile do back end para rodar o back end, ao rodar o mobile comente as variaveis de ambiente do front no back end para rodar o back end

### Clonar repositório

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone git@github.com:lucasdoloh0v/nlw-sapacetime.git
# Entre na pasta do repositório clonado
$ cd nlw-spacetime
```
### Instale as dependencias

dentro de cada uma das três pastas rode o seguinte comando:

```bash
npm install
```

### Configurando o banco de dados

Execute as migrações do banco de dados com o seguinte comando:

  ```bash
  npx prisma migrate dev
  ```

### Rodando as aplicações

5. Inicie o servidor de desenvolvimento:

- front e back:
```bash
npm run dev
```

- mobile:

```bash
npm run start
```

as aplicações do front e mobile, necessitam que o back end já esteja rodando

---
