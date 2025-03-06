import Image from "next/image";
import React from "react";

const ReservationContent = () => {
  return (
    // tag : Hotel Reservation Content
    <div className="max-w-7xl mx-auto relative w-full overflow-hidden min-h-72 md:min-h-96">
      <div className="absolute px-6 w-full space-y-2 md:space-y-4 z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-white uppercase text-sm font-semibold">
          Hotel Reservation
        </div>
        <div className="text-xl font-bold text-white w-full">
          Get Extra Perks When You Book Directly With Us
        </div>
        <div className="text-sm md:text-lg font-normal text-white">Call Us Now</div>
        <div className="text-sm md:text-lg font-normal text-white">+8801666-000000</div>
      </div>
      <div className={`absolute inset-0 `}>
        <Image
          src={`/img/Frame1.png`}
          alt={`Hotel Reservation`}
          layout="fill"
          className="object-cover w-full h-full px-6"
          priority
        />
      </div>
    </div>
  );
};

export default ReservationContent;
