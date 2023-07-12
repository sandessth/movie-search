function SearchBar() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center w-7/12 m-5 border-2 border-slate-200 py-2 px-3 rounded-md">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="w-full ml-2 outline-none border-none text-slate-700"
          />
          <button className="bg-slate-200 hover:bg-slate-300 drop-shadow-md hover:drop-shadow-lg rounded-md px-2 py-1">
            search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
