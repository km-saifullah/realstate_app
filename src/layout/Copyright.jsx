import React from "react";
import { CgFacebook } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./copyright.css";

const Copyright = () => {
  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright_wrapper">
          <div className="copyright_info">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="copyright_icons">
            <div>
              <CgFacebook className="social_link" />
            </div>
            <div>
              <IoLogoLinkedin className="social_link" />
            </div>
            <div>
              <FaTwitter className="social_link" />
            </div>
            <div>
              <FaYoutube className="social_link" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
