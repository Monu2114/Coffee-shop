"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="mt-28 flex flex-col gap-20">
      <div className="flex items-center justify-center relative">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold ">Client Testimonial</h1>
          <p className="text-gray-400 -ml-2 w-1/3 absolute top-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6 ml-10">
        <div className="hidden sm:block -space-x-2 overflow-hidden">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          ></img>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          ></img>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          ></img>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          ></img>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          ></img>
        </div>
        <div className="boder-none sm:border-l-2 border-black sm:pl-8">
          <div className="flex justify-center sm:justify-start">
            <h3 className="text-2xl font-semibold mr-2">4.6</h3>

            <img
              className="w-5"
              src="https://www.svgrepo.com/show/513354/star.svg"
              alt="stars-icon"
            ></img>
          </div>
          <div>
            <h3 className="text-sm">Rated by 25k on google.</h3>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                About Macbook &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Laptop
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
              >
                Read
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                About Macbook &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Laptop
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
              >
                Read
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
                About Macbook &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </h1>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                  #Laptop
                </span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
              >
                Read
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
