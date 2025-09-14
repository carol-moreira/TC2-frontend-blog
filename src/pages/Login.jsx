export default function Login() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-600">Login</h1>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Senha</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold hover:opacity-90 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}