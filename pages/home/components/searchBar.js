import { useEffect, useState } from "react";
import icons from "../../../utils/icons";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

  return (
    <label className="flex-1 relative h-10 flex flex-shrink-0 bg-translucent rounded-md mx-auto mt-10 max-w-[20rem] bg-white/[.04] backdrop-blur-2xl backdrop-brightness-[2.3]">
      <div className="flex items-center justify-center w-10">
        {icons.search}
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
        className={`flex items-center justify-center w-10 text-gray-400 focus:outline-none dark:hover:text-white ${search ? "opacity-1" : "opacity-0"}`}
        onClick={() => setSearch("")}
      >
        {icons.close}
      </button>
    </label>
  );
}
