import React from "react";
import CommonBtn from "../../../components/commonBtn/CommonBtn";
import Image from "../../../components/img/Image";
import propertyItem1 from "/propertyItem1.png";
import propertyItem2 from "/propertyItem2.png";
import propertyItem3 from "/propertyItem3.png";
import { Link } from "react-router-dom";
import { IoBedSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineHolidayVillage } from "react-icons/md";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <section className="multiSection">
      <div className="container">
        <div className="featured_wrapper">
          <div className="featured_info">
            <div className="featured_text">
              <h2>Featured Properties</h2>
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available through Estatein. Click "View Details" for more
                information.
              </p>
            </div>
            <div className="featured_btn">
              <CommonBtn text="View All Properties" />
            </div>
          </div>
          <div className="property_details">
            <div className="property_item">
              <Image imgSrc={propertyItem1} altText="Image Not Found" />
              <h4 className="property_itemtext">Seaside Serenity Villa</h4>
              <p className="property_item-text">
                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
                neighborhood... <Link className="read_more">Read More</Link>
              </p>
              <div className="featured_icons">
                <div className="icons_item">
                  <div>
                    <IoBedSharp className="featured_icon" />
                  </div>
                  <p className="icon_text">4-Bedroom</p>
                </div>
                <div className="icons_item">
                  <FaShower className="featured_icon" />
                  <p className="icon_text">3-Bathroom</p>
                </div>
                <div className="icons_item">
                  <MdOutlineHolidayVillage className="featured_icon" />
                  <p className="icon_text">Villa</p>
                </div>
              </div>
              <div className="property_priceBtn">
                <div>
                  <p className="item_title">Price</p>
                  <h4 className="item_price">$550,000</h4>
                </div>
                <div>
                  <CommonBtn text="View Property Details" />
                </div>
              </div>
            </div>
            <div className="property_item">
              <Image imgSrc={propertyItem2} altText="Image Not Found" />
              <h4 className="property_itemtext">Metropolitan Haven</h4>
              <p className="property_item-text">
                A chic and fully-furnished 2-bedroom apartment with panoramic
                city views... <Link className="read_more">Read More</Link>
              </p>
              <div className="featured_icons">
                <div className="icons_item">
                  <div>
                    <IoBedSharp className="featured_icon" />
                  </div>
                  <p className="icon_text">2-Bedroom</p>
                </div>
                <div className="icons_item">
                  <FaShower className="featured_icon" />
                  <p className="icon_text">2-Bathroom</p>
                </div>
                <div className="icons_item">
                  <MdOutlineHolidayVillage className="featured_icon" />
                  <p className="icon_text">Villa</p>
                </div>
              </div>
              <div className="property_priceBtn">
                <div>
                  <p className="item_title">Price</p>
                  <h4 className="item_price">$550,000</h4>
                </div>
                <div>
                  <CommonBtn text="View Property Details" />
                </div>
              </div>
            </div>
            <div className="property_item">
              <Image imgSrc={propertyItem3} altText="Image Not Found" />
              <h4 className="property_itemtext">Rustic Retreat Cottage</h4>
              <p className="property_item-text">
                An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
                community... <Link className="read_more">Read More</Link>
              </p>
              <div className="featured_icons">
                <div className="icons_item">
                  <div>
                    <IoBedSharp className="featured_icon" />
                  </div>
                  <p className="icon_text">3-Bedroom</p>
                </div>
                <div className="icons_item">
                  <FaShower className="featured_icon" />
                  <p className="icon_text">3-Bathroom</p>
                </div>
                <div className="icons_item">
                  <MdOutlineHolidayVillage className="featured_icon" />
                  <p className="icon_text">Villa</p>
                </div>
              </div>
              <div className="property_priceBtn">
                <div>
                  <p className="item_title">Price</p>
                  <h4 className="item_price">$550,000</h4>
                </div>
                <div>
                  <CommonBtn text="View Property Details" />
                </div>
              </div>
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
    </section>
  );
};

export default FeaturedProperties;
