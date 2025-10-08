import React from "react";
import { useNavigate } from "react-router-dom";
import image from './assets/nf.png'

const PageNotFound = () => {
  const navigate = useNavigate();
  const backClick = () => {
    navigate(`/`);
  };
  return (
    <div className=" flex justify-center w-full flex-col">
     <div className="flex justify-center mb-2"> <img src={image} className="w-[30%]" alt="" /></div>
      <p className=" flex justify-center text-center col-span-full text-2xl font-bold">
        OPPS!! PAGE NOT FOUND
      </p>
      <p className=" text-gray-500 font-light text-sm">
        The page you are looking for is not available.
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

export default PageNotFound;
