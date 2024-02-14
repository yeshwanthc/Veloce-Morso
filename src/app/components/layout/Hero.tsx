import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <main className="main-container w-full p-4 h-[100%] max-w-[1500px] mx-auto overflow-x-hidden">
      <div className="px-2 mt-5 py-12">
        <div>
          <h1 className="text-6xl font-semibold">
            With&nbsp;<span className="text-red1">Pizza</span>
            <br /> everything is
             better
          </h1>
          <p className="mt-4 text-lg">
            Pizza makes everything better Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam architecto voluptatibus, suscipit
            asperiores sint rem nisi sequi autem explicabo sed, numquam nam
            illo, deserunt totam? Ab illum nulla minus impedit!
          </p>
        </div>

        <div className="mt-4 flex gap-4 w-full">
          <button className="rounded-[4px] bg-red1 text-white py-2 px-3 flex items-center">
            Order Now <Right />
          </button>
          <button className="rounded-[4px] bg-[#f1f1f1] text-black py-2 px-3 flex items-center">
            Know More
            <Right />
          </button>
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image
          src={"/images/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </main>
  );
};

export default Hero;
