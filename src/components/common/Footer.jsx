import React from "react";
import { footerLinks } from "./Helper";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-purple-200 py-12 mx-[12px] rounded-[16px] md:mt-11">
      <div className="max-w-7xl   mx-auto px-3 md:px-6 flex lg:flex-row flex-col justify-center  lg:justify-between gap-5">
        <div className="w-full max-w-[366px]">
          <h3 className="text-[#09090B] font-medium leading-[170%] mb-2 text-[20px]">
            Subscribe to our mailing list & Earn 20% off code to your inbox
          </h3>
          <div className="flex items-center w-full lg:max-w-md bg-white rounded-full overflow-hidden shadow-sm border border-gray-300">
            <input
              type="email"
              placeholder="Enter Your Email"
              className=" p-2 w-full md:px-4 md:py-2 text-[#535862] focus:outline-none text-[20px] rounded-l-full"
            />
            <button className="bg-black text-white rounded-full p-3.5 md:py-4 md:px-5 m-1 flex items-center justify-center">
              →
            </button>
          </div>
          <p className="text-xs text-[#09090B] text-[12px] mt-3 max-w-sm">
            By signing up for our emails, you’re agreeing to receive updates,
            exclusive offers, and thoughtful emails. We’ll always treat your
            info with care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="max-lg:pt-6">
              <h4 className="font-medium  mb-3 uppercase leading-[170%] tracking-[-0.24px]  color-footerlink text-[12px]">
                {section.title}
              </h4>
              <div className="space-y-2 text-sm flex flex-col font-medium leading-[170%] tracking-[-0.28px]  text-[#09090B] font-sm ">
                {section.links.map((link, i) => (
                  <Link href="#" key={i}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
