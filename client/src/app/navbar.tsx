"use client";

import { useState, useMemo } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const today = useMemo(() => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Jakarta",
      }).format(new Date());
    } catch {
      return "Wednesday, August 13, 2025";
    }
  }, []);

  const navLinks = [
    "World",
    "Indonesia",
    "Politics",
    "Business",
    "Technology",
    "Sports",
    "Culture",
    "Opinion",
  ];

  return (
    <div className="min-h-[theme(spacing.0)] bg-white text-black">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[10px] xs:text-xs text-gray-600">{today}</div>

            <div className="hidden sm:flex items-center gap-4 text-xs">
              <a href="#" className="hover:underline">
                Subscribe
              </a>
              <a href="#" className="hover:underline">
                Log In
              </a>
            </div>

            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileSearchOpen((v) => !v)}
                aria-expanded={mobileSearchOpen}
                aria-controls="mobile-search"
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span className="sr-only">Toggle search</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center py-4 sm:py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-wide">
              JakartTime&apos;s
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-600 mt-1 sm:mt-2 tracking-widest">
              THE VOICE OF JAKARTA
            </p>
          </div>

          <nav className="hidden lg:block border-t border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-center gap-6 xl:gap-8 text-sm font-medium">
                {navLinks.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="hover:underline whitespace-nowrap"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Search */}
              <div className="ml-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="w-56 xl:w-64 px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    aria-label="Search"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div
            id="mobile-search"
            className={`sm:hidden transition-[grid-template-rows] duration-200 ease-out overflow-hidden ${
              mobileSearchOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mt-2">
                <label className="sr-only" htmlFor="m-search">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="m-search"
                    type="text"
                    placeholder="Search news..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Search"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav
            id="mobile-menu"
            className={`lg:hidden border-t border-gray-200 mt-3 transition-[grid-template-rows] duration-200 ease-out overflow-hidden ${
              mobileOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex sm:hidden items-center justify-end gap-4 py-3 text-sm">
                <a href="#" className="hover:underline">
                  Subscribe
                </a>
                <a href="#" className="hover:underline">
                  Log In
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-3">
                {navLinks.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="px-3 py-2 text-sm rounded hover:bg-gray-100 text-gray-800"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
