"use client";

import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-red-600 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12zm-1 4a1 1 0 112 0v3a1 1 0 01-2 0V8zm0 4a1 1 0 112 0v2a1 1 0 01-2 0v-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Something Went Wrong
        </h1>

        <p className="text-gray-600 mb-6">
          We are sorry, but something went wrong on our end. You can try again or go back to the homepage.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Try Again
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full px-6 py-3 rounded-lg bg-gray-600 text-white text-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
