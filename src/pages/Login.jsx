export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}