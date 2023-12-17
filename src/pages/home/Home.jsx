import React from "react";
import "./home.css";
import Banner from "../../sections/banner/Banner";
import Service from "../../sections/service/Service";
import RealState from "../../sections/realstate/RealState";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <RealState />
    </>
  );
};

export default Home;
