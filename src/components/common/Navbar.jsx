"use client";
import React, { useState, useEffect } from "react";
import { navlink } from "./Helper";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchOpen]);

  return (
    <div className="relative">
      <div className="px-6 py-3 bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-[1392px] w-full mx-auto flex items-center justify-between">
          <div className="hidden lg:flex max-w-[457px] w-full items-center gap-4 justify-between">
            {navlink.map((items, index) => (
              <Link
                key={index}
                href={items.link}
                className="color-navlink font-md font-medium leading-[170%] tracking-[-0.32px] hover:underline duration-300 pb-[6px]"
              >
                {items.text}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/svg/logo.svg"
              width={63}
              height={29}
              alt="logo"
            />
          </Link>

          <div className="flex items-center gap-6 ">
            <button
              className="cursor-pointer"
              onClick={() => setSearchOpen(true)}
            >
              <Image
                src="/images/svg/search.svg"
                width={20}
                height={20}
                alt="search-icon"
              />
            </button>

            <div className="flex items-center gap-3">
              <Link href="#">
                <Image
                  src="/images/svg/cart.svg"
                  width={20}
                  height={20}
                  alt="cart-icon"
                />
              </Link>
              <Link
                href="#"
                className="hidden sm:block color-navlink font-md font-medium leading-[170%] tracking-[-0.32px]"
              >
                Cart
              </Link>
              <p className="hidden sm:block color-navlink font-sm font-medium leading-[170%]">
                (0)
              </p>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 bg-white border-t border-gray-200 py-3 px-4 flex flex-col gap-3">
            {navlink.map((items, index) => (
              <Link
                key={index}
                href={items.link}
                className="color-navlink font-md font-medium tracking-[-0.32px] hover:underline duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {items.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0  bg-opacity-50"
            onClick={() => setSearchOpen(false)}
          ></div>

          <div className="relative z-50 bg-white w-[90%] max-w-md mx-auto rounded-xl p-6 shadow-lg">
            <button
              className="absolute top-3 right-3"
              onClick={() => setSearchOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
