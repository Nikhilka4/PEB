import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import services1 from "../../assets/services-1.svg";

const Services = () => {
  return (
    <div className="w-[87%] h-[85vh] py-10 mx-auto">
      <div className="h-[40%]">
          <h3 className="flex justify-left items-center gap-4">
            <img src={services1} alt="" />
            <span className="text-xl font-medium">OUR SERVICES</span>
          </h3>
          <p className="text-4xl font-medium mt-8">
            Diverse solutions tailored to your every need
          </p>
          <button className="flex justify-left items-center gap-4 mt-8">
            <IoIosArrowRoundForward className="h-12 w-12 font-extralight bg-black text-white p-1" />{" "}
            LEARN MORE
          </button>
      </div>
      <div className="h-[60%] grid grid-cols-3 gap-8">
        <div>
            <img src="https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg" alt="" className="rounded-xl"/>
            <h3 className="text-xl font-medium">Commercial</h3>
            <p className="text-[#b4b4b4]">Warehouses, outdoor, malls</p>
        </div>
        <div>
            <img src="https://static.wixstatic.com/media/a4c183_b1542aa5cee3499d97f40397e361b4f4~mv2.jpg/v1/crop/x_0,y_156,w_3000,h_1687/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1254413327.jpg" alt="" className="rounded-xl"/>
            <h3 className="text-xl font-medium">Residential</h3>
            <p className="text-[#b4b4b4]">Neighborhoods, multiple homes</p>
        </div>
        <div>
            <img src="https://static.wixstatic.com/media/a4c183_41a680c0ed504e07b25a16ff251e96fb~mv2.jpg/v1/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-183371607.jpg" alt="" className="rounded-xl"/>
            <h3 className="text-xl font-medium">Infrastructure</h3>
            <p className="text-[#b4b4b4]">Roads, pipes, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
