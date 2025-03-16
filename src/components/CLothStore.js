import React, { useState } from "react";
import ClothCard from "./ClothCard";
import productList from "../utils/productList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const ClothStore = () => {
  const [productItems, setProductItems] = useState(productList.slice(0, 10));
  const [viewAll, setViewAll] = useState(true);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks Like You are offline</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center mb-6">All Products</h1>
      <div className=" flex flex-wrap justify-around gap-6">
        {productItems.map((product) => (
          <Link to={"/product/" + product.id} key={product.id}>
            <ClothCard productInfo={product} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="text-xs py-2 px-10 border rounded-2xl"
          onClick={
            viewAll
              ? () => {
                  setProductItems(productList);
                  setViewAll(false);
                }
              : () => {
                  setProductItems(productList.slice(0, 10));
                  setViewAll(true);
                }
          }
        >
          {viewAll ? "View All" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default ClothStore;
