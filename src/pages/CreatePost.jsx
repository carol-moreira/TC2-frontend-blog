import PostForm from "../components/PostForm";

export default function CreatePost() {
  const handleSubmit = (data) => {
    console.log("Criar post:", data);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Criar Novo Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}