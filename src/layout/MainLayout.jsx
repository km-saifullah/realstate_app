import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "../sections/header/Header";
import Copyright from "./Copyright";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default MainLayout;
