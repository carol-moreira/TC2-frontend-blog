import React from "react";

export default function PostForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = React.useState(initialData.title || "");
  const [author, setAuthor] = React.useState(initialData.author || "");
  const [content, setContent] = React.useState(initialData.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, content });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Título
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Autor
        </label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Conteúdo
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:opacity-90 transition"
      >
        Salvar
      </button>
    </form>
  );
}
