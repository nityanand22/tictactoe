import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import productList from "./utils/productList";

export const SearchContext = createContext();

function App() {
  const [searchText, setSearchText] = useState("");
  const [productItems, setProductItems] = useState(productList);
  const [filteredList, setFilteredList] = useState(productList);

  function filterProducts() {
    const filteredProducts = productItems.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredProducts);
  }

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, filterProducts }}
    >
      <div className="app">
        <Header />
        <Outlet context={{ filteredList, setProductItems }} />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
