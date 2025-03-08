"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import TablePagination from "./TablePagination";
import { useRouter } from "next/navigation";
import { showSuccessToast } from "@/utils/toast";
import { TbShoppingCartDiscount } from "react-icons/tb";

interface Hotel {
  id: string;
  image: string;
  name: string;
  category: string;
  address?: string;
  costPerNight: string;
  availableRooms: string;
  description: string;
  rating: string;
}

const Hotels: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const router = useRouter();

  const handleUpdatedProductData = (hotel: Hotel) => {
    sessionStorage.setItem("editHotel", JSON.stringify(hotel));
    router.push("/dashboard/update-hotel");
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("/api/hotels");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Hotel[] = await response.json();
        setHotels(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/hotels?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      setHotels((prev) => prev.filter((hotel) => hotel.id !== id));

      showSuccessToast("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Hotels List</h1>

      <table className="w-full table-auto bg-white border text-center border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-1 py-0" rowSpan={2}>
              SL
            </th>
            <th className="border px-1 py-0" rowSpan={2}>
              Image
            </th>
            <th className="border px-1 py-0" rowSpan={2}>
              Category
            </th>
            <th className="border px-1 py-0" rowSpan={4}>
              Name
            </th>
            <th className="border px-1 py-0" rowSpan={4}>
              Address
            </th>
            <th className="border px-1 py-0" rowSpan={2}>
              Cost per night
            </th>
            <th className="border px-1 py-0" rowSpan={2}>
              Available rooms
            </th>

            <th className="border px-1 py-0" rowSpan={2}>
              Rating
            </th>

            <th className="w-[300px] border px-1 py-0">Description</th>
            <th className="border px-1 py-0">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((hotel, index) => (
            <tr key={hotel.id} className="border py-0">
              <td className="border px-1 py-0">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="border px-1 py-0">
                <Image
                  src={`/api/uploads/${hotel?.image}`}
                  width={100}
                  height={100}
                  alt={hotel.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-1 py-0">{hotel.category}</td>
              <td className="border px-1 py-0">{hotel.name}</td>
              <td className="border px-1 py-0">{hotel.address}</td>
              <td className="border px-1 py-0">{hotel.costPerNight}</td>
              <td className="border px-1 py-0">{hotel.availableRooms}</td>
              <td className="border px-1 py-0">{hotel.rating}</td>
              <td className="border p-1 py-0 text-xs">{hotel.description}</td>
              <td className="border px-1 py-0 ">
                <button
                  className="text-orange-500 hover:text-orange-700 cursor-pointer"
                  onClick={() => handleUpdatedProductData(hotel)}
                >
                  <TbShoppingCartDiscount className="text-lg" />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 ml-2 cursor-pointer pl-2"
                  onClick={() => handleDelete(hotel.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TablePagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default Hotels;
