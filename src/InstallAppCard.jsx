import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useContext } from "react";
import { InstallContext } from "./App";


const InstallAppCard = ({ app }) => {
  const { uninstallApp } = useContext(InstallContext);

  return (
    <div className="bg-white mx-10 flex flex-col md:flex-row p-3 justify-between items-center">
      <div className="flex flex-col md:flex-row items-center">
        <img src={app.image} alt="" className="w-[80px]" />
        <div className="flex flex-col ml-4">
          <div className="font-bold text-2xl">{app.title}</div>
          <div className="flex space-x-4 mt-2">
            <div className="flex flex-row text-sm text-gray-400 items-center">
              <ArrowDownwardIcon className="text-[#54CF68]" />
              <span className="text-gray-400 text-sm px-[4px]">{app.downloads}M</span>
            </div>
            <div className="flex flex-row text-sm text-gray-400 items-center">
              <StarIcon className="text-orange-400" />
              <span className="text-gray-400 text-sm px-[4px]">{app.ratingAvg}</span>
            </div>
            <div className="flex flex-row text-sm text-gray-400 items-center">
              <ThumbUpIcon className="text-purple-400" />
              <span className="text-gray-400 text-sm px-[4px]">{app.reviews / 1000}K</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => uninstallApp(app)}
          className="bg-[#54CF68] p-2 w-[200px] rounded-[5px] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppCard;
