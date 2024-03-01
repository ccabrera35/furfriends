"use client";

import { useSearchContext } from "@/lib/hooks";

export default function SearchForm() {
  const { searchQuery, handleSearchQueryChange } = useSearchContext();
  return (
    <form className="w-full h-full bg-white/20">
      <input
        type="search"
        placeholder="Search pets"
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focus:ng-white/50 hover:bg-white/30 placeholder:text-white/50"
      />
    </form>
  );
}
