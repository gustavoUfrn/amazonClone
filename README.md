# AmazonClone

Nesse repositório foi criado um site como a Amazon na linguagem Typescript, usando a stack MERN. Criando as skill essenciais para desenvolver e entregar um website como a Amazon.

## Criando frontend com vite

Primeiro passo é criar um aplicativo react que rode com TS. Para isso usaremos o vite.

```
//Rodando o código abaixo criamos uma aplicação react
npm create vite@latest "my-portifolio" -- --template react-ts -y

// Após isso é preciso instalar os pacotes do package.json usando
npm i or npm install

// Lembre-se que ao rodar o código abaixo o app react já estará funcionando
npm run dev
```

### Eslint

Configure ESlint para padronizar o código para que sua equipe trabalhe com um código limpo.
A configuração usada por esse projeto pode ser vista em:

> https://github.com/gustavoUfrn/amazonClone/blob/main/frontend/.eslintrc.cjs

### Crie e configure um repositório no github

Github é usado amplamente em qualquer desenvolvimento por causa do sistema de controle de versão git. Os principais uso do git são:

- Controle de versão
- Colaborações entre desenvolvedores
- Gerênciamento de problemas
- Integração contínua
- Hospedagem de páginas
- Compartilhamento de código

Isso torna a plataforma adaptavel ao desenvolvedor fazendo com que seja popularmente usada no desenvolvimento de software e em colaboração de equipe.

### Adicionando React bootstrap

Incluindo react bootstrap ao seu projeto.

```
// Código de instalação da biblioteca
npm install react-bootstrap bootstrap

// Para usar o CDN do bootstrap use o código abaixo no seu arquivo main.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

Assim seu projeto já estará pronto para usar bootstrap.

### Adicionando routing a página

Para adicionar routing ao projeto usaremos a biblioteca react-router-dom. Esta biblioteca server para lidar com a navegação e rederização de diferentes componentes na página dependendo da URL.

Para usar react-router-dom usando npm:

```
npm install react-router-dom
```

Os autores da biblioteca recomendam que o código abaixo sejá usada para criar "routing" no app.

```
// O primeiro elemento será onde as outras rotas ficaram, logo o elemento Root é a página principal da aplicação ou no caso do projeto será App
// O conteúdo das outras páginas(pasta "pages") aparecem onde está a tag <Outlet /> no arquivo App.
// As tags <Link /> irá mostrar o path e para qual página o usuário está buscando
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Criando backend

Para criar a api backend usando TS no node precisamos primeiro criar a pasta do backend. Em seguida configurar Typescript e Eslinting na pasta.

```
// -y Significa dizer sim para todas as perguntas que o terminar irá fazer
// -D Significa que a biblioteca ficará salva como dependencia de desenvolvimento (--save-dev)
npm init -y

npm i typescript ts-node-dev -D

npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

Lembre-se de criar e configurar os arquivos tsconfig.json e .eslintrc.js. As configurações usadas podem ser vista na pasta root do projeto.

> https://github.com/gustavoUfrn/amazonClone/tree/main/backend

### Express

Para esse projeto após criar o backend precisamos criar o servidor web. Para isso usaremos express.

Express é a biblioteca que iramos usar para lidar com rotas, serviços http, middlewares e muito mais.

```
npm i express

npm i @types/express -D
```

Para criar um servidor web simples com express basta rodar o código abaixo em um arquivo server.ts

```
import express, { Request, Response } from 'express'

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.listen(3333, () => 'server running on port 3333')
```

> Desta forma, você também foje da maldição do programador. Criando seu primeiro hello world na linguagem TS.

### Recompilando o código

Ao desenvolver a aplicação não queremos rodar três códigos para checar a aplicação funcionando, dessa forma o código abaixo auxilia na compilação do código e atualização, fazendo com que seja possivel dar reload/refresh no código após alguma alteração sem ter muito trabalho.

```
// Na pasta package.json adicione:
"scripts": {
    "build", "tsc",
    "dev": "ts-node-dev --respawn --transpile-only --files src/index.ts"
  },
```

### Buscando data do backend pro frontend

Axios é uma biblioteca utilizada para mandar requisições ajax, que será usada para transferencia de dados entre o back e o front.

```
npm i axios
```
