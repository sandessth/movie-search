import { ReactNode, createContext, useState } from "react";

export const SearchContext = createContext("Search...");

function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("Search movies and series...");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
