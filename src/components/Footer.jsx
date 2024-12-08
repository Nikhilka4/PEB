import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
  FaPhoneFlip,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[85%] mx-auto h-[80vh] flex flex-col justify-center ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col text-5xl">
          <span>PRANAVI</span>
          <span>PEB CONSTRUCTIONS</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <p>Tel. 123-456-7890</p>
          <p>500 Terry Francine St.</p>
          <ul className="flex gap-2 text-2xl">
            <li>
              <FaWhatsapp />
            </li>
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center w-[45%] mt-7 text-6xl">
        <p className="underline cursor-pointer ">+91 94414 24646</p>
        <FaPhoneFlip className="-rotate-90 hover:-rotate-45"/>
      </div>
      <div className="mt-7 text-lg">
        <p>&copy; 2024 by Pranavi PEB Construction.</p>
      </div>
    </footer>
  );
};

export default Footer;
