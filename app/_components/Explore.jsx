import { Button } from "@headlessui/react";
import Image from "next/image";
export default function Explore() {
  return (
    <>
      <div className="bg-gray-10">
        <div className="container py-20 ">
          <div className="grid md:grid-cols-6 text-center md:py-16">
            <div className="md:col-start-3 col-span-3">
              <h1 className="text-5xl font-bold">Explore Our Alowishus</h1>
              <p className="py-2 text-gray-600 text-lg">
                A drink from our place will keep your anxiety away
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-14 w-4/5 ml-48 cursor-pointer">
            <div
              className="w-80 h-[400px] shadow-lg  rounded-xl hover:shadow-xl "
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="ml-4 mt-9 px-4">
                <h1 className="text-3xl font-semibold text-gray-700 ">
                  Our Catering
                </h1>
                <p className="py-2">
                  Lorem ipsum dolor sit amet dolor consectetur.
                </p>
                <Image
                  src="/coffee/icon1.png"
                  alt=""
                  className="w-48 h-44 py-4 ml-6 "
                  width={100}
                  height={100}
                />
                <Button className="p-3 ml-6 w-48 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Order Catering
                </Button>
              </div>
            </div>
            <div
              className="w-80 h-[400px] shadow-lg rounded-xl hover:shadow-xl transition-shadow"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="ml-4 mt-9 px-4">
                <h1 className="text-3xl font-semibold text-gray-700 ">
                  The Food
                </h1>
                <p className="py-2">
                  Lorem ipsum dolor sit amet dolor consectetur.
                </p>
                <Image
                  className="w-48 h-44 py-4 ml-6 "
                  src="/coffee/icon2.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <Button className="p-3 ml-14 w-36 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Food Menu
                </Button>
              </div>
            </div>
            <div
              className="w-80 h-[400px] shadow-lg rounded-xl  hover:shadow-xl transition-shadow"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="ml-4 mt-9 px-4">
                <h1 className="text-3xl font-semibold text-gray-700 ">
                  The Getato
                </h1>
                <p className="py-2">
                  Lorem ipsum dolor sit amet dolor consectetur.
                </p>
                <Image
                  className="w-48 h-44 py-4 ml-6 "
                  src="/coffee/icon3.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <Button className="p-3 ml-10 w-46 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                  Discover More
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* ************ */}
      </div>
    </>
  );
}
