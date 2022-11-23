import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

  return (
    <label className="flex-1 relative h-10 flex flex-shrink-0 bg-translucent rounded-md mx-auto mt-10 max-w-[20rem] bg-white/[.04] backdrop-blur-2xl backdrop-brightness-[2.3]">
      <div className="flex items-center justify-center w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        className="flex-1 p-0 text-sm placeholder-white bg-transparent md:text-lg !outline-none placeholder-opacity-30"
        placeholder="Search projects by name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        class={`flex items-center justify-center w-10 text-gray-400 focus:outline-none dark:hover:text-white ${search ? "opacity-1" : "opacity-0"}`}
        onClick={() => setSearch("")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </label>
  );
}
