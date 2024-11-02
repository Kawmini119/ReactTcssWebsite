import React from "react";
import globeImage from "../assets/img1.png";
import computerImage from "../assets/img2.png";
import paletteImage from "../assets/img3.png";
import bulbImage from "../assets/img4.png";

const BenefitsSection = () => {
  return (
    <section className="flex flex-col items-center text-center p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-bold font-dmSerif leading-relaxed mt-6 mb-8 max-w-2xl mx-auto">
        Frontend Practice provides you with the inspiration and resources to
        create beautiful websites.
      </h2>
      <p className=" text-[26px] font-archivo md:text-xl mt-2 mb-8 max-w-xl mx-auto">
        Here are some ways you can benefit from using our platform:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="flex items-center border border-black p-4 ">
          <img
            src={globeImage}
            alt="Globe"
            className="w-20 h-20 md:w-24 md:h-24 mr-4"
          />
          <p className="text-md md:text-lg">
            Enhance your skills by building real websites selected for their
            educational value.
          </p>
        </div>

        <div className="flex items-center border border-black p-4 ">
          <img
            src={computerImage}
            alt="Computer"
            className="w-20 h-20 md:w-24 md:h-24 mr-4"
          />
          <p className="text-md md:text-lg">
            Test and improve your frontend knowledge through various challenges.
          </p>
        </div>

        <div className="flex items-center border border-black p-4 ">
          <img
            src={paletteImage}
            alt="Palette"
            className="w-20 h-20 md:w-24 md:h-24 mr-4"
          />
          <p className="text-md md:text-lg">
            Use the provided color palettes for each project to save time.
          </p>
        </div>

        <div className="flex items-center border border-black p-4 ">
          <img
            src={bulbImage}
            alt="Bulb"
            className="w-20 h-20 md:w-24 md:h-24 mr-4"
          />
          <p className="text-md md:text-lg">
            Find helpful, curated resources to tackle challenging elements.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12">
        <h3 className="text-xl md:text-2xl font-bold font-dmSerif mb-6 max-w-xl mx-auto">
          Ready to become a better frontend developer?
        </h3>
        <button className="px-6 py-3 border-2 border-black font-semibold hover:bg-black hover:text-white transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
