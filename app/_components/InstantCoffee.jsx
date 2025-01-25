import Image from "next/image";
import { Button } from "@headlessui/react";
import React from "react";

const InstantCofee = () => {
  return (
    <div className="bg-gray-50">
      <div className="conatiner ">
        <div className="grid grid-cols-2 gap-28">
          <div className=" ml-72 flex flex-col gap-8 mt-48">
            <h1 className="text-5xl font-bold w-96">
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
          <div className="InstantCoffee_col relative mt-20 flex">
            <Image
              className="rounded-2xl border-2 border-gray-100 absolute top-10  "
              src="/coffee/coffee-banner.png"
              alt="banner"
              width={250}
              height={250}
            />
            <Image
              className="rounded-2xl border-2  border-gray-100  "
              src="/coffee/coffee-banner.png"
              alt="banner"
              width={250}
              height={250}
            />

            <Image
              className=""
              src="/coffee/hand-drawn.png"
              alt="banner"
              width={280}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantCofee;
