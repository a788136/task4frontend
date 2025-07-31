import { useState } from "react";
import api from "../api/api";
import { useSearchParams } from "react-router-dom";

export default function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(""); setError("");
    try {
      const res = await api.post("/reset-password", { token, password });
      setMsg(res.data.message || "Пароль изменён!");
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка сброса пароля");
    }
  };

  if (!token) return <div className="text-red-500 mt-10 text-center">Нет токена сброса</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="font-bold text-lg mb-4">Сбросить пароль</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        type="password"
        placeholder="Новый пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Установить новый пароль</button>
      {msg && <div className="mt-2 text-green-600">{msg}</div>}
      {error && <div className="mt-2 text-red-500">{error}</div>}
    </form>
  );
}
