import React from "react";
import Image from "../../components/img/Image";
import bannerImg from "/banner_img.png";
import "./banner.css";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner_wrapper">
          <div className="banner_info">
            <div className="banner_head-para">
              <h1 className="banner_heading">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="banner_text">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>
            <div className="banner_links">
              <CommonBtn className="banner_btn" text="Learn More" />
              <CommonBtn className="banner_btn" text="Browser Property" />
            </div>
            <div className="banner_card">
              <div className="banner_item">
                <h3>200+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="banner_item">
                <h3>10k+</h3>
                <p>Properties For Clients</p>
              </div>
              <div className="banner_item">
                <h3>16+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="banner_img">
            <Image
              className="banner_thumbnail"
              imgSrc={bannerImg}
              altText="Banner Image"
            />
          </div>
          <div className="banner_shape">
            <img src="/banner_shape.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
