import React, { Suspense } from "react";
import appData from "../appData";
import AppCard from "./appCard";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrendingApps = () => {
  const navigate = useNavigate();
  const cardClickHandler = (app) => {
   
    navigate(`/app/${app.id}`);
  };
  return (
    <div className="pt-10 pb-20 bg-[rgb(245,245,245)]">
      <p className="text-3xl font-bold ">Trending Apps</p>
      <p className="text-sm  font-light">
        Explore All Trending Apps on the Market developed by us
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mx-[2rem]">
          {appData.map(
            (app) => app.id <= 8 && <AppCard key={app.id} cardClick={cardClickHandler} app={app}></AppCard>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default TrendingApps;
