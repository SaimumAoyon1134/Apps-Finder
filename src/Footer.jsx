import React from "react";
import imageCopy from "./assets/image copy.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="bg-[#001931] text-white p-[3rem] mt-2">
      <div className="flex justify-between mb-[1rem]">
        <div className="flex align-center items-center">
          <img src={imageCopy} className="w-[30px] rounded-1xl" alt="" />
          <p className="px-[1rem]">Apps Finder</p>
        </div>
        <div className="w-[30%]">
          Apps Finder is a modern web application designed to help users
          explore, search, and install a wide range of applications developed by
          us. 
        </div>
        <div>
          <p>Social Links</p>
          <div>
            <FacebookIcon className="mx-[0.5rem]" />
            <LinkedInIcon className="mx-[0.5rem]" />
            <XIcon className="mx-[0.5rem]" />
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
