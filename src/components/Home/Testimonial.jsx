import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
import testimonial from "../../assets/testimonial.svg";

const Testimonial = () => {
  return (
    <div className="w-[87%] h-[85vh] py-10 mx-auto flex justify-center items-center gap-10">
      <div className="basis-1/3 h-[75%] flex flex-col justify-center items-start px-6 gap-12">
        <img src={testimonial} alt="" className="h-[50px]" />
        <p className="text-2xl">
          This is your Testimonial section paragraph. It’s a great place to tell
          users how much you value your customers and their feedback.
        </p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              src="https://static.wixstatic.com/media/e4f166_a1a7dbad584e463e88e11ac8f658fe8f~mv2.jpg/v1/crop/x_446,y_659,w_1638,h_1638/fill/w_80,h_80,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Purple%20Fashion.jpg"
              alt=""
              className="h-[70px] rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p>Client Review</p>
          </div>
        </div>
      </div>
      <div className="basis-1/3 h-[75%] flex flex-col justify-center items-start px-6 gap-12">
        <img src={testimonial} alt="" className="h-[50px]" />
        <p className="text-2xl">
          This is your Testimonial section paragraph. It’s a great place to tell
          users how much you value your customers and their feedback.
        </p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              src="https://static.wixstatic.com/media/e4f166_a1a7dbad584e463e88e11ac8f658fe8f~mv2.jpg/v1/crop/x_446,y_659,w_1638,h_1638/fill/w_80,h_80,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Purple%20Fashion.jpg"
              alt=""
              className="h-[70px] rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p>Client Review</p>
          </div>
        </div>
      </div>
      <div className="basis-1/3 h-[75%] flex flex-col justify-center items-start px-6 gap-12">
        <img src={testimonial} alt="" className="h-[50px]" />
        <p className="text-2xl">
          This is your Testimonial section paragraph. It’s a great place to tell
          users how much you value your customers and their feedback.
        </p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              src="https://static.wixstatic.com/media/e4f166_a1a7dbad584e463e88e11ac8f658fe8f~mv2.jpg/v1/crop/x_446,y_659,w_1638,h_1638/fill/w_80,h_80,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Purple%20Fashion.jpg"
              alt=""
              className="h-[70px] rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">John Doe</p>
            <p>Client Review</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;
