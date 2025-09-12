import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/create">Criar Post</Link> |{" "}
      <Link to="/admin">Admin</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}