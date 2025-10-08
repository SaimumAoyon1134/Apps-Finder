import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import StarIcon from "@mui/icons-material/Star";
const appCard = ({ app, cardClick }) => {
  const { title, image,downloads ,rating} = app;

  return (
    <div className="bg-white rounded-2xl flex flex-col p-1 items-center justify-center " onClick={() => cardClick(app)}>
      <img src={image} alt=""  className="rounded-2xl " />
      <p className="pt-[5px] text-gray-600">{title}</p>
      <div className="flex justify-between w-full px-3 pt-2 pb-1">
        <div className="bg-[rgb(245,245,245)] flex rounded-full p-1">
          <ArrowDownwardIcon></ArrowDownwardIcon>
          {downloads}
        </div>
        <div className="bg-[rgb(245,245,245)] flex rounded-full p-1">
          <StarIcon></StarIcon>
          5
        </div>
        
      </div>
    </div>
  );
};

export default appCard;
