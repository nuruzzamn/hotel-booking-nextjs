import Image from "next/image";

export default function PropertyCard() {
  return (
    <div className="max-w-52 md:max-w-64 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Property Image */}
      <div className="relative w-full">
        <Image
          src="/img/room-2.png"
          alt="Hotel Image"
          className="w-full h-48 md:h-56 object-cover"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Card Content */}
      <div className="p-2 space-y-1 md:space-y-2">
        {/* Property Name */}
        <h3 className="text-md md:text-xl md:font-semibold text-gray-900">Luxury Hotel</h3>

        {/* Address */}
        <p className="text-gray-600 text-sm">123 Beachside Avenue, Miami, FL</p>

        {/* Pricing & Availability */}
        <div className="flex justify-between items-center mt-2">
          <p className="md:text-md text-sm font-bold text-yellow-600">$120 / night</p>
          <p className="text-sm text-gray-500">
            Rooms Available: <span className="font-medium text-gray-900">5</span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ★★★★☆ <span className="text-gray-600">(4.5)</span>
        </div>

        {/* Action Button */}
        <button className="mt-2 w-full bg-yellow-700 text-white py-2 rounded-lg font-medium hover:bg-yellow-800 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
