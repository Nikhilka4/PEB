import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div className="w-[87%] py-5 md:py-10 mx-auto flex flex-col  md:gap-5">
      <div>
        <h3 className="flex justify-center md:justify-start items-center gap-4">
          <Image
            src="./services.svg"
            alt=""
            width={30}
            height={30}
            className="hidden md:block"
          />
          <span className="text-4xl font-medium">Our Services</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-0">
        <div>
          <Image
            src="/s1.png"
            alt=""
            className="rounded-xl"
            width={500}
            height={500}
          />
          <h3 className="text-4xl md:text-2xl font-medium text-center md:text-left">
            Commercial
          </h3>
          <p className="text-[#b4b4b4] text-center md:text-left">
            Warehouses, outdoor, malls
          </p>
        </div>
        <div>
          <Image
            src="/s2.png"
            alt=""
            className="rounded-xl h-[78%]"
            width={500}
            height={500}
          />
          <h3 className="text-4xl md:text-2xl font-medium text-center md:text-left">
            Residential
          </h3>
          <p className="text-[#b4b4b4] text-center md:text-left">
            Neighborhoods, multiple homes
          </p>
        </div>
        <div>
          <Image
            src="/s3.png"
            alt=""
            className="rounded-xl"
            width={500}
            height={500}
          />
          <h3 className="text-4xl md:text-2xl font-medium text-center md:text-left">
            Infrastructure
          </h3>
          <p className="text-[#b4b4b4] text-center md:text-left">
            Roads, pipes, etc.
          </p>
        </div>
      </div>
      <div>
        <h3 className="flex text-5xl font-medium justify-left items-center gap-4 text-center md:text-left my-8 md:my-0">
          Customized Solutions for Your Needs
        </h3>
      </div>
      <div className=" w-full flex flex-col md:flex-row items-center justify-center ">
        <div className=" w-full md:w-[50%] my-8 md:my-0">
          <Image
            src="/Services.png"
            alt=""
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-[50%]">
          <h3 className="text-5xl font-medium text-center md:text-left mb-5">Industries we service</h3>
          <div className="flex flex-col md:flex-row justify-center gap-[20%] ">
            <ul className="list-disc list-inside text-3xl md:text-2xl">
              <li>Industrial Buildings</li>
              <li>Warehouses</li>
              <li>Office Buildings</li>
              <li>Recreational Centers</li>
            </ul>
            <ul className="list-disc list-inside text-3xl md:text-2xl">
              <li>Railway Stations</li>
              <li>Metro Stations</li>
              <li>Commercial Centers</li>
              <li>Architectural Buildings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
