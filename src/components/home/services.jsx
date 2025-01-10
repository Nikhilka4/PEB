import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Services = () => {
  return (
    <div className="w-[87%] h-fit md:h-[85vh] py-10 mx-auto mb-6">
      <div className="h-[40%]">
          <h3 className="flex justify-left items-center gap-4">
            <Image src='./services.svg' alt="" width={20} height={20} />
            <span className="text-xl font-medium">OUR SERVICES</span>
          </h3>
          <p className="text-4xl font-medium mt-8 text-center md:text-left">
            Diverse solutions tailored to your every need
          </p>
          <Link href="/services" className="flex justify-left items-center gap-4 mt-4 md:mt-8">
            <IoIosArrowRoundForward className="h-10 w-10 font-extralight bg-black text-white p-1" />{" "}
            LEARN MORE
          </Link>
      </div>
      <div className="h-[60%] grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-0">
        <div>
            <Image src="/s1.png" alt="" className="rounded-xl" width={500} height={500}/>
            <h3 className="text-xl font-medium">Commercial</h3>
            <p className="text-[#b4b4b4]">Warehouses, outdoor, malls</p>
        </div>
        <div>
        <Image src="/s2.png" alt="" className="rounded-xl h-[78%]" width={500} height={500}/>
            <h3 className="text-xl font-medium">Residential</h3>
            <p className="text-[#b4b4b4]">Neighborhoods, multiple homes</p>
        </div>
        <div>
        <Image src="/s3.png" alt="" className="rounded-xl" width={500} height={500}/>
            <h3 className="text-xl font-medium">Infrastructure</h3>
            <p className="text-[#b4b4b4]">Roads, pipes, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
