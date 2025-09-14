import React from 'react';
import { useParams, Link } from 'react-router-dom';

const mockPost = {
  id: 1,
  title: 'Entendendo o useEffect no React',
  author: 'Equipe Tech Insights',
  date: '2025-09-10T10:00:00Z',
  content: `
    <p class="lead">O <strong>useEffect</strong> é um dos hooks mais importantes do React. Ele serve para lidar com "efeitos colaterais" (side effects), que são operações que interagem com o mundo fora da renderização do seu componente.</p>
    <h2>O que são Efeitos Colaterais?</h2>
    <p>Exemplos comuns de efeitos colaterais incluem:</p>
    <ul>
      <li>Busca de dados em uma API (Data Fetching)</li>
      <li>Manipulação direta do DOM</li>
      <li>Inscrição em eventos (Subscriptions como <code>window.addEventListener</code>)</li>
    </ul>
    <h2>Sintaxe e Dependências</h2>
    <p>A sintaxe básica é simples: você passa uma função como primeiro argumento e, opcionalmente, um array de dependências como segundo argumento. Esse array controla quando o efeito será executado novamente.</p>
    <pre><code>useEffect(() => {
  // Seu código de efeito aqui...

  return () => {
    // Opcional: função de limpeza
  };
}, [dependencia]);</code></pre>
    <p>Entender o array de dependências é crucial para evitar loops infinitos e otimizar a performance da sua aplicação.</p>
  `
};

const PostPage = () => {
  const { id } = useParams();

  return (
    <main className="container mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link to="/" className="text-sky-500 dark:text-sky-400 hover:underline">
          &larr; Voltar para a Home
        </Link>
      </div>
      <article className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{mockPost.title}</h1>
        <div className="text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
          <span>Por {mockPost.author}</span> &bull; <span>{new Date(mockPost.date).toLocaleDateString()}</span>
        </div>
        
        {/* Aqui a mágica do plugin de tipografia acontece */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-h2:font-bold prose-a:text-sky-500"
          dangerouslySetInnerHTML={{ __html: mockPost.content }} 
        />
      </article>
    </main>
  );
};

export default PostPage;