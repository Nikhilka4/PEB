import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import services2 from "../../assets/services-2.svg";

const About = () => {
  return (

    <div className="bg-[url('https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg')] bg-no-repeat bg-cover relative">
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="w-[87%] h-[85vh] py-10 mx-auto relative z-10 text-white">
          <div className="h-full w-full flex flex-col justify-center items-left">
              <h3 className="flex justify-left items-center gap-4">
                <img src={services2} alt="" className='text-white'/>
                <span className="text-xl font-medium">ABOUT</span>
              </h3>
              <p className="text-4xl font-medium mt-8 w-[30%]">
              About Pranavi PEB Construction
              </p>
              <p className='text-2xl mt-8 w-[50%] '>This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
              <button className="flex justify-left items-center gap-4 mt-8">
                <IoIosArrowRoundForward className="h-12 w-12 font-extralight bg-black text-white p-1" />{" "}
                LEARN MORE
              </button>
          </div>
        </div>
    </div>
  )
}

export default About
