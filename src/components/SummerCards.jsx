import React from "react";

import { summercard } from "./common/Helper";
import Image from "next/image";

const SummerCards = () => {
  return (
    <div className=" px-3 sm:px-4 md:px-6 lg:px-8  bg-white">
      {/* Heading */}
      <div className="text-center  ">
        <h2 className="text-[#09090B] font-inter font-bold text-[26px] leading-[133%]">
          Summer 2025
        </h2>
        <p className="text-[#535862] text-base leading-[170%] pt-[11px]">
          Your go-to picks for a sun-soaked season.
        </p>
      </div>

      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summercard.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer w-full"
          >
            {/* Image Container */}
            <div className="overflow-hidden relative ">
              <Image
                src={product.image}
                alt={product.name}
                width={338}
                height={497}
                className="w-full  object-fill  transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Button on hover */}
              <button className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 bg-[#09090B] text-white  py-4 w-[250px] opacity-0 group-hover:bottom-5 group-hover:opacity-60 transition-all duration-500 rounded-[20px]">
                Out Of Stock
              </button>
            </div>
            {/* Product Name */}
            <h3 className="text-[#09090B] text-[20px] pt-2 leading-[120%]">
              {product.name}
            </h3>
            {/* Price Section */}
            <div className="pt-1 flex gap-1 items-center">
              <span className="text-[#09090B] font-inter font-medium leading-[185%]">
                {product.price}
              </span>
              {product.oldPrice && (
                <del className="text-sm text-[#535862] font-inter font-medium leading-[205%]">
                  {product.oldPrice}
                </del>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center  justify-center pt-11 pb-[40px] sm:pb-[78px] md:pb-[85px] lg:pb-[93px] cursor-pointer">
        <button className=" text-[#09090B] cursor-pointer flex gap-[3px] hover:gap-[8px] duration-300">
          View All
          <Image
            width={20}
            height={20}
            src="/images/png/arrow-black.png"
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
};
export default SummerCards;
