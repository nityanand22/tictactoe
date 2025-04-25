import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import IncrementDecrement from "./IncrementDecrement";
import useProductData from "../utils/useProductData";
import { SearchContext } from "../utils/SearchContext";

const ProductPage = () => {
  const { Id } = useParams();
  const product = useProductData(Id);
  const { handleAddToCart, val, setVal } = useContext(SearchContext);

  if (!product) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  const { title, price, image, description, category, rating } = product;
  const { rate, count } = rating;

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <h2 className="text-xl text-gray-700 mb-4">${price}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Rating:</strong> {rate} ({count} reviews)
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 active:text-blue-500 active:bg-white border border-blue-500"
            onClick={() => handleAddToCart(Id)}
          >
            Add to Cart
          </button>

          <IncrementDecrement val={val} setVal={setVal} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
