import React from "react";
import Header from "../pages/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <div className="bg-base-200 mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
