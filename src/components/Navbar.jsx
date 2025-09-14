import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">My Blog</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-yellow-200 transition">
            Home
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-yellow-200 transition"
          >
            Criar Post
          </Link>
          <Link
            to="/admin"
            className="text-white hover:text-yellow-200 transition"
          >
            Admin
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-yellow-200 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}