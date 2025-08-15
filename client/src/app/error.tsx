"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-3">Something went wrong</h2>
      <p className="text-gray-600 mb-6">Failed to load the latest news.</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded bg-black text-white hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
