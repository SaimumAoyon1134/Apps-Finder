import React from "react";
import cover from "./assets/hero.png";
import { Link } from "react-router-dom";
import playstore from "./assets/playstore.png";
import apple from "./assets/apple.png";
import TrendingApps from "./TrendingApps";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const buttonClass =
    "flex border-1 border-gray-400 w-[130px] text-center items-center rounded-[4px] hover:cursor-pointer hover:scale-[1.04] duration-500 hover:shadow-xl hover:shadow-gray-500";
  const iconImgClass = "w-[30px] h-[30px] mx-2";
  const btnclick =()=>{
    navigate(`/apps`);
  }
 
  return (
    <div>
      <div className="text-4xl font-bold text-center mt-10 ">
        <span className="text-[#001931]">We Build</span> <br />
        <span className="text-[#9F62F2]">Productive</span> 
        <span className="text-[#001931]">Apps</span> <br />
      </div>
      <p className="text-center text-sm px-20 text-gray-400 font-light mt-5">
        At Apps Finder, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://play.google.com/store/apps?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={buttonClass}>
            <img src={playstore} className={iconImgClass} alt="" />
            Play Store
          </button>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={buttonClass}>
            <img src={apple} className={iconImgClass} alt=""  />
            App Store
          </button>
        </a>
      </div>
      <div className="flex justify-center mt-[10px] ">
        <img src={cover} alt="" className="w-[50%] h-auto" />
      </div>
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] pt-10">
        <p className="text-3xl font-bold text-center  text-white">
          Trusted by Millions, Built for You
        </p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-20 text-white mt-10 pb-10">
          <div>
            <p className="text-sm text-gray-400 font-light mb-2">
              Total Downloads
            </p>
            <p className="text-4xl font-bold mb-2">29.6M</p>
            <p className="text-sm text-gray-400 font-light">
              21% more than last month
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-light mb-2">
              Total Reviews
            </p>
            <p className="text-4xl font-bold mb-2">906K</p>
            <p className="text-sm text-gray-400 font-light">
              46% more than last month
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-light mb-2">Active Apps</p>
            <p className="text-4xl font-bold mb-2">132+</p>
            <p className="text-sm text-gray-400 font-light">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
      <TrendingApps></TrendingApps>
   <button onClick={btnclick} className="p-2 mb-2 w-[200px] mt-[3rem] rounded-[5px] bg-[#54CF68] text-white transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_15px_#54CF68]">
  Show All
</button>
    </div>
  );
};

export default Home;
