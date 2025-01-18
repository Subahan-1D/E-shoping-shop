import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-yellow-400 transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="hover:text-yellow-400 transition-all duration-300"
        >
          Product-Menu
        </Link>
      </li>
      <li>
        <Link
          to="/order/Men"
          className="hover:text-yellow-400 transition-all duration-300"
        >
          Order-Product
        </Link>
      </li>

      <li>
        <Link
          to="/dashboard/cart"
          className="relative flex items-center space-x-2"
        >
          <FaShoppingCart className="text-xl text-white"></FaShoppingCart>
          <div className="badge badge-secondary bg-yellow-500 text-black px-2 rounded-full">
            {cart.length}
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar  bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-opacity-95 backdrop-blur-md shadow-lg py-4 px-6 lg:px-12 fixed top-0 z-50 max-w-screen-xl ">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-all duration-300"
          >
            T.Shoping House
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost text-white"
              aria-label="Toggle Navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg mt-3 w-52 p-3 shadow-lg space-y-2"
            >
              {navLinks}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-lg space-x-6">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex items-center space-x-2 btn btn-ghost"
              >
                <img
                  referrerPolicy="no-referrer"
                  alt="User"
                  src={user?.photoURL}
                  className="w-8 h-8 rounded-full border-2 border-yellow-500"
                />

                <span className="text-white font-medium hidden md:block">
                  {user.displayName}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-gray-800 text-white rounded-lg mt-3 w-48 p-3 shadow-lg space-y-2"
              >
                {user && isAdmin && (
                  <li>
                    <Link
                      to="/dashboard/admin"
                      className="hover:text-yellow-400 transition-all duration-300"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                {user && !isAdmin && (
                  <li>
                    <Link
                      to="/dashboard/user-home"
                      className="hover:text-yellow-400 transition-all duration-300"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:text-yellow-400 transition-all duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-5 py-2 rounded-full hover:from-orange-400 hover:to-yellow-400 transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
