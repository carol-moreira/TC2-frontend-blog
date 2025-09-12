export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "1rem", padding: "1rem" }}>
      <h2>{post.title}</h2>
      <p><b>Autor:</b> {post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}