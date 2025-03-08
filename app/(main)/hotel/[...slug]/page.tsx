import { baseUrl } from "@/lib/utils";
import React, { Suspense } from "react";
import PropertyDetails from "../../_components/PropertyDetails";
// import PropertyDetails from "../../_components/PropertyDetails";

// Define the Props type for the page component
interface PageProps {
  params: {
    slug?: string[];
  };
}

const page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const id = slug || [];

  const res = await fetch(`${baseUrl}/api/hotels/${id}`);
  const details = await res.json();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <PropertyDetails details={details} />
      </div>
    </>
  );
};

export default page;
