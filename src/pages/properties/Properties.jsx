import React from "react";
import "./properties.css";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const properties = () => {
  return (
    <main className="properties">
      <div className="container">
        <section className="properties-heading">
          <h2>Find Your Dream Property</h2>
          <p>
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey{" "}
          </p>
        </section>
        <section className="serach-field">
          <input type="text" placeholder="Search For A Property" />
          <CommonBtn className="find-property-btn" text="Find Property" />
        </section>
      </div>
    </main>
  );
};

export default properties;
