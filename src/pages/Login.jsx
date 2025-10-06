import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { LoginLayout } from "../components/Layout";

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  text-align: left;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
`;

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [form, setForm] = useState({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    login(form.username, form.password); // MOCK
    navigate(state?.from || "/admin", { replace: true });
  };

  return (
    <LoginLayout>
      <LoginForm onSubmit={onSubmit} className="card">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <FormGroup>
          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            placeholder="Usuário"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </FormGroup>
        <button type="submit">Entrar</button>
        <p style={{ marginTop: 8, color: "#666", textAlign: "center" }}>
          (Mock) Aceita qualquer usuário/senha.
        </p>
      </LoginForm>
    </LoginLayout>
  );
}