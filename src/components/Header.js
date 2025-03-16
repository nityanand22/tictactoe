import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="mb-4 md:mb-0">
        <h1 className="font-extrabold text-3xl">SHOP.CO</h1>
      </div>
      <nav className="mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row list-none justify-around gap-4 md:gap-8">
          <Link to="/">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-blue-500 cursor-pointer">Cart</li>
          </Link>
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
