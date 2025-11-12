import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/home"} className="mr-3 font-semibold">
        Home
      </NavLink>
      <NavLink to={"/apps"} className="mr-3 font-semibold">
        Apps
      </NavLink>
      <NavLink to={"/installation"} className="mr-3 font-semibold">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm py-3">
      <div className="navbar container mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <span>
              <img src={logo} width="30px" alt="" />
            </span>{" "}
            <span>HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"https://github.com/naymur-code/hero-apps"}>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <Github width="20px" />
              <span>Contribute</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
