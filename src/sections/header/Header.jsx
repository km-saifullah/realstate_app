import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div>
            <div className="header_info">
              <p className="header_text">✨Discover Your Dream Property with Estatein</p>
              <div>
                <a className="header_link" href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div className="header_icon">
            <MdOutlineCancel className="header_icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
