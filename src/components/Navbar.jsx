export default function Navbar({ user, onLogout }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-100 border-b">
      <div className="font-bold text-xl text-blue-700">The App</div>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">{user.name} ({user.email})</span>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
