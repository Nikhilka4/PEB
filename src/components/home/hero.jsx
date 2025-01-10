import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-[87%] h-[calc(100%-15vh)] md:h-[85vh] py-5 md:py-10 mx-auto flex flex-col md:flex-row md:gap-5">
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start mb-4 md:mb-0">
        <p className="leading-none text-3xl md:text-5xl font-bold text-center md:text-left mb-4 md:mb-8">
          Strong and Affordable <br />
          Pre-Engineered Buildings
        </p>
        <p className="text-xl text-center md:text-left">
          From design to completion, our PEB solutions are flexible and
          dependable, making sure your project is built better, quicker, and
          stays valuable.
        </p>
        <div className="flex items-center gap-4">
          <button className="border-black border-2 px-6 py-2 mt-4 rounded-2xl hover:bg-black hover:text-white">
            Explore
          </button>
          <Link
            href={"/home"}
            className="flex items-center gap-2 mt-4 hover:underline"
          >
            Contact us
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex justify-end">
        <Image
          src="/heroImage.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
