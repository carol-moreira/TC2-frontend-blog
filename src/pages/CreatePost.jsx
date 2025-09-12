import PostForm from "../components/PostForm";

export default function CreatePost() {
  const handleSubmit = (data) => {
    console.log("Criar post:", data);
  };

  return (
    <div>
      <h1>Criar Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}