import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div>
            <p>✨Discover Your Dream Property with Estatein</p>
            <div>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="header_icon">
            <MdOutlineCancel />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
