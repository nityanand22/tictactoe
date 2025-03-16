import productList from "../utils/productList";
import { useEffect, useState } from "react";

function useProductData(id) {
  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
    const data = productList.find((product) => product.id === parseInt(id));
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  });
  return product;
}

export default useProductData;
