import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const PropertyBanner = () => {
  return (
    <section className="property_banner">
        <div className="container">
            <div className="seaside_villa">
                <div className="header">
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

                    </div>
                    <div className="main_img">      
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PropertyBanner
