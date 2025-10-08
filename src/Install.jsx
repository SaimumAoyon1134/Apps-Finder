import React from "react";
import { useContext } from "react";
import { InstallContext } from "./App";
import InstallAppCard from "./InstallAppCard";

const Install = () => {
  const { installedApps, installApp } = useContext(InstallContext);

  return (
    <div className="bg-[rgb(245,245,245)]">
      <div className="text-4xl font-bold text-center mt-20">
        Your Installed Apps
      </div>
      <div>
        <p className="text-center text-sm px-20 text-gray-400 font-light mt-5">
          Explore All Trending Apps on the Market developed by us
          </p>
          <p className="text-left pl-10 text-2xl font-bold">{installedApps.length} Apps Found </p>
          <div className="flex flex-col space-y-3  ">
            
            {installedApps.map((app) => (
              <InstallAppCard key={app.id} app={app} />
            ))}
          </div>
   
      </div>
    </div>
  );
};

export default Install;
