import React, { Component } from "react";
import image from "./assets/image copy.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export class Navbar extends Component {
  render() {
    const activeClass = "font-bold text-[#9F62F2] ;";
    const normalClass = "text-gray-900 hover:underline";
    return (
      <nav className="bg-white flex  flex-col md:flex-row justify-between">
        <div className="flex flex-wrap justify-center md:justify-between items-center  ">
          <Link to="/" className="flex items-center">
            <img
              src={image}
              className="mr-3 h-6 sm:h-9 bg-white"
              alt="Apps Finder Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Apps Finder
            </span>
          </Link>
        </div>
        <div className="flex items-center align-center justify-center md:justify-between">
          <ul className="flex space-x-8 mt-0  font-medium ">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={({ isActive }) => isActive ? activeClass : normalClass}>
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={({ isActive }) => isActive ? activeClass : normalClass}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded hover:bg-blue-600">
              <GitHubIcon></GitHubIcon> Contribute
            </button>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
