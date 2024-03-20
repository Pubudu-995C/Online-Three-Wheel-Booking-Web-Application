import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper7 from "../images/wallpapers/wallpaper7.jpg";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";

export default function Trip() {
  const trip = [
    {
      name: `7 Days Trip`,
      img: `/trip/trip (1).jpg`,
      review: `You can't go wrong with a timeless favorite! Our standard tuktuk is powered by a dependable four-stroke Bajaj RE engine, making it a reliable choice for your travels. It's a familiar sight on the roads, adding a touch of familiarity to your journey.`,
    },
    {
      name: `14 Days Trip`,
      img: `/trip/trip (2).jpg`,
      review: `Craving that wind-in-your-hair feeling? Choose our exclusive custom convertible tuk-tuk from tutukmango.com for an enhanced view and a more laid-back travel experience.`,
    },
    {
      name: `21 Days Trip`,
      img: `/trip/trip (3).jpg`,
      review: `Ready for an adventure in the great outdoors? Introducing our Camping Tuk-Tuk – the perfect companion for your outdoor escapades. With rugged charm and all the essentials, it's your ticket to a cozy and memorable camping experience on the road. Explore nature in style and comfort with our trusty Camping Tuk-Tuk!`,
    },
  ];

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
      <div>
        <Navbar />
        <div className="h-[500px]">
          <img
            src={wallpaper7}
            className="object-cover w-full h-full brightness-50"
            alt="Wallpaper"
          />
          <div className="absolute mt-56 top-0 left-0 w-full justify-center">
            <h1 className="text-center font-bold lg:text-6xl text-3xl mt-0 text-white uppercase lg:mx-20 mx-4">
              Discover sri lanka by tuktuk!
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tl from-lime-300 to-yellow-100 pb-5">
        <div className=" pt-20">
          <h2 className="text-center font-mono font text-3xl text-[#54B435]">
            TUKTUK ITINERARIES
          </h2>
          <h1 className="text-center font-serif font lg:text-6xl text-3xl font-bold mt-3">
            Explore the wonders of Sri Lanka aboard a tuktuk!
          </h1>

          <p className="text-center mt-12 text-xl px-5 lg:mx-20">
            Experience all that Sri Lanka has to offer from the unique vantage
            point of a tuktuk! When you choose to book a tuktuk through{" "}
            <span className="font-bold">
              tuktuk<span className="text-[#54B435]">mango</span>.com
            </span>
            , we'll collaborate with you to create the ideal itinerary.
            Additionally, we'll provide you with a digital map, unveiling the
            hidden gems our customers have uncovered. Here are a few examples of
            what you can explore based on different trip lengths.
          </p>
        </div>

        <div>
          <div className="xl:w-4/5 m-auto">
            <div className="m-10 lg:flex lg:space-x-10 lg:space-y-0 space-y-5">
              {trip.map((d) => (
                <div className="bg-white h-[550px] sm:h-[640px] lg:h-[520px] xl:h-[550px] w-full text-black rounded-xl flex flex-col ">
                  <div className=" rounded-t-xl flex  ">
                    <img
                      src={d.img}
                      alt=""
                      className="xl:h-[230px] lg:h-[150px] w-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4 flex-1">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-justify">{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl mt-auto">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ====================================================================== */}

      <div>
        <div className="relative xl:h-full lg:h-[750px] h-[1000px]">
          <img
            src={wallpaper9}
            className="object-cover h-full w-full brightness-50"
            alt="Wallpaper"
          />
          <div className="absolute top-0 w-full">
            <h2 className="text-center font-mono font text-3xl mt-20 text-[#54B435]">
              GATHER INDELIBLE MOMENTS
            </h2>
            <h1 className="text-center font-serif font lg:text-6xl text-3xl font-bold mt-3 mx-10 text-white">
              Discover beautiful places on the beautiful island
            </h1>
          </div>

          <div className="absolute top-0 left-0 mt-80  sm:mx-20 xl:mx-40 lg:mx-28 right-0">
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2">
              {townList.map((town, index) => (
                <div
                  key={index}
                  className="flex flex-wrap p-3 justify-center text-lg"
                >
                  <a
                    href={town.details ? `/${town.town.toLowerCase()}` : "#"}
                    className="bg-gray-100 hover:bg-[#82CD47] transition-colors duration-200 flex-grow text-black hover:text-white border-l-8 border-[#F0FF42] rounded-md xl:px-3 px-2 xl:py-4 py-3 xl:text-xl text-base font-bold"
                  >
                    <i className="fa-solid fa-location-dot mx-5 xl:text-2xl text-base"></i>
                    {town.town}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
