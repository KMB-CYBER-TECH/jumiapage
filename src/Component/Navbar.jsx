import React from "react";
import { FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className=" shadow-md fixed top-0 w-full z-90">
      <div className="flex justify-between items-center px-6 py-1 text-sm text-gray-600 bg-gray-100">
        <button className="text-orange-400 font-bold hover:underline">
          <span className="text-orange-400">★</span> Sell on Jumia
        </button>

        <h1 className="text-gray-800 font-bold text-lg">
          JUMIA<span className="text-orange-400">★</span>
          <span className="text-gray-500 ml-1">PAY</span>
        </h1>
        <span></span>
      </div>

      <nav className="flex items-center justify-between px-6 py-3 bg-white">
        <h1 className="text-2xl font-bold text-gray-900">
          JUMIA<span className="text-orange-400">★</span>
        </h1>

        <div className="flex flex-grow mx-10">
          <input
            type="text"
            placeholder="🔍Search products, brands and categories"
            className="w-full border border-gray-300 p-2 rounded-md outline-none text-sm"
          />
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md text-sm mx-2">
            Search
          </button>
        </div>

        <div className="flex space-x-30 text-gray-600 text-sm">
          <div className="flex items-center cursor-pointer hover:text-gray-900 text-[17px]">
            <FaUser className="mr-1" />
            Account⬇️
          </div>
          <div className="flex items-center cursor-pointer hover:text-gray-900 text-[17px]">
            <FaQuestionCircle className="mr-1" />
            Help⬇️
          </div>
          <div className="flex items-center cursor-pointer hover:text-gray-900 text-[17px]">
            <FaShoppingCart className="mr-1" />
            Cart⬇️
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
