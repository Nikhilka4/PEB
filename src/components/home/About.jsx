import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#618741]">
      <div className="w-[87%] h-fit md:h-[85vh] py-10 mx-auto flex flex-col-reverse md:flex-row z-10 text-white">
        <div className="h-full w-full md:w-[50%] flex flex-col justify-center items-left">
          <h3 className="flex justify-left items-center gap-4">
            <Image
              src="/services-2.svg"
              alt=""
              className="text-white"
              width={20}
              height={20}
            />
            <span className="text-xl font-medium">ABOUT</span>
          </h3>
          <p className="text-4xl font-medium mt-4 text-center md:text-left">
            About Pranavi PEB Construction
          </p>
          <p className="text-2xl mt-4 w-full md:w-[90%] text-justify">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.{" "}
            <br /> This is the space to introduce visitors to the business or
            brand. Briefly explain who's behind it, what it does and what makes
            it unique. Share its core values and what this site has to
            offer.This is the space to introduce visitors to the business or
            brand. Briefly explain who's behind it, what it does and what makes
            it unique. Share its core values and what this site has to offer.
          </p>
        </div>
        <div className="h-[50vh] md:h-full w-full md:w-[50%] flex justify-center items-center">
          <Image
            src="/heroImage.png"
            alt=""
            className="h-[90%] w-full rounded-xl object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
