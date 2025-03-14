const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="mb-4 md:mb-0">
        <h1 className="font-extrabold text-3xl">SHOP.CO</h1>
      </div>
      <nav className="mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row list-none justify-around gap-4 md:gap-8">
          <li className="hover:text-blue-500 cursor-pointer">Shop</li>
          <li className="hover:text-blue-500 cursor-pointer">On Sale</li>
          <li className="hover:text-blue-500 cursor-pointer">New Arrivals</li>
          <li className="hover:text-blue-500 cursor-pointer">Brand</li>
        </ul>
      </nav>
      <div className="flex items-center mb-4 md:mb-0">
        <span className="mr-2">🔍</span>
        <input
          className="border border-gray-300 rounded-lg p-2 mr-2"
          placeholder="Search for products..."
        />
        <button className="bg-blue-500 text-white rounded-lg p-2">
          Search
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">🛒</span>
        <span className="cursor-pointer">👤</span>
      </div>
    </header>
  );
};

export default Header;
