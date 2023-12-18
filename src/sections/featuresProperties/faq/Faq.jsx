import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CommonBtn from "../../../components/commonBtn/CommonBtn";
import "./faq.css";

const Faq = () => {
  return (
    <div className="faq_section">
      <div className="container">
        <img src="/starIcon.png" alt="" />
        <div className="faq_wrapper">
          <div className="faq_info">
            <div className="faq_headin-text">
              <h2 className="faq_heading"> Frequently Asked Questions</h2>
              <p className="faq_text">
                Find answers to common questions about Estatein's services,
                property listings, and the real estate process. We're here to
                provide clarity and assist you every step of the way.
              </p>
            </div>
            <div className="faq_btn">
              <CommonBtn text="View All FAQ’s" />
            </div>
          </div>
          <div className="faq_details">
            <div className="faq_item">
              <h3 className="faq_item_heading">
                How do I search for properties on Estatein?
              </h3>
              <p className="faq_item_text">
                Learn how to use our user-friendly search tools to find
                properties that match your criteria.
              </p>
              <CommonBtn text="Read More" />
            </div>
            <div className="faq_item">
              <h3 className="faq_item_heading">
                What documents do I need to sell my property through Estatein?
              </h3>
              <p className="faq_item_text">
                Find out about the necessary documentation for listing your
                property with us.
              </p>
              <CommonBtn text="Read More" />
            </div>
            <div className="faq_item">
              <h3 className="faq_item_heading">
                How can I contact an Estatein agent?
              </h3>
              <p className="faq_item_text">
                Discover the different ways you can get in touch with our
                experienced agents.
              </p>
              <CommonBtn text="Read More" />
            </div>
          </div>
          <div className="line_count">
            <hr className="line_border" />
            <div className="slide_wrapper">
              <div className="slide_count">
                <p className="slide_count-text">
                  <span className="count_text">01</span> of 60
                </p>
              </div>
              <div className="slide_icon">
                <div className="icon_wrap">
                  <FaArrowLeft />
                </div>
                <div className="icon_wrap">
                  <FaArrowRight className="right_arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
