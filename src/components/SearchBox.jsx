import { useState, useEffect } from "react";

export default function SearchBox({ placeholder = "Search products...", onSearch }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (onSearch) onSearch(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className="w-full max-w-md mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full p-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition duration-300 text-gray-900"
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
        >
          ✖
        </button>
      )}
    </div>
  );
}
