import React, { useState } from "react";
import ClothCard from "./ClothCard";

const ProductCollection = ({ title, product }) => {
  const [productItems, setProductItems] = useState(product.slice(0, 5));
  const [viewAll, setViewAll] = useState(true);

  const handleProductItems = () => {
    setProductItems(product);
    setViewAll(false);
  };

  const handleViewLessProductItems = () => {
    setProductItems(product.slice(0, 5));
    setViewAll(true);
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center mb-6">{title}</h1>
      <div className=" flex flex-wrap justify-around gap-6">
        {productItems.map((product) => (
          <ClothCard key={product.id} productInfo={product} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="text-xs py-2 px-10 border rounded-2xl"
          onClick={viewAll ? handleProductItems : handleViewLessProductItems}
        >
          {viewAll ? "View All" : "Hide"}
        </button>
      </div>
    </div>
  );
};

export default ProductCollection;
