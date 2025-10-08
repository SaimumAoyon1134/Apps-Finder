import React, { Suspense, useState, useEffect } from "react";
import appData from "../appData";
import AppCard from "./appCard";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner"; 

const Apps = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const cardClickHandler = (app) => {
    navigate(`/apps/${app.id}`);
  };


  const filteredApps = appData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 500); 
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false); 
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="text-4xl font-bold text-center mt-20">
        Our All Applications
      </div>
      <div>
        <p className="text-center text-sm px-20 text-gray-400 font-light mt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between m-10">
        <div className="font-bold text-2xl ">
          {filteredApps.length} Apps Found
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border mb-10 shadow-[5px_5px_10px_rgba(0,0,0,0.5)] hover:scale-[1.04] duration-300 border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-[#54CF68]"
          />
        </div>
      </div>

      <div className="pt-10 pb-20 bg-[rgb(245,245,245)]">
        {isSearching ? (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mx-[2rem]">
              {filteredApps.map((app) => (
                <AppCard key={app.id} cardClick={cardClickHandler} app={app} />
              ))}
              {filteredApps.length === 0 && (
                <p className="text-center col-span-full text-gray-500">
                  No apps found.
                </p>
              )}
            </div>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Apps;