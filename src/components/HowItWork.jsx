import React from "react";
import { FaBell, FaHamburger } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";
import { SiCodechef } from "react-icons/si";

const HowItWork = () => {
  return (
    <div className="container mx-auto pt-4 pb-16 px-5">
      <h2 className="font-bold text-4xl text-center text-[#F17228] py-20">
        How does it work
      </h2>
      <div className="flex flex-col lg:flex-row justify-evenly gap-20">
        <div className="text-center flex flex-col justify-center items-center">
          <IoLocationSharp className="mb-4" size={70} color="#FFAE01" />
          <p className="font-bold text-xl">Select location</p>
          <p className="font-normal text-lg text-[#9E9E9E]">Choose the location where your food will be delivered.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <SiCodechef className="mb-4" size={70} color="#FFAE01" />
          <p className="font-bold text-xl">Select Chef</p>
          <p className="font-normal text-lg text-[#9E9E9E]">Check over hundreds of menus to pick your favorite food.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <HiCurrencyDollar className="mb-4" size={70} color="#FFAE01" />
          <p className="font-bold text-xl">Pay advanced</p>
          <p className="font-normal text-lg text-[#9E9E9E]">It's quick, safe, and simple. Select several methods of payment.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <FaHamburger className="mb-4" size={70} color="#FFAE01" />
          <p className="font-bold text-xl">Enjoy meals</p>
          <p className="font-normal text-lg text-[#9E9E9E]">Food is made and delivered directly to your home..</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
