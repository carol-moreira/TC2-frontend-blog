import React from 'react';
import PostCard from '../components/PostCard';

const mockPosts = [
    { id: 1, title: 'Entendendo o useEffect no React', excerpt: 'O hook useEffect permite executar efeitos colaterais em componentes funcionais. Vamos explorar como usá-lo corretamente.', date: '2025-09-10T10:00:00Z' },
    { id: 2, title: 'Tailwind CSS vs. Styled Components', excerpt: 'Uma comparação entre duas abordagens populares de estilização. Qual a melhor para o seu caso?', date: '2025-09-08T14:30:00Z' },
    { id: 3, title: 'Gerenciamento de Estado com Zustand', excerpt: 'Descubra como o Zustand oferece uma solução simples e poderosa para o gerenciamento de estado global.', date: '2025-09-05T09:00:00Z' },
];

const Home = () => {
  return (
    <>
      {/* Seção de Destaque (Hero) */}
      <div className="w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Bem-vindo ao Tech Insights</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Seu blog sobre desenvolvimento, tecnologia e carreira.
          </p>
        </div>
      </div>

      {/* Seção de Posts */}
      <div className="container mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Últimos Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;