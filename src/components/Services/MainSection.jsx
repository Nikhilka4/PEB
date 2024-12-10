import React from "react";
import services1 from "../../assets/services-1.svg";
import Accordion from "../Accordion";

const MainSection = () => {
    const accordionData = [
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        { title: 'Sustainable & eco-friendly', content: 'This is the space to describe the service and explain how customers or clients can benefit from it. It’s an opportunity to add a short description that includes relevant details, like pricing, duration, location and how to book the service.' },
        
      ];
  return (
    <div className="w-[87%] mx-auto">
      <div className="flex justify-center items-center gap-10">
          <div className="w-[50%] h-[85vh] flex justify-center items-start">
            <img
              src="https://static.wixstatic.com/media/a4c183_90e3e53ca9ca4fbd9a9e39740db8d34b~mv2.jpg/v1/fill/w_846,h_904,fp_0.17_0.30,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1194454929.jpg"
              alt=""
              className="h-[90%] w-full object-cover rounded-xl"
            />
          </div>
          <div className="w-[50%]">
            <h3 className="flex justify-left items-center gap-4">
              <img src={services1} alt="" />
              <span className="text-xl font-medium">OUR SERVICES</span>
            </h3>
            <p className="text-5xl font-medium my-8">
            Diverse solutions tailored to your every need
            </p>
            <Accordion items={accordionData} />
          </div>
      </div>
      <div className="">
        <h3>FAQ</h3>
      </div>
    </div>
  );
};

export default MainSection;
