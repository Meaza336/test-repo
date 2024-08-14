import React from 'react';
import { FcGoogle } from "react-icons/fc";
import img2 from '../image/2.png';
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img2})`, filter: 'blur(8px)' }}
      ></div>
      <div className="bg-gray-200 shadow-md rounded-md w-[500px] p-8 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block font-medium mb-1 ">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-black mt-4 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Register
            </button>
          </div>
          <div className="flex justify-center">
            <h2 className="mb-6 mt-4 font-medium text-gray-700text-center">Already Have An Account?</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="border-b-2 border-gray-400 w-1/2"></div>
            <h2 className="text-gray-700 font-medium">or</h2>
            <div className="border-b-2 border-gray-400 w-1/2"></div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-50 bg-white text-gray-500 font-normal  py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 flex items-center justify-center"
            >
              <FcGoogle className="mr-2"/> Sign Up With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}