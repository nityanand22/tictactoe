import React, { useContext } from "react";
import ClothCard from "./ClothCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SearchContext } from "../utils/SearchContext";

const ClothStore = () => {
  const { filteredList } = useContext(SearchContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks Like You are offline</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center mb-6">All Products</h1>
      <div className="flex flex-wrap justify-around gap-6">
        {filteredList.map((product) => (
          <Link to={"/product/" + product.id} key={product.id}>
            <ClothCard productInfo={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClothStore;
