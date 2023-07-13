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
      <SearchBar />
      <SimpleBottomNavigation />
      {data.map((movies, index) => (
        <div className="bg-slate-300 flex justify-center" key={index}>
          {movies.title}({movies.year})
        </div>
      ))}
    </>
  );
}

export default HomePage;
