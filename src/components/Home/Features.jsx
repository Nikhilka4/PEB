import React from "react";

const Features = () => {
  return (
    <div className="bg-[#618741]">
        <div className="w-[87%] h-[85vh] py-10 mx-auto flex ">
          <div className="w-[100%] h-[50%] mx-auto flex">
            <div className="w-[45%] flex justify-center items-center">
              <p className="text-7xl font-bold">More than just Steel Structure</p>
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
                  <span className="text-4xl font-semibold">3</span> Ongoing Projects
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
        </div>
    </div>
  );
};

export default Features;
