import { ArrowDownToLine, Star } from "lucide-react";
import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router";

const TrendingApps = () => {
  return (
    <div className="md:my-20 my-10">
      <div className="text-center p-5 ">
        <h2 className="md:text-5xl text-4xl my-4 font-semibold">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
      <div className="text-center md:mb-20 mb-10">
        <Link to={"/apps"}>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <span>Show All</span>
            </button>
          </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
