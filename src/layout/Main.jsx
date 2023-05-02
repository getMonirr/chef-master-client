import React from "react";
import Header from "../pages/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="bg-base-200 mx-auto">
        <Footer />
      </div>
    </div>
  );
};


export default Main;
