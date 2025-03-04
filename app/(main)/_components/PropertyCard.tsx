import Image from "next/image";

export default function PropertyCard() {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Property Image */}
      <div className="relative w-full h-72">
        <Image
          src="/img/room-2.png"
          alt="Hotel Image"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Property Name */}
        <h3 className="text-2xl font-semibold text-gray-900">Luxury Hotel</h3>

        {/* Address */}
        <p className="text-gray-600 text-sm">123 Beachside Avenue, Miami, FL</p>

        {/* Pricing & Availability */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-yellow-600">$120 / night</p>
          <p className="text-sm text-gray-500">
            Rooms Available: <span className="font-medium text-gray-900">5</span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ★★★★☆ <span className="text-gray-600">(4.5)</span>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full bg-yellow-700 text-white py-2 rounded-lg font-medium hover:bg-yellow-800 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
