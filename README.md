📝 Blog Frontend – Tech Challenge Fase 2
💡 Descrição do Projeto

Este é o frontend da aplicação de blog educacional, desenvolvido para professores da rede pública.
Aqui é possível interagir com o backend (API RESTful) para criar, listar, editar e excluir postagens de forma prática e intuitiva.

O objetivo foi integrar a interface do usuário ao backend já existente, garantindo usabilidade, responsividade e experiência fluida.

🏗️ Arquitetura da Solução

Frontend: React.js

Estilização: Styled-components

Roteamento: React Router DOM

Comunicação com Backend: Axios (REST API)

Backend: Blog Backend – Tech Challenge Fase 2


📂 Estrutura de Pastas

blog-frontend/
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens, ícones e outros arquivos estáticos
│   ├── components/     # Componentes reutilizáveis (UI)
│   ├── pages/          # Páginas principais do app
│   ├── services/       # Configuração de API (axios)
│   ├── styles/         # Estilos globais e temas
│   ├── App.js          # Componente raiz
│   └── index.js        # Ponto de entrada
└── package.json

⚙️ Como Executar o Projeto

Clonar o repositório:
git clone https://github.com/seu-repositorio/blog-frontend.git
cd blog-frontend

Instalar dependências:
npm install

Executar em ambiente de desenvolvimento:
npm start

Acessar no navegador:
http://localhost:3000


✅ Funcionalidades

📌 Listagem de postagens

✏️ Criação de nova postagem

🗑️ Exclusão de postagens

🔍 Busca de postagens por título ou conteúdo

📱 Interface responsiva


🛠️ Tecnologias Utilizadas

React.js

Styled-components

React Router DOM

Axios


👥 Equipe & Créditos

Desenvolvido por:

Bruna da Silva Moura

Carolina de Sousa Rodrigues Moreira

Fernanda Vieira Magalhães


🚀 Próximos Passos

Melhorar testes de integração

Implementar autenticação de usuários

Adicionar paginação de postagens