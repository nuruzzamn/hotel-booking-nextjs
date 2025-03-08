import Rating from "@/components/Rating";
import Image from "next/image";
import Link from "next/link";

interface Hotel {
  id: number;
  image: string;
  name: string;
  category: string;
  address?: string;
  costPerNight: string;
  availableRooms: string;
  description: string;
  rating: string;
}

export default function PropertyCard({ hotel: hotel }: { hotel: Hotel }) {
  return (
    <div className="max-w-52 md:max-w-72 flex flex-col justify-between bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* tag : top section  */}
      <div className="relative w-full">
        {/* Property Image */}
        <Image
          src={`/api/uploads/${hotel?.image}`}
          alt={`${hotel?.name}`}
          className="w-full h-48 md:h-56 object-cover"
          width={150}
          height={150}
          priority
        />

        <div className="p-2 space-y-1">
          {/* Property Name */}
          <h3 className="text-md md:text-xl md:font-semibold text-gray-900">
            ${hotel?.name}
          </h3>
          {/* Address */}
          <p className="text-gray-600 text-sm">${hotel?.address}</p>

          {/* Pricing & Availability */}
          {/* <div className="flex justify-between items-center mt-2"> */}
          <p className="md:text-md text-sm font-bold text-yellow-600">
            $${hotel?.costPerNight} / night
          </p>
          {/* </div> */}
        </div>
      </div>

      {/* tag : bottom section card content */}
      <div className="px-2 pb-2 space-y-1">
        <p className="text-sm text-gray-500">
          Rooms Available:{" "}
          <span className="font-medium text-gray-900">
            ${hotel?.availableRooms}
          </span>
        </p>
        {/* Rating */}
        {/* <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ★★★★☆ <span className="text-gray-600">(4.5)</span>
        </div> */}
        <Rating rating={Number(hotel?.rating)} />

        <Link
          href={`/hotel/${hotel?.id}`}
        >
          {/* Action Button */}
          <button className="mt-2 w-full bg-yellow-700 text-white py-2 rounded-lg font-medium hover:bg-yellow-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
