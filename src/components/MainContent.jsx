import React from "react";
import Image from "../assets/image.png";

const MainContent = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 border-b-2 border-black"
      style={{ backgroundColor: "#FAEBD7" }}
    >
      <div className="md:ml-[120px] mt-6 md:mt-[70px] w-full md:w-[45%] text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-dmSerif font-bold mb-4">
          Become a better
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-dmSerif font-bold mb-4">
          frontend developer.
        </h2>
        <p className="text-lg md:text-xl lg:text-[23px] font-archivo my-5 w-full md:w-[80%] mx-auto md:mx-0">
          Take your frontend skills to the next level by recreating{" "}
          <strong className="font-semibold">real websites</strong> from{" "}
          <strong className="font-semibold">real companies</strong>.
        </p>
        <p className="text-lg md:text-xl lg:text-[23px] font-archivo my-5 w-full md:w-[75%] mx-auto md:mx-0">
          The perfect type of practice for developers of all skill levels. Are
          you up for the challenge?
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <button className="px-4 py-2 bg-white text-black text-sm md:text-base lg:text-lg border-2 border-black hover:bg-black hover:text-white">
            View Projects
          </button>
          <button className="px-4 py-2 border-2 border-black text-black text-sm md:text-base lg:text-lg hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={Image}
          alt="Example projects"
          className="w-[80%] sm:w-[70%] md:w-full lg:w-[90%] h-auto"
        />
      </div>
    </div>
  );
};

export default MainContent;
