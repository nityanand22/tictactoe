import arrivalList from "../utils/arrivalProducts";
import ProductCollection from "./ProductCollection";

const NewArrivals = () => {
  return <ProductCollection title="New Arrivals" product={arrivalList} />;
};
export default NewArrivals;
