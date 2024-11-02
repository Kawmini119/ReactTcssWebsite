import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 md:flex md:justify-between md:items-center border-b-2 border-black">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-dmSerif text-[24px] md:text-[30px] font-bold hover:underline ml-4 md:ml-32">
          Frontend Practice
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none mr-4"
        >
          ☰
        </button>
      </div>
      {/* Links for larger screens and mobile dropdown */}
      <div
  className={`${
    isOpen ? "flex" : "hidden"
  } flex-col items-start md:flex md:flex-row gap-4 md:gap-10 mt-4 md:mt-0 mr-4 md:mr-10 font-archivo`}
>
  <Link to="/" className="font-bold text-lg hover:underline focus:outline-dotted">Home</Link>
  <Link to="/projects" className="font-bold text-lg hover:underline focus:outline-dotted">Projects</Link>
  <Link to="/blog" className="font-bold text-lg hover:underline focus:outline-dotted">Blog</Link>
  <Link to="/faq" className="font-bold text-lg hover:underline focus:outline-dotted">FAQ</Link>
  <Link to="/contact" className="font-bold text-lg focus:outline-dotted">Contact</Link>
  <Link to="/newsletter" className="font-bold text-lg hover:underline focus:outline-dotted">
    Newsletter <span className="ml-1 text-xl">↗</span>
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
