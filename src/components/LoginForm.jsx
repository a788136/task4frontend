import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // ← вот здесь создаём navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/login", { email, password });
      onLogin(res.data.token, res.data.user);  // сохраняем токен
      navigate("/users");                      // ← здесь перенаправляем
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка входа");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="color text-xl font-thin">Start your journey</h2>
      <h2 className="text-xl font-bold mb-10">Sign In to The App</h2>
      <input
        className="input block mb-3 p-2 border rounded "
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        className="block w-full mb-3 p-2 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-500 mb-3">{error}</div>}
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">Sign In</button>
    </form>
  );
}
