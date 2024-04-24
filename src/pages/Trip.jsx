import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";
import GridLoader from "react-spinners/GridLoader";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsApp from "../components/WhatsApp";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Trip() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const townList = [
    {
      town: `Negombo`,
      details: `./town/negombo.jsx`,
    },
    {
      town: `Sigiriya`,
    },
    {
      town: `Dambulla`,
    },
    {
      town: `Anuradhapura`,
    },
    {
      town: `Polonnaruwa`,
    },
    {
      town: `Kandy`,
      details: `./town/kandy.jsx`,
    },
    {
      town: `Kitulgala`,
    },
    {
      town: `Ella`,
      details: `./town/ella.jsx`,
    },
    {
      town: `Nuwara Eliya`,
    },
    {
      town: `Galle`,
    },
    {
      town: `Mirissa`,
    },
    {
      town: `Trincomalee`,
      details: `./town/trincomalee.jsx`,
    },
    {
      town: `Nilaveli`,
    },
    {
      town: `Arugam Bay`,
    },
    {
      town: `Jaffna`,
    },
  ];

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <GridLoader color={"#379237"} loading={loading} size={20} />
        </div>
      ) : (
        <div>
          <div>
            <Navbar />
            <div className="xl:h-[500px] lg:h-[400px] h-[300px]">
              <img
                src={wallpaper7}
                className="object-cover w-full h-full brightness-50"
                alt="Wallpaper"
              />
              <div className="absolute top-0 left-0 flex justify-center w-full xl:mt-60 lg:mt-48 md:mt-34 mt-36">
                <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl md:text-4xl">
                  Discover sri lanka by tuktuk!
                </h1>
              </div>
              {/* ===========Breadcrumbs=========== */}
              <Breadcrumbs className="justify-center ">
                <a href="/" className="opacity-60">
                  <i class="fa-solid fa-house"></i>
                </a>
                <a href="/Trip" className="opacity-60">
                  <span>TRIP</span>
                </a>
              </Breadcrumbs>
              {/* ===========Breadcrumbs=========== */}
            </div>
          </div>

          <div className="2xl:px-72 xl:px-34 lg:px-20 px-5 pb-5 bg-gradient-to-tl from-lime-300 to-yellow-100">
            <div className="pt-20">
              <h2 className="text-center font-mono lg:text-3xl text-xl text-[#54B435]">
                TUKTUK ITINERARIES
              </h2>
              <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
                Explore the wonders of Sri Lanka aboard a tuktuk!
              </h1>

              <p className="mt-12 text-base text-center xl:text-xl md:text-lg">
                Experience all that Sri Lanka has to offer from the unique
                vantage point of a tuktuk! When you choose to book a tuktuk
                through{" "}
                <span className="font-bold">
                  tuktuk<span className="text-[#54B435]">mango</span>.com
                </span>
                , we'll collaborate with you to create the ideal itinerary.
                Additionally, we'll provide you with a digital map, unveiling
                the hidden gems our customers have uncovered. Here are a few
                examples of what you can explore based on different trip
                lengths.
              </p>
            </div>
          </div>
          {/* ====================================================================== */}

          <div>
            <div className="relative xl:h-[850px] lg:h-[750px] md:h-[650px] h-[900px]">
              <img
                src={wallpaper9}
                className="object-cover w-full h-full brightness-50"
                alt="Wallpaper"
              />
              <div className="absolute top-0 2xl:px-72 xl:px-34 lg:px-20 w-full">
                <h2 className="text-center font-mono lg:text-3xl text-xl mt-20 text-[#54B435]">
                  GATHER INDELIBLE MOMENTS
                </h2>
                <h1 className="mx-4 mt-3 font-serif text-3xl font-bold text-center text-white lg:text-5xl xl:text-6xl">
                  Discover beautiful places on the beautiful island
                </h1>
                <div className="top-0 left-0 right-0 mt-20">
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3">
                    {townList.map((town, index) => (
                      <div
                        key={index}
                        className="flex flex-wrap justify-center p-3 text-lg"
                      >
                        <a
                          href={
                            town.details ? `/${town.town.toLowerCase()}` : "#"
                          }
                          className="bg-gray-100 hover:bg-[#82CD47] transition-colors duration-200 flex-grow text-black hover:text-white border-l-8 border-[#F0FF42] rounded-md xl:px-3 px-2 xl:py-4 py-3 xl:text-xl lg:text-lg md:text-sm text-xs font-bold"
                        >
                          <i className="mx-2 text-xs lg:mx-5 md:text-sm fa-solid fa-location-dot xl:text-2xl"></i>
                          {town.town}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhatsApp />
          <Footer />
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}
