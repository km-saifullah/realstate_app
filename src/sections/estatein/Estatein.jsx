import React from "react";
import { FaTelegram } from "react-icons/fa6";
import "./estatein.css";
const Estatein = () => {
  return (
    <section className="estatein">
      <div className="container">
        <div className="estatein-wrapper">
          <div className="estatein-title">
            <h3>Meet the Estatein Team</h3>
            <p>
              At Estatein, our success is driven by the dedication and expertise
              of our team. Get to know the people behind our mission to make
              your real estate dreams a reality.
            </p>
          </div>
          <div className="images-wrapper">
            <div className="images-items">
              <div className="images">
                <img src="/clientre.png" alt="not found" />
                <h4>Max Mitchell</h4>
                <h6>Founder</h6>
              </div>
               <div className="icon">
                  <h5>Say Hello 👋</h5>
                  <FaTelegram className="i" />
               </div>
            </div>
            <div className="images-items">
              <div className="images">
                <img src="/clientd.png" alt="not found" />
                <h4>Sarah Johnson</h4>
                <h6>Chief Real Estate Officer</h6>
              </div>
              <div className="icon">
                  <h5>Say Hello 👋</h5>
                  <FaTelegram className="i" />
               </div>
            </div>
            <div className="images-items">
              <div className="images">
                <img src="/client.png" alt="not found" />
                <h4>David Brown</h4>
                <h6>Head of Property Management</h6>
              </div>
              <div className="icon">
                  <h5>Say Hello 👋</h5>
                  <FaTelegram className="i" />
               </div>
            </div>
            <div className="images-items">
              <div className="images">
                <img src="/clients.png" alt="not found" />
                <h4>Michael Turner</h4>
                <h6>Legal Counsel</h6>
              </div>
              <div className="icon">
                  <h5>Say Hello 👋</h5>
                  <FaTelegram className="i" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estatein;
