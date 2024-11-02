import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="text-center mb-4">
        <p className="text-lg font-semibold">Frontend Practice - © 2024</p>
      </div>
      <div className="flex justify-center gap-6 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/newsletter" className="hover:underline">Newsletter <span className="ml-1 text-lg">↗</span></Link>
      </div>
    </footer>
  );
};

export default Footer;
