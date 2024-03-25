import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper10 from "../images/wallpapers/wallpaper10.jpg";
import GridLoader from "react-spinners/GridLoader";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <GridLoader color={"#379237"} loading={loading} size={20} />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="xl:h-[500px] lg:h-[400px] h-[300px]">
            <img
              src={wallpaper10}
              className="object-cover w-full h-full brightness-50"
              alt="Wallpaper"
            />
            <div className="absolute top-0 left-0 flex justify-center w-full xl:mt-60 lg:mt-48 md:mt-34 mt-36">
              <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl md:text-4xl">
                Reach Out and Connect Today
              </h1>
            </div>
          </div>

          <div class="dark:bg-sky-950" id="contact">
            <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <div class="mb-4">
                <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                  <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                    Contact
                  </p>
                  <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                    Discover Sri Lanka with TukTukMango today!
                  </p>
                </div>
              </div>
              <div class="flex items-stretch justify-center">
                <div class="grid md:grid-cols-2">
                  <div class="h-full pr-6">
                    <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400 text-justify">
                      Explore Sri Lanka with TukTukMango! Rent our vibrant
                      tuk-tuks for an unforgettable adventure. Contact us today
                      for a seamless and personalized experience tailored to
                      your wanderlust dreams.
                    </p>
                    <ul class="mb-6 md:mb-0">
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="ml-4 mb-4">
                          <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                            Our Address
                          </h3>
                          <p class="text-gray-600 dark:text-slate-400">
                            1230 Maecenas Street Donec Road
                          </p>
                          <p class="text-gray-600 dark:text-slate-400">
                            New York, EEUU
                          </p>
                        </div>
                      </li>
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="ml-4 mb-4">
                          <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                            Contact
                          </h3>
                          <p class="text-gray-600 dark:text-slate-400">
                            Mobile: +94 (070) 4 239-249
                          </p>
                          <p class="text-gray-600 dark:text-slate-400">
                            Mail: info@tuktukmango.com
                          </p>
                        </div>
                      </li>
                      <li class="flex">
                        <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                          <i class="fa-regular fa-clock"></i>
                        </div>
                        <div class="ml-4 mb-4">
                          <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                            Working hours
                          </h3>
                          <p class="text-gray-600 dark:text-slate-400">
                            Monday - Friday: 08:00 - 17:00
                          </p>
                          <p class="text-gray-600 dark:text-slate-400">
                            Saturday &amp; Sunday: 08:00 - 12:00
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl text-yellow-400 font-bold">
                      Ready to Get Started?
                    </h2>
                    <form id="contactForm">
                      <div class="mb-6">
                        <div class="mx-0 mb-1 sm:mb-4">
                          <div class="mx-0 mb-1 sm:mb-4">
                            <label
                              for="name"
                              class="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                              type="text"
                              id="name"
                              autocomplete="given-name"
                              placeholder="Your name"
                              class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-800 sm:mb-0"
                              name="name"
                            />
                          </div>
                          <div class="mx-0 mb-1 sm:mb-4">
                            <label
                              for="email"
                              class="pb-1 text-xs uppercase tracking-wider"
                            ></label>
                            <input
                              type="email"
                              id="email"
                              autocomplete="email"
                              placeholder="Your email address"
                              class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-800 sm:mb-0"
                              name="email"
                            />
                          </div>
                        </div>
                        <div class="mx-0 mb-1 sm:mb-4">
                          <label
                            for="textarea"
                            class="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <textarea
                            id="textarea"
                            name="textarea"
                            cols="30"
                            rows="5"
                            placeholder="Write your message..."
                            class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-800 sm:mb-0 resize-none"
                          ></textarea>
                        </div>
                      </div>
                      <div class="text-center">
                        <button
                          type="submit"
                          class="w-full bg-blue-800 hover:bg-blue-500 transition-colors duration-300 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
