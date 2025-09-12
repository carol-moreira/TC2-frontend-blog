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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Autor</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Conteúdo</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}