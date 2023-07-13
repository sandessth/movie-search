import { ReactNode, createContext, useState } from "react";

export const SearchContext = createContext("Search...");

function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("Search movies...");
  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
