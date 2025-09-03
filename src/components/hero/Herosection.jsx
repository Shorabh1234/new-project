import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[750px] lg:h-[900px] overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/NjTmL2YIzs2LWaHT2O5VsxgAQ.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="relative z-10 max-w-[545px] w-full pl-[40px] pt-[180px] 
        md:pl-[60px] md:pt-[220px] 
        lg:pl-[80px] lg:pt-[252px]"
      >
        <p
          className="
            font-inter font-bold color-black
            text-[28px] leading-[34px] 
            sm:text-[36px] sm:leading-[42px] 
            md:text-[44px] md:leading-[50px] 
            lg:text-[52px] lg:leading-[58px]
          "
        >
          Effortless Style, Thoughtfully Made
        </p>

        <p
          className="
            font-normal font-md tracking-[0.32px] color-black
            pt-[10px] text-[14px] leading-[20px]
            sm:text-[15px] sm:leading-[22px]
            md:text-[16px] md:leading-[24px]
          "
        >
          Modern essentials in soft tones and timeless cuts designed to feel
          good and look even better.
        </p>

        <div className="flex gap-[10px] items-center pt-4 flex-wrap">
          <button
            className="
              w-[140px] h-[38px] sm:w-[150px] sm:h-[38px] md:w-[162px] md:h-[40px] 
              rounded-[50px] bg-nav  tracking-[0.32px] font-normal color-white 
              flex items-center justify-center gap-[10px] 
              hover:scale-95 duration-300 cursor-pointer font-sm sm:font-md
            "
          >
            Shop Women
            <Image
              src="/images/png/arrow-white.png"
              width={20}
              height={20}
              alt="arrow-img"
            />
          </button>

          <button
            className="
              w-[140px] h-[38px] sm:w-[150px] sm:h-[38px] md:w-[162px] md:h-[40px] 
              rounded-[50px] bg-white border border-black 
               tracking-[0.32px] font-normal color-black
              flex items-center justify-center gap-[10px] 
              hover:scale-95 duration-300 cursor-pointer font-sm sm:font-md
            "
          >
            Shop Men
            <Image
              src="/images/png/arrow-black.png"
              width={20}
              height={20}
              alt="arrow-img"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
