import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import appData from "../appData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import { InstallContext } from "./App"
import NotFound from "./NotFound";

const AppDetails = () => {
  const { installedApps, installApp } = useContext(InstallContext); 

  const dibba = "flex flex-col text-sm mt-[5px] text-gray-400 justify-center items-center";
  const boldd = "text-black font-bold text-3xl";

  const { id } = useParams();
  const targetApp = appData.find((app) => app.id == id);
   if (!targetApp) {

    return <NotFound />;
  }

  const isInstalled = installedApps.find((app) => app.id === targetApp.id);


  return (
    <div className="mt-3">
      <div className="p-2 md:p-10 flex flex-col justify-center md:flex-row">
        <div className="flex justify-center">
          <img src={targetApp.image} alt="" className="w-[300px] rounded-3xl" />
        </div>

        <div className="w-[100%] md:w-[80%] pl-5 md:pl-10 flex flex-col">
          <p className="text-left text-3xl">{targetApp.title}</p>
          <p className="text-left">
            <span className="text-gray-400 font-light">Developed by</span>{" "}
            <span className="text-[#9F62F2]">{targetApp.companyName}</span>
          </p>

          <div className="flex gap-5 text-2xl mt-[1rem]">
            <div className={dibba}>
              <ArrowDownwardIcon className="text-[#54CF68]" />
              <span>Downloads</span>
              <span className={boldd}>{targetApp.downloads}M</span>
            </div>
            <div className={dibba}>
              <StarIcon className="text-orange-400" />
              <span>Average Ratings</span>
              <span className={boldd}>{targetApp.ratingAvg}</span>
            </div>
            <div className={dibba}>
              <ThumbUpIcon className="text-purple-400" />
              <span>Total Reviews</span>
              <span className={boldd}>{targetApp.reviews / 1000}K</span>
            </div>
          </div>

          <button 
            className={`p-2 w-[200px] mt-[3rem] rounded-[5px] hover:scale-[1.04] duration-500 hover:shadow-xl hover:shadow-[#54CF68] ${
              isInstalled ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#54CF68] text-white"
            }`}
            onClick={() => !isInstalled && installApp(targetApp)}
          >
            {isInstalled ? "Installed" : `Install Now (${targetApp.size}MB)`}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="text-2xl text-[#9F62F2] font-bold mb-4">Ratings</p>
        <div className="flex justify-center w-full">
          <ResponsiveContainer width="80%" height={400}>
            <BarChart
              layout="vertical"
              data={[...targetApp.ratings].reverse()}
              margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="name" type="category" />
              <XAxis type="number" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#FF8811"
                barSize={30}
                radius={[0, 5, 5, 0]}
                isAnimationActive={true}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <span className="text-2xl text-[#9F62F2] font-bold mb-4">Description</span>
        <p className="mt-4 font-light text-gray-400 text-sm mx-4">{targetApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;