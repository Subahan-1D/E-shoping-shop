import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li className="hover:text-yellow-400 transition-all duration-300">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-400 transition-all duration-300">
        <Link to="/menu">Product-Menu</Link>
      </li>
      <li className="hover:text-yellow-400 transition-all duration-300">
        <Link to="/order/Men">Order-Product</Link>
      </li>
      <li className="hover:text-yellow-400 transition-all duration-300">
        <Link to="/secret">Secret</Link>
      </li>
      <li className="hover:text-yellow-400 transition-all duration-300">
        <Link to="/dashboard/cart">
          <button className="relative flex items-center space-x-1 btn btn-ghost text-white">
            <FaShoppingCart className="text-xl"></FaShoppingCart>
            <div className="badge badge-secondary bg-yellow-500 text-black px-2 rounded-full">
              {cart.length}
            </div>
          </button>
        </Link>
      </li>
      {user ? (
        <button
          onClick={handleLogOut}
          className="btn btn-outline border-b-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-indigo-500 hover:to-blue-500 transition-all duration-300"
        >
          LogOut
        </button>
      ) : (
        <li className="hover:text-yellow-400 transition-all duration-300">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-gradient-to-b from-black to-gray-800 bg-opacity-90 backdrop-blur-lg shadow-xl max-w-screen-xl mx-auto py-3 px-6 rounded-b-lg border-b border-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 backdrop-blur-sm rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg text-white space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-all duration-300"
        >
          T.Shoping House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 text-white text-lg space-x-6">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-5 py-2 rounded-full shadow-md hover:from-orange-400 hover:to-yellow-400 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
