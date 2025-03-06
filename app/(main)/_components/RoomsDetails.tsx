import React from "react";
import PropertyCard from "./PropertyCard";
import ServiceFeatures from "./ServiceFeatures";

const RoomsDetails = () => {
  return (
    <div className="bg-[#F7F7F7] pt-10">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        {/* Title Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between pb-10 gap-y-10">
          {/* Left Section: Title, room category button */}
          <div className="space-y-10">
            {/* tag: Title */}
            <div className="space-y-2 md:space-y-4 text-left">
              <p className="text-[#DFAA5B] uppercase font-medium">
                Accommodations
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Luxury Rooms
              </h2>
            </div>
            {/* Room Category Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button className="bg-[#DFAA5B] hover:bg-[#DFAA5B] hover:text-white text-gray-800 font-medium px-4 py-2 rounded-md transition-all shadow-md">
                All Rooms
              </button>
              <button className="bg-gray-100 hover:bg-[#DFAA5B] hover:text-white text-gray-800 font-medium px-4 py-2 rounded-md transition-all shadow-md">
                Luxury
              </button>
              <button className="bg-gray-100 hover:bg-[#DFAA5B] hover:text-white text-gray-800 font-medium px-4 py-2 rounded-md transition-all shadow-md">
                Single
              </button>
              <button className="bg-gray-100 hover:bg-[#DFAA5B] hover:text-white text-gray-800 font-medium px-4 py-2 rounded-md transition-all shadow-md">
                Family
              </button>
            </div>
          </div>

          {/* Right Section: Booking Form */}
          <div className="space-y-6 w-full md:w-auto bg-white p-3 md:p-6 rounded-lg shadow-lg">
            {/* Booking Inputs Section */}
            <div className="flex flex-wrap md:flex-row gap-4">
              {/* <div className="flex flex-row justify-between md:justify-normal gap-4"> */}
              {/* Check-in Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkin"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkin"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#DFAA5B] focus:border-[#DFAA5B] transition-all"
                  aria-label="Select check-in date"
                />
              </div>

              {/* Check-out Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkout"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkout"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#DFAA5B] focus:border-[#DFAA5B] transition-all"
                  aria-label="Select check-out date"
                />
              </div>
              {/* </div> */}

              {/* Guests Dropdown */}
              <div className="flex flex-col">
                <label
                  htmlFor="guests"
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  Room Type
                </label>
                <select
                  id="guests"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#DFAA5B] focus:border-[#DFAA5B] cursor-pointer transition-all"
                  aria-label="Select room type"
                >
                  <option value="">All Rooms</option>
                  <option value="luxury">Luxury</option>
                  <option value="single">Single</option>
                  <option value="family">Family</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#DFAA5B] hover:bg-[#c2924e] text-white font-medium px-6 py-2 rounded-md transition-all shadow-md">
                Check Availability
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-4 space-y-1 md:space-y-0">
          {[...Array(9)].map((_, i) => (
            <PropertyCard key={i} />
          ))}
        </div>

        {/* Services Section */}
        <ServiceFeatures />
      </div>
    </div>
  );
};

export default RoomsDetails;
