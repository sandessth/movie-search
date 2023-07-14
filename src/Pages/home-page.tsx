import TopNav from "../components/Header/header";
import SearchBar from "../components/search/searchBar";
import SimpleBottomNavigation from "../components/Footer/footer";
import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function HomePage() {
  const { data } = useContext(DataContext);
  console.log(data);

  // const { poster, fetchPoster } = useContext(DataContext);

  // function HandlePoster(id) {
  //   fetchPoster(id);
  //   // console.log(key);
  // }
  return (
    <>
      <TopNav />
      <SimpleBottomNavigation />
      {/* <SearchBar /> */}
      <div className="bg-slate-300/10 text-blue-400 grid grid-cols-5 items-center p-2 gap-1 m-px">
        <div className="col-span-3 flex justify-center">Movie</div>
        <div className="col-span-1 flex justify-center">Release Year</div>
        <div className="col-span-1 flex justify-center w-1/2">More</div>
      </div>
      {data.map((movies, index) => (
        <div
          className="bg-slate-300/10 text-slate-100 grid grid-cols-5 items-center p-2 gap-1 m-px hover:text-blue-300"
          key={index}
        >
          <div className="col-span-3 flex justify-center">{movies.title}</div>
          <div className="col-span-1 flex justify-center">{movies.year}</div>
          <button className="col-span-1 w-1/2 bg-blue-200 hover:bg-slate-300 text-slate-900 drop-shadow-md hover:drop-shadow-lg rounded-md my-1 mx-1 px-2 py-1">
            <img
              className="col-span-3 flex justify-center h-20 w-40"
              src="https://picsum.photos/200/300"
            />
          </button>
        </div>
      ))}
    </>
  );
}

export default HomePage;
