import React from 'react';
import img3 from '../image/3.png';
import { MdDateRange } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { TbMapPin } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaCannabis } from "react-icons/fa6";
import { PiCigaretteSlashFill } from "react-icons/pi";
import { GiBeerBottle } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import img4 from '../image/4.png';
import img5 from '../image/5.png';
import img6 from '../image/6.png';
import Footer from './footer';

function Today() {
  return (
    <div className="py-12">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Great Ethiopian Run - 2016</h3>
        <div className="flex justify-start mb-4">
          <h2 className="mr-4">About</h2>
          <h2 className="mx-4">Schedule</h2>
          <h2 className="ml-4">Terms And Regulation</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className={"bg-white rounded-lg shadow-md overflow-hidden w-full"}>
            <div className="aspect-w-16 aspect-h-9">
              <img src={img3} alt="Product" className="object-cover w-full h-full p-10 " />
            </div>
            <div className="mt-4 flex items-center justify-start space-x-20">
                <button type="submit" className="w-50 bg-gray-300 text-black font-medium py-2 px-4">
                 <h2>Sport</h2>
                </button>
                <div className="flex items-center space-x-2">
                 <MdDateRange />
                 <h2>Date: Mar 26/ 2024</h2>
               </div>
               <div className="flex items-center space-x-2">
                 <IoTimerOutline />
               <h2>Time: 02 : 30 AM EA</h2>
               </div>
               <div className="flex items-center space-x-2">
               <TbMapPin />
               <h2>Venue: Addis ababa</h2>
               </div>
              </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <div className="bg-white rounded-lg p-6 w-[500px]"> 
            <div className="w-full flex justify-start">
              <button
                type="submit"
                className="w-full bg-black text-white font-thin py-4 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500" >
                Get Your Ticket
              </button>
            </div>
            <div className="mt-4 ">
              <h1 className="flex justify-center">|</h1>
              <h1 className="mx-4 flex justify-center">or</h1>
              <h1 className="flex justify-center">|</h1>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-gray-900 mb-2">Contact Us For Registration and Ticketing</h1>
            </div> 
            <div className="mt-4">
              <h1 className="flex justify-start mt-4"><FaFacebook className="mr-2"/>  Dm us @Eventshub</h1>
              <h1 className="flex justify-start mt-4"><IoLogoWhatsapp className="mr-2"/>  +251922937282</h1>
              <h1 className="flex justify-start mt-4"><FaPhoneVolume className="mr-2"/>  +25192293728</h1>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">About This Event</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3 className="text-lg font-bold mb-4 mt-4">Event Schedule</h3>
            <p>Time: 02 : 30 AM Ethiopian</p>
            <h3 className="text-lg font-bold mt-6 mb-6">Event Terms and Regulation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3 className="text-lg font-bold mb-4 mt-4">Prohabited things</h3>
            <div className="mt-4 flex justify-start space-x-80">
              <h1 className="flex justify-start mt-4"><FaCannabis className="mr-2"/>Cannabis</h1>
              <h1 className="flex justify-start mt-4"><GiBeerBottle className="mr-2"/>Alcohol</h1>
            </div>
            <div className="mt-6 flex justify-start space-x-80">
              <h1 className="flex justify-start mt-4"><PiCigaretteSlashFill className="mr-2"/>Tobacco</h1>
              <h1 className="flex justify-start mt-4">Adult Entertainment</h1>
            </div>
            <h3 className="text-lg font-bold mb-4 mt-4">Amenities</h3>
            <div className="mt-6">
              <h1 className="flex justify-start mt-6"><FaTshirt className="mr-2"/>Tshirt</h1>
              <h1 className="flex justify-start mt-6"><FaBottleWater className="mr-2"/>Bottle of water</h1>
            </div>
          </div>
        </div>
    <div className="flex justify-start">
    <h1 className="text-lg font-bold mb-4 mt-4">Featured Events</h1>
    </div>
    <div class="container mx-auto px-4 py-8 flex space-x-4 overflow-x-auto snap-x">
  <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img4} alt="Product" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
        <p class="text-gray-600">lorem ipsom kendrick lemar asnei laklerk seminen</p>
        <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
        <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
          Detail
          <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img3} alt="Product" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Great ethiopian run</h3>
        <p class="text-gray-600">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
        <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
        <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
          Detail
          <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img5} alt="Product" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Programming Contest</h3>
        <p class="text-gray-600">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
        <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
        <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
          Detail
          <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img6} alt="Product" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Art Exhibition</h3>
        <p class="text-gray-600">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
        <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
        <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
          Detail
          <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 p-4 snap-center">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img6} alt="Product" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Art Exhibition</h3>
        <p class="text-gray-600">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
        <p class="text-gray-600 mt-2">- Mar 26/ 2024</p>
        <button class="w-full bg-white text-gray-700 font-thin py-2 px-4 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-500 mt-4 flex items-center justify-start">
          Detail
          <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</div>
        </div>
        <Footer/>
        </div>
  );
}


export default Today;