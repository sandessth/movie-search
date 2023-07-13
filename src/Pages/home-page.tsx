import TopNav from "../components/Header/header";
import SearchBar from "../components/search/searchBar";
import SimpleBottomNavigation from "../components/Footer/footer";
import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function HomePage() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <>
      <TopNav />
      <SimpleBottomNavigation />
      {data.map((movies, index) => (
        <div className="bg-slate-300 p-5 m-2 gap-1" key={index}>
          <h1 className="text underline font-bold">{movies.title}</h1>
          <h2>Movie Release Date: ({movies.release_date})</h2>
          <hr /> <br />
          <div className="flex flex-row font-sans">
            {movies.overview} <br />
            <img
              className="w-30 h-40 border rounded"
              src={movies.poster_path}
            />
          </div>
        </div>
      ))}
      <SearchBar />
    </>
  );
}

export default HomePage;
