import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo"></div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Property</NavLink>
              </li>
              <li>
                <NavLink to="/propertydetails">Property Details</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_btn"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
