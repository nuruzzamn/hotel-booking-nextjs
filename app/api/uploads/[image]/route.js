import fs from 'fs';
import path from 'path';
import mime from 'mime-types'; // Import mime-types package
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { image } = params;
  const imagePath = path.join(process.cwd(), 'uploads', image);
  console.log("imagePath", imagePath);
  

  if (!fs.existsSync(imagePath)) {
    return NextResponse.json({ message: 'Image not found' }, { status: 404 });
  }

  // Determine the MIME type dynamically
  const contentType = mime.lookup(imagePath) || 'application/octet-stream';

  const file = fs.readFileSync(imagePath);
  return new NextResponse(file, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}