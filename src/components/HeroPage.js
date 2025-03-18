import fashion from "../images/fashion.webp";

const HeroPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-10 px-6 md:py-20 md:px-36">
          <h1 className="font-extrabold text-3xl md:text-5xl">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-sm md:text-base mt-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white text-xs md:text-sm py-2 px-6 md:px-9 border rounded-2xl my-5">
            Shop Now
          </button>
          <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-10">
            <div className="mb-4 md:mb-0">
              <h1 className="font-semibold text-2xl md:text-3xl">200+</h1>
              <p className="text-sm md:text-base">International Brands</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h1 className="font-semibold text-2xl md:text-3xl">2000+</h1>
              <p className="text-sm md:text-base">High-Quality Products</p>
            </div>
            <div>
              <h1 className="font-semibold text-2xl md:text-3xl">30,000+</h1>
              <p className="text-sm md:text-base">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-8">
          <img
            src={fashion}
            alt="Fashion logo"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="bg-black text-white py-5">
        <ul className="text-lg md:text-2xl flex flex-wrap justify-around list-none">
          <li>VERSACE</li>
          <li>ZARA</li>
          <li>GUCCI</li>
          <li>PRADA</li>
          <li>Calvin Klein</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroPage;
