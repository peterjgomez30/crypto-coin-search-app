import React from "react";
import { FaCoins } from "react-icons/fa/index.esm";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <h1>
          <FaCoins className="icon" />
          Coin <span className="navy">Search </span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
