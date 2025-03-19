import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { SearchContext } from "../App";

const IncrementDecrement = () => {
  const { val, setVal } = useOutletContext(SearchContext);

  return (
    <div className="flex items-center mt-4">
      <button
        onClick={() => {
          setVal(val - 1);
        }}
        disabled={val <= 1}
        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l-lg focus:outline-none font-bold"
      >
        ➖
      </button>
      <span className="px-4 py-[3px] border-t border-b border-gray-300 font-semibold ">
        {val}
      </span>
      <button
        onClick={() => setVal(val + 1)}
        className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r-lg font-bold focus:outline-none "
        disabled={val >= 10}
      >
        ➕
      </button>
    </div>
  );
};

export default IncrementDecrement;
