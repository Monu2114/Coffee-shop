import Image from "next/image";
import { Button } from "@headlessui/react";
export default function Selling() {
  return (
    <div className="bg-white-50">
      <div className="container py-20">
        <div className="grid grid-cols-6 text-center md:py-16">
          <div className="col-start-3 col-span-3">
            <h1 className="text-5xl font-bold">Best Selling Coffee</h1>
            <p className="py-2 text-gray-600 text-lg">
              Come fast and grab our coffees
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3  w-4/5 ml-28 cursor-pointer gap-48">
          <div className="w-96 h-[380px] shadow-lg  rounded-xl hover:shadow-xl ">
            <div className="ml-4 mt-9 px-8">
              <p className="py-2 text-gray-600 text-lg">#1 Selling</p>
              <h1 className="text-3xl py-2 font-bold tetx-gray-700  mr-40">
                Double Expresso
              </h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>
              <div className="flex gap-10">
                <h1 className="text-2xl py-2 font-bold tetx-gray-700 ">
                  $ 59.99
                </h1>
                <Button className="py-3 px-4 ml-12 w-42 h-12 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </div>

          <div className="w-96 h-[380px] shadow-lg  rounded-xl hover:shadow-xl ">
            <div className="ml-4 mt-9 px-8">
              <div className="flex">
                <div>
                  <p className="py-2 text-gray-600 text-lg">#1 Selling</p>
                  <h1 className="text-3xl py-2 font-bold tetx-gray-700  mr-40">
                    Double Expresso
                  </h1>
                </div>
                <div className="">
                  <Image
                    src="/coffee/mid1.png"
                    width={200}
                    height={400}
                    alt="Coffee"
                  ></Image>
                </div>
              </div>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>
              <div className="flex gap-10">
                <h1 className="text-2xl py-2 font-bold tetx-gray-700 ">
                  $ 59.99
                </h1>
                <Button className="py-3 px-4 ml-12 w-42 h-12 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
          <div className="w-96 h-[380px] shadow-lg  rounded-xl hover:shadow-xl ">
            <div className="ml-4 mt-9 px-8">
              <p className="py-2 text-gray-600 text-lg">#1 Selling</p>
              <h1 className="text-3xl py-2 font-bold tetx-gray-700  mr-40">
                Double Expresso
              </h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque
                nam.
              </p>
              <div className="flex gap-10">
                <h1 className="text-2xl py-2 font-bold tetx-gray-700 ">
                  $ 59.99
                </h1>
                <Button className="py-3 px-4 ml-12 w-42 h-12 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}