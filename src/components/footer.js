import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto">
        <div className="border-b border-black w-full p-4 mx-auto"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-5xl mt-20 font-bold md:mb-0 p-7">ASTUVENT</p>
          <div className="flex justify-center space-x-4 p-4 mt-20">
            <ul className="flex  items-center text-black gap-y-2 gap-x-8">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Events</li>
              <li>FAQs</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="flex space-x-4 p-4 mt-20">
            <a href="#" className="text-black hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-white">
              <CiInstagram />
            </a>
            <a href="#" className="text-black hover:text-white">
              <RiTwitterXLine />
            </a>
            <a href="#" className="text-black hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-black hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="border-b border-black w-full p-4 mt-19 mx-auto"></div>
        <div className="flex justify-center space-x-4 "> 
        <p className="text-black mb-4 mt-4">&copy; 2024 local Event Hub. All rights reserved. </p>
        <p className="text-black mb-4 mt-4 underline">Privacy Policy</p>
        <p className="text-black mb-4 mt-4 underline">Term and Conditions</p>
        <p className="text-black mb-4 mt-4 underline">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;