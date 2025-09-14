import React from 'react';

const Home = () => {
  return (
    // Fundo com gradiente que cobre a tela inteira
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 text-white">
      
      {/* Container principal com sombra, bordas e padding */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl text-center">

        {/* Título Grande e Chamativo */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Tailwind CSS Está Funcionando!
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Se você está vendo esta caixa com gradiente e fontes estilizadas, sua configuração foi um sucesso.
        </p>

        {/* Botão com efeito de hover */}
        <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
          Começar a Criar
        </button>

      </div>

      <p className="mt-8 text-gray-500">
        Agora você pode começar a construir seu blog.
      </p>
      
    </div>
  );
};

export default Home;