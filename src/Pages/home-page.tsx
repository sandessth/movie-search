import TopNav from "../components/Header/header";
import SearchBar from "../components/search/searchBar";
import SimpleBottomNavigation from "../components/Footer/footer";
import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function HomePage() {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <>
      <TopNav />
      <SearchBar />

      {data.map((movies, index) => (
        <div
          className="bg-slate-300 flex p-2 gap-1 justify-center items-center"
          key={index}
        >
          <button>{movies.title}</button>
          <div className="text-slate-700">{movies.year}</div>
        </div>
      ))}
      <SimpleBottomNavigation />
    </>
  );
}

export default HomePage;
