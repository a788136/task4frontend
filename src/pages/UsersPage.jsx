import { useEffect, useState } from "react";
import api from "../api/api";
import UsersTable from "../components/UsersTable";
import Toolbar from "../components/Toolbar";

export default function UsersPage() {
  const [users, setUsers] = useState([]); // по умолчанию []
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  // Получение пользователей
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка загрузки пользователей");
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  // Действия: block/unblock/delete
  const handleAction = async (type) => {
    if (selectedIds.length === 0) return;
    setStatusMsg("");
    try {
      const token = localStorage.getItem("token");
      if (type === "block") {
        await api.post("/users/block", { ids: selectedIds }, { headers: { Authorization: `Bearer ${token}` } });
        setStatusMsg("Пользователи заблокированы");
      } else if (type === "unblock") {
        await api.post("/users/unblock", { ids: selectedIds }, { headers: { Authorization: `Bearer ${token}` } });
        setStatusMsg("Пользователи разблокированы");
      } else if (type === "delete") {
        await api.delete("/users", { data: { ids: selectedIds }, headers: { Authorization: `Bearer ${token}` } });
        setStatusMsg("Пользователи удалены");
      }
      setSelectedIds([]);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка при действии");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="mx-auto mt-10 bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <Toolbar
        onBlock={() => handleAction("block")}
        onUnblock={() => handleAction("unblock")}
        onDelete={() => handleAction("delete")}
        disabled={selectedIds.length === 0}
      />
      {statusMsg && <div className="text-green-600 mb-2">{statusMsg}</div>}
      <UsersTable users={users} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
    </div>
  );
}
