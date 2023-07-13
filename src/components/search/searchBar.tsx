import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchResult from "./searchResult";
import { DataContext, DataContextProvider } from "../../context/DataContext";
// import { DataContext } from "../../context/DataContext";
import SearchIcon from "@mui/icons-material/Search";

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
        <div className="flex items-center w-full ml-16 m-2 border-2 border-blue-200 rounded-md">
          <div className="m-2">
            <SearchIcon />
          </div>
          <input
            value={key}
            onChange={(event) => setKey(event.target.value)}
            type="text"
            name="search"
            placeholder="search.."
            className="w-full ml-1 outline-none bg-slate-100/0 border-none text-slate-800 rounded-sm"
          />
          <button
            onClick={HandleSearch}
            className="bg-blue-200 hover:bg-slate-300 drop-shadow-md hover:drop-shadow-lg rounded-md my-1 mx-1 px-2 py-1"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
