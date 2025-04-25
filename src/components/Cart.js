import React, { useContext } from "react";
import { SearchContext } from "../utils/SearchContext";

const Cart = () => {
  const { cartData, handleRemoveFromCart, val } = useContext(SearchContext);

  return (
    <div className="container mx-auto p-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartData.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty. Start adding some products!
        </p>
      ) : (
        <ul className="space-y-4">
          {cartData.map((product, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between"
            >
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{product.title}</h2>
                  <p className="text-gray-700">${product.price}</p>
                  <p className="text-gray-700">Quantity: {val}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
