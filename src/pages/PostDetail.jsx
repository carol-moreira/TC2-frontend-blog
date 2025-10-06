import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";
import { HomeLayout } from "../components/Layout";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPost(await getPostById(id));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  if (!post) return <HomeLayout><main><p>Carregando...</p></main></HomeLayout>;

  return (
    <HomeLayout>
      <main>
        <div className="card">
          <h1>{post.title}</h1>
          <p>
            <strong>Autor:</strong> {post.author || "—"}
          </p>
          <hr style={{ margin: "16px 0", border: "0", borderTop: "1px solid var(--light-gray)" }} />
          <p style={{ whiteSpace: "pre-wrap" }}>
            {post.content}
          </p>
        </div>
      </main>
    </HomeLayout>
  );
}