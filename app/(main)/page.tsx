import { baseUrl } from "@/lib/utils";
import BlogSection from "./_components/BlogSection";
import Home from "./_components/Home";
import ReservationContent from "./_components/ReservationContent";
import RoomsDetails from "./_components/RoomsDetails";
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

const page: React.FC = async () => {
  let allHotels: Hotel[] = [];

  try {
    // Perform the fetch inside the component
    const response = await fetch(`${baseUrl}/api/hotels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures no caching for up-to-date data
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    allHotels = await response.json();
  } catch (error) {
    console.error("Error fetching home data:", error);
  }

  return (
    <div className="">
      <Home />
      <RoomsDetails hotels={allHotels}/>
      <BlogSection />
      <ReservationContent />
    </div>
  );
};

export default page;
