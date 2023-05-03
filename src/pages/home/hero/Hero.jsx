import React from "react";
import heroBg from "../../../assets/hero-bg.png";
import heroImage from "../../../assets/imageBase.png";

const Hero = () => {
  return (
    <div
      className="min-h-[calc(100vh-300px)]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center min-h-[calc(100vh-300px)] container mx-auto px-5 py-10 gap-4 lg:flex-row flex-col-reverse">
        <div>
          <div className="lg:w-3/6 text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold text-white">WelCome to Chinese Chef</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-orange-400 border-orange-300">
              Get Started
            </button>
          </div>
        </div>
        <div className="mb-8">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
