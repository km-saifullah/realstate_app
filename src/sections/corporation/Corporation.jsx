import React from 'react'
import './corporation.css'
import { MdDomain } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";

const Corporation = () => {
  return (
     <section className="corporation">
        <div className="container">
           <div className="corporation-wrapper">
               <div className="corporation-title">
                  <h3>Our Valued Clients</h3>
                  <p>At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</p>
               </div>
               <div className="from-wrapper">
                  <div className="from-count">
                      <div className="from-title">
                     <div className="from-item">
                        <h5>Since 2019</h5>
                         <h3>ABC Corporation</h3>
                     </div>
                     <button className='from-btn'>Visit Website</button>
                       </div>
                      <div className="from-icon">
                        <div className="from-icon-one">
                           <h5> <MdDomain /> Domain</h5> 
                           <h4>Commercial Real Estate</h4>
                        </div>
                        <div className="from-icon-two">
                            <h5> <BsLightningCharge /> Category</h5>
                             <h4>Luxury Home Development</h4>
                        </div>
                      </div>
                       <div className="from-para">
                        <h5>What They Said 🤗</h5>
                        <p>Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.</p>
                      </div>
                  </div>
                   <div className="from-count">
                      <div className="from-title">
                     <div className="from-item">
                        <h5>Since 2018</h5>
                         <h3>GreenTech Enterprises</h3>
                     </div>
                     <button className='from-btn'>Visit Website</button>
                       </div>
                      <div className="from-icon">
                        <div className="from-icon-one">
                           <h5> <MdDomain /> Domain</h5> 
                           <h4>Commercial Real Estate</h4>
                        </div>
                        <div className="from-icon-two">
                            <h5> <BsLightningCharge /> Category</h5>
                             <h4>Luxury Home Development</h4>
                        </div>
                      </div>
                       <div className="from-para">
                        <h5>What They Said 🤗</h5>
                        <p>Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.</p>
                      </div>
                   </div>
               </div>
           </div>
        </div>
     </section>
  )
}

export default Corporation