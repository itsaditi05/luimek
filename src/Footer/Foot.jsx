import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo/Luimek-Logo.png" alt="Luimek Logo" className="w-40 mb-4" />
          <h2 className="text-2xl font-light tracking-wide text-white mb-4">L U I M E K</h2>

          {/* Social Links */}
          <div className="flex space-x-5 mt-4 text-xl text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-all"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition-all"><FaYoutube /></a>
            <a href="#" className="hover:text-yellow-400 transition-all"><FaPinterestP /></a>
            <a href="#" className="hover:text-yellow-400 transition-all"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Product Guide */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-yellow-400 pl-2">
            Product Guide
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400 transition-all">Ceiling Lights</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Wall Lights</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Track Lights</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Decor Lamps</a></li>
          </ul>
        </div>

        {/* Info Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-yellow-400 pl-2">
            Information
          </h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-400 transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Blogs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Luimek Lights — Illuminating Spaces with Elegance 💡
      </div>
    </footer>
  );
};

export default Footer;

