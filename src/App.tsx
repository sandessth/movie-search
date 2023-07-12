import HomePage from "./Pages/home-page";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  );
}

export default App;
