import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// POST method to create a product
export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const imageFile = data.get("image") as File;
    const name = data.get("name") as string;
    const category = data.get("category") as string;
    const address = data.get("address") as string;
    const costPerNight = data.get("costPerNight") as string;
    const availableRooms = data.get("availableRooms") as string;
    const description = data.get("description") as string;
    const rating = data.get("rating") as string;

    // Validation
    if (!name || !category || !address || !costPerNight || !availableRooms || !description || !rating || !imageFile) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Convert image file to Buffer and write to disk
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const imagePath = path.join(process.cwd(), "uploads", imageFile.name);

    // Convert Buffer to Uint8Array before passing to fs.writeFileSync
    const uint8Array = new Uint8Array(imageBuffer);
    fs.writeFileSync(imagePath, uint8Array);

    // Create in database
    const product = await prisma.hotels.create({
      data: {
        image: `${imageFile.name}`,
        name,
        category,
        address,
        costPerNight,
        availableRooms,
        description,
        rating,
      },
    });

    return NextResponse.json(
      { product, message: "Hotel created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Something went wrong.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const products = await prisma.hotels.findMany({
      where: {
        active: true,
      },
    });

    return NextResponse.json(products, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Hotel ID is required." },
      { status: 400 }
    );
  }

  try {
    await prisma.hotels.update({
      where: {
        id: (id),
      },
      data: {
        active: false,
      },
    });

    return NextResponse.json(
      { message: "Hotel deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    );
  }
}

// tag : update hotels
export async function PATCH(req: Request) {
  try {
    const data = await req.formData(); 

    // Extract data from form
    const id = data.get("hotelId") as string;
    const imageFile = data.get("image") as File;
    const name = data.get("name") as string;
    const category = data.get("category") as string;
    const address = data.get("address") as string;
    const costPerNight = data.get("costPerNight") as string;
    const availableRooms = data.get("availableRooms") as string;
    const description = data.get("description") as string;
    const rating = data.get("rating") as string;

    if (!id) {
      return NextResponse.json(
        { message: "Hotel id is required." },
        { status: 400 }
      );
    }

    // Check if the hotel exists
    const existingProduct = await prisma.hotels.findUnique({
      where: { id: (id) },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { message: "Hotel not found." },
        { status: 404 }
      );
    }

    // Handle image update
    let imagePath = existingProduct.image;
    if (imageFile) {
      const imageName = `${Date.now()}-${imageFile.name}`;
      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      imagePath = `${imageName}`;
      // const savePath = path.join(process.cwd(), "public", "uploads", imageName);
      const savePath = path.join(process.cwd(), "uploads", imageName);

      const oldImagePath = path.join(
        process.cwd(),
        "uploads",
        existingProduct.image
      );
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Delete old image only if replaced
      }

      // Save the new image (convert Buffer to Uint8Array before writing)
      const uint8Array = new Uint8Array(imageBuffer);
      fs.writeFileSync(savePath, uint8Array);
    }

    // Update hotel details
    const updatedProduct = await prisma.hotels.update({
      where: { id: (id) },
      data: {
        image: imagePath,
        name: name || existingProduct.name,
        category: category || existingProduct.category,
        address: address || existingProduct.address,
        costPerNight: costPerNight || existingProduct.costPerNight,
        availableRooms: availableRooms || existingProduct.availableRooms,
        description: description || existingProduct.description,
        rating: rating || existingProduct.rating,
      },
    });

    return NextResponse.json(
      { product: updatedProduct, message: "Hotel updated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to update hotel", details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to update hotel", details: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
