import { Button } from "@headlessui/react";
import React from "react";

const InstantCofee = () => {
  return (
    <div className="bg-gray-50">
      <div className="conatiner">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold ">Instant Coffee At Your Home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              reprehenderit repellat aut molestias est, odit quos voluptatem
              sint dicta, mollitia minima corporis accusantium optio vero?
            </p>
            <Button className="py-3 px-4 w-44 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
              Download Your App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantCofee;
