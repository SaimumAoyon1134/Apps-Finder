import React from "react";
import { useNavigate } from "react-router-dom";
import image from './assets/image.png'

const NotFound = () => {
  const navigate = useNavigate();
  const backClick = () => {
    navigate(`/`);
  };
  return (
    <div className=" flex justify-center w-full flex-col">
     <div className="flex justify-center mb-2"> <img src={image} className="w-[30%]" alt="" /></div>
      <p className=" flex justify-center text-center col-span-full text-2xl font-bold">
        OPPS!! APP NOT FOUND
      </p>
      <p className=" text-gray-500 font-light text-sm">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <div>
        <button
          onClick={backClick}
          className="p-2 mb-2 w-[200px] mt-[3rem] rounded-[5px] bg-[#54CF68] text-white transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_15px_#54CF68]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
