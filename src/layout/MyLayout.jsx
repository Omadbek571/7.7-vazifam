import React from "react";
import { Link } from "react-router-dom";
import logo from "../imges/logo.svg";

function MyLayout({children}) {
  return (
   <div className="">
     <nav className="flex items-center justify-between p-4 bg-white shadow-md border-2 border-black">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Brave Logo" className="h-8" />
        <span className="font-bold text-4xl text-black">Brave</span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-bold">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/card" className="text-gray-700 hover:text-blue-600 font-bold">
            CARD
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-bold">
            PRODUCTS
          </Link>
        </li>
      </ul>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
        Start Free Trial
      </button>
    </nav>
    {children }
   </div>
  );
}

export default MyLayout;
