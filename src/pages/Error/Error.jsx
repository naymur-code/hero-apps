import React from "react";
import error from "../../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:p-20 p-10">
        <div className="flex justify-center p-8">
          <img src={error} alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-[#001931] md:text-6xl text-4xl font-black">
            Oops, page not found!
          </h1>
          <p className="mt-3 mb-5">
            The page you are looking for is not available.
          </p>
          <Link to={"/"}>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <span>Go Back!</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
