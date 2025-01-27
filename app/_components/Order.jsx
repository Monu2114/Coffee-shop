import Image from "next/image";
import { Button } from "@headlessui/react";

export default function Order() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container md:ml-20 ml-10">
          <div className="md:grid grid-cols-2 md:gap-32">
            <div
              className="md:ml-20"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <Image
                src="/coffee/coffee-mid.png"
                alt="Shakes"
                width={800}
                height={700}
              ></Image>
            </div>
            <div
              className="flex flex-col gap-2 md:py-20"
              data-aos="fade-down"
              data-aos-duration="1300"
            >
              <h1 className="text-5xl font-bold">
                Order Your Favourite Coffee
              </h1>
              <p className="py-4 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                reprehenderit repellat aut molestias est, odit quos voluptatem
                sint dicta, mollitia minima corporis accusantium optio vero?
              </p>
              <Button className="p-3 w-36 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide bg-black text-white">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
