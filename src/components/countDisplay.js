export default function CountDisplay({ hits }) {
  return (
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-orange-600 mb-5">
      Hits to API: {hits}
    </h1>
  );
}
