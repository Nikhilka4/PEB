import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="w-full md:w-[87%] py-5 md:py-10 mx-auto ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Let&#39;s Get Started on Your Project Contact Us Today!
        </h1>
        <Link href={"/quote"} className="w-[50%] md:w-[20%] my-10 bg-black text-white text-center px-6 py-2 text-xl rounded-md hover:bg-transparent hover:text-black border border-black hover:border-black transition-all duration-300">
          Get a Quote
        </Link>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full md:w-[50%] h-full flex gap-[20%] justify-center items-center">
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
            </ul>
          </div>
          <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center md:items-start justify-center gap-6">
              <span className="flex items-center gap-4 text-3xl">
                <FaRegEnvelope />
                <p>hello@relume.io</p>
              </span>
              <span className="flex items-center gap-4 text-3xl">
                <FiPhone />
                <p>+1 (555) 000-0000</p>
              </span>
              <span className="flex items-center gap-4 text-3xl">
                <SlLocationPin />
                <p>123 Sample St,<br /> Sydney NSW 2000 AU</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="text-lg text-center">
        <p>&copy; 2024 by Pranavi PEB Construction.</p>
      </div>
    </footer>
  );
};

export default Footer;
