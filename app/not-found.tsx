'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-red-500 mb-6">
          Sorry, the page you are looking for doesn’t exist.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Go to Home
          </button>
        </div>
      </div>
    </>
  );
}
