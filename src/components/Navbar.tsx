import React from "react";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
      <div className="container">
        <a className="navbar-brand text-primary fw-semibold" href="#">Logo</a>
        <div className="d-flex justify-content-center flex-grow-1">
          <SearchBox />
        </div>
        <button className="btn btn-link text-secondary">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;