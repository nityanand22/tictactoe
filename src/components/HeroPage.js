const HeroPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="py-20 px-36">
          <h1 className="font-extrabold text-5xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm mt-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out individually and cater to your sense of style.
          </p>
          <button className="bg-black text-white text-xs py-2 px-9 border rounded-2xl my-5">
            Shop Now
          </button>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-3xl">200+</h1>
              <p>International Brands</p>
            </div>
            <div>
              <h1 className="font-semibold text-3xl">2000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h1 className="font-semibold text-3xl">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-5">
        <ul className="text-2xl flex flex-wrap justify-around list-none">
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
