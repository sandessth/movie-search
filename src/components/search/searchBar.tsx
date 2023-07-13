import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchResult from "./searchResult";
import { DataContext, DataContextProvider } from "../../context/DataContext";
// import { DataContext } from "../../context/DataContext";

function SearchBar() {
  const [key, setKey] = useState("");
  console.log(key);

  // const { search, setSearch } = useContext(SearchContext);
  const { data, fetchSearch } = useContext(DataContext);
  console.log(data);

  function HandleSearch() {
    fetchSearch(key);
    console.log(key);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center w-1/2 m-5 border-2 border-slate-200 rounded-md">
          <input
            value={key}
            onChange={(event) => setKey(event.target.value)}
            type="text"
            name="search"
            placeholder="search.."
            className="w-full ml-1 outline-none bg-slate-100/0 border-none text-slate-400 rounded-sm"
          />
          <button
            onClick={HandleSearch}
            className="bg-slate-200 hover:bg-slate-300 drop-shadow-md hover:drop-shadow-lg rounded-md my-1 mx-1 px-2 py-1"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
