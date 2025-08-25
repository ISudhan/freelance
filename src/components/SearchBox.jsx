import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [val, setVal] = useState("");

  return (
    <div className="flex gap-3 w-full max-w-md mx-auto">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Search products..."
        className="flex-1 px-4 py-3 rounded-full border border-gray-300 shadow-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300"
      />
      <button
        onClick={() => onSearch(val)}
        className="px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-300"
      >
        Search
      </button>
    </div>
  );
}
