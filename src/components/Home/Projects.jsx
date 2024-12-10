import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import services1 from "../../assets/services-1.svg";
import { useEffect, useState } from "react";

const Projects = () => {
  const images = [
    "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    ~"https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_501,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="w-[87%] h-[85vh] py-10 mx-auto bg-red-50">
      <div className="h-[40%]">
        <h3 className="flex justify-left items-center gap-4">
          <img src={services1} alt="" />
          <span className="text-xl font-medium">RECENT PROJECTS</span>
        </h3>
        <p className="text-4xl font-medium mt-8">
          Discover our latest projects
        </p>
        <button className="flex justify-left items-center gap-4 mt-8">
          <IoIosArrowRoundForward className="h-12 w-12 font-extralight bg-black text-white p-1" />{" "}
          LEARN MORE
        </button>
      </div>
      <div className="h-[60%] w-full bg-red-300">
        <div className="relative w-full mx-auto overflow-hidden border border-gray-300 rounded-lg">
          {/* Carousel Content */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex + 1) * 100}%)`, // Offset the index to show half images
              width: `${(images.length + 2) * 100}%`,
            }}
          >
            {/* Clone last image to the beginning for infinite loop */}
            <div className="flex-shrink-0 w-1/3">
              <img
                src={images[images.length - 1]}
                alt={`Slide ${images.length}`}
                className="w-full h-64 object-cover opacity-80"
              />
            </div>

            {/* Actual images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-1/3 transition-opacity duration-500 ${
                  currentIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-80"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}

            {/* Clone first image to the end for infinite loop */}
            <div className="flex-shrink-0 w-1/3">
              <img
                src={images[0]}
                alt="Slide 1"
                className="w-full h-64 object-cover opacity-80"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
