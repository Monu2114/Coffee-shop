"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

export default function Testimonials() {
  return (
    <div className="container py-28">
      <div className=" flex flex-col gap-10 ">
        <div className=" flex flex-col items-center gap-8 ml-52">
          <div className="flex flex-col justify-center items-center gap-6 ">
            <h1 className="text-5xl font-bold ">Client Testimonial</h1>

            <div className="text-gray-600  w-3/5 top-24 px-20 py-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                optio quisquam dicta maxime, perferendis veniam!
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-x-6 ml-12">
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
        </div>

        <div className="ml-24 container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-96 rounded-md border bg-white dark:bg-gray-800 shadow-lg md:m-8 hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-700">
                <div className=" bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    className="rounded-t-md object-cover mx-auto "
                    width={300}
                    height={320}
                  />
                </div>

                <div className="p-7 ">
                  <div className="grid grid-cols-2 items-center">
                    <h1 className="inline-flex text-lg font-bold text-gray-900 dark:text-gray-100">
                      Aayesha Ahmed
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-left text-balance text-gray-600 dark:text-gray-400 pt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic
                    reprehenderit repellat aut molestias est, odit quos
                    voloptatem sint dicta, mollitia minima corporis accusantium
                    optio vero? Excepturi, debitis?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-96 rounded-md border bg-white dark:bg-gray-800 shadow-lg md:m-8 hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-700">
                <div className=" bg-gray-200">
                  <Image
                    src="/coffee/girl2.png"
                    alt="Laptop"
                    className="rounded-t-md object-cover mx-auto "
                    width={328}
                    height={320}
                  />
                </div>

                <div className="p-7 ">
                  <div className="grid grid-cols-2 items-center">
                    <h1 className="inline-flex items-center text-xl font-bold text-black dark:text-gray-100">
                      Liba Jadoon
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-balance text-gray-600 dark:text-gray-400 pt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic
                    reprehenderit repellat aut molestias est, odit quos
                    voloptatem sint dicta, mollitia minima corporis accusantium
                    optio vero? Excepturi, debitis?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-96 rounded-md border bg-white dark:bg-gray-800 shadow-lg md:m-8 hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-700">
                <div className=" bg-gray-200">
                  <Image
                    src="/coffee/man.png"
                    alt="Laptop"
                    className="rounded-t-md object-cover mx-auto "
                    width={370}
                    height={320}
                  />
                </div>

                <div className="p-7 ">
                  <div className="grid grid-cols-2 items-center">
                    <h1 className="inline-flex items-center text-lg font-bold text-gray-900 dark:text-gray-100">
                      Ahmed Ali
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-left text-gray-600 dark:text-gray-400 pt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic
                    reprehenderit repellat aut molestias est, odit quos
                    voloptatem sint dicta, mollitia minima corporis accusantium
                    optio vero? Excepturi, debitis?
                  </p>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="w-96 rounded-md border bg-white dark:bg-gray-800 shadow-lg md:m-8 hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-700">
                <div className=" bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Laptop"
                    className="rounded-t-md object-cover mx-auto "
                    width={300}
                    height={320}
                  />
                </div>

                <div className="p-7 ">
                  <div className="grid grid-cols-2 items-center">
                    <h1 className="inline-flex text-lg font-bold text-gray-900 dark:text-gray-100">
                      Aayesha Ahmed
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                      <Star width={20} className="text-yellow-400" />
                    </div>
                  </div>
                  <p className=" text-left text-balance text-gray-600 dark:text-gray-400 pt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic
                    reprehenderit repellat aut molestias est, odit quos
                    voloptatem sint dicta, mollitia minima corporis accusantium
                    optio vero? Excepturi, debitis?
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
