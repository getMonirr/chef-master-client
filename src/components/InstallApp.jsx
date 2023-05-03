import React from "react";
import appDownload from "../assets/AppDownload.png";
import { HiReceiptPercent } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { RxLapTimer } from "react-icons/rx";
import LazyLoad from "react-lazy-load";

const InstallApp = () => {
  return (
    <>
      <div className="bg-[#FEEFD0] pt-32 px-5">
        <div className="container mx-auto p-8 lg:p-14 lg:w-3/6 bg-white rounded-3xl pb-10 lg:pb-10 flex flex-col lg:flex-row gap-8 lg:gap-4 justify-evenly items-center">
          <div className="flex items-start gap-8">
            <HiReceiptPercent className="mb-4" size={70} color="#FFAE01" />
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-extrabold">
              Daily <br /> Discounts
            </p>
          </div>
          <div className=" w-3/6 lg:w-[2px] bg-slate-600 h-[2px] lg:h-10"></div>
          <div className="flex items-start gap-6">
            <IoLocationSharp className="mb-4" size={70} color="#FFAE01" />
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-extrabold">
              Live <br /> Tracing
            </p>
          </div>
          <div className=" w-3/6 lg:w-[2px] bg-slate-600 h-[2px] lg:h-10"></div>
          <div className="flex items-start gap-6">
            <RxLapTimer className="mb-4" size={70} color="#FFAE01" />
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-extrabold">
              Quick <br /> Delivery
            </p>
          </div>
        </div>
      </div>
      <div>
        <LazyLoad offset={300}>
          <img src={appDownload} alt="app download" />
        </LazyLoad>
      </div>
    </>
  );
};

export default InstallApp;
