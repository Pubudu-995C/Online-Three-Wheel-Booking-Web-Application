import { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import wallpaper9 from "../images/wallpapers/wallpaper9.jpg";
import GridLoader from "react-spinners/GridLoader";
import WhatsApp from "../components/WhatsApp";

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
              <div className="px-5 py-10 lg:py-10">
                <div>
                  <h2 className="text-center font-mono font lg:text-3xl text-xl text-[#54B435] uppercase">
                    Tuktuk Mango Jobs
                  </h2>
                  <h1 className="mt-3 font-serif text-3xl font-bold text-center lg:text-5xl xl:text-6xl">
                    Unlock Your Potential: Join Our Team
                  </h1>
                </div>
                <div className="my-28 flex justify-center">
                  <a
                    href="/driver"
                    class="block max-w-sm p-6 rounded-lg shadow hover:bg-gray-600 bg-gray-800 transition-colors duration-300 cursor-pointer"
                  >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      New TukTuk Registration in 2024
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                      Do you have a Tuk Tuk? Would you like to join Our Team?
                      Then this is your chance.
                    </p>
                  </a>
                </div>
              </div>
              <WhatsApp />
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
