import { useState } from "react";
import api from "../api/api";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(""); setError("");
    try {
      const res = await api.post("/forgot-password", { email });
      setMsg(res.data.message || "Если такой email есть — письмо отправлено.");
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка запроса");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="font-bold text-lg mb-4">Восстановление пароля</h2>
      <input
        className="block w-full mb-3 p-2 border rounded"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Сбросить пароль</button>
      {msg && <div className="mt-2 text-green-600">{msg}</div>}
      {error && <div className="mt-2 text-red-500">{error}</div>}
    </form>
  );
}
