export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded hover:opacity-60 px-4 py-2 focus:outline-none text-gray-700"
    >
      {label}
    </button>
  );
}
