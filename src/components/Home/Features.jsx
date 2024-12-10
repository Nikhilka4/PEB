import React from "react";
import feature1 from "../../assets/feature-1.svg";
import feature2 from "../../assets/feature-2.svg";
import feature3 from "../../assets/feature-3.svg";

const Features = () => {
  return (
    <div className="bg-[#618741]">
      <div className="w-[87%] h-[85vh] py-10 mx-auto flex flex-col">
        <div className="w-[100%] h-[50%] mx-auto flex">
          <div className="w-[45%] flex justify-center items-center">
            <p className="text-7xl font-bold text-white">
              More than just Steel Structure
            </p>
          </div>
          <div class="w-[55%] grid grid-cols-2 grid-rows-2 gap-3 p-4 rounded-md ">
            <div class="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white flex justify-center items-center text-center">
              <p className="text-2xl">
                <span className="text-4xl font-semibold">100+</span> Projects
                Completed
              </p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white   flex justify-center items-center text-center">
              <p className="text-2xl">
                <span className="text-4xl font-semibold">15+</span> Years of
                on-field experience
              </p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white flex justify-center items-center text-center">
              <p className="text-2xl">
                <span className="text-4xl font-semibold">3</span> Ongoing
                Projects
              </p>
            </div>
            <div class="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white flex justify-center items-center text-center">
              <p className="text-2xl">
                Established in{" "}
                <span className="text-4xl font-semibold">2016</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] mx-auto flex gap-4">
          <div className="basis-1/3 border-2 bg-white rounded-lg px-9 py-10">
            <img src={feature1} alt="" className="h-[50px]" />
            <h3 className="text-2xl my-3 font-medium">Maximized Efficiency</h3>
            <p>
              Utilize resources, and leverage technology to the maximum. They
              are easy to set up, expand & modify.
            </p>
          </div>
          <div className="basis-1/3 border-2 bg-white rounded-lg px-9 py-10">
            <img src={feature2} alt="" className="h-[50px]" />
            <h3 className="text-2xl my-3 font-medium">Quality Control</h3>
            <p>
              Products are inspected at all stages of fabrication for welding
              quality, dimensional tolerance, surface.
            </p>
          </div>
          <div className="basis-1/3 border-2 bg-white rounded-lg px-9 py-10">
            <img src={feature3} alt="" className="h-[50px]" />
            <h3 className="text-2xl my-3 font-medium">On time Delivery</h3>
            <p>
              With Quick design capabilities and advanced techniques we deliver
              our services on time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
