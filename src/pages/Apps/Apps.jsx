import React, { useEffect, useState } from "react";
// import { useNavigation } from "react-router";
import Card from "../../components/Card/Card";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  // loading spanner use
  // const navigation = useNavigation();
  // console.log(navigation.state);
  // if (navigation.state === "loading") {
  //   return (
  //     <div className="flex justify-center p-5">
  //       <span className="loading loading-bars loading-xl"></span>
  //     </div>
  //   );
  // }

  // search btn
  const handleBtn = (e) => {
    const searchText = e.target.value;
    const filter = apps.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setApps(filter);
  };
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
