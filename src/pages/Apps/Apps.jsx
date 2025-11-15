import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  // search btn
  const handleBtn = (e) => {
    const searchText = e.target.value;
    const filter = apps.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setApps(filter);
  };

  if (apps.length === 0) {
    return (
      <div className="my-20">
           <div className="flex flex-col md:flex-row gap-6 justify-between mb-5">
        <h3 className="font-bold md:text-2xl text-xl">
          ({apps.length}) Apps Found
        </h3>
        <label className="input" onClick={handleBtn}>
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            onChange={handleBtn}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleBtn(e);
            }}
          />
        </label>
      </div>
       <div className="md:my-50 my-32">
         <h1 className="text-5xl font-semibold text-center py-8">
          No Apps Found !
        </h1>
        <div className="flex justify-center">
          <Link to={"/"}>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              <span>Back</span>
            </button>
          </Link>
        </div>
       </div>
      </div>
    );
  }
  return (
    <div>
      <div className="text-center p-5 my-10 ">
        <h2 className="md:text-5xl text-4xl my-4 font-semibold">
          Our All Applications
        </h2>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between mb-5">
        <h3 className="font-bold md:text-2xl text-xl">
          ({apps.length}) Apps Found
        </h3>
        <label className="input" onClick={handleBtn}>
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            onChange={handleBtn}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleBtn(e);
            }}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        {apps.map((app) => (
          <Card app={app} key={app.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
