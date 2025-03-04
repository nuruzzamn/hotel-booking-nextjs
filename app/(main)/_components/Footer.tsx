"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AppleIcon,
  Facebook,
  Instagram,
  Mastercard,
  PlayStore,
  RoundUpperArrow,
  Send,
  Valu,
  Visa,
} from "./Icons";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <>
      {/* Top section: sign up, company details  */}
      <div className="w-full bg-[#F5F5F5] pb-20 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-between gap-5">
          {/* Email subscriber */}
          <div className="flex flex-col gap justify-center items-center sm:pb-10 pt-10 sm:pt-20">
            {/* Logo */}
            <div className="flex flex-wrap my-auto min-w-[100px]">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={80}
                height={50}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="py-6 max-w-4xl">
              <div className="text-sm font-normal text-center">
                A smart solution to streamline hotel operations with room
                booking, guest management, billing, staff management, and
                real-time analytics for enhanced efficiency and service quality.
              </div>
            </div>
            {/* Input field for collecting user email */}
            <div className="flex justify-between items-center relative border rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md text-sm font-normal text-[#CACACB] pl-5 pt-3 pr-20 pb-3 min-w-80"
              />

              <div className="absolute flex right-5">
                <Send />
              </div>
            </div>
          </div>
          {/* Middle section: social media details, menu details, user manual, app link button  */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-y-10 md:gap-y-0">
            <section>
              <div className="w-full sm:pr-10 flex flex-col justify-center">
                <div className="text-base text-center font-medium">
                  Stay Connected
                </div>

                <div className="pt-5 flex justify-center">
                  {/* <SocialMedia /> */}

                  <div className="flex justify-start items-center gap-11">
                    <Link href="#" target="_blank">
                      <Facebook />
                    </Link>

                    <Link href="#" target="_blank">
                      <Instagram />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* Company details menu  */}
            <section>
              <div className="w-full flex flex-col justify-center">
                {/* <h1 className="text-base font-medium text-[#111111]"></h1> */}
                <div className="flex flex-col gap-1 text-sm font-normal text-[#707072] ">
                  <Link legacyBehavior href="#">
                    <a
                      className="flex items-center hover:text-blue-500"
                      target="_blank"
                    >
                      <span className="text-xl text-start flex items-center mt-[-4px]">
                        →
                      </span>
                      <span className="pl-1">Our Hotels</span>
                    </a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a
                      className="flex items-center hover:text-blue-500"
                      target="_blank"
                    >
                      <span className="text-xl text-start flex items-center mt-[-4px]">
                        →
                      </span>
                      <span className="pl-1">Our Conferencing</span>
                    </a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a
                      className="flex items-center hover:text-blue-500"
                      target="_blank"
                    >
                      <span className="text-xl text-start flex items-center mt-[-4px]">
                        →
                      </span>
                      <span className="pl-1">Our Company</span>
                    </a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a
                      className="flex items-center hover:text-blue-500"
                      target="_blank"
                    >
                      <span className="text-xl text-start flex items-center mt-[-4px]">
                        →
                      </span>
                      <span className="pl-1">Hotel Design</span>
                    </a>
                  </Link>

                  <Link href="#" legacyBehavior>
                    <a
                      className="flex items-center hover:text-blue-500"
                      target="_blank"
                    >
                      <span className="text-xl text-start flex items-center mt-[-4px]">
                        →
                      </span>
                      <span className="pl-1">Careers</span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
            {/* app button */}
            <section>
              <div className="w-full flex flex-col justify-center">
                <p className="text-base text-center md:text-start font-medium text-[#111111]">
                  Download App
                </p>
                <div className="pt-5 flex justify-start">
                  {/* App Link  */}
                  {/* <AppLink /> */}
                  <div className="flex gap-2 justify-center">
                    {/* Google Play Store Button */}
                    <Link
                      href="#"
                      className="flex items-center min-w-[120px] min-h-12 rounded-none gap-[10px] p-[10px]"
                      style={{ border: "0.75px solid rgba(204, 204, 204, 1)" }}
                      target="_blank"
                    >
                      <PlayStore />

                      {/* Button Text */}
                      <div className="flex flex-col text-left">
                        <span className="text-[6px] font-normal">
                          GET IT ON
                        </span>
                        <span className="text-[10.5px] font-medium">
                          Google Play
                        </span>
                      </div>
                    </Link>

                    {/* Apple Store Button */}
                    <Link
                      href="#"
                      className="flex items-center min-w-[120px] min-h-12 bg-black text-white rounded-none gap-[10px] p-[10px]"
                      target="_blank"
                    >
                      <AppleIcon />

                      {/* Button Text */}
                      <div className="flex flex-col text-left">
                        <span className="text-[6px] font-normal">
                          Download on the
                        </span>
                        <span className="text-[10.5px] font-medium">
                          App Store
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* bottom section: address, payment details */}
      <div className="bg-[#111111] md:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-sm font-normal text-[#939699] py-2 flex justify-between">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-y-5 sm:gap-y-0 w-full">
              <div>support@example.com</div>
              <div>©Hotel paradise, 2024-2025</div>
            </div>
          </div>
          {/* section: Payment and right top navigation button */}
          <div className="flex items-center justify-between border-t-[#707072] border-t-2 pt-8 pb-5">
            {/* payment option  */}
            <div className="flex items-center justify-between gap-3 md:gap-6">
              <Link href="">
                <Visa />
              </Link>

              <Link href="">
                <Mastercard />
              </Link>

              <Link href="">
                <Valu />
              </Link>
            </div>

            {/* Tag: Top navigation button */}
            <div className="flex justify-center items-center gap-3 md:gap-7">
              <p className="text-base font-medium text-[#FFFFFF]">Top</p>
              <button
                aria-label="Scroll to top"
                className="group flex items-center justify-center text-white rounded-full focus:outline-none"
                onClick={handleScrollToTop}
              >
                <RoundUpperArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
