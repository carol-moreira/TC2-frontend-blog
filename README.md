📰 BLOG FRONTEND – TECH CHALLENGE FASE 3 (FIAP PÓS FULL STACK)

---------------------------------------------------------------
💡 SOBRE O PROJETO
---------------------------------------------------------------
O Blog Frontend é uma aplicação web construída em React para consumir o backend do Tech Challenge Fase 3.
O objetivo é oferecer uma interface moderna e responsiva para que professores e alunos possam criar, editar,
listar e excluir postagens, promovendo o compartilhamento de conhecimento de forma prática e intuitiva.

Este projeto faz parte da Pós-graduação em Desenvolvimento Full Stack da FIAP.

---------------------------------------------------------------
🧩 ARQUITETURA DA SOLUÇÃO
---------------------------------------------------------------
- Frontend: React + Vite ou CRA (Create React App)
- Linguagem: JavaScript (ES6+)
- Estilização: Styled-components
- Comunicação com API: Axios
- Gerenciamento de rotas: React Router DOM
- Autenticação: Context API + ProtectedRoute
- Build e execução: Node.js + npm

---------------------------------------------------------------
🏗️ ESTRUTURA DE PASTAS
---------------------------------------------------------------
```
src/
     ├── api/               -> Funções de integração com o backend (Axios)
     │    └── posts.js
     ├── components/        -> Componentes reutilizáveis (Navbar, Layout, Modal)
     │    ├── Navbar.jsx
     │    ├── Layout.js
     │    └── ConfirmModal.jsx
     ├── context/           -> Contextos globais (ex.: autenticação)
     │    └── AuthContext.jsx
     ├── pages/             -> Páginas principais
     │    ├── Home.jsx
     │    ├── Post.jsx
     │    ├── Admin.jsx
     │    ├── Login.jsx
     │    └── CreatePost.jsx
     ├── routes/            -> Definições de rotas e proteção de páginas
     │    ├── AppRoutes.jsx
     │    └── ProtectedRoute.jsx
     ├── styles/            -> Estilos globais e temas
     │    ├── GlobalStyles.js
     │    └── theme.js
     ├── App.jsx
     ├── index.js
     └── assets/            -> Imagens e ícones estáticos
```

---------------------------------------------------------------
⚙️ CONFIGURAÇÃO DO AMBIENTE
---------------------------------------------------------------
PRÉ-REQUISITOS:
- Node.js 18+
- npm 9+
- Backend configurado e rodando (TechChallengeFiapFase3Back)

---------------------------------------------------------------
🔑 VARIÁVEIS DE AMBIENTE
---------------------------------------------------------------
Crie um arquivo chamado .env na raiz do projeto com o conteúdo abaixo:

REACT_APP_API_URL=http://localhost:3000

Essa variável define o endpoint da API utilizada pelo frontend.

---------------------------------------------------------------
🚀 COMO RODAR O PROJETO
---------------------------------------------------------------
1. Clonar o repositório:
   git clone https://github.com/carol-moreira/TC2-frontend-blog.git

2. Entrar na pasta:
   cd TC2-frontend-blog

3. Instalar dependências:
   npm install

4. Rodar a aplicação:
   npm start

5. Acessar:
   http://localhost:3000

---------------------------------------------------------------
🧠 PRINCIPAIS FUNCIONALIDADES
---------------------------------------------------------------
🏠 Home – Lista todas as postagens com título, autor e resumo
🔍 Busca – Filtra posts por palavra-chave
📖 Leitura – Exibe o conteúdo completo de uma postagem
✏️ Criação – Permite criar novas postagens
🔐 Login – Autenticação simples via contexto
⚙️ Admin – Área restrita com CRUD completo e modal de confirmação

---------------------------------------------------------------
🎨 IDENTIDADE VISUAL
---------------------------------------------------------------
- Paleta neutra
- Layout responsivo com styled-components
---------------------------------------------------------------
🧪 TESTES E QUALIDADE
---------------------------------------------------------------
- Recomendado: ESLint + Prettier
- Possível expansão: Jest + React Testing Library
- Boas práticas:
  * Componentização
  * Separação de responsabilidades
  * Hooks reutilizáveis
  * Variáveis de ambiente documentadas

---------------------------------------------------------------
👩‍💻 AUTORES
---------------------------------------------------------------
Carolina Moreira 
Bruna Moura 
Fernanda Magalhães

---------------------------------------------------------------
📚 REFERÊNCIAS
---------------------------------------------------------------
FIAP Pós Tech – Desenvolvimento Full Stack
React Docs: https://react.dev/
Styled Components: https://styled-components.com/
Axios: https://axios-http.com/
React Router: https://reactrouter.com/

---------------------------------------------------------------
