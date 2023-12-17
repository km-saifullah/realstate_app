import React from "react";
import CommonBtn from "../../../components/commonBtn/CommonBtn";
import { FaStar } from "react-icons/fa6";
import Image from "../../../components/img/Image";
import profile1 from "/profile1.png";
import profile2 from "/profile2.png";
import profile3 from "/profile3.png";
import "./clientsSaying.css";

const ClientsSaying = () => {
  return (
    <div className="clients_section">
      <div className="clients_wrapper">
        <div className="clients_deatils">
          <div className="clients_info">
            <h3 className="clients_title">What Our Clients Say</h3>
            <p className="clients_msg">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose Estatein for their real
              estate needs.
            </p>
          </div>
          <div className="clients_btn">
            <CommonBtn text="View All Testimonials" />
          </div>
        </div>
        <div className="clients_review">
          <div className="review_item">
            <div className="review_icon">
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
            </div>
            <div className="review_details">
              <h3 className="review_heading">Exceptional Service!</h3>
              <p className="review_message">
                Our experience with Estatein was outstanding. Their team's
                dedication and professionalism made finding our dream home a
                breeze. Highly recommended!
              </p>
            </div>
            <div className="review_info">
              <div>
                <Image imgSrc={profile1} altText="Not Found" />
              </div>
              <div>
                <h5 className="reviewer_name">Wade Warren</h5>
                <p className="reviewer_address">USA, California</p>
              </div>
            </div>
          </div>
          <div className="review_item">
            <div className="review_icon">
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
            </div>
            <div className="review_details">
              <h3 className="review_heading">Efficient and Reliable</h3>
              <p className="review_message">
                Estatein provided us with top-notch service. They helped us sell
                our property quickly and at a great price. We couldn't be
                happier with the results.
              </p>
            </div>
            <div className="review_info">
              <div>
                <Image imgSrc={profile2} altText="Not Found" />
              </div>
              <div>
                <h5 className="reviewer_name">Emelie Thomson</h5>
                <p className="reviewer_address">USA, Florida</p>
              </div>
            </div>
          </div>
          <div className="review_item">
            <div className="review_icon">
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
              <div className="star_div">
                <FaStar />
              </div>
            </div>
            <div className="review_details">
              <h3 className="review_heading">Trusted Advisors</h3>
              <p className="review_message">
                The Estatein team guided us through the entire buying process.
                Their knowledge and commitment to our needs were impressive.
                Thank you for your support!
              </p>
            </div>
            <div className="review_info">
              <div>
                <Image imgSrc={profile3} altText="Not Found" />
              </div>
              <div>
                <h5 className="reviewer_name">John Mans</h5>
                <p className="reviewer_address">USA, Nevada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSaying;
