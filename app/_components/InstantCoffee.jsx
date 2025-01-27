import Image from "next/image";
import { Button } from "@headlessui/react";
import React from "react";

const InstantCofee = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="conatiner">
        <div className="md:grid grid-cols-2 md:gap-80">
          <div
            className=" md:ml-72 ml-10 flex flex-col gap-8 mt-48"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl font-bold md:w-96">
              Instant Coffee At Your Home
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero?
            </p>
            <Button className="py-3 px-4 w-52 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
              Download Your App
            </Button>
          </div>
          <div
            className="InstantCoffee_col relative mt-10 flex"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Image
              className="-rotate-12 rounded-2xl border-2 border-gray-100"
              src="/coffee/coffee-banner.png"
              alt="banner"
              width={250}
              height={250}
            />
            <Image
              className=" rounded-2xl border-2  border-gray-100 absolute left-24 "
              src="/coffee/coffee-banner.png"
              alt="banner"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantCofee;
