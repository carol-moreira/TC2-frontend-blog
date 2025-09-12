import PostForm from "../components/PostForm";

export default function EditPost() {
  const handleSubmit = (data) => {
    console.log("Editar post:", data);
  };

  return (
    <div>
      <h1>Editar Post</h1>
      <PostForm onSubmit={handleSubmit} initialData={{ title: "Post teste", author: "Carol", content: "Conteúdo aqui" }} />
    </div>
  );
}