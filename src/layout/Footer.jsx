import React from "react";
import Image from "../components/img/Image";
import logo from "/logo.png";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsSendCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <Image imgSrc={logo} altText="logo" />
            <form className="footer_form" action="">
              <div className="footer_conatct">
                <div className="form_input">
                  <IoMailUnreadOutline className="footer_icon" />
                  <input type="text" placeholder="Enter Your Email" />
                </div>
                <div>
                  <BsSendCheck className="footer_icon send_btn" />
                </div>
              </div>
            </form>
          </div>
          <div className="footer_links">
            <div className="home_links">
              <h4>Home</h4>
              <ul>
                <Link className="footer_link">Hero Section</Link>
                <Link className="footer_link">Features</Link>
                <Link className="footer_link">Properties</Link>
                <Link className="footer_link">Testimonials</Link>
                <Link className="footer_link">FAQ's</Link>
              </ul>
            </div>
            <div className="home_links">
              <h4>About Us</h4>
              <ul>
                <Link className="footer_link">Our Story</Link>
                <Link className="footer_link">Our Works</Link>
                <Link className="footer_link">How It Works</Link>
                <Link className="footer_link">Our Team</Link>
                <Link className="footer_link">Our Clients</Link>
              </ul>
            </div>
            <div className="home_links">
              <h4>Properties</h4>
              <ul>
                <Link className="footer_link">Portfolio</Link>
                <Link className="footer_link">Categories</Link>
              </ul>
            </div>
            <div className="home_links">
              <h4>Services</h4>
              <ul>
                <Link className="footer_link">Valuation Mastery</Link>
                <Link className="footer_link">Strategic Marketing</Link>
                <Link className="footer_link">Negotiation Wizardry</Link>
                <Link className="footer_link">Closing Success</Link>
                <Link className="footer_link">Property Management</Link>
              </ul>
            </div>
            <div className="home_links">
              <h4>Services</h4>
              <ul>
                <Link className="footer_link">Contact Form</Link>
                <Link className="footer_link">Our Offices</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
