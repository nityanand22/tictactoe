const ClothCard = ({ productInfo }) => {
  const { title, price, image, rating } = productInfo;
  const { rate, count } = rating;
  return (
    <div className="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 w-60">
      <div className="m-4 p-2 w-[200px] bg-gray-100 max-h-fit flex flex-col justify-evenly rounded-lg ">
        <img alt="Cloth" src={image} className="f-full w-full rounded-lg" />
      </div>
      <p className="mt-4 text-lg font-bold">{title}</p>
      <p className="flex justify-between w-full mt-2 text-sm text-gray-600">
        Price : {price}💲
      </p>
      <div>
        <p>⭐ : {rate}</p>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default ClothCard;
