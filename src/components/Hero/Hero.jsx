import React from "react";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center md:p-20 p-6">
      <h1 className="text-[#001931] md:text-6xl text-4xl font-bold text-center">
        We Build <br />
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>
      <p className="text-[#001931ab] md:w-3/4 text-center my-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex gap-5 my-6">
        <button className="btn flex items-center">
          <span>
            <img width="20px" src={playstore} alt="" />
          </span>
          Google Play
        </button>
        <button className="btn flex items-center">
          <span>
            <img width="20px" src={appstore} alt="" />
          </span>
          App Store
        </button>
      </div>
      <img src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
