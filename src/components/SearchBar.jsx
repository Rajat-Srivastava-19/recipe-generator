import React from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter ingredients (e.g. tomato, cheese)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 ps-10 text-sm  text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}
