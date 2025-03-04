'use client';

import React from 'react';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className="flex items-center justify-center min-h-svh bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-red-600">
          Something went wrong!
        </h1>
        <p className="text-center text-gray-600 my-4">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <div className="space-y-4 text-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
