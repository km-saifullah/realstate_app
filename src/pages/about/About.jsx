import React from "react";
import "./about.css";
import Journey from "../../sections/journey/Journey";
import Values from "../../sections/values/Values";
import Achievements from "../../sections/achievements/Achievements"
import Experience from "../../sections/experience/Experience";
import Estatein from "../../sections/estatein/Estatein";
import Corporation from "../../sections/corporation/Corporation";
const About = () => {
  return(
      <>
      <Journey/>
      <Values/>
      <Achievements/>
      <Experience/>
      <Estatein/>
       <Corporation/>
      </>
  ) 
};

export default About;
