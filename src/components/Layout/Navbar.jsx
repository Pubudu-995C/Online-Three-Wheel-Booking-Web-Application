import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed top-0 left-0 z-20 w-full lg:absolute">
      <div className="border-gray-200 py-2.5 bg-gray-900 w-full">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/tuktukmango.png"
              className="xl:h-[50px] mr-3 h-9"
              alt="tuktukmango Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-10 mr-4 sm:inline-block">
              <span></span>
            </div>
            <a
              href="/"
              className="text-black hover:text-white bg-[#F0FF42] transition-colors duration-300 hover:bg-[#54B435] font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >
              BOOK NOW
            </a>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-yellow-500 rounded-lg lg:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/Trip"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/Trip") ? "text-[#F0FF42]" : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  TRIP
                </Link>
              </li>
              <li>
                <Link
                  to="/HowWork"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/HowWork")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  HOW IT WORKS
                </Link>
              </li>
              <li>
                <Link
                  to="/Gallery"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/Gallery")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/faq") ? "text-[#F0FF42]" : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/jobs") ? "text-[#F0FF42]" : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  JOBS
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/ContactUs")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:p-0  dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg`}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
