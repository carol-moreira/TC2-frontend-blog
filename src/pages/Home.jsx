import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPosts, searchPosts } from "../api/posts";
import { HomeLayout } from "../components/Layout";

const PostList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const PostCard = styled(Link)`
  display: block;
  text-decoration: none;

  h3 {
    margin: 0 0 0.5rem 0;
    color: var(--dark-brown);
  }

  p {
    margin: 0;
    color: var(--medium-brown);
  }

  strong {
    color: var(--dark-brown);
  }
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = term ? await searchPosts(term) : await getPosts();
      setPosts(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [term]); 

  useEffect(() => {
    if (!term) {
        load();
    }
  }, [load, term]); 
  const handleSearch = (e) => {
    e.preventDefault();
    load();
  }

  const empty = !loading && posts.length === 0;

  return (
    <HomeLayout>
      <main>
        <div className="card" style={{ marginBottom: "2rem" }}>
          <h1>Posts</h1>
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <input
              placeholder="Buscar por palavra-chave..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>

        {loading && <p>Carregando...</p>}
        {empty && <p>Nenhum post encontrado.</p>}

        <PostList>
          {posts.map((p) => (
            <PostCard to={`/post/${p._id}`} key={p._id} className="card">
              <h3>{p.title}</h3>
              <p>
                <strong>Autor:</strong> {p.author || "—"}
              </p>
              <p>
                {(p.content || "").slice(0, 160)}
                {(p.content || "").length > 160 ? "..." : ""}
              </p>
            </PostCard>
          ))}
        </PostList>
      </main>
    </HomeLayout>
  );
}