import PostCard from "../components/PostCard";

export default function Home() {
  const mockPosts = [
    { id: 1, title: "Post 1", author: "Carolzinha", description: "Primeiro post" },
    { id: 2, title: "Post 2", author: "Diva", description: "Segundo post" },
  ];

  return (
    <div>
      <h1>Lista de Posts</h1>
      {mockPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}