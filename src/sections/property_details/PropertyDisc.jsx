import React from 'react'
import "./PropertyDisc.css"
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdAreaChart } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";

const PropertyDisc = () => {
  return (
    <section className='propertyDiscribtion'>
        <div className="container">
            <div className="propertyDiscribtion_wrapper">  
                <div className="discribtion">
                    <div className="headline">
                        <h2>Description</h2>
                        <p>Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</p>
                    </div>
                    <div className="propertydicDrisc">
                        <div className="room_details">
                            <div className='card'>
                                <IoBed className='icon'/>
                                <h2>bedroom</h2>
                            </div>
                            <p>04</p>
                        </div>
                        <div className="room_details">
                            <div className='card'>
                                <FaBath className='icon'/>
                                <h2>bathroom</h2>
                            </div>
                            <p>03</p>
                        </div>
                        <div className="room_details">
                            <div className='card'>
                                <MdAreaChart className='icon'/>
                                <h2>area</h2>
                            </div>
                            <p>2,500 square feet</p>
                        </div>
                    </div>
                </div>
                <div className="keyFeatures">
                    <h2>Key Features and Amenities</h2>
                    <div className="featureList">
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Expansive oceanfront terrace for outdoor entertaining
                            </p>
                        </div>
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Gourmet kitchen with top-of-the-line appliances
                            </p>
                        </div>
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Private beach access for morning strolls and sunset views
                            </p>
                        </div>
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Master suite with a spa-inspired bathroom and ocean-facing balcony
                            </p>
                        </div>
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Private garage and ample storage space
                            </p>
                        </div>
                        <div className="listType">
                            <MdOutlineElectricBolt className='icon'/>
                            <p>
                            Expansive oceanfront terrace for outdoor entertaining
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PropertyDisc
