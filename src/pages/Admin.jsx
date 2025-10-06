import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deletePost, getPosts } from "../api/posts";
import { useAuth } from "../context/AuthContext";
import { AdminLayout } from "../components/Layout";
import ConfirmModal from "../components/ConfirmModal";

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PostListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--light-gray);

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .post-info {
    strong {
      color: var(--dark-brown);
    }
    span {
      color: var(--medium-brown);
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    button {
      background-color: #fbe9e7; 
      color: #c62828; /* Vermelho escuro */
      padding: 6px 10px;
      &:hover {
        background-color: #ffcdd2;
      }
    }
  }
`;

export default function Admin() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setPosts(await getPosts());
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleConfirmDelete = async () => {
    if (!postToDelete) return;
    try {
      await deletePost(postToDelete, user?.token);
      await load();
    } catch (e) {
      console.error(e);
      alert("Erro ao excluir.");
    } finally {
      setIsModalOpen(false);
      setPostToDelete(null);
    }
  };

  const requestDelete = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };

  if (loading) return <AdminLayout><main><p>Carregando...</p></main></AdminLayout>;

  return (
    <AdminLayout>
      <main>
        <div className="card">
          <h2>Administração</h2>
          <PostList>
            {posts.map((p) => (
              <PostListItem key={p._id}>
                <div className="post-info">
                  <strong>{p.title}</strong><br/>
                  <span>{p.author || "—"}</span>
                </div>
                <div className="actions">
                  <Link to={`/edit/${p._id}`}>Editar</Link>
                  <button onClick={() => requestDelete(p._id)}>Excluir</button>
                </div>
              </PostListItem>
            ))}
          </PostList>
        </div>
      </main>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Confirmar Exclusão"
        message="Você tem certeza que deseja excluir este post? Esta ação não pode ser desfeita."
      />
    </AdminLayout>
  );
}