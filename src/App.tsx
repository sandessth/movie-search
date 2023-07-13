import HomePage from "./Pages/home-page";
import { DataContextProvider } from "./context/DataContext";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <DataContextProvider>
        <HomePage />
      </DataContextProvider>
    </SearchProvider>
  );
}

export default App;
