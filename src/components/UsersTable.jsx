// // export default function UsersTable({ users = [], selectedIds, setSelectedIds }) {
// //   const allChecked = users.length > 0 && selectedIds.length === users.length;

// //   const handleSelectAll = () => {
// //     setSelectedIds(allChecked ? [] : users.map(u => u._id));
// //   };

// //   const handleCheckbox = (id) => {
// //     setSelectedIds(selectedIds.includes(id)
// //       ? selectedIds.filter(_id => _id !== id)
// //       : [...selectedIds, id]
// //     );
// //   };

// //   // Классы для строки
// //   const rowClass = (selected) =>
// //     `grid grid-cols-5 items-center border-b last:border-b-0 ${
// //       selected ? "bg-blue-50" : "bg-white"
// //     }`;

// //   return (
// //     <div className="w-full rounded-xl overflow-hidden border">
// //       {/* Заголовок */}
// //       <div className="grid grid-cols-5 bg-gray-100 font-bold text-sm border-b">
// //         <div className="p-2 flex justify-center items-center">
// //           <input
// //             type="checkbox"
// //             checked={allChecked}
// //             onChange={handleSelectAll}
// //             aria-label="Выделить всех"
// //           />
// //         </div>
// //         <div className="p-2">Имя</div>
// //         <div className="p-2">E-mail</div>
// //         <div className="p-2">Статус</div>
// //         <div className="p-2">Last login</div>
// //       </div>

// //       {/* Данные */}
// //       {users.map((u) => (
// //         <div
// //           key={u._id}
// //           className={rowClass(selectedIds.includes(u._id))}
// //         >
// //           <div className="p-2 flex justify-center items-center border-r">
// //             <input
// //               type="checkbox"
// //               checked={selectedIds.includes(u._id)}
// //               onChange={() => handleCheckbox(u._id)}
// //               aria-label="Выделить пользователя"
// //             />
// //           </div>
// //           <div className="p-2 border-r">{u.name}</div>
// //           <div className="p-2 border-r">{u.email}</div>
// //           <div className="p-2 border-r">{u.status}</div>
// //           <div className="p-2">
// //             {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
// //           </div>
// //         </div>
// //       ))}
// //       {users.length === 0 && (
// //         <div className="p-4 text-gray-500 text-center">Нет пользователей</div>
// //       )}
// //     </div>
// //   );
// // }



// // export default function UsersTable({ users = [], selectedIds, setSelectedIds }) {
// //   const allChecked = users.length > 0 && selectedIds.length === users.length;

// //   const handleSelectAll = () => {
// //     setSelectedIds(allChecked ? [] : users.map(u => u._id));
// //   };

// //   const handleCheckbox = (id) => {
// //     setSelectedIds(selectedIds.includes(id)
// //       ? selectedIds.filter(_id => _id !== id)
// //       : [...selectedIds, id]
// //     );
// //   };

// //   // Для выравнивания колонок ширина одинаковая для всех
// //   const cellClass = "flex-1 min-w-[120px] p-2 last:border-r-0";
// //   const headerCellClass = "flex-1 min-w-[120px] p-2 font-bold last:border-r-0";

// //   return (
// //     <div className="w-full overflow-hidden border">
// //       {/* Заголовок */}
// //       <div className="flex flex-row items-center border-b">
// //         <div className="w-[44px] flex justify-center items-center p-2">
// //           <input
// //             type="checkbox"
// //             checked={allChecked}
// //             onChange={handleSelectAll}
// //             aria-label="Выделить всех"
// //           />
// //         </div>
// //         <div className={headerCellClass}>Имя</div>
// //         <div className={headerCellClass}>E-mail</div>
// //         <div className={headerCellClass}>Статус</div>
// //         <div className={headerCellClass}>Last login</div>
// //       </div>

// //       {/* Данные */}
// //       <div className="flex flex-col">
// //         {users.map((u) => (
// //           <div
// //             key={u._id}
// //             className={`flex flex-row items-center border-b last:border-b-0 ${selectedIds.includes(u._id) ? "bg-blue-50" : "bg-white"}`}
// //           >
// //             <div className="w-[44px] flex justify-center items-center p-2">
// //               <input
// //                 type="checkbox"
// //                 checked={selectedIds.includes(u._id)}
// //                 onChange={() => handleCheckbox(u._id)}
// //                 aria-label="Выделить пользователя"
// //               />
// //             </div>
// //             <div className={cellClass}>{u.name}</div>
// //             <div className={cellClass}>{u.email}</div>
// //             <div className={cellClass}>{u.status}</div>
// //             <div className={cellClass}>
// //               {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
// //             </div>
// //           </div>
// //         ))}
// //         {users.length === 0 && (
// //           <div className="p-4 text-gray-500 text-center">Нет пользователей</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// export default function UsersTable({ users = [], selectedIds, setSelectedIds }) {
//    const allChecked = users.length > 0 && selectedIds.length === users.length;

//   const handleSelectAll = () => {
//     setSelectedIds(allChecked ? [] : users.map(u => u._id));
//   };

//   const handleCheckbox = (id) => {
//     setSelectedIds(selectedIds.includes(id)
//       ? selectedIds.filter(_id => _id !== id)
//       : [...selectedIds, id]
//     );
//   };

//   // Для выравнивания колонок ширина одинаковая для всех
//   const cellClass = "flex-1 min-w-[120px] p-2 last:border-r-0";
//   const headerCellClass = "flex-1 min-w-[120px] p-2 font-bold last:border-r-0";

//   return (
//     <div className="w-full">
//       <div className="overflow-x-auto">
//         <div className="min-w-[700px]"> {/* здесь ширина может быть любой, больше ширины экрана */}
//           {/* Заголовок */}
//           <div className="flex flex-row items-center border-b">
//             <div className="w-[44px] flex justify-center items-center p-2">
//               <input
//                 type="checkbox"
//                 checked={allChecked}
//                 onChange={handleSelectAll}
//                 aria-label="Выделить всех"
//               />
//             </div>
//             <div className={headerCellClass}>Имя</div>
//             <div className={headerCellClass}>E-mail</div>
//             <div className={headerCellClass}>Статус</div>
//             <div className={headerCellClass}>Last login</div>
//           </div>

//           {/* Данные */}
//           <div className="flex flex-col">
//             {users.map((u) => (
//               <div
//                 key={u._id}
//                 className={`flex flex-row items-center border-b ${selectedIds.includes(u._id) ? "bg-blue-50" : "bg-white"}`}
//               >
//                 <div className="w-[44px] flex justify-center items-center p-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedIds.includes(u._id)}
//                     onChange={() => handleCheckbox(u._id)}
//                     aria-label="Выделить пользователя"
//                   />
//                 </div>
//                 <div className={cellClass}>{u.name}</div>
//                 <div className={cellClass}>{u.email}</div>
//                 <div className={cellClass}>{u.status}</div>
//                 <div className={cellClass}>
//                   {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
//                 </div>
//               </div>
//             ))}
//             {users.length === 0 && (
//               <div className="p-4 text-gray-500 text-center">Нет пользователей</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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
