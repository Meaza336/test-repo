import React from 'react';
import img1 from '../image/1.png';
import { MdOutlineEmail } from "react-icons/md"
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import Footer from './footer';

export default function Exit() {
  return (
    <div className="mb-6">
      <h1 className="flex flex-col items-center justify-center text-5xl font-bold text-black">
        Create and manage Your Community
        Event
      </h1>
      <h1 className="flex justify-center mb-6 mt-12">Provide the necessary information in the provided space below.</h1>
      <div className="flex justify-center mt-6">
        <h1 className="mx-4 font-bold underline underline-offset-4 decoration-2">Event</h1>
        <h1 className="mx-4 font-bold">Hidden</h1>
      </div>
      <div className="border-b border-black w-3/4 mx-auto"></div>
      <div className="flex justify-center items-center bg-white">
        <div className="bg-white  rounded-md w-[1000px]">
          <div className="flex justify-between space-x-4 mt-8 items-start">
            <div className="w-1/3 bg-white rounded-lg shadow-md">
              <img src={img1} alt="Product" className="object-cover w-full h-48 rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Day Party</h3>
                <p className="text-black">lorem ipsom kendrick lemar asnei laklerk seminen</p>
                <p className="mt-4">- Mar 26/ 2024</p>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-md">
              <img src={img1} alt="Product" className="object-cover w-full h-48 rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Great ethiopian run</h3>
                <p className="text-black">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
                <p className="mt-4">- Mar 26/ 2024</p>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-md">
              <img src={img1} alt="Product" className="object-cover w-full h-48 rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Programming Contest</h3>
                <p className="text-black">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
                <p className="mt-4">- Mar 26/ 2024</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between space-x-4 mt-8 items-start">
            <div className="w-1/3 bg-white rounded-lg shadow-md">
              <img src={img1} alt="Product" className="object-cover w-full h-48 rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Programming Contest</h3>
                <p className="text-black">lorem ipsom kendrick lemar asnei laklerk seminen.</p>
                <p className="mt-4">- Mar 26/ 2024</p>
              </div>
            </div>
            
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 mt-16 bg-black text-white font-thin py-2 px-4  hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Create Event post!
            </button>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white">
        <div className="bg-white  rounded-md w-[1000px]">
            <h1 className="flex justify-start mt-14">Connect</h1>
            <h3 className="text-5xl font-bold mb-4 mt-8">For any inqueries 
            </h3>
            <h3 className="text-5xl font-bold mb-4">Contact us </h3>
        </div>
        </div>
      <div className="flex justify-center items-center bg-white">
        <div className="bg-white  rounded-md w-[1000px]">
          <div className="flex justify-between space-x-4 mt-8 items-start">
            <div className="w-1/3 bg-white rounded-lg shadow-md">
             <MdOutlineEmail className="w-6 h-6 text-gray-500" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Email</h3>
                <p className="text-black">Send us an email and we'll get back to you.</p>
                <p className="mt-4">hello@localeventhub.com</p>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-md">
            <FiPhone className="w-6 h-6 text-gray-500" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Phone</h3>
                <p className="text-black">Give us a call during business hours.</p>
                <p className="mt-4">+2 5111 111 111</p>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-md">
            <RiMapPinLine className="w-6 h-6 text-gray-500" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-700">Email</h3>
                <p className="text-black">Send us an email and we'll get back to you.</p>
                <p className="mt-4">hello@localeventhub.com</p>
              </div>
            </div>
          </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}