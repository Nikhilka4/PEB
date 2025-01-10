import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  return (
    <div className="w-[87%] h-fit py-10 mx-auto">
      <h3 className="flex justify-left items-center gap-4">
        <Image src="/services.svg" alt="" width={20} height={20} />
        <span className="text-xl font-medium">RECENT PROJECTS</span>
      </h3>
      <p className="text-4xl font-medium mt-4 text-center md:text-left">
        Discover our latest projects
      </p>
      <Link
        href="/projects"
        className="flex justify-left items-center gap-4 mt-4 md:mt-8"
      >
        <IoIosArrowRoundForward className="h-10 w-10 font-extralight bg-black text-white p-1" />{" "}
        LEARN MORE
      </Link>
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between my-8">
        <Image
          src="/p1.png"
          alt=""
          className="rounded-xl h-[50%]"
          width={500}
          height={400}
        />
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">
            Paramjyoti School Roofing
          </h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">
            Amalapuram, Andhra Pradesh, 30,000 sq.ft
          </p>
          <p className="text-lg text-center md:text-left">
            This Project took around 6 Weeks to complete from Start to Finish.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="w-full flex flex-col md:flex-row items-center justify-between my-8">
        <Image
          src="/p2.png"
          alt=""
          className="rounded-xl"
          width={500}
          height={500}
        />
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">
            Warehouse for VsB agro tech
          </h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">
            Samarlakota, Andhra Pradesh, 22,000 sq.ft{" "}
          </p>
          <p className="text-lg text-center md:text-left">
            This Project took around 6 Weeks to complete from Start to Finish.
          </p>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Projects;
