import React from "react";

const Hero = () => {
  return (
    <div className="w-[87%] h-[85vh] py-10 mx-auto flex">
      <div className="w-[45%]">
        <p className="leading-none text-[110px] font-bold mb-8">We Build PEB Buildings</p>
        <p className="text-xl">From design to completion, our PEB solutions are flexible and dependable, making sure your project is built better, quicker, and stays valuable.</p>
        <button className="border-black border-2 px-6 py-2 mt-4 rounded-2xl hover:bg-black hover:text-white">
            Explore
        </button>
      </div>
      <div className="w-[55%] flex justify-end">
        <img
          src="https://static.wixstatic.com/media/63ef2e_2c43a5d6bf384a25b710695ba0ae5cbe~mv2.jpg/v1/fill/w_849,h_771,fp_0.44_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hero.jpg"
          alt="Hero Image" className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
