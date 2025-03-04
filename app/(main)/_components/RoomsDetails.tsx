import React from "react";
import PropertyCard from "./PropertyCard";
import ServiceFeatures from "./ServiceFeatures";

const RoomsDetails = () => {
  return (
    <>
      <div className=" py-10 bg-[#F7F7F7]">
        {/* tag : title section */}
        <div className="max-w-7xl mx-auto px-6 ">
          {/* top section: title and category button */}
          <div className="flex justify-between flex-col md:flex-row md:items-end py-10">
            {/* left section: title */}
            <div className="space-y-4 text-left">
              <p className="text-[#DFAA5B] uppercase font-medium">
                Accommodations
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Luxury Rooms
              </h2>
            </div>

            {/* right section: room category button */}
            <div className="flex gap-4 pt-4 md:pt-0">
              <button className="bg-white hover:bg-[#DFAA5B] text-black px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center gap-2 transition select-none">
                All Rooms
              </button>

              <button className="bg-white hover:bg-[#DFAA5B] text-black px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center gap-2 transition select-none">
                Luxury
              </button>

              <button className="bg-white hover:bg-[#DFAA5B] text-black px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center gap-2 transition select-none">
                Single
              </button>

              <button className="bg-white hover:bg-[#DFAA5B] text-black px-2 py-1 md:px-4 md:py-2 rounded-md flex items-center gap-2 transition select-none">
                Family
              </button>
            </div>
          </div>
          {/* bottom section: booking card details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
          {/* tag : ServiceFeatures  */}
          <ServiceFeatures />
        </div>
      </div>
    </>
  );
};

export default RoomsDetails;
