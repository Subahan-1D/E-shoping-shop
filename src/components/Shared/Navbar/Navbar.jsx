import React from "react";
import Container from "../../Container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <Link to="/menu">Product-Menu</Link>
      </li>
      <li className="hover:text-yellow-500 transition-all duration-300">
        <Link to="/order">Order-Product</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-lg max-w-screen-xl mx-auto py-2 px-4">
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
            className="menu menu-sm dropdown-content bg-gray-800 rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg text-white text-lg"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-3xl font-semibold text-yellow-500 hover:text-yellow-600 transition-all duration-300"
        >
          T.Shoping House 👑
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 text-white text-lg space-x-4">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
