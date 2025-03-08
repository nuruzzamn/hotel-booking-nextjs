import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import SocialMediaSharing from "./SocialMediaSharing";
import Rating from "@/components/Rating";
import ReservationContent from "./ReservationContent";

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

export default async function PropertyDetails({
  details: details,
}: {
  details: Hotel;
}) {
  if (!details) return notFound();

  return (
    <>
      <div className="max-w-7xl mx-auto md:p-6 pt-5 md:pt-0">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between gap-2">
            {/* Hotel Image */}
            <Image
              src={`/api/uploads/${details?.image}`}
              alt={details.name}
              width={800}
              height={500}
              className="max-w-3/5 md:max-w-3/4 h-80 object-cover"
            />

            <div className="max-w-2/5 md:max-w-1/4 h-86">
              <h3 className="md:text-xl text-center text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9029636325217!2d90.41251867602416!3d23.75089558902779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89d6e6e9e1b%3A0x9d116ec6d3c0e7d2!2sHotel%20Dhaka!5e0!3m2!1sen!2sbd!4v1725686926087!5m2!1sen!2sbd"
                width="100%"
                height="80%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                {details.name}
              </h1>

              <div>
                <h1 className="text-yellow-600 uppercase text-sm font-semibold">
                  Average rating
                </h1>
                <Rating rating={Number(details.rating)} />
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-3">{details.address}</p>

            {/* Price & Rooms Info */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span className="text-xl font-semibold text-blue-600">
                ${details.costPerNight} / night
              </span>
              <span className="text-gray-700">
                🏨 {details.availableRooms} rooms available
              </span>
            </div>
            <div className="pt-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Description</h1>
              <p className="text-gray-600 text-lg mb-3">
                {details.description}
              </p>
            </div>

            {/* tag : social sharing  */}
            <SocialMediaSharing details={details} />

            {/* Back Button */}
            <div className="mt-6">
              <Link href="/hotels">
                <button className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 flex items-center gap-2">
                  <Home className="w-4 h-4" /> Back to Hotels
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ReservationContent/>
    </>
  );
}
