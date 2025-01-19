"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="bg-gray-100 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container ml-10 md:pt-20 md:pb-10">
            <div className="grid grid-cols-2 ml-10">
              <div className="relative">
                <h1 className="text-8xl font-bold py-4 ">
                  Alowishus Delicious Coffee{" "}
                  <div className="absolute top-56 mt-1 right-52">
                    <Image
                      src="/coffee/cafe.png"
                      width={80}
                      alt="award"
                      height={80}
                    />
                  </div>
                </h1>
                <p>Perfect place for some healthy and tasty milkshakes</p>

                <div className="flex gap-4 py-6">
                  <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                    Download App
                  </Button>
                  <Button
                    className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                    variant="outline"
                  >
                    Shop Coffee
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/coffee/hero1.png"
                  width={600}
                  height={600}
                  alt="Milkshake"
                />
                <div className="absolute top-10 mt-1 right-10">
                  <Image
                    src="/coffee/cafe.png"
                    width={120}
                    alt="award"
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
