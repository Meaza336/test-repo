import React from 'react';
import img2 from '../image/2.png';
import { Link } from 'react-router-dom';

export default function Verification() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img2})`, filter: 'blur(8px)' }}
      ></div>
      <div className="bg-gray-200 shadow-md rounded-md w-[500px] p-8 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-start">Verification Code</h2>
        <h2 className="mb-6">Check your e-mail and try to enter the verification code that has been sent to you</h2>
        <div>
          <h2 className="text-2xl font-normal mb-6 text-center">Enter Code</h2>
        </div>
        <form className="flex justify-center">
            <div className="mb-4 flex gap-4">
            <div className="w-full">
              <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500" />
              <div className="flex justify-center items-center gap-4">
            <div className="border-b-2 border-gray-500 w-1/2"></div>
            <div className="border-b-2 border-gray-500 w-1/2"></div>
            <div className="border-b-2 border-gray-500 w-1/2"></div>
            <div className="border-b-2 border-gray-500 w-1/2"></div>
            </div>
            </div>
            </div>
            <div className="flex justify-center">
        </div>
        </form>
        <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 bg-gray-800 text-white font-thin py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Verify
            </button>
        </div>
        <div className="flex justify-center mt-4">
          <h2 className="font-bold">Return to Login</h2>
        </div>
      </div>
      <Link to="/today">Go to Today</Link>
    </div>
  );
}