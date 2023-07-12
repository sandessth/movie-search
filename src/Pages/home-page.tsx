import TopNav from "../components/Header/header";
import SearchBar from "../components/search/searchBar";
import SimpleBottomNavigation from "../components/Footer/footer";
import MovieCard from "../components/MovieCard/MovieCard";
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
      <div className="flex flex row gap-5 m-20 mb-50">
        <MovieCard /> <MovieCard /> <MovieCard /> <MovieCard />
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default HomePage;
