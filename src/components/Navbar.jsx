import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* 1. Adicionamos esta div com a classe 'nav-links' para agrupar e espaçar os links */}
      <div className="nav-links">
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        {user && <NavLink to="/create">Novo Post</NavLink>}
      </div>

      <div className="user-actions">
        {user ? (
          <>
            <span>Olá, {user.username}</span>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Sair
            </button>
          </>
        ) : (
          <NavLink to="/login">Entrar</NavLink>
        )}
      </div>
    </nav>
  );
}