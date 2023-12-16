import React from "react";
import Image from "../../components/img/Image";
import homeIcon from "/home_icon.png";
import valueIcon from "/value_icon.png";
import managementIcon from "/management_icon.png";
import investmentIcon from "/investment_icon.png";
import "./service.css";

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service_wrapper">
          <div className="service_item">
            <Image imgSrc={homeIcon} altText="Home Icon" />
            <p>Find Your Dream Home</p>
          </div>
          <div className="service_item">
            <Image imgSrc={valueIcon} altText="Home Icon" />
            <p>Unlock Property Value</p>
          </div>
          <div className="service_item">
            <Image imgSrc={managementIcon} altText="Home Icon" />
            <p>Effortless Property Management</p>
          </div>
          <div className="service_item">
            <Image imgSrc={investmentIcon} altText="Home Icon" />
            <p>Smart Investments, Informed Decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
