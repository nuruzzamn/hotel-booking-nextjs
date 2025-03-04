"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AppleIcon,
  Cross,
  Facebook,
  Instagram,
  PlayStore,
  SearchIcon,
  StylishBars3,
  XMark,
} from "./Icons";

const Navbar: React.FC = () => {
  // State variables
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isSearchbarVisible, setIsSearchbarVisible] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  //searchbar focused indicator
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Handles input focus and toggles navbar visibility
  const handleInputFocus = (): void => {
    setIsNavbarVisible((prev) => !prev);
    setIsModalVisible(true);

    console.log("Input field is focused.", isFocused);
  };

  // Handles button click and toggles search bar visibility
  const handleButtonClick = (): void => {
    setIsSearchbarVisible((prev) => !prev);
    // setIsModalVisible(true);
    setIsModalVisible((prev) => !prev);

    setIsNavMenuOpen(false);

    // console.log('Search button clicked.', isSearchbarVisible);

    // console.log('search button clicked.');
  };

  // Toggles the modal and resets navbar and search bar visibility
  const toggleModal = (): void => {
    setIsModalVisible((prev) => !prev);
    setIsNavbarVisible(true);
    setIsSearchbarVisible(true);
  };

  // Auto-focus the input when the modal becomes visible
  useEffect(() => {
    if (isModalVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalVisible]);

  const toggleMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);

    // console.log('Toggle menu click');
  };

  return (
    <nav className="w-full">
      {/* Top Navbar Section with Social Media Icons and App Store Buttons */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center min-h-10 my-auto py-[2px] gap-3 md:gap-0">
        {/* Left Section: Social Media Links */}
        <div className="flex justify-center items-center gap-11 my-auto pl-0 lg:pl-4">
          {/* <Facebook />
          <Instagram /> */}
          <div className="flex justify-start items-center gap-11">
            <Link href="#" target="_blank">
              <Facebook />
            </Link>

            <Link href="#" target="_blank">
              <Instagram />
            </Link>
          </div>

          <Link href="#" legacyBehavior>
            <a
              target="_blank"
              className="hover:text-blue-500 text-base text-[#4B5157]"
            >
              Help
            </a>
          </Link>
        </div>

        {/* Right Section: App Store Buttons (Google Play and Apple Store) */}
        <div className="md:flex hidden gap-2 justify-center">
          {/* Google Play Store Button */}
          <Link
            href="#"
            className="flex items-center justify-center md:justify-start min-w-[120px] min-h-8 rounded-none gap-[10px] px-1 my-auto"
            style={{ border: "0.75px solid rgba(204, 204, 204, 1)" }}
            target="_blank"
          >
            <PlayStore />

            {/* Button Text */}
            <div className="flex flex-col text-left">
              <span className="text-[6px] font-normal">GET IT ON</span>
              <span className="text-[10.5px] font-medium">Google Play</span>
            </div>
          </Link>

          {/* Apple Store Button */}
          <Link
            href="#"
            className="flex items-center justify-center md:justify-start min-w-[120px] min-h-8 bg-black text-white rounded-none gap-[10px] px-1 my-auto"
            target="_blank"
          >
            <AppleIcon />

            {/* Button Text */}
            <div className="flex flex-col text-left">
              <span className="text-[6px] font-normal">Download on the</span>
              <span className="text-[10.5px] font-medium">App Store</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Main Navbar Section with Logo, Links, Search Bar, and Cart Icon */}
      {isNavbarVisible && isSearchbarVisible && (
        <div className=" border-gray-300 border-t-2 border-b-2 w-full">
          {/* visibility for desktop size  */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto pr-4 pl-4 sm:px-6 flex justify-between items-center min-h-12">
              {/* Left Section: Logo */}
              <div className="flex flex-wrap my-auto">
                <Link href="/" className="block">
                  <Image
                    src="/img/logo.png"
                    alt="Luxury Hotel"
                    width={80}
                    height={50}
                    priority
                  />
                </Link>
              </div>

              {/* Center Section: Navigation Links */}
              <div className="hidden lg:flex lg:flex-wrap lg:gap-x-10 text-sm md:text-base font-medium text-[#262D33] my-auto">
                <Link href="/" legacyBehavior className="">
                  <a className="flex items-center hover:text-[#DFAA5B] p-3">
                    Home
                  </a>
                </Link>

                <Link href="#" legacyBehavior className="">
                  <a className="flex items-center hover:text-[#DFAA5B] p-3">
                    Rooms & Suites
                  </a>
                </Link>

                <Link href="#" legacyBehavior className="">
                  <a className="flex items-center hover:text-[#DFAA5B] p-3">
                    Contacts
                  </a>
                </Link>

                <Link href="#" legacyBehavior className="">
                  <a className="flex items-center hover:text-[#DFAA5B] p-3">
                    Offers
                  </a>
                </Link>
              </div>

              {/* Right Section: Search Bar and Cart Icon */}
              <div className="flex min-h-12">
                {/* Search Bar */}
                <div className="flex justify-end items-center">
                  <input
                    type="text"
                    placeholder="Find your perfect stay..."
                    className="hidden lg:block text-sm md:text-base text-gray-300 font-normal text-center focus:outline-none"
                    onFocus={handleInputFocus}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* visibility for mobile size */}
          <div className="lg:hidden">
            <div className="relative max-w-7xl mx-auto pr-4 pl-4 sm:px-6 flex justify-between items-center min-h-12">
              {/* Left Section */}
              {/* Mobile Hamburger */}
              <div className="ml-[-4px] md:ml-[-0px] flex justify-center">
                <button
                  onClick={toggleMenu}
                  className={`relative rounded-md text-[#BCBFC2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-transform duration-300 ${
                    isNavMenuOpen ? "rotate-90" : ""
                  }`}
                >
                  {isNavMenuOpen ? (
                    <div className="block h-6 w-6">
                      <XMark aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="block h-6 w-6">
                      {/* <Bars3 aria-hidden="true" /> */}
                      <StylishBars3 aria-hidden="true" />
                    </div>
                  )}
                </button>
              </div>

              {/* Middle Section */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                {/* Left Section: Logo */}
                <div className="flex flex-wrap my-auto">
                  <Link href="#" className="block">
                    <Image
                      src="/img/logo.png"
                      alt="Luxury Hotel"
                      width={80}
                      height={150}
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center">
                {/* Right Section: Search Bar and Cart Icon */}
                <div className="flex min-h-12">
                  {/* Search Bar */}
                  <div className="flex justify-end items-center">
                    <input
                      type="text"
                      placeholder="Find your perfect stay..."
                      className="hidden lg:block text-sm md:text-base text-gray-300 font-normal text-center focus:outline-none"
                      onFocus={handleInputFocus}
                    />
                    <button
                      className="cursor-pointer"
                      onClick={handleButtonClick}
                    >
                      <SearchIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Searchbar section  */}
      {isModalVisible && (
        <div className="max-w-7xl mx-auto px-6 md:pl-6 md:pr-8">
          <div className="min-h-[51px] flex justify-between items-center h-full">
            <input
              ref={inputRef}
              type="text"
              placeholder="Find your perfect stay..."
              className="bg-transparent text-black text-2xl md:text-3xl font-bold outline-none w-full"
              onFocus={() => setIsFocused(true)}
            />

            <button className="cursor-pointer" onClick={toggleModal}>
              <Cross />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute lg:hidden ${
          isNavMenuOpen ? "block" : "hidden"
        } z-50 w-full`}
      >
        <div className="bg-gradient-to-b from-white to-gray-50 w-full flex justify-center items-center flex-col space-y-1 pt-4 pb-8 shadow-2xl rounded-b-2xl border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Link href="/" legacyBehavior className="">
            <a className="flex items-center hover:text-[#DFAA5B]  p-3">Home</a>
          </Link>

          <Link href="#" legacyBehavior className="">
            <a className="flex items-center hover:text-[#DFAA5B] p-3">
              Rooms & Suites
            </a>
          </Link>

          <Link href="#" legacyBehavior className="">
            <a className="flex items-center hover:text-[#DFAA5B] p-3">
              Contacts
            </a>
          </Link>

          <Link href="#" legacyBehavior className="">
            <a className="flex items-center hover:text-[#DFAA5B] p-3">Offers</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
