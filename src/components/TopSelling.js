import productList from "../utils/productList";
import ProductCollection from "./ProductCollection";

const TopSelling = () => (
  <ProductCollection title="Top Selling" product={productList} />
);

export default TopSelling;
