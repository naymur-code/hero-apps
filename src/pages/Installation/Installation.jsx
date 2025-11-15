import React, { useEffect, useState } from "react";
import InstallApp from "../../components/InstallApp/InstallApp";
import { useLoaderData } from "react-router";
import { getItems, removeItem } from "../../utility/AddToLS";

const Installation = () => {
  const [selectApps, setSelectApps] = useState([]);
  const apps = useLoaderData();
  useEffect(() => {
    const selectId = getItems();
    const selectApp = apps.filter((i) => selectId.includes(i.id));
    setSelectApps(selectApp);
  }, []);

  const handleUninstall = (id) => {
    const apps = selectApps.filter((app) => app.id !== id);
    setSelectApps(apps);
  removeItem(id)
  };
  

  return (
    <div>
      <div className="text-center p-5 my-10 ">
        <h2 className="md:text-5xl text-4xl my-4 font-semibold">
          Your Installed Apps
        </h2>
        <p>Explore All Trending Apps on the Market developed by us </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between mb-5">
        <h3 className="font-bold md:text-2xl text-xl">
          ({selectApps.length}) Apps Found
        </h3>
        <select defaultValue="Sort By Size" className="select select-auto">
          <option disabled={false}>Sort By Size</option>
          <option>VScode</option>
          <option>VScode fork</option>
          <option>Another VScode fork</option>
        </select>
      </div>
      <div className="space-y-5 mb-20">
        {selectApps.map((app) => (
          <InstallApp
            app={app}
            key={app.id}
            handleUninstall={handleUninstall}
          ></InstallApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
