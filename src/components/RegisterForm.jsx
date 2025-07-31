import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      await api.post("/register", { name, email, password });
      setSuccess("Регистрация прошла успешно!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка регистрации");
    }
  };

  return (
    <form className="max-w-sm mx-auto p-4 bg-white rounded-xl shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Регистрация</h2>
      <input className="block w-full mb-3 p-2 border rounded"
        type="text" placeholder="Имя" value={name}
        onChange={e => setName(e.target.value)} required
      />
      <input className="block w-full mb-3 p-2 border rounded"
        type="email" placeholder="E-mail" value={email}
        onChange={e => setEmail(e.target.value)} required
      />
      <input className="block w-full mb-3 p-2 border rounded"
        type="password" placeholder="Пароль" value={password}
        onChange={e => setPassword(e.target.value)} required
      />
      {error && <div className="text-red-500 mb-3">{error}</div>}
      {success && <div className="text-green-600 mb-3">{success}</div>}
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
        Зарегистрироваться
      </button>
    </form>
  );
}
