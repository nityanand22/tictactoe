import React, { createContext, useState } from "react";
import productList from "../utils/productList";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [productItems, setProductItems] = useState(productList);
  const [filteredList, setFilteredList] = useState(productList);
  const [cartData, setCartData] = useState([]);
  const [val, setVal] = useState(1);

  const filterProducts = () => {
    const filteredProducts = productItems.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredProducts);
  };

  const handleAddToCart = (productId) => {
    const product = productList.find((p) => p.id.toString() === productId);
    if (product) {
      setCartData((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartData.filter((product) => product.id !== productId);
    setCartData(updatedCart);
  };

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        filterProducts,
        filteredList,
        setProductItems,
        cartData,
        setCartData,
        handleAddToCart,
        handleRemoveFromCart,
        val,
        setVal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
