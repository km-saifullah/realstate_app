import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import CommonBtn from "../components/commonBtn/CommonBtn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink className="nav_link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/properties">
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink className="nav_link" to="/propertydetails">
                  Property Details
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_btn">
            <CommonBtn text="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
