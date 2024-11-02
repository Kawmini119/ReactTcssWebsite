import React, { useState } from "react";
import projectImage1 from "../assets/C1-Ableton.png";
import projectImage2 from "../assets/C2-lobe.png";
// Add additional image imports as necessary

// Project data array with images, titles, and levels
const projects = [
  {
    id: 1,
    title: "Ableton",
    level: "Level 1",
    image: projectImage1,
  },
  {
    id: 2,
    title: "Abstract",
    level: "Level 1",
    image: projectImage2,
  },
  // Add more projects here as per the full list
];

const ProjectLibrary = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <section className="flex flex-col items-center text-center p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dmSerif mb-8 md:mb-16 mt-6 md:mt-10">
        Project Library
      </h1>

      {/* Instructions */}
      <div className="text-md md:text-lg mb-4 md:mb-6 max-w-2xl">
        <h2 className="font-dmSerif font-bold underline mb-4 md:mb-6 text-xl md:text-2xl">
          How to get started:
        </h2>
        <ul className="text-left space-y-2 md:space-y-3 text-lg md:text-xl font-archivo">
          <li>→ Choose one of our projects below.</li>
          <li>→ Recreate all or parts of the page.</li>
          <li>→ Improve and test your skills.</li>
          <li className="font-bold">
            ✓ Become a better frontend developer.
          </li>
        </ul>
      </div>

      {/* Buttons for project levels */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3.5 mb-4 md:mb-6">
        <button
          className="px-4 md:px-6 py-2 md:py-3 border-2 bg-black text-white"
          onClick={() => setShowAll(true)}
        >
          View All
        </button>
        <button className="px-4 md:px-6 py-2 md:py-3 border-2 border-black hover:bg-green-300 hover:text-black">
          Level 1
        </button>
        <button className="px-4 md:px-6 py-2 md:py-3 border-2 border-black hover:bg-yellow-300 hover:text-black">
          Level 2
        </button>
        <button className="px-4 md:px-6 py-2 md:py-3 border-2 border-black hover:bg-orange-600 hover:text-black">
          Level 3
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for project by name: Nintendo"
        className="border-2 border-black shadow-lg px-3 py-2 md:py-3 mb-6 md:mb-10 w-full max-w-lg"
      />

      {/* Footer text */}
      <p className="text-xs md:text-sm text-gray-700 mt-4 md:mt-6 max-w-2xl mx-auto">
        There are no rules with these projects. Use any languages, libraries, or
        frameworks you want to recreate and learn from them.
      </p>

      {/* Projects Grid */}
      {showAll && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-8 md:mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg relative"
            >
              {/* Image Section */}
              <div className="relative bg-[#FAEBD7] h-48 md:h-64 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs md:text-sm font-bold px-2 py-1">
                  {project.level}
                </div>
              </div>

              {/* Title Section */}
              <div className="bg-[#FAEBD7] border-t-2 border-black p-4 text-left">
                <h3 className="text-md md:text-lg font-bold font-archivo">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectLibrary;
