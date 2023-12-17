import React from "react";
import "./values.css";

const Values = () => {
  return (
    <section className="values">
      <div className="container">
        <div className="values-wrapper">
          <div className="values-title">
            <h3>Our Values</h3>
            <p>
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="values-item">
            <div className="item-ditials">
              <div className="item">
                <img src="/icons.png" alt="not found" />
                <h5> Trust</h5>
              </div>
              <p>
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            <div className="item-ditials">
              <div className="item">
                <img src="/icon.png" alt="not found" />
                <h5> Excellence</h5>
              </div>
              <p>
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
            <div className="item-ditials">
              <div className="item">
                <img src="/iconx.png" alt="not found" />
                <h5>Client-Centric</h5>
              </div>
              <p>
                Your dreams and needs are at the center of our universe. We
                listen, understand.
              </p>
            </div>
            <div className="item-ditials">
              <div className="item">
                <img src="/icon.png" alt="not found" />
                <h5>Our Commitment</h5>
              </div>
              <p>
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </p>
              <p>Hello world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
