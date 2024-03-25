import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";
import GridLoader from "react-spinners/GridLoader";

export default function Jobs() {
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
          <div>
            <Navbar />
            <div className="xl:h-[500px] lg:h-[400px] h-[300px]">
              <img
                src={wallpaper9}
                className="object-cover w-full h-full brightness-50"
                alt="Wallpaper"
              />
              <div className="absolute top-0 left-0 flex justify-center w-full xl:mt-60 lg:mt-48 md:mt-34 mt-36">
                <h1 className="mt-0 text-3xl font-bold text-center text-white uppercase xl:text-6xl lg:text-5xl md:text-4xl">
                  jobs
                </h1>
              </div>
              <div className="px-5 py-10 bg-gradient-to-tl from-lime-300 to-yellow-100 lg:py-10 ">
                <div>
                  <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
                    Tuktuk Mango Jobs
                  </h2>
                  <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
                    Contact Us to know More Details
                  </h1>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
