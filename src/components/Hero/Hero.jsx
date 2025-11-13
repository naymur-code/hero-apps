import React from "react";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";
import hero from "../../assets/hero.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:pt-20  pt-10 text-center">
        <h1 className="text-[#001931] md:text-6xl text-5xl font-bold text-center">
          We Build <br />
          <span className="text-[#632EE3]">Productive</span> Apps
        </h1>
        <p className="text-[#001931ab] md:w-3/4 mx-auto my-4">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>

      <div className="flex gap-5 my-6">
        <Link to="https://play.google.com/store/apps/details?id=com.learnprogramming.codecamp&hl=en">
          <button className="btn flex items-center">
            <span>
              <img width="20px" src={playstore} alt="" />
            </span>
            Google Play
          </button>
        </Link>

        <Link to="https://apps.apple.com/us/app/programming-hero-coding-fun/id1478201849">
          <button className="btn flex items-center">
            <span>
              <img width="20px" src={appstore} alt="" />
            </span>
            App Store
          </button>
        </Link>
      </div>
      <img src={hero} alt="hero" />
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white w-screen">
        <div className="container mx-auto">
          <h2 className="md:text-5xl text-4xl font-bold md:p-14 p-8 text-center">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex md:flex-row flex-col gap-6 items-center justify-between py-7">
            <div className="text-center ">
              <p>Total Downloads</p>
              <h1 className="md:text-5xl text-3xl font-bold my-3">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="text-center">
              <p>Total Reviews</p>
              <h1 className="md:text-5xl text-3xl font-bold my-3">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="text-center">
              <p>Active Apps</p>
              <h1 className="md:text-5xl text-3xl font-bold my-3">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
