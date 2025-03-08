import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Define types for the params object to ensure correct typing
interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const productId = params.id;

    // Check if productId is provided
    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is required." },
        { status: 400 }
      );
    }

    // Fetch the product from the database
    const product = await prisma.hotels.findUnique({
      where: { id: (productId) },
    });

    // Check if the product exists
    if (!product) {
      return NextResponse.json(
        { message: "Product not found." },
        { status: 404 }
      );
    }

    // Return the product data as JSON with a 200 OK status
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    // Catch any unexpected errors
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
