import React from "react";

const Navbar = ({ dark, setdark }) => {
  return (
    <div
      className={`w-full fixed top-0 left-0 h-[70px] flex justify-between items-center px-6 shadow-md transition-all duration-300 z-50 ${dark ? "bg-black text-white" : "bg-aqua text-black"}`}
    >
      <h1 className="text-xl font-bold">crypto m5</h1>
      <nav>
        <ul className="flex space-x-4 list-none">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About us</li>
          <li className="cursor-pointer hover:underline">Contact</li>
          <li className="cursor-pointer hover:underline">Blog</li>
          <button
            className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            onClick={() => setdark(!dark)}
          >
            Darkmode
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
