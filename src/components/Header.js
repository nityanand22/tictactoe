import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../utils/SearchContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();
  const { searchText, setSearchText, filterProducts } =
    useContext(SearchContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        setUser(true);
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/signup");
      }
    });
    //* Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="mb-4 md:mb-0">
        <h1 className="font-extrabold text-3xl">SHOP.CO</h1>
      </div>
      <nav className="mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row list-none justify-around gap-4 md:gap-8">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
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
          <Link to="/signup">
            <li
              className="hover:text-blue-500 cursor-pointer"
              onClick={handleSignOut}
            >
              {!user ? "" : "Sign Out"}
            </li>
          </Link>
        </ul>
      </nav>
      <div className="flex items-center mb-4 md:mb-0">
        <span className="mr-2">🔍</span>
        <input
          className="border border-gray-300 rounded-lg p-2 mr-2"
          placeholder="Search for products..."
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-lg p-2"
          onClick={filterProducts}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
