import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        id="to-top-button"
        onClick={scrollToTop}
        title="Go To Top"
        className={`fixed z-50 lg:bottom-28 bottom-20 lg:right-10 right-5 p-4 border-0 lg:w-14 lg:h-14 w-10 h-10 rounded-full shadow-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold transition-colors duration-300 ${isVisible ? "" : "hidden"}`}
      >
        <i class="fa-solid fa-up-long flex justify-center h-full items-center"></i>
        <span className="sr-only">Go to top</span>
      </button>
    </div>
  );
}
