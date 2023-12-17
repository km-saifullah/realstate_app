import React from 'react'
import './propertyBanner.css'
import { FaLocationDot } from "react-icons/fa6";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";

const PropertyBanner = () => {
  return (
    <section className="property_banner">
        <div className="container">
            <div className="seaside_villa">
                <div className="headerVila">
                    <div className="header_main">
                        <h2>Seaside Serenity Villa</h2>
                        <div className="locaton">
                            <FaLocationDot />
                            <p>Malibu, California</p>
                        </div>
                    </div>
                    <div className="header_price">
                        <p>price</p>
                        <h2>$1,200,000</h2>
                    </div>
                </div>
                <div className="img_section">
                    <div className="img_selection">
                        <img src="/PP_img_1.jpg" alt="" />
                        <img src="/PP_img_2.jpg" alt="" />
                        <img src="/PP_img_3.png" alt="" />
                        <img src="/PP_img_4.png" alt="" />
                        <img src="/PP_img_5.png" alt="" />
                        <img src="/PP_img_6.png" alt="" />
                        <img src="/PP_img_7.png" alt="" />
                        <img src="/PP_img_8.png" alt="" />
                        <img src="/PP_img_9.png" alt="" />
                    </div>
                    <div className="main_img">
                        <img src="/PP_Selection_bigL.jpg" alt="" />
                        <img src="/PP_Selection_bigR.jpg" alt="" />
                    </div>
                    <div className="angel">
                        <div className="angel_main">
                            <SlArrowLeftCircle />
                            -----
                            <SlArrowRightCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PropertyBanner
