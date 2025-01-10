{/* <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">Projects</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div> */}
import Image from "next/image";
import React from "react";

const projects = () => {
  return (
    <div className="w-[87%] h-fit py-10 mx-auto">
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">Projects</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div> 
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
            Paramjyoti School <br /> Roofing
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
            Warehouse for VsB <br /> agro tech
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
      <div className="w-full flex flex-col md:flex-row items-center justify-between my-8">
        <Image
          src="/p3.png"
          alt=""
          className="rounded-xl"
          width={500}
          height={500}
        />
        <div>
          <h3 className="text-5xl font-medium mb-4 mt-4 md:mt-0 text-center md:text-left">
            Warehouse
          </h3>
          <p className="text-2xl font-medium mb-4 text-center md:text-left">
          Kodangal, Telangana, 17,000 sq.ft{" "}
          </p>
          <p className="text-lg text-center md:text-left">
            This Project took around 8 Weeks to complete from Start to Finish.
          </p>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default projects;
