import React from "react";
import PropertyBanner from "../../sections/property_details/PropertyBanner";
import PropertyDisc from "../../sections/property_details/PropertyDisc";
import Inquire from "../../sections/property_details/Inquire";

const Propertydetails = () => {
  return(
    <>
      <PropertyBanner />
      <PropertyDisc/>
      <Inquire/>
    </>
  );
};

export default Propertydetails;
