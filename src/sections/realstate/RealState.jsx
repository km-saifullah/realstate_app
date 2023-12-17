import React from "react";
import CommonBtn from "../../components/commonBtn/CommonBtn";
import "./realstate.css";

const RealState = () => {
  return (
    <section className="realstate_journey">
      <div className="container">
        <div className="realstate_wrapper">
          <div className="realstate_info">
            <h2>Start Your Real Estate Journey Today</h2>
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="realstate_btn">
            <CommonBtn text="Explore Properties" />
          </div>
          <div className="pattern1">
            <img src="/pattern1.png" alt="" />
          </div>
          <div className="pattern2">
            <img src="/pattern2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealState;
