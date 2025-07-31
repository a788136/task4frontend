export default function UsersTable({ users = [], selectedIds, setSelectedIds }) {
  const allChecked = users.length > 0 && selectedIds.length === users.length;

  const handleSelectAll = () => {
    setSelectedIds(allChecked ? [] : users.map(u => u._id));
  };

  const handleCheckbox = (id) => {
    setSelectedIds(selectedIds.includes(id)
      ? selectedIds.filter(_id => _id !== id)
      : [...selectedIds, id]
    );
  };

  // Можно уменьшить min-w, чтобы на мобиле не было горизонтального скролла
  const cellClass = "flex-1 p-2 last:border-r-0 break-all";
  const headerCellClass = "flex-1 p-2 font-bold last:border-r-0";

  return (
    <div className="w-full">
      <div className="w-full">
        {/* Заголовок */}
        <div className="flex flex-row items-center border-b">
          <div className="w-[44px] flex justify-center items-center p-2">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleSelectAll}
              aria-label="Выделить всех"
            />
          </div>
          <div className={headerCellClass}>Имя</div>
          <div className={headerCellClass}>E-mail</div>
          <div className={headerCellClass}>Статус</div>
          <div className={headerCellClass}>Last login</div>
        </div>

        {/* Данные */}
        <div className="flex flex-col">
          {users.map((u) => (
            <div
              key={u._id}
              className={`flex flex-row items-center border-b ${selectedIds.includes(u._id) ? "bg-blue-50" : "bg-white"}`}
            >
              <div className="w-[44px] flex justify-center items-center p-2">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(u._id)}
                  onChange={() => handleCheckbox(u._id)}
                  aria-label="Выделить пользователя"
                />
              </div>
              <div className={cellClass}>{u.name}</div>
              <div className={cellClass}>{u.email}</div>
              <div className={cellClass}>{u.status}</div>
              <div className={cellClass}>
                {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
              </div>
            </div>
          ))}
          {users.length === 0 && (
            <div className="p-4 text-gray-500 text-center">Нет пользователей</div>
          )}
        </div>
      </div>
    </div>
  );
}
