import React from "react";
import Image from "next/image";
const footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div
          className="p-5 sm:w-8/12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            alt=""
            src="/coffee/logo.png"
            className="h-12 w-auto"
            width={200}
            height={200}
          />

          <div className="flex text-gray-500  text-sm  gap-8 mt-12">
            <a href="#" className="text-lg/4 font-medium text-gray-900">
              Cafe Menu
            </a>
            <a href="#" className="text-lg/4 font-medium text-gray-900">
              About Us
            </a>
            <a href="#" className="text-lg/4 font-medium text-gray-900">
              Contact Us
            </a>
            <a href="#" className="text-lg/4 font-medium text-gray-900">
              Alowishus Catering
            </a>
          </div>
        </div>
        <div
          className="p-5 sm:w-4/12"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3 className="font-medium text-lg text-black-600 mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="mt-4">
            <input
              className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="username@email.com"
            />
          </form>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default footer;
