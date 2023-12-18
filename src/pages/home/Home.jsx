import React from "react";
import "./home.css";
import Banner from "../../sections/banner/Banner";
import Service from "../../sections/service/Service";
import RealState from "../../sections/realstate/RealState";
import FeaturedProperties from "../../sections/featuresProperties/featured/FeaturedProperties";

const Home = () => {
  return ( 
    <>
      <Banner />
      <Service />
      <FeaturedProperties />
      <RealState />
    </>
  );
};

export default Home;
