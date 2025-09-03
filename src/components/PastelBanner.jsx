import React from "react";
const PastelBanner = () => {
  return (
    <div className="bg-[url('/images/png/pastel-banner.png')] h-[500px] sm:h-[600px] md:h-[765px] bg-cover mx-2 sm:mx-4 rounded-xl sm:rounded-2xl   flex justify-center md:justify-end items-center px-4">
      <div className="max-w-[521px] w-full pr-0 md:pr-12 text-center md:text-left">
        {/* Title */}
        <p className="text-[#09090B] font-inter font-bold text-xl sm:text-2xl md:text-3xl">
          Pastel Dreams
        </p>
        {/* Description */}
        <p className="text-[#09090B] text-sm sm:text-base leading-relaxed sm:leading-[170%] pt-3">
          Effortless fashion for every mood — light, calm, and a little playful.
          Inspired by pastels, natural textures, and everyday essentials.
        </p>
        {/* Button */}

        <button className="mt-6 flex items-center cursor-pointer justify-center gap-2 text-[#fff] text-sm sm:text-base rounded-[12px] sm:rounded-[16px] bg-nav hover:text-[#fff] hover:bg-transparent hover:scale-95 duration-300 w-[160px] sm:w-[200px] h-[40px] mx-auto md:mx-0">
          Explore Collection
          <img
            src="/images/png/arrow-white.png"
            alt="Arrow Right"
            className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]"
          />
        </button>
      </div>
    </div>
  );
};
export default PastelBanner;
