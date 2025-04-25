import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "./utils/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </SearchProvider>
  );
}

export default App;
