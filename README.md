# AmazonClone

Nesse repositório foi criado um site como a Amazon na linguagem Typescript, usando a stack MERN. Criando as skill essenciais para desenvolver e entregar um website como a Amazon.

### Criando frontend com vite

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
