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
  const [cartData, setCartData] = useState([]);
  const [val, setVal] = useState(1);

  const handleAddToCart = (productId) => {
    const product = productList.find((p) => p.id.toString() === productId);
    setCartData((pre) => [...pre, product]);
  };

  function filterProducts() {
    const filteredProducts = productItems.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredProducts);
  }

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        filterProducts,
        cartData,
        setCartData,
        val,
      }}
    >
      <div className="app">
        <Header />
        <Outlet
          context={{
            filteredList,
            setProductItems,
            cartData,
            handleAddToCart,
            setVal,
            val,
          }}
        />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
