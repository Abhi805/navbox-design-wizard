import React from "react";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <h1 className="text-xl font-semibold text-primary">Logo</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <SearchBox />
        </div>
        <div className="flex-1 flex justify-end">
          <button className="text-secondary hover:text-primary transition-colors">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;