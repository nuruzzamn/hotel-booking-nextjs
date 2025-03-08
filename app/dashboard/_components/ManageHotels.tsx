"use client";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoBagAddOutline } from "react-icons/io5";

const ManageHotels = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [costPerNight, setCostPerNight] = useState<string>("");
  const [availableRooms, setAvailableRooms] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [rating, setRating] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !productName ||
      !category ||
      !address ||
      !costPerNight ||
      !image ||
      !description ||
      !rating
    ) {
      showErrorToast("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("category", category);
    formData.append("address", address);
    formData.append("costPerNight", costPerNight);
    formData.append("availableRooms", availableRooms.toString());
    formData.append("description", description);
    formData.append("rating", rating.toString());
    formData.append("image", image);

    if (productId) {
      formData.append("productId", productId.toString());
    }
  };

  const resetForm = () => {
    setProductId(null);
    setProductName("");
    setCategory("");
    setAddress("");
    setCostPerNight("");
    setAvailableRooms("");
    setDescription("");
    setRating("");
    setImage(null);
    const fileInput =
      document.querySelector<HTMLInputElement>('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <>
      <div className="container mx-auto p-5">
        <form
          id="add-hotel-form"
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="w-full">
            <h1 className="text-lg md:text-xl font-semibold pb-4">Add Hotel</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="font-semibold">
                  Property Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="productName"
                  placeholder="Enter property name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Category<span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-white"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Luxury room">Luxury Room</option>
                  <option value="family">Family</option>
                  <option value="single">Single</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Address<span className="text-red-500">*</span>
                </label>

                <input
                  name="address"
                  placeholder="Enter property address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Cost per Night<span className="text-red-500">*</span>
                </label>
                <input
                  name="costPerNight"
                  placeholder="Enter cost per night"
                  type="number"
                  value={costPerNight}
                  onChange={(e) => setCostPerNight(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Available Rooms<span className="text-red-500">*</span>
                </label>
                <input
                  name="availableRooms"
                  type="number"
                  placeholder="Enter number of rooms"
                  value={availableRooms}
                  onChange={(e) => setAvailableRooms(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Rating<span className="text-red-500">*</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  min="0"
                  max="5"
                  placeholder="Enter average rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                  Upload Image <span className="text-red-500">*</span>
                </label>
                <label className="flex items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-500 transition">
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-2 text-gray-500">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16V4m10 12V4m-5 16h.01M12 20h-.01"
                      />
                    </svg>
                    <span className="text-sm font-medium">Click to upload</span>
                    <span className="text-xs text-gray-400">
                      PNG, JPG, JPEG (Max 5MB)
                    </span>
                  </div>
                </label>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">
                  Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="px-3 py-2 w-full border rounded-md h-32"
                />
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4 py-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md select-none"
              >
                <GrPowerReset className="inline mr-2" />
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md select-none"
              >
                <IoBagAddOutline className="inline mr-2" />
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageHotels;
