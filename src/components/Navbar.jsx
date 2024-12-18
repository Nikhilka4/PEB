import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[15vh] flex justify-between items-center py-4 px-16">
      <div className="flex justify-center items-center gap-6">
        <svg
          className="h-14 w-14"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="87 80.1 505 352.7"
          viewBox="87 80.1 505 352.7"
          height="644"
          width="896"
          xmlns="http://www.w3.org/2000/svg"
          data-type="color"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g>
            <path
              d="M211.8 119.3 87 158.5v214.2l16.3 30.1 16.2 30 .5-124.1.5-124.1L228 149.3c59.1-19.5 108.4-35.4 109.5-35.4 1.7-.1 87.5 27.9 198.7 64.7l22.8 7.6.2 122.9.3 122.9 16.3-30 16.2-30.1-.2-106.6-.3-106.7L465 119.3c-69.6-21.6-126.9-39.2-127.5-39.2-.5 0-57.1 17.7-125.7 39.2"
              fill="#bf1c2c"
              data-color="1"
            ></path>
            <path
              d="M256.8 179.3 177 204.5V342l10.3 18.9 10.2 18.9.3-79.2.2-79.2 69.6-22.9c38.3-12.6 70.4-22.8 71.3-22.7.9 0 32.9 10.4 71.1 23l69.5 22.9.5 79.6.5 79.6 10.8-19.8 10.7-19.8v-68.1c0-37.5-.4-68.3-.8-68.6-1.5-.9-162.4-50.6-163.5-50.5-.7.1-37.1 11.4-80.9 25.2"
              fill="#bf1c2c"
              data-color="1"
            ></path>
            <path
              d="m304.5 231.4-32 10.1-.3 28.3-.2 28.2 4.5 8.2 4.5 8.3v-66l28.8-9.6 28.9-9.6 29.4 9.6 29.4 9.7.3 32.4.3 32.5 3.9-7 4-7v-58l-33.2-10.3c-18.3-5.6-34-10.2-34.8-10.1s-15.9 4.7-33.5 10.3"
              fill="#bf1c2c"
              data-color="1"
            ></path>
          </g>
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium w-5 whitespace-nowrap">
            PRANAVI
          </span>
          <span className="text-sm font-medium w-5 whitespace-nowrap">
            PEB CONSTRUCTIONS
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline" : "")}
          to="/about"
        >
          About us
        </NavLink>
      </div>
      <div>
        <button className="bg-black text-white px-6 py-2 text-sm rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300">
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
